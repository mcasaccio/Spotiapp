import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: []
})
export class HomeComponent implements OnInit {

    newSongs: any[] = [];
    loading: boolean;
    error: boolean;
    messageError: string;


    constructor(private spotify: SpotifyService ) {

        this.loading = true;
        this.error = false;

        this.spotify.getNewReleases()
            .subscribe( (data: any) => {
                this.newSongs = data;
                this.loading = false;
            }, (err) => {
                this.loading = false;
                this.error = true;

                this.messageError = err.error.error.message;
                console.log(err)
            });

    }

    ngOnInit(): void {
    }

}
