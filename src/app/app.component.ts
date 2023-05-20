import { Component } from '@angular/core';
import { TreatService } from './services/treat.service';
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
  treats: Treat[] = [];
  loading = false;

  constructor(private treatService: TreatService) {
    console.log(this.treats);
  }

  ngOnInit(){
    this.getTreats();
  }

  addTreat(){
    this.showAddTreatForm = true;
    console.log("treatAdd called");
  }

  hideForm(){
    this.showAddTreatForm = false;
    console.log('cancel pressed: ', this.showAddTreatForm);
  }

  getTreats(): void {
    this.treatService.getTreats().subscribe((treats) => {
      this.treats = treats;
    });
  }
}
