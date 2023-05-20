import { Component } from '@angular/core';
import { Treat } from './pages/new-treat/new-treat.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'little-treat-v0';
  showAddTreatForm = false;
  totalTreats = 147;
  loading = false;

  constructor() {
  }

  ngOnInit(){
  }

  addTreat(){
    this.showAddTreatForm = true;
    console.log("treatAdd called");
  }

  hideForm(){
    this.showAddTreatForm = false;
    console.log('cancel pressed: ', this.showAddTreatForm);
  }
}
