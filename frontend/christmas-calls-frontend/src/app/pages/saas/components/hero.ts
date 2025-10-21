import { Component, computed, inject } from "@angular/core";
import { LayoutService } from "@/layout/service/layout.service";
import { AnimatedContainer } from "@/layout/components/animatedcontainer";
import { CommonModule } from "@angular/common";
import { AppNavbar } from "@/layout/components/app.navbar";
import { CirclePattern } from "@/layout/components/circlepattern";
import { StaticCustomers } from "@/layout/components/staticcustomers";

@Component({
  selector: "saas-hero",
  standalone: true,
  imports: [
    AnimatedContainer,
    CommonModule,
    CirclePattern,
    AppNavbar,
    StaticCustomers,
  ],
  template: `
    <animated-container
      enterClass="!slide-in-from-top-0"
      [className]="{ relative: true, 'mt-6': !isWide() }"
    >
      <div
        *ngIf="isWide()"
        class="absolute top-0 inset-x-0 h-168 lg:h-204 shadow-black-card bg-main-gradient"
      ></div>
      <div class="container relative">
        <div
          class="absolute top-0 left-4 right-4 h-168 lg:h-204"
          [ngClass]="{
            'shadow-black-card bg-main-gradient rounded-3xl lg:rounded-4xl':
              !isWide(),
          }"
        >
          <div class="absolute z-0 inset-0 overflow-hidden">
            <circle-pattern
              className="-bottom-1/2 lg:-bottom-2/4 -translate-y-24 md:translate-y-56 lg:translate-y-60 left-1/2 -translate-x-1/2 absolute w-lg md:w-240 lg:w-300"
            />
          </div>
        </div>
        <div class="h-full relative">
          <app-navbar />
          <div
            class="relative z-4 px-6 lg:px-12 flex flex-col items-center justify-center"
          >
            <h1
              class="title lg:text-6xl text-3xl text-center max-w-3xl mt-10 lg:mt-18"
            >
              Discover Fine Watchmaking with Exquisite Timepieces
            </h1>
            <p
              class="mt-6 text-base lg:text-xl text-white/64 max-w-2xl text-center"
            >
              Explore our curated selection of elegant, precise watches. Each
              piece is crafted to perfection, blending classic design with
              modern innovation
            </p>
            <div class="flex items-center gap-3 mt-10 lg:mt-7">
              <button class="button-regular lg:min-w-36">Get Started</button>
              <button class="button-outlined lg:min-w-36">Explore</button>
            </div>
            <div
              class="group flex items-center justify-center h-60 sm:h-128 w-full lg:w-[88%] mt-36 lg:mt-20 relative overflow-hidden"
            >
              <div
                class="absolute z-10 w-full bottom-0 left-0 h-6 sm:h-28 bg-[linear-gradient(180deg,rgba(255,255,255,0.00)_0%,rgba(255,255,255,0.92)_46.38%,#FFF_88.21%)] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.00)_0%,rgb(var(--surface-950))_80.21%)] backdrop-blur-[2px] opacity-90"
              ></div>
              <img
                class="w-full h-auto z-1 absolute top-0"
                [src]="
                  isDarkTheme()
                    ? '/pages/saas/hero-dashboard-dark.png'
                    : '/pages/saas/hero-dashboard.png'
                "
                alt="Agency Hero Video Background"
              />
            </div>
          </div>
        </div>
        <static-customers className="mt-16" />
      </div>
    </animated-container>
  `,
})
export class SaasHero {
  layoutService = inject(LayoutService);

  isDarkTheme = computed(() => this.layoutService.isDarkTheme());

  isWide = computed(() => this.layoutService.isWide());
}
