import { Component } from "@angular/core";
import { AnimatedContainer } from "@/layout/components/animatedcontainer";
import { CommonModule } from "@angular/common";
import { Cloudfade } from "@/layout/components/icon/cloudfade";

@Component({
  selector: "saas-trends",
  standalone: true,
  imports: [AnimatedContainer, CommonModule, Cloudfade],
  template: ` <div class="container mt-24 lg:mt-64">
    <div class="icon-box">
      <IconCloudFade className="w-9 h-9 lg:w-11 lg:h-11" />
    </div>
    <h1
      class="text-3xl lg:text-5xl text-surface-950 dark:text-surface-0 font-semibold max-w-sm lg:max-w-xl text-center mx-auto mt-10"
    >
      Discover Expert Insights and Industry Trends
    </h1>
    <p
      class="mt-6 mx-auto max-w-sm text-center text-lg lg:text-xl text-surface-500 dark:text-white/64"
    >
      Discover expert tips, industry news, and valuable insights on our blog.
    </p>
    <div
      class="max-w-md md:max-w-272 mx-auto w-full mt-16 flex items-center md:flex-row flex-col gap-6 lg:gap-7"
    >
      <animated-container
        *ngFor="let item of saasTrendsData; let i = index"
        [delay]="i * 400"
        className="md:flex-1 w-full relative rounded-3xl lg:rounded-4xl overflow-hidden shadow-black-card h-120 lg:h-152"
      >
        <div
          class="absolute inset-0 -z-1 bg-[linear-gradient(0deg,rgba(0,0,0,0.28)_0%,rgba(0,0,0,0.28)_100%)]"
        ></div>
        <img
          class="object-cover -z-2"
          [src]="item.image"
          alt="Saas Trends Image"
        />
        <div class="absolute inset-x-6 lg:inset-x-8 bottom-6 lg:bottom-8">
          <h5 class="title text-lg lg:text-2xl font-semibold">
            {{ item.title }}
          </h5>
          <p class="text-sm lg:text-lg text-white/72 mt-3 lg:mt-4">
            {{ item.description }}
          </p>
        </div>
      </animated-container>
    </div>
  </div>`,
})
export class SaasTrends {
  saasTrendsData = [
    {
      title: "Explore Our Latest Blog Posts",
      description:
        "Stay informed with the newest trends, tips, and insights from industry experts.",
      image: "/pages/saas/trends-1.jpg",
    },
    {
      title: "Get Insights from Industry Leaders",
      description:
        "Dive into our blog for expert advice, news, and strategies to enhance your business.",
      image: "/pages/saas/trends-2.jpg",
    },
  ];
}
