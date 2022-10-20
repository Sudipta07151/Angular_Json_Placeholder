import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { BlogspageComponent } from './blogspage/blogspage.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import {  NotfoundComponent } from './notfound/notfound.component'
import { AdminGuard } from './admin.guard';
import { PreloadusersGuard } from './preloadusers.guard';
import { UserspageComponent } from './userspage/userspage.component';


const routes: Routes = [
{path:'',component:HomepageComponent},
{
  path:'users',
  component:UserspageComponent,
  resolve:[PreloadusersGuard],
  children:[
    {
      path:':postid',
      component:UserdetailsComponent,
      // canActivate:[AdminGuard]
    }
  ]
}, 
{ 
  path:'blogs',
  component:BlogspageComponent,
  children:[
    {
      path:':postid',
      component:UserdetailsComponent,
    }
  ]},
  {path:'**',component:NotfoundComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
