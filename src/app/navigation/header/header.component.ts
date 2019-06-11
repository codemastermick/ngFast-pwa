import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  @Input() title = "ngFAST"; // This gets set from app.component.ts
  @Input() languageList = [
    { code: "en", label: "English" },
    { code: "fr", label: "Français" }
  ];
  constructor() {}

  ngOnInit() {}
}
