import { Component } from "@angular/core";
import { AnimatedContainer } from "@/layout/components/animatedcontainer";
import { CommonModule } from "@angular/common";

@Component({
  selector: "christmas-pricing",
  standalone: true,
  imports: [AnimatedContainer, CommonModule],
  template: `
    <div id="pricing" class="container mt-24 lg:mt-32">
      <!-- Section Header -->
      <animated-container [delay]="300" className="text-center mb-16">
        <h2
          class="text-4xl lg:text-5xl font-bold text-surface-950 dark:text-surface-0 mb-4"
        >
          🎄 Santa Call Packages
        </h2>
        <p class="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
          Choose the perfect package for your family's magical Santa experience
        </p>
      </animated-container>

      <!-- Base Packages -->
      <div class="grid md:grid-cols-3 gap-8 mb-16">
        <animated-container
          *ngFor="let pkg of packages; let i = index"
          [delay]="400 + i * 100"
          className="relative"
        >
          <!-- Most Popular Badge -->
          <div
            *ngIf="pkg.popular"
            class="absolute -top-4 left-1/2 -translate-x-1/2 z-10"
          >
            <div
              class="bg-warn-500 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2"
            >
              <i class="pi pi-star-fill"></i>
              <span>MOST POPULAR</span>
            </div>
          </div>

          <div
            [ngClass]="{
              'h-full rounded-3xl p-8 shadow-card hover:shadow-blue-card transition-all duration-300 border-2': true,
              'bg-surface-0 dark:bg-surface-900 border-surface-200 dark:border-surface-800': !pkg.popular,
              'bg-gradient-to-br from-primary-50 to-success-50 dark:from-primary-950 dark:to-success-950 border-primary-500 dark:border-primary-400': pkg.popular
            }"
          >
            <!-- Duration Badge -->
            <div class="flex items-center justify-center mb-6">
              <div
                class="w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg"
              >
                <span class="text-3xl">{{ pkg.icon }}</span>
              </div>
            </div>

            <!-- Package Name -->
            <h3
              class="text-2xl font-bold text-center text-surface-950 dark:text-surface-0 mb-2"
            >
              {{ pkg.name }}
            </h3>

            <!-- Duration -->
            <p
              class="text-center text-lg font-semibold text-primary-600 dark:text-primary-400 mb-4"
            >
              {{ pkg.duration }}
            </p>

            <!-- Price -->
            <div class="text-center mb-6">
              <span
                class="text-5xl font-bold text-surface-950 dark:text-surface-0"
                >\${{ pkg.price }}</span
              >
            </div>

            <!-- Description -->
            <p
              class="text-center text-surface-600 dark:text-surface-400 mb-6 min-h-[3rem]"
            >
              {{ pkg.description }}
            </p>

            <!-- Features -->
            <ul class="space-y-3 mb-8">
              <li
                *ngFor="let feature of pkg.features"
                class="flex items-start gap-3"
              >
                <i
                  class="pi pi-check-circle text-success-500 text-lg mt-0.5"
                ></i>
                <span class="text-surface-700 dark:text-surface-300">{{
                  feature
                }}</span>
              </li>
            </ul>

            <!-- CTA Button -->
            <button
              [ngClass]="{
                'w-full py-3 rounded-full font-bold text-lg transition-all': true,
                'bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 shadow-lg': pkg.popular,
                'bg-surface-200 dark:bg-surface-800 text-surface-950 dark:text-surface-0 hover:bg-surface-300 dark:hover:bg-surface-700': !pkg.popular
              }"
            >
              Book Now
            </button>
          </div>
        </animated-container>
      </div>

      <!-- Add-Ons Section -->
      <animated-container [delay]="700" className="mt-20">
        <div
          class="rounded-3xl bg-surface-0 dark:bg-surface-900 border border-surface-200 dark:border-surface-800 p-8 lg:p-12 shadow-card"
        >
          <h3
            class="text-3xl font-bold text-surface-950 dark:text-surface-0 mb-8 text-center"
          >
            🎁 Add-Ons & Extras
          </h3>

          <!-- Extra Kids -->
          <div class="mb-8">
            <h4
              class="text-xl font-bold text-surface-950 dark:text-surface-0 mb-4 flex items-center gap-2"
            >
              <span class="text-2xl">👨‍👩‍👧‍👦</span>
              Extra Kids
            </h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div
                *ngFor="let addon of extraKids"
                class="flex items-center justify-between p-4 rounded-xl bg-surface-100 dark:bg-surface-800"
              >
                <span class="text-surface-700 dark:text-surface-300">{{
                  addon.name
                }}</span>
                <span
                  class="font-bold text-lg text-primary-600 dark:text-primary-400"
                  >{{ addon.price }}</span
                >
              </div>
            </div>
          </div>

          <!-- Optional Add-Ons -->
          <div>
            <h4
              class="text-xl font-bold text-surface-950 dark:text-surface-0 mb-4 flex items-center gap-2"
            >
              <span class="text-2xl">✨</span>
              Optional Add-Ons
            </h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div
                *ngFor="let addon of optionalAddons"
                class="flex items-start gap-4 p-4 rounded-xl bg-surface-100 dark:bg-surface-800"
              >
                <div class="flex-1">
                  <div
                    class="font-semibold text-surface-950 dark:text-surface-0 mb-1"
                  >
                    {{ addon.name }}
                  </div>
                  <div class="text-sm text-surface-600 dark:text-surface-400">
                    {{ addon.description }}
                  </div>
                </div>
                <div
                  class="font-bold text-lg text-primary-600 dark:text-primary-400 whitespace-nowrap"
                >
                  {{ addon.price }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </animated-container>
    </div>
  `,
})
export class ChristmasPricing {
  packages = [
    {
      name: "Quick Chat",
      duration: "5 Minutes",
      price: 25,
      icon: "💬",
      description: "A brief magical hello from Santa!",
      popular: false,
      features: [
        "Personalized greeting",
        "1 question or wish list check",
        "Perfect for young children",
      ],
    },
    {
      name: "Classic Call",
      duration: "10 Minutes",
      price: 40,
      icon: "🎅",
      description: "The most popular option for families",
      popular: true,
      features: [
        "Name personalization",
        "Full wish list review",
        "Nice List message",
        "Chat about school & hobbies",
        "Perfect for most ages",
      ],
    },
    {
      name: "Deluxe Visit",
      duration: "15 Minutes",
      price: 55,
      icon: "⭐",
      description: "A full personalized Santa experience",
      popular: false,
      features: [
        "Everything in Classic",
        "Deeper conversation",
        "Digital Nice List certificate",
        "Optional video recording",
        "Great for keepsakes",
      ],
    },
  ];

  extraKids = [
    { name: "+1 Child (Same Session)", price: "+$15" },
    { name: "+2-3 Children (Same Session)", price: "+$25" },
  ];

  optionalAddons = [
    {
      name: "Video Recording",
      description: "Receive an HD recording of the call to share or save",
      price: "+$10",
    },
    {
      name: "Nice List Certificate (Printed)",
      description: "Physical copy signed by Santa, mailed to your child",
      price: "+$15",
    },
    {
      name: "Digital Letter from Santa",
      description: "Personalized digital letter with photo from Santa's desk",
      price: "+$5",
    },
  ];
}

