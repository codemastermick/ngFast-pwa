import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  @Input() foundingYear = 2019;
  @Input() author = "Your name here";
  currentYear: number = new Date().getFullYear();
  datestamp: string;
  constructor() {}

  ngOnInit() {
    this.datestamp = this.getRange();
  }

  getRange(): string {
// tslint:disable-next-line: max-line-length
    return this.currentYear === this.foundingYear ? this.currentYear.toString() : this.foundingYear.toString() + "-" + this.currentYear.toString();
  }
}
