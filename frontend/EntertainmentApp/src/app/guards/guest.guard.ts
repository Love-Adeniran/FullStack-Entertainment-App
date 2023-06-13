import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GuestGuard implements CanActivate {
    constructor(public router:Router){}
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> |   boolean | UrlTree {
            // if(localStorage['guest_jwt']){
            //     this.router.navigate(['guestdashboard']);
            //     return true;
            // }else{
            //     this.router.navigate(['signin']);
            //     return false;
            // }
            return true;
            
    }

}
