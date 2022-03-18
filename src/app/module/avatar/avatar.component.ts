import {Component, OnInit, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AvatarComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
