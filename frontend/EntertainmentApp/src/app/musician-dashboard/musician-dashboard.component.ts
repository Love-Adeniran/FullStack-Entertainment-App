import { Component } from '@angular/core';
import { EntertainmentServiceService } from '../services/entertainment-service.service';
import { Observable, map, shareReplay } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
    selector: 'app-musician-dashboard',
    templateUrl: './musician-dashboard.component.html',
    styleUrls: ['./musician-dashboard.component.css']
})
export class MusicianDashboardComponent {
    constructor(private breakpointObserver: BreakpointObserver,public e_service : EntertainmentServiceService) {}
    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(map(result => result.matches),shareReplay()
    );
    // public components = [
    //     {name:'profile',component:'app-mcomplete-profile'},
    //     {name:'songlist',component:'app-song-list'},
    //     {name:'videos',component:'app-videos'},
    //     {name:'about',component:'app-about'}
        
    // ]
    // public eachcomponent='app-mcomplete-profile';
    // public username:string='';
    // ngOnInit():void{
    //     this.e_service.user.subscribe((data:any)=>{
    //         console.log(data);
    //         this.username = data;
    //     })
    // }

    // getcomponent(num:number){
    //     console.log(num);
    //     this.eachcomponent= this.components[num].component
    //     console.log(this.eachcomponent);
        
        
        // this.e_service.user.subscribe((data:any)=>{
        //     console.log(data);
            
        // })
    // }
}
