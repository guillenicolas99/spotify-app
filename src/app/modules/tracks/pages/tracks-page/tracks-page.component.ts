import { Component, OnInit } from '@angular/core';
import * as dataRaw from '../../../../data/track.json'
import { TracksModel } from '@core/model/tracks.model';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit{

  mockTrackList: Array<TracksModel> = [

  ]

  constructor(){}

  ngOnInit(): void {
    const { data } = (dataRaw as any).default
    this.mockTrackList = data
  }

}
