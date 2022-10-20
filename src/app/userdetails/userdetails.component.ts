import { Component, OnInit } from '@angular/core';
import {  switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  userDetail$: any;
  userDetailData:any;
  constructor(private route:ActivatedRoute,private http:HttpClient) { }

  ngOnInit(): void {
    this.userDetail$=this.route.paramMap
    .pipe(
      switchMap((params:any)=>{
      const id=params.get('postid');
      return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    }))
    this.userDetail$
    .subscribe(
      (data:any)=>{
        if(data){
          window.scrollTo({top:0,left:0,behavior:'smooth'})
          this.userDetailData=data
        }
      }
    )
  }
}
