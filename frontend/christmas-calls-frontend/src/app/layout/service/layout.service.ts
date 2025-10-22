import { Injectable, signal, computed, effect } from "@angular/core";

export interface layoutConfig {
  primary: string;
  surface: string;
  darkTheme: boolean;
  heroContainerType: string;
}

@Injectable({
  providedIn: "root",
})
export class LayoutService {
  _config: layoutConfig = {
    primary: "vintage-red",
    surface: "slate",
    darkTheme: false,
    heroContainerType: "wide",
  };

  layoutConfig = signal<layoutConfig>(this._config);

  isDarkTheme = computed(() => this.layoutConfig().darkTheme);

  isWide = computed(() => this.layoutConfig().heroContainerType === "wide");

  screenWidth = signal(window.innerWidth);

  isDesktop = computed(() => this.screenWidth() > 1024);

  isMobile = computed(() => !this.isDesktop());

  constructor() {
    effect(() => {
      const updateScreenSize = () => this.screenWidth.set(window.innerWidth);
      window.addEventListener("resize", updateScreenSize);
    });
  }
}
