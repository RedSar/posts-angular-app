import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-post-list-item",
  templateUrl: "./post-list-item.component.html",
  styleUrls: ["./post-list-item.component.css"]
})
export class PostListItemComponent {
  @Input() title: string;
  @Input() content: string;
  @Input() lovIts: number;
  created_at: Date;

  constructor() {
    this.created_at = new Date();
  }

  getLikes = () => (this.lovIts >= 0 ? this.lovIts : 0);

  getDislikes = () => (this.lovIts < 0 ? this.lovIts : 0);

  getStatus = (): boolean => (this.lovIts > 0 ? true : false);

  getClassesObject = () => ({
    "list-group-item-success": this.getStatus() && this.lovIts !== 0,
    "list-group-item-danger": !this.getStatus() && this.lovIts !== 0
  });

  onLike = () => {
    this.lovIts++;
  };
  onDislike = () => {
    this.lovIts--;
  };
}
