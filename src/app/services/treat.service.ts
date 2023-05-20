import { Injectable } from '@angular/core';
import { Treat } from '../pages/new-treat/new-treat.component';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TreatService {
  myDate = new Date();
  
  treats = [
    {
      title: "boba",
      date: this.myDate,
      place: "MOGE TEA",
      price: 9.25,
      note: "Just a quick little treat after lunch"
    },
    {
      title: "creme brulee",
      date: this.myDate,
      place: "Bittersweet",
      price: 12.35,
      note: "Some treats are more than others, but money comes and money goes..."
    },
    {
      title: "maple latte",
      date: this.myDate,
      place: "Sola",
      price: 4.50,
      note: "The barista was nice to me I'll come back"
    }
  ];
  
  constructor() { }

  getTreats(): Observable<Treat[]>{
    const treats = of(this.treats);
    return treats;
  }
}
