import { Component } from "@angular/core";
import { AnimatedContainer } from "@/layout/components/animatedcontainer";
import { CommonModule } from "@angular/common";
import { Cloudfade } from "@/layout/components/icon/cloudfade";

@Component({
  selector: "saas-features",
  standalone: true,
  imports: [AnimatedContainer, CommonModule, Cloudfade],
  template: `
    <div class="container max-w-272 lg:mt-64 mt-24">
      <div class="icon-box ">
        <IconCloudFade className="w-9 h-9 lg:w-11 lg:h-11" />
      </div>
      <h1
        class="text-3xl lg:text-5xl text-surface-950 dark:text-surface-0 font-semibold max-w-xs lg:max-w-lg text-center mx-auto mt-10"
      >
        Simplify Your Work with Our Standout Features
      </h1>
      <p
        class="mt-6 mx-auto max-w-md text-center text-lg lg:text-xl text-surface-500 dark:text-white/64"
      >
        Optimize your workflow and increase your efficiency with features
        designed to deliver the best results.
      </p>
      <div class="flex lg:flex-row flex-col items-center gap-7 mt-24 lg:mt-14">
        <animated-container
          className="lg:flex-1 w-full lg:w-auto relative h-116 lg:h-148 rounded-3xl lg:rounded-4xl shadow-blue-card bg-main-gradient lg:max-w-none max-w-120"
        >
          <img
            class="w-[360px] lg:w-[434px] h-auto absolute left-1/2 -translate-x-1/2 -top-10"
            src="/pages/saas/feature-img-1.png"
            alt="Features Image"
          />
          <div
            class="absolute bottom-7 lg:bottom-10 left-6 lg:left-8 right-6 lg:right-8"
          >
            <h5 class="text-lg lg:text-2xl title font-semibold text-center">
              24/7 Customer Support
            </h5>
            <p
              class="text-sm lg:text-lg text-white/64 text-center mt-3 lg:mt-4"
            >
              Benefit from our dedicated 24/7 customer support team, always
              ready to assist you with any questions or issues, ensuring
              uninterrupted service and peace of mind.
            </p>
          </div>
        </animated-container>
        <animated-container
          [delay]="400"
          className="lg:flex-1 w-full lg:w-auto relative h-116 lg:h-148 rounded-3xl lg:rounded-4xl shadow-blue-card bg-main-gradient lg:max-w-none max-w-120"
        >
          <img
            class="w-full lg:w-[466px] h-auto absolute left-1/2 -translate-x-1/2 top-0"
            src="/pages/saas/feature-img-2.png"
            alt="Features Image"
          />
          <div
            class="absolute bottom-7 lg:bottom-10 left-6 lg:left-8 right-6 lg:right-8"
          >
            <h5 class="text-lg lg:text-2xl title font-semibold text-center">
              Secure Data Storage
            </h5>
            <p
              class="text-sm lg:text-lg text-white/64 text-center mt-3 lg:mt-4"
            >
              Protect your data with our secure data storage solutions,
              utilizing advanced encryption and security protocols to safeguard
              your information at all times.
            </p>
          </div>
        </animated-container>
      </div>
    </div>
  `,
})
export class SaasFeatures {}
