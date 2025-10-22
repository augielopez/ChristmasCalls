import { Component } from "@angular/core";
import { AnimatedContainer } from "@/layout/components/animatedcontainer";
import { CommonModule } from "@angular/common";

@Component({
  selector: "christmas-decorations",
  standalone: true,
  imports: [AnimatedContainer, CommonModule],
  template: `
    <div class="container mt-24 lg:mt-32">
      <!-- How It Works Section -->
      <animated-container [delay]="300" className="text-center mb-16">
        <h2
          class="text-4xl lg:text-5xl font-bold text-surface-950 dark:text-surface-0 mb-4"
        >
          🎅 How It Works
        </h2>
        <p class="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
          Book a magical video call with Santa in just 4 simple steps
        </p>
      </animated-container>

      <!-- Steps Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <animated-container
          *ngFor="let step of steps; let i = index"
          [delay]="400 + i * 100"
          className="flex flex-col items-center text-center"
        >
          <div
            class="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center mb-6 shadow-lg"
          >
            <span class="text-white text-4xl">{{ step.icon }}</span>
            <div
              class="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-success-500 flex items-center justify-center text-white font-bold text-lg shadow-md"
            >
              {{ i + 1 }}
            </div>
          </div>
          <h3
            class="text-xl lg:text-2xl font-bold text-surface-950 dark:text-surface-0 mb-3"
          >
            {{ step.title }}
          </h3>
          <p class="text-surface-600 dark:text-surface-400 leading-relaxed">
            {{ step.description }}
          </p>
        </animated-container>
      </div>

      <!-- Twinkling lights divider -->
      <div class="my-16 flex justify-center items-center gap-4">
        <div
          *ngFor="let i of [1, 2, 3, 4, 5, 6, 7]"
          class="w-4 h-4 rounded-full animate-pulse"
          [style.background-color]="getLightColor(i)"
          [style.animation-delay.s]="i * 0.2"
        ></div>
      </div>
    </div>
  `,
})
export class ChristmasDecorations {
  steps = [
    {
      icon: "📅",
      title: "Schedule a Time",
      description:
        "Choose the perfect date and time for Santa to call your little ones",
    },
    {
      icon: "⏰",
      title: "Pick Duration",
      description:
        "Select from 5, 10, or 15-minute calls based on your child's age and excitement level",
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Add Kids (Optional)",
      description:
        "Have multiple children? Add siblings to the same call for just $15-25 more",
    },
    {
      icon: "✉️",
      title: "Tell Us About Your Kids",
      description:
        "Share details about your children so Santa can personalize the experience",
    },
  ];

  getLightColor(index: number): string {
    const colors = ["#B0463D", "#3A5D4F", "#E6C56E", "#4A6E84", "#82608A", "#EFE4D1"];
    return colors[index % colors.length];
  }
}

