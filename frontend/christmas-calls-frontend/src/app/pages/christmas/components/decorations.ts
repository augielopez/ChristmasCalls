import { Component } from "@angular/core";
import { AnimatedContainer } from "@/layout/components/animatedcontainer";
import { CommonModule } from "@angular/common";

@Component({
  selector: "christmas-decorations",
  standalone: true,
  imports: [AnimatedContainer, CommonModule],
  template: `
    <div class="container mt-24 lg:mt-32">
      <!-- Christmas Tree Section -->
      <animated-container [delay]="500" className="mt-24 text-center">
        <div class="relative inline-block">
          <div class="text-8xl lg:text-9xl">🎄</div>
          <div
            class="absolute inset-0 bg-green-400/20 blur-3xl rounded-full animate-pulse"
          ></div>
        </div>
        <h3
          class="text-3xl lg:text-4xl font-bold text-surface-950 dark:text-surface-0 mt-8 mb-4"
        >
          Spread Holiday Cheer
        </h3>
        <p class="text-lg text-surface-600 dark:text-surface-400 max-w-xl mx-auto">
          Make this Christmas memorable with heartfelt video calls to family and friends around the world
        </p>
      </animated-container>

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
  getLightColor(index: number): string {
    const colors = ["#ef4444", "#22c55e", "#3b82f6", "#eab308"];
    return colors[index % colors.length];
  }
}

