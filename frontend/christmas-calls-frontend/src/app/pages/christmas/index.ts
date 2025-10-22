import { Component } from "@angular/core";
import { ChristmasHero } from "./components/hero";
import { ChristmasDecorations } from "./components/decorations";
import { ChristmasPricing } from "./components/pricing";
import { ChristmasCTA } from "./components/cta";
import { AppFooter } from "@/layout/components/app.footer";

@Component({
  selector: "christmas",
  standalone: true,
  imports: [ChristmasHero, ChristmasDecorations, ChristmasPricing, ChristmasCTA, AppFooter],
  template: `
    <christmas-hero />
    <christmas-decorations />
    <christmas-pricing />
    <christmas-cta />
    <app-footer />
  `,
})
export class Christmas {}

