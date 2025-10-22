import { Component, computed, inject } from "@angular/core";
import { LayoutService } from "@/layout/service/layout.service";
import { AnimatedContainer } from "@/layout/components/animatedcontainer";
import { CommonModule } from "@angular/common";
import { AppNavbar } from "@/layout/components/app.navbar";
import { FloatingCustomers } from "@/layout/components/floatingcustomers";

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
  imports: [AnimatedContainer, CommonModule, AppNavbar, FloatingCustomers],
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
          class="absolute lg:opacity-100 opacity-50 z-10 bottom-0 inset-x-0 h-88 bg-[linear-gradient(180deg,rgba(255,255,255,0.00)_0%,#FFF_62.59%,#FFF_100%)] dark:bg-[linear-gradient(180deg,rgba(9,9,11,0.00)_0%,rgba(9,9,11,0.8)_62.59%,rgba(9,9,11,1)_100%)] lg:backdrop-blur-[0.75px]"
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
                class="absolute lg:opacity-100 opacity-50 z-10 bottom-0 inset-x-0 h-88 bg-[linear-gradient(180deg,rgba(255,255,255,0.00)_0%,#FFF_62.59%,#FFF_100%)] dark:bg-[linear-gradient(180deg,rgba(9,9,11,0.00)_0%,rgba(9,9,11,0.8)_62.59%,rgba(9,9,11,1)_100%)] lg:backdrop-blur-[0.75px]"
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
                Wishing you joy, peace, and happiness this holiday season
              </p>
              <div class="flex flex-col sm:flex-row gap-4">
                <button class="button-gradient">
                  Schedule a Call
                  <i class="pi pi-phone text-sm"></i>
                </button>
                <button class="button-outlined">
                  Learn More
                  <i class="pi pi-arrow-right text-sm"></i>
                </button>
              </div>
            </div>
          </div>
          <app-navbar />
        </div>
        
        <!-- Holiday Features Section -->
        <div class="mt-16">
          <div class="text-center mb-12">
            <h2
              class="text-4xl lg:text-5xl font-bold text-surface-950 dark:text-surface-0 mb-4"
            >
              🎄 Holiday Features 🎄
            </h2>
            <p class="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
              Connect with loved ones this Christmas season
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <div
              *ngFor="let feature of features; let index = index"
              class="relative"
            >
              <div
                class="p-8 rounded-3xl bg-surface-0 dark:bg-surface-900 shadow-card hover:shadow-blue-card transition-all duration-300 border border-surface-200 dark:border-surface-800 h-full"
              >
                <div class="absolute -top-6 left-1/2 -translate-x-1/2">
                  <div
                    class="w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-lg"
                    [style.background]="feature.ornamentColor"
                  >
                    {{ feature.icon }}
                  </div>
                </div>
                <div class="mt-8 text-center">
                  <h3
                    class="text-2xl font-bold text-surface-950 dark:text-surface-0 mb-4"
                  >
                    {{ feature.title }}
                  </h3>
                  <p class="text-surface-600 dark:text-surface-400 leading-relaxed">
                    {{ feature.description }}
                  </p>
                </div>
                <div
                  class="absolute top-4 right-4 text-2xl opacity-20 animate-pulse"
                >
                  ❄
                </div>
                <div
                  class="absolute bottom-4 left-4 text-2xl opacity-20 animate-pulse"
                  style="animation-delay: 0.5s"
                >
                  ❄
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <floating-customers
          className="mt-24 pb-24"
          labelClass="text-surface-500 dark:text-white/64"
          iconClass="[&_path]:fill-surface-500 dark:[&_path]:fill-white/64"
        />
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

  // Holiday features
  features = [
    {
      icon: "🎅",
      title: "Santa's Special Calls",
      description:
        "Schedule personalized video calls with Santa for the little ones in your family",
      ornamentColor: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
    },
    {
      icon: "🎁",
      title: "Gift Reminders",
      description:
        "Never forget a gift with our smart reminder system for all your loved ones",
      ornamentColor: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
    },
    {
      icon: "⭐",
      title: "Holiday Greetings",
      description:
        "Send festive video messages and greetings cards to spread joy this season",
      ornamentColor: "linear-gradient(135deg, #eab308 0%, #ca8a04 100%)",
    },
  ];
}

