import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  private url: string = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=52';

  constructor(private http: HttpClient) {}

  public listAllPokemons(url?: string): Observable<any> {
    return this.http.get<any>(url ?? this.url).pipe(
      tap((res) => res),
      tap((res) => {
        res.results.map((pokemons: any) => {
          this.getPokemon(pokemons.url).subscribe(
            (res) => (pokemons.status = res)
          );
        });
      })
    );
  }

  public getPokemon(url: string) {
    return this.http.get<any>(url).pipe(map((res) => res));
  }
}
