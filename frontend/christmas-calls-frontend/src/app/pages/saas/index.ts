import { Component } from "@angular/core";
import { SaasHero } from "./components/hero";
import { SaasFeatures } from "./components/features";
import { Streamline } from "./components/streamline";
import { SaasTestimonials } from "./components/testimonials";
import { SaasTrends } from "./components/trends";
import { AppFAQ } from "@/layout/components/app.faq";
import { AppFooterWithCTA } from "@/layout/components/app.footerwithcta";

@Component({
  selector: "saas",
  standalone: true,
  imports: [
    SaasHero,
    SaasFeatures,
    Streamline,
    SaasTestimonials,
    SaasTrends,
    AppFAQ,
    AppFooterWithCTA,
  ],
  template: `
    <saas-hero />
    <saas-features />
    <saas-streamline />
    <saas-testimonials />
    <saas-trends />
    <app-faq className="mt-24 lg:mt-64" />
    <app-footer-with-cta className="mt-24 lg:mt-64" />
  `,
})
export class Saas {}
