import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userspage',
  templateUrl: './userspage.component.html',
  styleUrls: ['./userspage.component.css']
})
export class UserspageComponent implements OnInit {

  users= [];

  constructor(private http:HttpClient,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchUsers();
  }
  fetchUsers(){    
    // const dataFetched$=this.http.get('https://jsonplaceholder.typicode.com/users')
    // dataFetched$
    // .subscribe(
    //   (data:any)=>{
    //     this.blogs=data
    // })
    const dataFetched$=this.route.data;
    dataFetched$
    .subscribe(
      (data:any)=>{
        this.users=data[0]
    })
  }

}
