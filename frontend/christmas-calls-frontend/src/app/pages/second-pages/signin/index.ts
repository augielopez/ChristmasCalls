import { Component, computed, inject } from "@angular/core";
import { CirclePattern } from "@/layout/components/circlepattern";
import { AppNavbar } from "@/layout/components/app.navbar";
import { InputTextModule } from "primeng/inputtext";
import { FormsModule } from "@angular/forms";
import { CheckboxModule } from "primeng/checkbox";
import { CommonModule } from "@angular/common";
import { AnimatedContainer } from "@/layout/components/animatedcontainer";
import { GenesisLogo } from "@/layout/components/icon/shapes/genesislogo";
import { IconGoogle } from "@/layout/components/icon/google";
import { IconApple } from "@/layout/components/icon/apple";
import { LayoutService } from "@/layout/service/layout.service";
import { RouterLink } from "@angular/router";

@Component({
  selector: "signin",
  standalone: true,
  imports: [
    CommonModule,
    AnimatedContainer,
    CirclePattern,
    AppNavbar,
    InputTextModule,
    FormsModule,
    CheckboxModule,
    GenesisLogo,
    IconGoogle,
    IconApple,
    RouterLink,
  ],
  template: ` <animated-container
    [className]="isWide() ? 'bg-main-gradient shadow-black-card' : 'pt-6'"
  >
    <div class="container">
      <div
        [ngClass]="{
          'relative overflow-hidden': true,
          'bg-main-gradient rounded-3xl lg:rounded-4xl shadow-black-card':
            !isWide(),
        }"
      >
        <circle-pattern
          class="w-328 lg:block hidden absolute -bottom-1/2 translate-y-24 left-1/2 -translate-x-1/2"
        />
        <div class="relative z-20 px-6">
          <app-navbar />
          <div class="pb-6 pt-10 lg:py-24 max-w-3xl mx-auto">
            <form
              class="bg-white/4 px-6 md:px-8 pt-16 pb-12 border border-white/8 backdrop-blur-[48px] rounded-2.5xl lg:rounded-4xl shadow-[0px_2px_5px_0px_rgba(255,255,255,0.06)_inset,0px_12px_20px_0px_rgba(0,0,0,0.06)]"
            >
              <div
                class="flex items-center justify-center border border-white/8 w-22 h-22 mx-auto rounded-3xl bg-white/8 backdrop-blur-[48px] shadow-[0px_2px_5px_0px_rgba(255,255,255,0.06)_inset,0px_12px_20px_0px_rgba(0,0,0,0.06)]"
              >
                <IconShapesGenesisLogo className="w-10 h-10" />
              </div>
              <h1
                class="text-3xl lg:text-6xl font-semibold text-surface-0 text-center mt-8"
              >
                Sign In
              </h1>
              <p
                class="text-xl text-white/64 text-center mt-6 max-w-sm mx-auto"
              >
                Enter your username and password to access your account.
              </p>
              <div class="flex flex-col gap-8 mt-16">
                <div class="flex md:flex-row flex-col items-center gap-4">
                  <button class="md:flex-1 w-full button-blur">
                    <IconGoogle />
                    Sign in with Google
                  </button>
                  <button class="md:flex-1 w-full button-blur">
                    <IconApple />
                    Sign in with Apple
                  </button>
                </div>
                <div class="flex items-center gap-3.5 py-1">
                  <div
                    class="flex-1 h-px bg-[linear-gradient(270deg,rgba(255,255,255,0.34)_0%,rgba(255,255,255,0.00)_100%)]"
                  ></div>
                  <span class="text-white/72">or</span>
                  <div
                    class="flex-1 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.34)_0%,rgba(255,255,255,0.00)_100%)]"
                  ></div>
                </div>
                <div class="flex flex-col gap-2">
                  <label for="signin_email" class="text-surface-0">
                    Email Address
                  </label>
                  <input
                    pInputText
                    id="signin_email"
                    [(ngModel)]="email"
                    type="email"
                    class="bg-white/16! rounded-full! py-2! px-4! outline-none text-white/90! backdrop-blur-[48px] border-white/12! placeholder:text-surface-0/60! shadow-[0px_2px_5px_0px_rgba(255,255,255,0.06)_inset,0px_12px_20px_0px_rgba(0,0,0,0.06)]!"
                    name="email"
                  />
                </div>
                <div class="flex flex-col gap-2">
                  <label for="signin_password" class="text-surface-0">
                    Password
                  </label>
                  <input
                    pInputText
                    id="signin_password"
                    [(ngModel)]="password"
                    type="password"
                    class="bg-white/16! rounded-full! py-2! px-4! outline-none text-white/90! backdrop-blur-[48px] border-white/12! placeholder:text-surface-0/60! shadow-[0px_2px_5px_0px_rgba(255,255,255,0.06)_inset,0px_12px_20px_0px_rgba(0,0,0,0.06)]!"
                    name="password"
                  />
                </div>
                <div class="flex items-center justify-between gap-2">
                  <div>
                    <label class="flex items-center gap-2">
                      <p-checkbox [(ngModel)]="checked" binary name="checked" styleClass="w-6! h-6!"/>
                      <span class="text-white/64">Remember me</span>
                    </label>
                  </div>
                  <a
                    routerLink="/second-pages/reset-password"
                    class="text-white/72 hover:text-white/90 transition-all"
                  >
                    Forgot password?
                  </a>
                </div>
                <button type="submit" class="button-regular w-full py-3">
                  Login
                </button>
                <div class="text-center">
                  <span class="text-white/64">Not registered? </span>
                  <a
                    routerLink="/second-pages/signup"
                    class="text-surface-0 font-semibold hover:opacity-90 transition-opacity"
                  >
                    Create an Account
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </animated-container>`,
    styles: `
  @reference "../../../../assets/tailwind.css";
  :host ::ng-deep {
    .p-checkbox-box {
      @apply text-white/90 w-6! h-6! rounded-lg! bg-white/16! border-white/12! backdrop-blur-[48px] shadow-[0px_2px_5px_0px_rgba(255,255,255,0.06)_inset,0px_12px_20px_0px_rgba(0,0,0,0.06)]!;
    }
    .p-checkbox-icon {
      @apply text-white leading-none! text-xs! text-white!;
    }
  }
  `,
})
export class Signin {
  username: string = "";
  email: string = "";
  password: string = "";
  checked: boolean = false;

  layoutService = inject(LayoutService);

  isDarkTheme = computed(() => this.layoutService.isDarkTheme());

  isWide = computed(() => this.layoutService.isWide());
}
