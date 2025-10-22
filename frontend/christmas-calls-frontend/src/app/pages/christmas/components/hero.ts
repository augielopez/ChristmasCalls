import { Component, computed, inject } from "@angular/core";
import { LayoutService } from "@/layout/service/layout.service";
import { AnimatedContainer } from "@/layout/components/animatedcontainer";
import { CommonModule } from "@angular/common";
import { AppNavbar } from "@/layout/components/app.navbar";

interface Snowflake {
  left: number;
  delay: number;
  duration: number;
  opacity: number;
  size: number;
}

@Component({
  selector: "christmas-hero",
  standalone: true,
  imports: [AnimatedContainer, CommonModule, AppNavbar],
  template: `
    <animated-container [className]="isWide() ? 'overflow-hidden' : 'pt-6'">
      <!-- Full-width background for wide screens -->
      <div
        *ngIf="isWide()"
        class="h-208 absolute top-0 left-0 w-full overflow-hidden"
      >
        <img
          class="object-cover min-w-96 absolute top-0 bottom-0 right-0 left-0 w-full h-full"
          style="object-position: center 100%"
          src="/pages/christmas/christmas-outside-2.png"
          alt="Christmas Winter Background"
        />
        <div
          class="absolute inset-0 z-1 opacity-75 bg-[linear-gradient(180deg,rgba(0,0,0,0.35)_0%,rgba(0,0,0,0.20)_100%)]"
        ></div>
        <div
          class="absolute lg:opacity-100 opacity-50 z-10 bottom-0 inset-x-0 h-88 bg-[linear-gradient(180deg,rgba(238,222,186,0.00)_0%,#EEDEBA_62.59%,#EEDEBA_100%)] dark:bg-[linear-gradient(180deg,rgba(9,9,11,0.00)_0%,rgba(9,9,11,0.8)_62.59%,rgba(9,9,11,1)_100%)] lg:backdrop-blur-[0.75px]"
        ></div>
      </div>

      <div class="container">
        <div
          [ngClass]="{
            'relative rounded-b-md rounded-t-3xl lg:rounded-t-4xl h-208': true,
            'overflow-hidden': !isWide(),
          }"
        >
          <div class="absolute inset-0 overflow-y-clip">
            <!-- Background for mobile/narrow screens -->
            <ng-container *ngIf="!isWide()">
              <img
                class="object-cover min-w-96 absolute top-0 bottom-0 right-0 left-0 w-full h-full"
                style="object-position: center 75%"
                src="/pages/christmas/christmas-outside-2.png"
                alt="Christmas Winter Background"
              />
              <div
                class="absolute inset-0 z-1 opacity-50 bg-[linear-gradient(180deg,rgba(0,0,0,0.35)_0%,rgba(0,0,0,0.20)_100%)]"
              ></div>
              <div
                class="absolute lg:opacity-100 opacity-50 z-10 bottom-0 inset-x-0 h-88 bg-[linear-gradient(180deg,rgba(238,222,186,0.00)_0%,#EEDEBA_62.59%,#EEDEBA_100%)] dark:bg-[linear-gradient(180deg,rgba(9,9,11,0.00)_0%,rgba(9,9,11,0.8)_62.59%,rgba(9,9,11,1)_100%)] lg:backdrop-blur-[0.75px]"
              ></div>
            </ng-container>

            <!-- Snowflakes Container -->
            <div
              *ngFor="let flake of snowflakes"
              class="absolute text-white animate-snowfall pointer-events-none z-2"
              [style.left.%]="flake.left"
              [style.animation-delay.s]="flake.delay"
              [style.animation-duration.s]="flake.duration"
              [style.opacity]="flake.opacity"
              [style.font-size.px]="flake.size"
              [style.top.px]="-20"
            >
              ❄
            </div>

            <!-- Christmas Lights Decoration -->
            <div class="absolute top-0 left-0 right-0 z-2 h-12 opacity-80">
              <div class="flex justify-around items-center h-full">
                <div
                  *ngFor="let light of lights"
                  class="w-3 h-3 rounded-full animate-pulse"
                  [style.background-color]="light.color"
                  [style.animation-delay.s]="light.delay"
                ></div>
              </div>
            </div>


            <!-- Content Overlay -->
            <div
              class="absolute left-1/2 -translate-x-1/2 top-64 z-3 flex flex-col items-center"
            >
              <div
                class="title text-3xl lg:text-5xl bg-[linear-gradient(180deg,rgba(255,255,255,0.80)_4.92%,rgba(255,255,255,0.40)_89.39%)] leading-none text-center mb-6"
              >
                Merry Christmas
              </div>
              <p
                class="text-xl lg:text-2xl text-white/90 text-center max-w-xl px-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] mb-8"
              >
                Talk to Santa this Christmas
              </p>
              <div class="flex flex-col sm:flex-row gap-4">
                <button class="button-gradient">
                  Chat with Santa
                  <i class="pi pi-comments text-sm"></i>
                </button>
                <button class="button-outlined">
                  Christmas Calls
                  <i class="pi pi-gift text-sm"></i>
                </button>
              </div>
            </div>
          </div>
          <app-navbar />
        </div>
        
      </div>
    </animated-container>
  `,
})
export class ChristmasHero {
  layoutService = inject(LayoutService);
  isDarkTheme = computed(() => this.layoutService.isDarkTheme());
  isWide = computed(() => this.layoutService.isWide());

  // Generate 50 snowflakes with random properties
  snowflakes: Snowflake[] = Array.from({ length: 50 }, () => ({
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 10 + Math.random() * 10, // 10-20 seconds
    opacity: 0.3 + Math.random() * 0.7, // 0.3-1.0
    size: 10 + Math.random() * 20, // 10-30px
  }));

  // Christmas lights with different colors
  lights = [
    { color: "#ef4444", delay: 0 }, // red
    { color: "#22c55e", delay: 0.2 }, // green
    { color: "#3b82f6", delay: 0.4 }, // blue
    { color: "#eab308", delay: 0.6 }, // yellow
    { color: "#ef4444", delay: 0.8 }, // red
    { color: "#22c55e", delay: 1.0 }, // green
    { color: "#3b82f6", delay: 1.2 }, // blue
    { color: "#eab308", delay: 1.4 }, // yellow
    { color: "#ef4444", delay: 1.6 }, // red
    { color: "#22c55e", delay: 1.8 }, // green
  ];

}

