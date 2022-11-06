import { Component, OnInit ,Input} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { formtype } from './formvaltypes';
@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  @Input() formGroupInputs:any;
  formgroup= {} as FormGroup;


  constructor(private fb:FormBuilder) { }
  ngOnInit(): void {
    this.createForm();
  }
  createForm(){
    let formgroup_values={}
    console.log(this.formGroupInputs)
    this.formGroupInputs.forEach((value:formtype)=>{
      var formcontrol=<any>{};
      if(value.defaultValue && value.defaultValue!=''){
        formcontrol[value.formControlName]=[value.formControlName]
      }else{
        formcontrol[value.formControlName]=['']
      }
      formgroup_values={...formgroup_values,...formcontrol}
    })
    console.log(formgroup_values)
    this.formgroup=this.fb.group({
      ...formgroup_values
    })
    console.log(this.formgroup)
  }
}
