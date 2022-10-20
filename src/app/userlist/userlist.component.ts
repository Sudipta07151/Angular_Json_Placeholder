import { Component, OnInit,Input,SimpleChange } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  @Input() users:any;
  constructor() { }

  ngOnInit(): void {

    console.log(this.users)
  }
  ngAfterViewInit(){
    console.log(this.users)
  }
  ngOnChanges(changes:SimpleChange){
    console.log(changes)
  }

}
