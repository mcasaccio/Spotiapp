import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    artists: any[] = [];
    loading: boolean;

    constructor( private spotify: SpotifyService) {  }

    search(searchTerm: string) {
        this.loading = true;

        if ( searchTerm.length <= 1 ) {
            this.loading = false;
            return
        }

        this.spotify.getArtists( searchTerm )
            .subscribe( (data:any) => {
                this.artists = data;
                this.loading = false;
            })

        

    }

    ngOnInit(): void {
    }

}
