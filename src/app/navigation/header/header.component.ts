import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";
import { ThemeService } from "src/app/shared/theme.service";

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
  isDarkTheme: Observable<boolean>;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }
}
