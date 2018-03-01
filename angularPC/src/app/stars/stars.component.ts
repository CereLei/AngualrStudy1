import { Component, OnInit,Input,Output } from '@angular/core';
import { EventEmitter, OnChanges, SimpleChanges } from "@angular/core";
@Component({
  selector: "app-stars",
  templateUrl: "./stars.component.html",
  styleUrls: ["./stars.component.css"]
})
export class StarsComponent implements OnInit, OnChanges {

  @Input() rating: number;
  private stars: boolean[];
  @Input() readonly: boolean = true;
  //private rating:number=0;
  @Output() private ratingChange: EventEmitter<number> = new EventEmitter();
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }
  }
  ngOnInit() {
   /*  this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    } */
  }

  clickStar(index) {
    if (!this.readonly) {
      this.rating = index + 1;
      this.ngOnInit();
      this.ratingChange.emit(this.rating);
    }
  }
}
