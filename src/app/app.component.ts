import { Component, LOCALE_ID, Inject } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "ngFAST"; // replace this with your app"s title
  foundingYear = 2019; // replace with this year
  author = "Your name here"; // your name or your company name
  languageList = [
    { code: "en", label: "English" },
    { code: "fr", label: "Français" }
  ];

  constructor(@Inject(LOCALE_ID) protected localeId: string) {}
}
