import { Component, Input } from '@angular/core';
import { TracksModel } from '@core/model/tracks.model';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent {
  @Input() mode : 'small' | 'big' = 'small'
  @Input() track! : TracksModel

}
