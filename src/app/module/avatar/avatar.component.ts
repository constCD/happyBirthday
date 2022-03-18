import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AvatarComponent implements OnInit, AfterViewInit {
  @ViewChild('text') avatarText: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.avatarText.nativeElement.innerHTML =
      this.avatarText.nativeElement.innerText
        .split('')
        .map(
          (char: string, i: number) =>
            `<span style="transform:rotate(${i * 9}deg)">${char}</span>`
        )
        .join('');
  }
}
