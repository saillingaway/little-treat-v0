import { Component, EventEmitter, NgZone, Output, ViewChild } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { createMask } from '@ngneat/input-mask';
import { TreatService } from 'src/app/services/treat.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-treat',
  templateUrl: './new-treat.component.html',
  styleUrls: ['./new-treat.component.less']
})
export class NewTreatComponent {
  currencyInputMask = createMask({
    alias: 'numeric',
    groupSeparator: ',',
    digits: 2,
    digitsOptional: false,
    prefix: '$ ',
    placeholder: '0',
  });
  
  showAddTreatForm = false;
  @Output() submitForm = new EventEmitter();
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  title = '';
  date = new Date();
  place = '';
  price: number;
  note: string;
  
  constructor(private _ngZone: NgZone){

  }
  
  ngOnInit(){

  }

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
  }
  
  onSubmit() { 
    console.log('submit called');
    console.log(`title: ${this.title} \n
      price: ${this.price} \n
      date: ${this.date} \n
      place: ${this.place} \n
      note: ${this.note} \n`);
    this.submitForm.emit();
  }
}

export interface Treat {
  title: string;
  date: Date;
  place: string;
  price: number;
  note: string;
}
