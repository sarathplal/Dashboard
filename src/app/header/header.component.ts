import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  // creating user defined events

  @Output() onMenuBtnclick = new EventEmitter()

  menuButtonclicked() {

    // to occur a user defined event

    this.onMenuBtnclick.emit()

    // To resize screen
    setTimeout(() => {

      window.dispatchEvent(
        new Event('resize')
      )
    }, 100)

  }




}
