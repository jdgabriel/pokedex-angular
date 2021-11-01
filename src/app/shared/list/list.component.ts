import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'pokedex-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  private pokemonListCopy: any[];
  public pokemonList: any[];
  public nextUrl: string;

  public isLoading: boolean;

  constructor(private pokeApiService: PokeApiService) {
    this.pokemonListCopy = [];
    this.pokemonList = [];
    this.nextUrl = '';
    this.isLoading = true;
  }

  ngOnInit(): void {
    this.isLoading = true;

    this.pokeApiService.listAllPokemons().subscribe((res) => {
      this.nextUrl = res.next;
      this.pokemonList = res.results;
      this.pokemonListCopy = res.results;
    });

    this.isLoading = false;
  }

  getMorePokemons() {
    this.isLoading = true;
    this.pokeApiService.listAllPokemons(this.nextUrl).subscribe((res) => {
      this.nextUrl = res.next;
      this.pokemonList.push(...res.results);
      this.pokemonListCopy = this.pokemonList;
    });
    this.isLoading = false;
  }

  public getSearchValue(event: string) {
    const filter = this.pokemonListCopy.filter(
      (res: any) => !res.name.indexOf(event.toLowerCase())
    );
    this.pokemonList = filter;
  }
}
