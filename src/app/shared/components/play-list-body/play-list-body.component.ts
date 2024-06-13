import { Component } from '@angular/core';
import * as dataRaw from '../../../data/track.json'
import { TracksModel } from '../../../core/model/tracks.model';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent {

  tracks: TracksModel[] = []

  constructor() {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const { data } = (dataRaw as any).default
    this.tracks = data
  }

}
