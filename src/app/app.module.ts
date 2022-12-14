import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BlogspageComponent } from './blogspage/blogspage.component';
import { BlogslistComponent } from './blogslist/blogslist.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserspageComponent } from './userspage/userspage.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserformComponent } from './userform/userform.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    BlogspageComponent,
    BlogslistComponent,
    UserdetailsComponent,
    HeaderComponent,
    LoaderComponent,
    NotfoundComponent,
    UserspageComponent,
    UserlistComponent,
    UserformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
