import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { take } from "rxjs/operators";

const errors = ["Page not found", "Something went wrong", "It broke!"];

@Component({
  selector: "app-not-found",
  templateUrl: "./not-found.component.html",
  styleUrls: ["./not-found.component.scss"]
})
export class NotFoundComponent implements OnInit {
  errorMsg: string;
  path: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.errorMsg = errors[Math.floor(Math.random() * errors.length)];
    this.route.data.pipe(take(1)).subscribe((data: { path: string }) => {
      this.path = data.path;
    });
  }
}
