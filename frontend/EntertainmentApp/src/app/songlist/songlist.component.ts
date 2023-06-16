import { Component } from '@angular/core';

@Component({
  selector: 'app-songlist',
  templateUrl: './songlist.component.html',
  styleUrls: ['./songlist.component.css']
})
export class SonglistComponent {

    initial = false;

    open() {
        this.initial = true;
    }
    close(){
        this.initial = false;
    }
}
