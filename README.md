# Spotiapp

The app allows you to view the latest albums, search and view the latest artist tracks and play them through the Spotify widget.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2.

[Web API Spotify](https://developer.spotify.com/documentation/web-api/)
[Dashboard Spotify API](https://developer.spotify.com/dashboard/applications)

## Generate Token | BODY x-www-form-urlencode
GET `https://accounts.spotify.com/api/token`
`grant_type:client_credentials`
`client_id:xxxxxxxxxxxxxxx`
`client_secret:xxxxxxxxxxx`

Add Token: src\app\services\spotify.service.ts line 18

## Screenshot
[img]([img]https://i.imgur.com/YzgVfQc.gif[/img])
