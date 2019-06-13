import { Component, LOCALE_ID, Inject, OnInit } from "@angular/core";
import { ThemeService } from "./shared/theme.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "ngFAST"; // replace this with your app's title
  foundingYear = 2019; // replace with this year
  author = "Your name here"; // your name or your company name
  languageList = [ // This is a list of languages supported by your app
    { code: "en", label: "English" },
    { code: "fr", label: "Français" }
  ];
  isDarkTheme: Observable<boolean>;

  constructor(
    @Inject(LOCALE_ID) protected localeId: string,
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }
}
