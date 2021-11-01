import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'pokedex-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  private urlPoke: string = 'https://pokeapi.co/api/v2/pokemon';
  private namePoke: string = 'https://pokeapi.co/api/v2/pokemon-species';

  public pokemon: any;
  public isLoading: boolean = false;
  public apiError: boolean = false;

  constructor(
    private router: ActivatedRoute,
    private pokeApiService: PokeApiService
  ) {}

  ngOnInit(): void {
    this.getPokemon();
  }

  public getPokemon() {
    const id = this.router.snapshot.params['id'];
    const pokemon = this.pokeApiService.getPokemon(`${this.urlPoke}/${id}`);
    const name = this.pokeApiService.getPokemon(`${this.namePoke}/${id}`);

    return forkJoin([pokemon, name]).subscribe(
      (res) => {
        this.pokemon = res;
        this.isLoading = true;
      },
      (error) => {
        this.apiError = true;
      }
    );
  }

  public sanitizeValue(value: string) {
    return value.replace('-', ' ');
  }
}
