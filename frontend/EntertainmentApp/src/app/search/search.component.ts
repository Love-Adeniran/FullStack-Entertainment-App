import { Component } from '@angular/core';
import { EntertainmentServiceService } from '../services/entertainment-service.service';
import { SearchPipePipe } from '../pipes/search-pipe.pipe';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
    constructor(public e_service : EntertainmentServiceService){ }
    public searchmusician ='';
    // public allMusician : any= [];
    public musician: any[] = [];


ngOnInit():void{
    this.e_service.MusicianGetAll().subscribe((data:any)=>{
        console.log(data);
        if(data.success){
            this.musician = data.message
            
        }
        
    })
}


}
