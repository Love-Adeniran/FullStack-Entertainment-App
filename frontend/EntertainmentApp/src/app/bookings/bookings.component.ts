import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { EntertainmentServiceService } from '../services/entertainment-service.service';

@Component({
    selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent {
    constructor(public e_service: EntertainmentServiceService){}
    color: ThemePalette = 'accent';
    mode: ProgressBarMode = 'determinate';
    value1 = 25;
    value2 = 50;
    value3 = 75;
    value4 = 100;
    bufferValue = 100;

    public bookings: object[] = []
    public selected : string = '';

    ngOnInit():void{
        this.e_service.MusicianGetAll().subscribe((data:any)=>{
            console.log(data);
            
        })
    }

}
