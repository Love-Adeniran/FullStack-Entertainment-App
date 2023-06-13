import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';
import { environment } from '../environment/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EntertainmentServiceService {
    constructor(public httpClient: HttpClient) { }
    public  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
    public user = new BehaviorSubject({})
    public baseUrl = environment.baseUrl;

    getErrorMessage() {
    if (this.emailFormControl.hasError('required')) {
        return 'You must enter a value';
    }
    return this.emailFormControl.hasError('email') ? 'Not a valid email' : '';
    }
    // For Guests
    GuestSignUp(userObj:object){
        return this.httpClient.post<any>(`${this.baseUrl}/guestSignUp.php`,userObj);
    }

    GuestLogin(userObj:object){
        return this.httpClient.post<object>(`${this.baseUrl}/guestLogin.php`,userObj)
    }
    GuestDashBoard(){
        return this.httpClient.get<any>(`${this.baseUrl}/guestDashboard.php`)
    }

    // For Musician
    MusicianSignUp(userObj:object){
        return this.httpClient.post<any>(`${this.baseUrl}/musicianSignUp.php`,userObj);
    }

    MusicianLogin(userObj:object){
        return this.httpClient.post<object>(`${this.baseUrl}/musicianLogin.php`,userObj)
    }
    MusicianInsertInfo(userObj:object){
        return this.httpClient.post<object>(`${this.baseUrl}/musicianInsertProfile.php`,userObj)
    }
}
