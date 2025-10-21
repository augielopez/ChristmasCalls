import { Component } from "@angular/core";
import { AnimatedContainer } from "@/layout/components/animatedcontainer";
import { CommonModule } from "@angular/common";

@Component({
  selector: "saas-streamline",
  standalone: true,
  imports: [AnimatedContainer, CommonModule],
  template: `
    <div
      class="container max-w-6xl flex flex-col gap-24 lg:gap-48 mt-32 lg:mt-64"
    >
      <div
        class="flex items-center lg:flex-row flex-col-reverse gap-10 lg:gap-28"
      >
        <div class="max-w-[29.3rem]">
          <div class="badge">Maximize</div>
          <h2
            class="mt-4 text-3xl lg:text-5xl font-semibold text-surface-950 dark:text-surface-0"
          >
            Save on Your Credit Card Expenses
          </h2>
          <p class="mt-6 text-lg text-surface-500">
            Reduce your credit card costs and optimize your financial management
            with our innovative tools designed to help you save more.
          </p>
          <ul class="mt-8 flex flex-col gap-3.5">
            <li class="flex items-center gap-3 text-surface-500">
              <i class="pi pi-check-circle"></i>
              <p class="text-base lg:text-lg">Automated Spending Alerts</p>
            </li>
            <li class="flex items-center gap-3 text-surface-500">
              <i class="pi pi-check-circle"></i>
              <p class="text-base lg:text-lg">Customized Budget Planning</p>
            </li>
            <li class="flex items-center gap-3 text-surface-500">
              <i class="pi pi-check-circle"></i>
              <p class="text-base lg:text-lg">Expense Categorization</p>
            </li>
          </ul>
          <button class="button-gradient mt-8">Get Started</button>
        </div>
        <animated-container
          enterClass="animate-slidefadeinright"
          className="w-full max-w-[29.3rem] lg:max-w-none lg:flex-1 h-92 lg:h-124 shadow-blue-card bg-main-gradient rounded-3xl lg:rounded-4xl relative"
        >
          <img
            class="w-[90%] h-auto absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
            src="/pages/saas/streamline-img-1.png"
            alt="Saas Streamline Image"
          />
        </animated-container>
      </div>
      <div
        class="flex flex-col-reverse lg:flex-row-reverse items-center gap-10 lg:gap-14"
      >
        <div class="max-w-[29.3rem] lg:max-w-132">
          <div class="badge">Maximize</div>
          <h2
            class="mt-4 text-3xl lg:text-5xl font-semibold text-surface-950 dark:text-surface-0"
          >
            Streamline Your Banking Experience Effortlessly
          </h2>
          <p class="mt-6 text-lg text-surface-500">
            Simplify your daily financial operations and boost your efficiency
            with our cutting-edge tools designed to make your banking seamless.
          </p>
          <ul class="mt-8 flex flex-col gap-3.5">
            <li class="flex items-center gap-3 text-surface-500">
              <i class="pi pi-check-circle"></i>
              <p class="text-base lg:text-lg">Instant Fund Transfers</p>
            </li>
            <li class="flex items-center gap-3 text-surface-500">
              <i class="pi pi-check-circle"></i>
              <p class="text-base lg:text-lg">Live Balance Updates</p>
            </li>
            <li class="flex items-center gap-3 text-surface-500">
              <i class="pi pi-check-circle"></i>
              <p class="text-base lg:text-lg">Detailed Spending Reports</p>
            </li>
          </ul>
          <button class="button-gradient mt-8">Get Started</button>
        </div>
        <animated-container
          enterClass="animate-slidefadeinleft"
          className="w-full max-w-[29.3rem] lg:max-w-none lg:flex-1 h-92 lg:h-124 shadow-blue-card bg-main-gradient rounded-3xl lg:rounded-4xl relative"
        >
          <img
            class="w-full h-auto absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
            src="/pages/saas/streamline-img-2.png"
            alt="Saas Streamline Image"
          />
        </animated-container>
      </div>
    </div>
  `,
})
export class Streamline {}
