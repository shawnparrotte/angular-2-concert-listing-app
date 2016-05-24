import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";

export class Concert {

  bandName: string;
  imgUrl: string;
  showDate: string;
  doorTime: string;
  showTime: string;
  tickets: number;
  bandDescription: string;
  spotifyUrl: string;

  constructor(  bandName: string
              , imgUrl: string
              , showDate: string
              , doorTime: string
              , showTime: string
              , tickets: number
              , bandDescription: string
              , spotifyUrl: string)
  {
    this.bandName = bandName;
    this.imgUrl = imgUrl;
    this.showDate = showDate;
    this.doorTime = doorTime;
    this.showTime = showTime;
    this.tickets = tickets;
    this.bandDescription = bandDescription;
    this.spotifyUrl = spotifyUrl;
  }

}

@Component({
  directives: [BandPicDate, ShowInfo, ListenDescription],
  inputs: ['concerts'],
  selector: 'app',
  template: `
  <div class="row show-row">

    <!-- band-pic-date -->
    <band-pic-date [concert]="concerts[0]"></band-pic-date>

    <!-- show-info -->
    <show-info [concert]="concerts[0]"></show-info>

    <!-- listen-description -->
    <listen-description [concert]="concerts[0]"</listen-description>

  </div>
  `
})
class BandApp {

  concerts: Concert[];

  constructor(){

    this.concerts = [ new Concert(
                      "Band Name"
                      ,"http://p4cdn4static.sharpschool.com/UserFiles/Servers/Server_91869/Image/Band4.jpg"
                      ,"June 8, 2016"
                      ,"8pm"
                      ,"9pm"
                      ,32
                      ,"Some text describing the awesome sound that this band has."
                      ,"https://embed.spotify.com/?uri=spotify%3Aalbum%3A3hk3Nvql64R1OZGNkdkoPJ"
                    )
    ];

  }
}

bootstrap(BandApp)
