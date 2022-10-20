import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blogspage',
  templateUrl: './blogspage.component.html',
  styleUrls: ['./blogspage.component.css']
})
export class BlogspageComponent implements OnInit {
  blogs= [];

  constructor(private http:HttpClient,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchBlogs();
  }
  fetchBlogs(){    
    const dataFetched$=this.http.get('https://jsonplaceholder.typicode.com/posts')
    dataFetched$
    .subscribe(
      (data:any)=>{
        this.blogs=data
    })
  }
}
