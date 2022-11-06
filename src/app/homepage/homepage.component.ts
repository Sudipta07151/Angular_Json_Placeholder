import { Component, Input, OnInit } from '@angular/core';
import { formtype } from '../userform/formvaltypes';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }
  formInputs:formtype[]= [
    {labelName:"Name",formControlName:"name",defaultValue:'Sudipta',inputType:'text'},
    {labelName:"Account Number",formControlName:"acc_no",defaultValue:'',inputType:'text'},
    {labelName:"Date",formControlName:"date",defaultValue:'',inputType:'text'}
  ]

  ngOnInit(): void {
  }

}
