import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EntertainmentServiceService } from '../services/entertainment-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
    constructor(public router: Router, public e_Service: EntertainmentServiceService, private _snackBar : MatSnackBar){}
    message = '';
    hide =true;
    public isChecked= false;
    public firstName = '';
    public lastName = '';
    public nickName = '';
    public pNumber = '';
    public email = '';
    public pasWord = '';
    public generalErrorMsg = '';
    public emailErr = '';
    public ErrorMsg = 'This field is empty ';
    public emailControl:any = '';
    public Users:object[] = [];

    ngOnInit():void {
        this.emailControl = this.e_Service.emailFormControl;
        this.getErrMessage()
        // openSnackBar(message.value, action.value)
    }
    
    getErrMessage() {
        this.emailErr=this.e_Service.getErrorMessage()
    }
    // openSnackBar(message: string) {
    //     this._snackBar.open(message);
    // }
    
    submit(){
        if(this.firstName==''||this.lastName==''|| this.pNumber=='' || this.email==''|| this.pasWord==''){
            this.generalErrorMsg = 'There is an Empty field, Kindly fill!'
        }else{
            if(this.isChecked==false){
                let eachDetails = {first_name: this.firstName, last_name: this.lastName, p_Number: this.pNumber,  e_mail: this.email, pass_word:this.pasWord};
                this.e_Service.GuestSignUp(eachDetails).subscribe(data=>{
                    console.log(data);
                    if(data.success == true){
                        console.log(data);
                        this.message ='Signed in successfully!'
                        // this.openSnackBar(this.message)
                        this.router.navigate(['/signin']);
                    }else{
                        console.log(data.success);
                    }
                })
            }else{
                let eachDetails = {first_name: this.firstName, last_name: this.lastName, nick_name:this.nickName,  e_mail: this.email, p_Number: this.pNumber, pass_word:this.pasWord};
                this.e_Service.MusicianSignUp(eachDetails).subscribe(data=>{
                    console.log(data);
                    if(data.success==true){
                        console.log(data);
                        this.router.navigate(['/signin']);
                    }else{
                        console.log(data.success);
                    }    
                })
            }
        }
        
    }
    
}
