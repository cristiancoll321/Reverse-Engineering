import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { bookmarkOutline, chatbubbleOutline, heartOutline, logoInstagram, musicalNotes, play, playSkipBack, playSkipForward, repeat, sendOutline, shuffle } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  activeView: 'spotify' | 'instagram' = 'spotify';

  constructor() {
    addIcons({ bookmarkOutline, chatbubbleOutline, heartOutline, logoInstagram, musicalNotes, play, playSkipBack, playSkipForward, repeat, sendOutline, shuffle });
  }

}
