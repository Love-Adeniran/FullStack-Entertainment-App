import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';
import { environment } from '../environment/environment';
import { BehaviorSubject } from 'rxjs';
// import { gzip } from 'pako'

@Injectable({
    providedIn: 'root'
})
export class EntertainmentServiceService {
    constructor(public httpClient: HttpClient) { }
    public  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
    private headers = new HttpHeaders()
        .set('Content-Encoding', 'gzip')
        .set('Content-Type', 'application/json');
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
    GetUser(){
        return this.httpClient.get<any>(`${this.baseUrl}/getUser.php`)
    }

    // For Musician
    MusicianSignUp(userObj:object){
        return this.httpClient.post<any>(`${this.baseUrl}/musicianSignUp.php`,userObj);
    }

    MusicianLogin(userObj:object){
        return this.httpClient.post<object>(`${this.baseUrl}/musicianLogin.php`,userObj)
    }
    MusicianInsertInfo(userObj:object){
        return this.httpClient.post<object>(`${this.baseUrl}/musicianUpdateProfile.php`,userObj)
    }
    MusicianEditProfile(userObj:object){
        return this.httpClient.post<object>(`${this.baseUrl}/editProfileM.php`,userObj)
    }
    MusicianchangePassword(pass:object){
        return this.httpClient.post<object>(`${this.baseUrl}/changePassword.php`, pass)
    }
    MusicianUploadImage(imageObj:any){
        return this.httpClient.post<object>(`${this.baseUrl}/imageUpload.php`, imageObj)  
    }
    MusicianGetInfo(email:any){
        return this.httpClient.post<object>(`${this.baseUrl}/getEachMusician.php`,email)
    }
    MusicianGetAll(){
        return this.httpClient.get<object>(`${this.baseUrl}/getallmusician.php`)
    }
    MusicianUploadAudio(audioObj:any){
        return this.httpClient.post<object>(`${this.baseUrl}/audioUpload.php`, audioObj)  
    }
    MusicianGetAudio(User_id:object){
        return this.httpClient.post<object>(`${this.baseUrl}/getAudio.php`, User_id)
    }
    MusicianDeleteAudio(musician_id:any){
        return this.httpClient.post<object>(`${this.baseUrl}/deleteAudio.php`, musician_id)
    }
}
