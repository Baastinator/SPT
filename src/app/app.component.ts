import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public levelPoints: number[] = [
      2, 3, 5, 6, 7, 9, 10, 11, 13
  ];

  public fullCaster: number[][] = [
      [2],
      [3],
      [4, 2],
      [4, 3],
      [4, 3, 2],
      [4, 3, 3],
      [4, 3, 3, 1],
      [4, 3, 3, 2],
      [4, 3, 3, 3, 1],
      [4, 3, 3, 3, 2],
      [4, 3, 3, 3, 2, 1],
      [4, 3, 3, 3, 2, 1],
      [4, 3, 3, 3, 2, 1, 1],
      [4, 3, 3, 3, 2, 1, 1],
      [4, 3, 3, 3, 2, 1, 1, 1],
      [4, 3, 3, 3, 2, 1, 1, 1],
      [4, 3, 3, 3, 2, 1, 1, 1, 1],
      [4, 3, 3, 3, 3, 1, 1, 1, 1],
      [4, 3, 3, 3, 3, 2, 1, 1, 1],
      [4, 3, 3, 3, 3, 2, 2, 1, 1],
  ]

  public level = 1

  public max = 0;
  public current = 0;

  public title = 'SpellpointTracker';

  public ngOnInit(): void {
    this.levelReset()
  }

  public cast(n: number): void {
    this.current -= this.levelPoints[n]
  }

  public reset(): void {
    this.current = this.max;
  }

  public levelReset(): void {
    const spellSlots = this.fullCaster[this.level-1].slice();
    this.max = 0
    spellSlots.forEach((v: number, i: number) => {
      this.max += v * this.levelPoints[i];
    })
    this.reset()

  }
}
