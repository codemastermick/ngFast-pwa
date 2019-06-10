import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  @Input() foundingYear = 2019; // This gets set from app.component.ts
  @Input() author = "Your name here"; // This gets set from app.component.ts
  currentYear: number = new Date().getFullYear(); // Used for displaying date ranges in the copyright
  datestamp: string; // The actual string displayed on the footer
  constructor() {}

  ngOnInit() {
    this.datestamp = this.getRange();
  }

  getRange(): string {
    return this.currentYear === this.foundingYear
      ? this.currentYear.toString()
      : this.foundingYear.toString() + "-" + this.currentYear.toString();
  }
}
