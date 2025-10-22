import { Component, computed, inject, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { twMerge } from "tailwind-merge";
import { StyleClassModule } from "primeng/styleclass";
import {
  SelectButtonChangeEvent,
  SelectButtonModule,
} from "primeng/selectbutton";
import { LayoutService } from "@/layout/service/layout.service";
import { updatePreset, updateSurfacePalette } from "@primeuix/themes";
import { FormsModule } from "@angular/forms";

interface ColorType {
  name: string;
  palette: Record<string, string>;
}

@Component({
  selector: "app-configurator",
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    StyleClassModule,
    SelectButtonModule,
    FormsModule,
  ],
  template: `
    <div
      [class]="
        twMerge(
          'fixed bottom-6 xl:bottom-auto xl:top-6 right-6 z-9999999',
          className
        )
      "
    >
      <button
        pStyleClass="@next"
        enterFromClass="hidden"
        enterActiveClass="animate-scalein"
        leaveToClass="hidden"
        leaveActiveClass="animate-fadeout"
        [hideOnOutsideClick]="true"
        class="config-button relative group rounded-lg w-10 h-10 flex items-center justify-center transition-all overflow-hidden cursor-pointer"
      >
        <span
          [ngStyle]="{
            'animation-duration': '2s',
            background:
              'conic-gradient(from 90deg, #f97316, #f59e0b, #eab308, #84cc16, #22c55e, #10b981, #14b8a6, #06b6d4, #0ea5e9, #3b82f6, #6366f1, #8b5cf6, #a855f7, #d946ef, #ec4899, #f43f5e)',
          }"
          class="absolute -top-5 -left-5 w-20 h-20 animate-spin"
        ></span>
        <span
          [style]="{ inset: '1px', borderRadius: '0.42rem' }"
          class="absolute z-2 bg-surface-0 dark:bg-surface-900 group-hover:bg-surface-100 dark:group-hover:bg-surface-800 transition-all"
        ></span>
        <span class="relative z-10 text-surface-800 dark:text-surface-100 flex">
          <i class="pi pi-palette text-lg! leading-none!"></i>
        </span>
      </button>

      <div
        [class]="
          'hidden flex flex-col gap-4 absolute bottom-[calc(100%+0.5rem)] xl:bottom-auto xl:top-[calc(100%+0.5rem)] right-0 w-[15.4rem] h-fit p-3 rounded-lg bg-surface-0 dark:bg-surface-900 border border-surface-200 dark:border-surface-700 shadow-sm transition-all ease-in-out'
        "
      >
        <div>
          <span class="text-lg font-semibold">Primary Color</span>
          <div class="pt-2 flex gap-2 flex-wrap">
            <button
              *ngFor="let primaryColor of primaryColors"
              [title]="primaryColor.name"
              type="button"
              [ngClass]="{
                'hover:cursor-pointer w-5 h-5 rounded-md border border-black/16 dark:border-white/12 outline outline-offset-2': true,
                'outline-1':
                  layoutService.layoutConfig().primary === primaryColor.name,
                'focus:outline-1 outline-0':
                  layoutService.layoutConfig().primary !== primaryColor.name,
              }"
              [ngStyle]="{
                backgroundColor: primaryColor.palette['500'],
                outlineColor: primaryColor.palette['500'],
              }"
              (click)="updateColors('primary', primaryColor)"
            ></button>
          </div>
        </div>

        <div>
          <span class="text-lg font-semibold">Surface</span>
          <div class="pt-2 flex gap-2 flex-wrap">
            <button
              *ngFor="let surface of surfaces"
              [title]="surface.name"
              type="button"
              [ngClass]="{
                'hover:cursor-pointer w-5 h-5 rounded-md border border-black/16 dark:border-white/12 outline outline-offset-2': true,
                'outline-1':
                  layoutService.layoutConfig().surface === surface.name,
                'focus:outline-1 outline-0':
                  layoutService.layoutConfig().surface !== surface.name,
              }"
              [ngStyle]="{ 'background-color': surface.palette['500'] }"
              (click)="updateColors('surface', surface)"
            ></button>
          </div>
        </div>

        <div>
          <span class="text-lg font-semibold">Hero Container Style</span>
          <p-selectbutton
            [ngModel]="configHeroType()"
            [options]="heroTypes"
            optionLabel="name"
            optionValue="value"
            [allowEmpty]="false"
            (onChange)="toggleHeroContainer($event)"
          />
        </div>

        <div>
          <div class="flex flex-col gap-2">
            <span class="text-lg font-semibold">Color Scheme</span>
            <p-selectbutton
              [ngModel]="configTheme()"
              [options]="themeOptions"
              optionLabel="name"
              optionValue="value"
              [allowEmpty]="false"
              (onChange)="toggleDarkMode()"
            />
          </div>
        </div>
      </div>
    </div>
  `,
})
export class AppConfigurator {
  @Input() className: any = "";

  twMerge = twMerge;

  layoutService = inject(LayoutService);

  configTheme = computed(() => this.layoutService.layoutConfig().darkTheme);

  configHeroType = computed(
    () => this.layoutService.layoutConfig().heroContainerType
  );

  themeOptions = [
    { name: "Light", value: false },
    { name: "Dark", value: true },
  ];

  heroTypes = [
    { name: "Compact", value: "compact" },
    { name: "Wide", value: "wide" },
  ];

  primaryColors = [
    {
      name: "vintage-red",
      palette: {
        50: "#fceeee",
        100: "#f8dedd",
        200: "#f0bcbc",
        300: "#e49894",
        400: "#d66f6b",
        500: "#B0463D", // main
        600: "#963E37",
        700: "#7B332D",
        800: "#642923",
        900: "#4A1C18",
        950: "#2F0E0B",
      },
    },
    {
      name: "vintage-green",
      palette: {
        50: "#eef6f3",
        100: "#d9ede4",
        200: "#b7ddd1",
        300: "#88c5b1",
        400: "#5da48c",
        500: "#3A5D4F", // main
        600: "#2f4d43",
        700: "#243e37",
        800: "#1c322d",
        900: "#152823",
        950: "#0c1816",
      },
    },
    {
      name: "vintage-gold",
      palette: {
        50: "#fff9e6",
        100: "#fef1c7",
        200: "#fde38d",
        300: "#fbd762",
        400: "#f4c93b",
        500: "#E6C56E", // main
        600: "#c9a84f",
        700: "#a3893c",
        800: "#816c2c",
        900: "#655522",
        950: "#3c320f",
      },
    },
    {
      name: "vintage-blue",
      palette: {
        50: "#f0f6f9",
        100: "#dde9f0",
        200: "#bdd5e0",
        300: "#94b6c7",
        400: "#6f97ac",
        500: "#4A6E84", // main
        600: "#3d5b6d",
        700: "#324b59",
        800: "#263944",
        900: "#1c2a33",
        950: "#10181f",
      },
    },
    {
      name: "vintage-plum",
      palette: {
        50: "#f8f4f9",
        100: "#ede2f0",
        200: "#dbc8e2",
        300: "#c3a8ce",
        400: "#a682b2",
        500: "#82608A", // main
        600: "#684d70",
        700: "#533d59",
        800: "#402f45",
        900: "#2f2434",
        950: "#1c131f",
      },
    },
    {
      name: "vintage-cream",
      palette: {
        50: "#fffdf9",
        100: "#fef8ed",
        200: "#fdf0da",
        300: "#f8e3c0",
        400: "#f3d6a3",
        500: "#EFE4D1", // main
        600: "#cbbda9",
        700: "#a69885",
        800: "#857a6a",
        900: "#6b6354",
        950: "#403a2e",
      },
    },
    {
      name: "vintage-orange",
      palette: {
        50: "#fef3f0",
        100: "#fde4de",
        200: "#fac5ba",
        300: "#f5a090",
        400: "#ed7663",
        500: "#C25B42", // main - Burnt red-orange
        600: "#a24936",
        700: "#83392b",
        800: "#692c22",
        900: "#50211a",
        950: "#30120e",
      },
    },
  ];
  

  surfaces = [
    {
      name: "slate",
      palette: {
        0: "#ffffff",
        50: "#f8fafc",
        100: "#f1f5f9",
        200: "#e2e8f0",
        300: "#cbd5e1",
        400: "#94a3b8",
        500: "#64748b",
        600: "#475569",
        700: "#334155",
        800: "#1e293b",
        900: "#0f172a",
        950: "#020617",
      },
    },
    {
      name: "gray",
      palette: {
        0: "#ffffff",
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
        950: "#030712",
      },
    },
    {
      name: "zinc",
      palette: {
        0: "#ffffff",
        50: "#fafafa",
        100: "#f4f4f5",
        200: "#e4e4e7",
        300: "#d4d4d8",
        400: "#a1a1aa",
        500: "#71717a",
        600: "#52525b",
        700: "#3f3f46",
        800: "#27272a",
        900: "#18181b",
        950: "#09090b",
      },
    },
    {
      name: "neutral",
      palette: {
        0: "#ffffff",
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#e5e5e5",
        300: "#d4d4d4",
        400: "#a3a3a3",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#171717",
        950: "#0a0a0a",
      },
    },
    {
      name: "stone",
      palette: {
        0: "#ffffff",
        50: "#fafaf9",
        100: "#f5f5f4",
        200: "#e7e5e4",
        300: "#d6d3d1",
        400: "#a8a29e",
        500: "#78716c",
        600: "#57534e",
        700: "#44403c",
        800: "#292524",
        900: "#1c1917",
        950: "#0c0a09",
      },
    },
    {
      name: "soho",
      palette: {
        0: "#ffffff",
        50: "#f4f4f4",
        100: "#e8e9e9",
        200: "#d2d2d4",
        300: "#bbbcbe",
        400: "#a5a5a9",
        500: "#8e8f93",
        600: "#77787d",
        700: "#616268",
        800: "#4a4b52",
        900: "#34343d",
        950: "#1d1e27",
      },
    },
    {
      name: "viva",
      palette: {
        0: "#ffffff",
        50: "#f3f3f3",
        100: "#e7e7e8",
        200: "#cfd0d0",
        300: "#b7b8b9",
        400: "#9fa1a1",
        500: "#87898a",
        600: "#6e7173",
        700: "#565a5b",
        800: "#3e4244",
        900: "#262b2c",
        950: "#0e1315",
      },
    },
    {
      name: "ocean",
      palette: {
        0: "#ffffff",
        50: "#fbfcfc",
        100: "#F7F9F8",
        200: "#EFF3F2",
        300: "#DADEDD",
        400: "#B1B7B6",
        500: "#828787",
        600: "#5F7274",
        700: "#415B61",
        800: "#29444E",
        900: "#183240",
        950: "#0c1920",
      },
    },
  ];

  getPresetExt() {
    const color = this.primaryColors.find(
      (c) => c.name === this.layoutService.layoutConfig().primary
    )!;

    return {
      semantic: {
        primary: color.palette,
        colorScheme: {
          light: {
            primary: {
              color: "{primary.500}",
              contrastColor: "#ffffff",
              hoverColor: "{primary.600}",
              activeColor: "{primary.700}",
            },
            highlight: {
              background: "{primary.50}",
              focusBackground: "{primary.100}",
              color: "{primary.700}",
              focusColor: "{primary.800}",
            },
          },
          dark: {
            primary: {
              color: "{primary.400}",
              contrastColor: "{surface.900}",
              hoverColor: "{primary.300}",
              activeColor: "{primary.200}",
            },
            highlight: {
              background: "color-mix(in srgb, {primary.400}, transparent 84%)",
              focusBackground:
                "color-mix(in srgb, {primary.400}, transparent 76%)",
              color: "rgba(255,255,255,.87)",
              focusColor: "rgba(255,255,255,.87)",
            },
          },
        },
      },
    };
  }

  updateColors(type: string, color: ColorType) {
    if (type === "primary") {
      this.layoutService.layoutConfig.update((val) => ({
        ...val,
        primary: color.name,
      }));
    } else if (type === "surface") {
      this.layoutService.layoutConfig.update((val) => ({
        ...val,
        surface: color.name,
      }));
    }

    this.applyTheme(type, color);
  }

  applyTheme(type: string, color: ColorType) {
    if (type === "primary") {
      updatePreset(this.getPresetExt());
    } else if (type === "surface") {
      updateSurfacePalette(color.palette);
    }
  }

  toggleDarkMode() {
    if (!document.startViewTransition) {
      this.executeDarkModeToggle();

      return;
    }

    document.startViewTransition(() => this.executeDarkModeToggle());
  }

  executeDarkModeToggle() {
    this.layoutService.layoutConfig.update((prev) => ({
      ...prev,
      darkTheme: !prev.darkTheme,
    }));

    document.documentElement.classList.toggle("dark");
  }

  toggleHeroContainer(e: SelectButtonChangeEvent) {
    this.layoutService.layoutConfig.update((val) => ({
      ...val,
      heroContainerType: e.value,
    }));
  }
}
