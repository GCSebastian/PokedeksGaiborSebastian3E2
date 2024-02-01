import { Component } from '@angular/core';
import {PokeapiService} from './../Services/apiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pokemon:any
  pokemon2:any
  pokemon3:any
  pokemon4:any
  pokemonId: number=0;
  itemId: number=0;
  pokemonName: string="";
  itemName: string="";
  pokemons: any[]=[];
  constructor(private api: PokeapiService) {}

  getPokemonDataID(id: number){
    try{
   

      this.api.getPokemonID(id).subscribe((response => {
       this. pokemon = response;
      }));
    }catch (error){
      console.log(error);
    }
  }


  getPokemonDataName(name: string){
    try{
   

      this.api.getPokemonName(name).subscribe((response => {
       this. pokemon2 = response;
      }));
    }catch (error){
      console.log(error);
    }
  }

  getItemDataID(id: number){
    try{
      this.api.getItemID(id).subscribe((response => {
       this. pokemon3 = response;
      }));
    }catch (error){
      console.log(error);
    }
  }

  getItemDataName(name: string){
    try{
   

      this.api.getItemName(name).subscribe((response => {
       this. pokemon4 = response;
      }));
    }catch (error){
      console.log(error);
    }
  }
}
