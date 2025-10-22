import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { twMerge } from "tailwind-merge";

@Component({
  selector: "app-logo",
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div [class]="twMerge('flex items-center gap-2', className)">
      <!-- Christmas Tree Icon -->
      <img
        class="h-8 w-8"
        src="/pages/christmas/christmas-tree-2.png"
        alt="Christmas Tree"
      />

      <!-- Text -->
      <span
        *ngIf="withText"
        class="text-white text-2xl font-semibold tracking-wide select-none"
      >
        Christmas Calls
      </span>
    </div>
  `,
})
export class AppLogo {
  @Input() className: string = "";
  @Input() withText: boolean = true;
  twMerge = twMerge;
}
