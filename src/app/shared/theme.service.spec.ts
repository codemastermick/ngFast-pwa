import { TestBed } from "@angular/core/testing";

import { ThemeService } from "./theme.service";

describe("ThemeService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [ThemeService]
    })
  );

  it("should be created", () => {
    const service: ThemeService = TestBed.get(ThemeService);
    expect(service).toBeTruthy();
  });

  it("should switch themes", () => {
    const service: ThemeService = TestBed.get(ThemeService);
    const state = service.isDarkTheme;
    service.setDarkTheme(true);
    expect(service.isDarkTheme).toEqual(state);
  });
});
