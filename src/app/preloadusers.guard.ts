import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot,Resolve } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PreloadusersGuard implements Resolve<any> {
  constructor(private http:HttpClient){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const dataFetched$=this.http.get('https://jsonplaceholder.typicode.com/users')
    return dataFetched$ 
  }
}
