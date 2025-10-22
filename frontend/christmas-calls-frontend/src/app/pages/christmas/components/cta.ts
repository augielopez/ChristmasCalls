import { Component } from "@angular/core";
import { AnimatedContainer } from "@/layout/components/animatedcontainer";
import { CommonModule } from "@angular/common";

@Component({
  selector: "christmas-cta",
  standalone: true,
  imports: [AnimatedContainer, CommonModule],
  template: `
    <div class="container mt-24 lg:mt-32 mb-24">
      <animated-container>
        <div
          class="relative rounded-3xl lg:rounded-4xl overflow-hidden shadow-blue-card p-12 lg:p-16"
        >
          <!-- Background gradient -->
          <div
            class="absolute inset-0 bg-gradient-to-br from-red-500 via-green-500 to-red-600 opacity-90"
          ></div>

          <!-- Decorative snowflakes -->
          <div
            class="absolute inset-0 pointer-events-none overflow-hidden opacity-30"
          >
            <div
              *ngFor="let flake of decorativeSnowflakes"
              class="absolute text-white text-4xl animate-pulse"
              [style.left.%]="flake.left"
              [style.top.%]="flake.top"
              [style.animation-delay.s]="flake.delay"
            >
              ❄
            </div>
          </div>

          <!-- Content -->
          <div class="relative z-10 text-center text-white">
            <div class="text-6xl lg:text-8xl mb-6">🎁</div>
            <h2 class="text-4xl lg:text-5xl font-bold mb-6">
              Give the Gift of Connection
            </h2>
            <p class="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto opacity-95">
              This holiday season, bring joy to your loved ones with our special
              Christmas calling packages. Perfect for staying connected with
              family and friends near and far.
            </p>

            <!-- Features list -->
            <div
              class="grid md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto text-left"
            >
              <div
                *ngFor="let benefit of benefits"
                class="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-2xl p-4"
              >
                <div class="text-2xl mt-1">{{ benefit.icon }}</div>
                <div>
                  <h4 class="font-semibold text-lg mb-1">{{ benefit.title }}</h4>
                  <p class="text-sm opacity-90">{{ benefit.description }}</p>
                </div>
              </div>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                class="min-w-48 px-8 py-4 rounded-full bg-white text-red-600 font-bold text-lg hover:bg-surface-100 transition-all shadow-lg hover:shadow-xl"
              >
                Start Free Trial
                <i class="pi pi-arrow-right ml-2"></i>
              </button>
              <button
                class="min-w-48 px-8 py-4 rounded-full border-2 border-white text-white font-bold text-lg hover:bg-white/10 transition-all"
              >
                View Pricing
              </button>
            </div>

            <!-- Special offer badge -->
            <div class="mt-8">
              <div
                class="inline-flex items-center gap-2 bg-yellow-400 text-surface-950 px-6 py-2 rounded-full font-bold animate-pulse"
              >
                <span class="text-xl">✨</span>
                <span>Limited Time: 50% Off Holiday Special</span>
                <span class="text-xl">✨</span>
              </div>
            </div>
          </div>

          <!-- Decorative elements -->
          <div class="absolute top-8 left-8 text-6xl opacity-50 animate-bounce">
            🎄
          </div>
          <div
            class="absolute bottom-8 right-8 text-6xl opacity-50 animate-bounce"
            style="animation-delay: 0.5s"
          >
            🎅
          </div>
        </div>
      </animated-container>
    </div>
  `,
})
export class ChristmasCTA {
  benefits = [
    {
      icon: "📞",
      title: "Unlimited Calls",
      description: "Connect as much as you want this holiday season",
    },
    {
      icon: "🌟",
      title: "HD Quality",
      description: "Crystal clear video and audio for special moments",
    },
    {
      icon: "🎉",
      title: "Group Calls",
      description: "Bring the whole family together virtually",
    },
  ];

  decorativeSnowflakes = Array.from({ length: 15 }, () => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 2,
  }));
}

