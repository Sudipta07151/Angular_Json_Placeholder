import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-blogslist',
  templateUrl: './blogslist.component.html',
  styleUrls: ['./blogslist.component.css']
})
export class BlogslistComponent implements OnInit {
  @Input() blogs:any;
  constructor() { }

  ngOnInit(): void {

    console.log(this.blogs)
  }
  ngAfterViewInit(){
    console.log(this.blogs)
  }
  ngOnChanges(changes:SimpleChanges){
    console.log(changes)
  }

}
