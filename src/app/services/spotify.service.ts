import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class SpotifyService {

    constructor(private http: HttpClient) {
        console.log('servicio ejecutado spoti')
    }

    getQuery(query: string) {
        const url = `https://api.spotify.com/v1/${query}`;

        const headers = new HttpHeaders({
            'Authorization': 'Bearer BQDZ6rlA4Vo61q6nGL2wT84B0aB7G0f9v5KarwHXzJ0b4_TeTIsE0savkypiYEBWJQ9s4k8yFJfiOgCqAig'
        });

        return this.http.get(url, { headers });
    }

    getNewReleases() {

        return this.getQuery('browse/new-releases?limit=20')
            .pipe(map(data => data['albums'].items));

    }

    getArtists(searchTerm: string) {

        return this.getQuery(`search?q=${searchTerm}&type=artist`)
            .pipe(map(data => data['artists'].items));

    }

    getArtist(id: string) {

        return this.getQuery(`artists/${id}`)
        // .pipe( map( data => data['artists'].items));
    }

    getTopTracks(id: string) {

        return this.getQuery(`artists/${id}/top-tracks?country=us`)
        .pipe( map( data => data['tracks']));
    }

}
