import { Component, Input } from '@angular/core';
import { Treat } from '../new-treat/new-treat.component';


@Component({
  selector: 'app-treat-archive',
  templateUrl: './treat-archive.component.html',
  styleUrls: ['./treat-archive.component.less']
})
export class TreatArchiveComponent {
  @Input() treats!: Treat[];

  constructor(){
    
  }

  ngOnInit(){
    console.log("my treats:", this.treats);
  }
}
