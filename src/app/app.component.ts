import { Component } from '@angular/core';
import genPassOfDay from 'arrispwod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vtrpotd';
  date:String = new Date().toString();
  potd:String = this.generatePotd();


  public generatePotd(seed: string = "vtr2014"):string {
    let date: Date = new Date();
    return genPassOfDay(date, seed);
  }

  public refreshPotd(){
    this.date = new Date().toString();
    this.potd = this.generatePotd();
    console.log("Nuevo potd: ", this.potd);
  }

}



