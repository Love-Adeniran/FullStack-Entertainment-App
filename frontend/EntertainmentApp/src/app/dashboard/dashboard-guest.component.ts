import { Component } from '@angular/core';
import { EntertainmentServiceService } from '../services/entertainment-service.service';
import { Observable, map, shareReplay } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard-guest.component.html',
    styleUrls: ['./dashboard-guest.component.css']
})
export class GuestDashboardComponent {
    constructor(public e_service : EntertainmentServiceService, public breakpointObserver :BreakpointObserver, public router:Router){}
    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    
    .pipe(map(result => result.matches),shareReplay()
    );
    search = false;
    public searchmusician = '';
    public displaySearch = false;
    public musician: any[] = [];


    closeSearch(){
        if(this.search==true){
            this.search= false;
        }else{
            this.search= true;
        }
    }

    ngOnInit():void{
        this.e_service.MusicianGetAll().subscribe((data:any)=>{
            if(data.success){
                this.musician = data.message
                
            }
            
        })
    }

    dispSearch(){
        this.displaySearch = true;
        this.router.navigate(['/dash/search'])
    }
    close(){
        this.displaySearch = false;
    }

}
