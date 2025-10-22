import { Component } from "@angular/core";
import { AnimatedContainer } from "@/layout/components/animatedcontainer";
import { CommonModule } from "@angular/common";
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "christmas-cta",
  standalone: true,
  imports: [AnimatedContainer, CommonModule, ReactiveFormsModule],
  template: `
    <div class="container mt-24 lg:mt-32 mb-24">
      <animated-container>
        <div
          class="relative rounded-3xl lg:rounded-4xl overflow-hidden shadow-blue-card p-8 lg:p-12"
        >
          <!-- Background gradient -->
          <div
            class="absolute inset-0 bg-gradient-to-br from-primary-600 via-success-600 to-primary-700 opacity-90"
          ></div>

          <!-- Decorative snowflakes -->
          <div
            class="absolute inset-0 pointer-events-none overflow-hidden opacity-20"
          >
            <div
              *ngFor="let flake of decorativeSnowflakes"
              class="absolute text-white text-3xl animate-pulse"
              [style.left.%]="flake.left"
              [style.top.%]="flake.top"
              [style.animation-delay.s]="flake.delay"
            >
              ❄
            </div>
          </div>

          <!-- Content -->
          <div class="relative z-10">
            <!-- Header -->
            <div class="text-center text-white mb-8">
              <div class="text-5xl lg:text-6xl mb-4">🎅</div>
              <h2 class="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Book Your Santa Call?
              </h2>
              <p class="text-lg lg:text-xl max-w-2xl mx-auto opacity-95">
                Fill out the form below to request your booking. We'll reach out to confirm your time and collect payment details.
              </p>
            </div>

            <!-- Contact Form -->
            <div class="max-w-3xl mx-auto bg-surface-0 dark:bg-surface-900 rounded-2xl p-6 lg:p-8 shadow-xl">
              <form [formGroup]="bookingForm" (ngSubmit)="onSubmit()">
                <div class="grid md:grid-cols-2 gap-6 mb-6">
                  <!-- Parent Name -->
                  <div>
                    <label class="block text-sm font-semibold text-surface-950 dark:text-surface-0 mb-2">
                      Parent/Guardian Name *
                    </label>
                    <input
                      type="text"
                      formControlName="parentName"
                      class="w-full px-4 py-3 rounded-lg border border-surface-300 dark:border-surface-700 bg-surface-0 dark:bg-surface-800 text-surface-950 dark:text-surface-0 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="Enter your name"
                    />
                    <div *ngIf="bookingForm.get('parentName')?.invalid && bookingForm.get('parentName')?.touched" class="text-danger-500 text-sm mt-1">
                      Name is required
                    </div>
                  </div>

                  <!-- Email -->
                  <div>
                    <label class="block text-sm font-semibold text-surface-950 dark:text-surface-0 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      formControlName="email"
                      class="w-full px-4 py-3 rounded-lg border border-surface-300 dark:border-surface-700 bg-surface-0 dark:bg-surface-800 text-surface-950 dark:text-surface-0 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="your@email.com"
                    />
                    <div *ngIf="bookingForm.get('email')?.invalid && bookingForm.get('email')?.touched" class="text-danger-500 text-sm mt-1">
                      Valid email is required
                    </div>
                  </div>
                </div>

                <div class="grid md:grid-cols-2 gap-6 mb-6">
                  <!-- Phone -->
                  <div>
                    <label class="block text-sm font-semibold text-surface-950 dark:text-surface-0 mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      formControlName="phone"
                      class="w-full px-4 py-3 rounded-lg border border-surface-300 dark:border-surface-700 bg-surface-0 dark:bg-surface-800 text-surface-950 dark:text-surface-0 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <!-- Number of Children -->
                  <div>
                    <label class="block text-sm font-semibold text-surface-950 dark:text-surface-0 mb-2">
                      Number of Children *
                    </label>
                    <input
                      type="number"
                      formControlName="numberOfChildren"
                      min="1"
                      max="10"
                      class="w-full px-4 py-3 rounded-lg border border-surface-300 dark:border-surface-700 bg-surface-0 dark:bg-surface-800 text-surface-950 dark:text-surface-0 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="1"
                    />
                    <div *ngIf="bookingForm.get('numberOfChildren')?.invalid && bookingForm.get('numberOfChildren')?.touched" class="text-danger-500 text-sm mt-1">
                      Number of children is required
                    </div>
                  </div>
                </div>

                <!-- Preferred Date/Time -->
                <div class="mb-6">
                  <label class="block text-sm font-semibold text-surface-950 dark:text-surface-0 mb-2">
                    Preferred Date & Time *
                  </label>
                  <input
                    type="text"
                    formControlName="preferredDateTime"
                    class="w-full px-4 py-3 rounded-lg border border-surface-300 dark:border-surface-700 bg-surface-0 dark:bg-surface-800 text-surface-950 dark:text-surface-0 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="e.g., December 20th at 6:00 PM EST"
                  />
                  <div *ngIf="bookingForm.get('preferredDateTime')?.invalid && bookingForm.get('preferredDateTime')?.touched" class="text-danger-500 text-sm mt-1">
                    Preferred date/time is required
                  </div>
                </div>

                <!-- Child Details -->
                <div class="mb-6">
                  <label class="block text-sm font-semibold text-surface-950 dark:text-surface-0 mb-2">
                    Tell Us About Your Kids *
                  </label>
                  <textarea
                    formControlName="childDetails"
                    rows="6"
                    class="w-full px-4 py-3 rounded-lg border border-surface-300 dark:border-surface-700 bg-surface-0 dark:bg-surface-800 text-surface-950 dark:text-surface-0 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                    placeholder="Please share: names, ages, interests, and any special notes (good behavior to celebrate or areas to encourage improvement)"
                  ></textarea>
                  <div *ngIf="bookingForm.get('childDetails')?.invalid && bookingForm.get('childDetails')?.touched" class="text-danger-500 text-sm mt-1">
                    Child details are required
                  </div>
                </div>

                <!-- Action Buttons -->
                <div class="flex flex-col sm:flex-row gap-4">
                  <button
                    type="button"
                    (click)="scrollToPricing()"
                    class="flex-1 px-6 py-3 rounded-full border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 font-bold text-lg hover:bg-primary-50 dark:hover:bg-primary-950 transition-all"
                  >
                    <i class="pi pi-dollar mr-2"></i>
                    See Pricing
                  </button>
                  <button
                    type="submit"
                    [disabled]="bookingForm.invalid"
                    class="flex-1 px-6 py-3 rounded-full bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold text-lg hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <i class="pi pi-send mr-2"></i>
                    Submit Booking Request
                  </button>
                </div>
              </form>

              <!-- Success Message -->
              <div *ngIf="submitted" class="mt-6 p-4 bg-success-100 dark:bg-success-900 border border-success-500 rounded-lg">
                <p class="text-success-700 dark:text-success-300 text-center font-semibold">
                  ✅ Request submitted! We'll be in touch shortly to confirm your magical Santa call.
                </p>
              </div>
            </div>
          </div>

          <!-- Decorative elements -->
          <div class="absolute top-8 left-8 text-5xl opacity-30 animate-bounce">
            🎄
          </div>
          <div
            class="absolute bottom-8 right-8 text-5xl opacity-30 animate-bounce"
            style="animation-delay: 0.5s"
          >
            🎁
          </div>
        </div>
      </animated-container>
    </div>
  `,
})
export class ChristmasCTA {
  bookingForm: FormGroup;
  submitted = false;

  decorativeSnowflakes = Array.from({ length: 12 }, () => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 2,
  }));

  constructor(private fb: FormBuilder) {
    this.bookingForm = this.fb.group({
      parentName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      numberOfChildren: [1, [Validators.required, Validators.min(1)]],
      preferredDateTime: ['', Validators.required],
      childDetails: ['', Validators.required],
    });
  }

  scrollToPricing() {
    const pricingElement = document.getElementById('pricing');
    if (pricingElement) {
      pricingElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      const formData = this.bookingForm.value;
      console.log('Booking Request:', formData);
      
      // Show success message
      this.submitted = true;
      
      // Reset form after 3 seconds
      setTimeout(() => {
        this.bookingForm.reset({ numberOfChildren: 1 });
        this.submitted = false;
      }, 3000);
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.bookingForm.controls).forEach(key => {
        this.bookingForm.get(key)?.markAsTouched();
      });
    }
  }
}

