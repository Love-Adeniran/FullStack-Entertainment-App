import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

    transform(musician: any[], searchmusician: any): any {
    if(!searchmusician) return musician;
    searchmusician = searchmusician.toLowerCase();
    let filteredSearch = musician.filter((data:any)=>data.full_name.toLowerCase().includes(searchmusician));
    let response;
    if(filteredSearch){
        response = filteredSearch
    }else{
        response = "Can't find what you searched for!"
    }
    
    return response;
    }

}
