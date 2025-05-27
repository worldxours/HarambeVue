<script setup lang="ts">
import { ref, computed } from 'vue';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon, ExternalLinkIcon, SendIcon, LoaderCircleIcon } from 'lucide-vue-next';
import Button from '@/components/ui/Button.vue';
import Input from '@/components/ui/Input.vue';
import Textarea from '@/components/ui/Textarea.vue';
import Select, { type SelectItem } from '@/components/ui/Select.vue';
import { useContactStore } from '@/store/contactStore';
// Import Zod and schema for frontend validation if desired
// import { z } from 'zod';
// import { extendedContactSchema } from '../../../shared/schema'; // Adjust path as needed

// import mapPlaceholderPath from '@/assets/images/map-placeholder.png'; // Commented out - file likely missing
const mapPlaceholderPath = ''; // Placeholder

// Form field refs - these will constitute the ContactFormData
const name = ref('');
const email = ref('');
const phone = ref(''); // Optional in schema, so can be empty string or undefined
const subject = ref(''); // This is 'bookingType' in the old formData
const message = ref('');

// Additional fields from old formData, to be included in the message or handled differently
const partySize = ref<number | null>(null);
const bookingDate = ref('');
const bookingTime = ref('');
const howHeard = ref('');

const contactStore = useContactStore();

const todayDate = computed(() => {
  const today = new Date();
  return today.toISOString().split('T')[0];
});

// These correspond to the 'subject' field in the shared schema (InsertContact)
// which was 'bookingType' in the old local form data.
const subjectOptions: SelectItem[] = [
  { label: 'General Inquiry', value: 'inquiry' },
  { label: 'Table Reservation', value: 'reservation' },
  { label: 'Event Booking', value: 'event' },
  { label: 'Feedback', value: 'feedback' },
];

const howHeardOptions: SelectItem[] = [
  { label: 'Select an option', value: '' },
  { label: 'Friends/Family', value: 'friends_family' },
  { label: 'Online Search (Google, etc.)', value: 'online_search' },
  { label: 'Social Media', value: 'social_media' },
  { label: 'Local Event/Advertisement', value: 'local_event' },
  { label: 'Returning Customer', value: 'returning_customer' },
  { label: 'Other', value: 'other' },
];

async function handleSubmit() {
  let finalMessage = message.value;
  // Append booking details to the message if a reservation or event
  if (subject.value === 'reservation' || subject.value === 'event') {
    finalMessage += `\n\n--- Booking Details ---`;
    if (partySize.value) finalMessage += `\nParty Size: ${partySize.value}`;
    if (bookingDate.value) finalMessage += `\nDate: ${bookingDate.value}`;
    if (bookingTime.value) finalMessage += `\nTime: ${bookingTime.value}`;
  }
  if (howHeard.value) {
     finalMessage += `\nHow heard: ${howHeard.value}`;
  }


  const formDataForStore = {
    name: name.value,
    email: email.value,
    phone: phone.value || undefined, // Send undefined if empty, as per schema for optional
    subject: subject.value, // This is the 'bookingType' equivalent
    message: finalMessage,
  };

  // Optional: Frontend validation using Zod (uncomment and adjust schema import if needed)
  // const validationResult = extendedContactSchema.safeParse(formDataForStore);
  // if (!validationResult.success) {
  //   const firstError = validationResult.error.errors[0];
  //   contactStore.toast({ // Assuming toast is accessible or part of store for consistency
  //     title: 'Validation Error',
  //     description: `${firstError.path.join('.')} - ${firstError.message}`,
  //     variant: 'destructive',
  //   });
  //   return;
  // }
  // const dataToSubmit = validationResult.data; // Use validated data

  const success = await contactStore.submitContactForm(formDataForStore); // Use formDataForStore or dataToSubmit if validation is active
  
  if (success) {
    name.value = '';
    email.value = '';
    phone.value = '';
    subject.value = 'inquiry'; // Reset to default
    message.value = '';
    partySize.value = null;
    bookingDate.value = '';
    bookingTime.value = '';
    howHeard.value = '';
  }
}
</script>

<template>
  <div class="bg-gray-50 text-gray-800">
    <!-- Page Header Section -->
    <section class="bg-yellow-500 text-green-900 py-12 md:py-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="font-heading text-4xl md:text-5xl font-bold">Contact Us</h1>
        <p class="text-lg md:text-xl text-green-800 mt-4 max-w-2xl mx-auto">
          We'd love to hear from you! Whether it's for reservations, inquiries, or feedback.
        </p>
      </div>
    </section>

    <!-- Contact Information & Map Section -->
    <section class="py-16 md:py-24 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-12 items-start">
          <!-- Contact Details -->
          <div>
            <h2 class="font-heading text-3xl md:text-4xl font-semibold text-green-800 mb-8">
              Get in Touch
            </h2>
            <div class="space-y-6">
              <div class="flex items-start">
                <MapPinIcon class="h-7 w-7 text-yellow-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 class="text-xl font-semibold text-green-700">Our Address</h3>
                  <p class="text-gray-600">123 Addis Ababa Street, Flavor Town, ET 90210</p>
                  <a href="https://maps.google.com/?q=123+Addis+Ababa+Street,+Flavor+Town,+ET+90210" target="_blank" rel="noopener noreferrer" class="text-yellow-600 hover:text-yellow-700 font-medium inline-flex items-center mt-1">
                    Get Directions <ExternalLinkIcon class="h-4 w-4 ml-1.5" />
                  </a>
                </div>
              </div>
              <div class="flex items-start">
                <PhoneIcon class="h-7 w-7 text-yellow-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 class="text-xl font-semibold text-green-700">Call Us</h3>
                  <p class="text-gray-600">Reservations & Inquiries: <a href="tel:+251912345678" class="text-yellow-600 hover:text-yellow-700">+251 912 345 678</a></p>
                </div>
              </div>
              <div class="flex items-start">
                <MailIcon class="h-7 w-7 text-yellow-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 class="text-xl font-semibold text-green-700">Email Us</h3>
                  <p class="text-gray-600">General: <a href="mailto:info@harambe.com" class="text-yellow-600 hover:text-yellow-700">info@harambe.com</a></p>
                  <p class="text-gray-600">Events: <a href="mailto:events@harambe.com" class="text-yellow-600 hover:text-yellow-700">events@harambe.com</a></p>
                </div>
              </div>
              <div class="flex items-start">
                <ClockIcon class="h-7 w-7 text-yellow-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 class="text-xl font-semibold text-green-700">Opening Hours</h3>
                  <p class="text-gray-600">Monday - Friday: 11:00 AM - 10:00 PM</p>
                  <p class="text-gray-600">Saturday - Sunday: 10:00 AM - 11:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Map Placeholder -->
          <div class="rounded-lg overflow-hidden shadow-xl h-96 md:h-full">
            <img :src="mapPlaceholderPath" alt="Map showing restaurant location" class="w-full h-full object-cover" />
            <!-- In a real app, this would be an interactive map component -->
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section id="booking-form" class="py-16 md:py-24 bg-green-50 scroll-mt-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto">
          <h2 class="font-heading text-3xl md:text-4xl font-semibold text-green-800 text-center mb-10">
            Send Us a Message or Book a Table
          </h2>
          <form @submit.prevent="handleSubmit" class="bg-white p-8 md:p-10 rounded-xl shadow-2xl space-y-6">
            <div class="grid sm:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                <Input
                  type="text"
                  id="name"
                  v-model="name"
                  required
                  placeholder="e.g. John Doe"
                />
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                <Input
                  type="email"
                  id="email"
                  v-model="email"
                  required
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700 mb-1.5">Phone Number <span class="text-xs text-gray-500">(Optional)</span></label>
              <Input
                type="tel"
                id="phone"
                v-model="phone"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <div>
              <label for="subject" class="block text-sm font-medium text-gray-700 mb-1.5">Subject / Type</label>
               <Select
                  id="subject"
                  v-model="subject"
                  :items="subjectOptions"
                  placeholder="Select a subject"
                />
            </div>
            
            <!-- Conditional fields for reservation/event -->
            <template v-if="subject === 'reservation' || subject === 'event'">
              <div class="grid sm:grid-cols-2 gap-6">
                <div>
                    <label for="partySize" class="block text-sm font-medium text-gray-700 mb-1.5">Number of Guests</label>
                    <Input
                      type="number"
                      id="partySize"
                      v-model.number="partySize"
                      min="1"
                      placeholder="e.g. 4"
                    />
                </div>
                 <div>
                    <label for="bookingDate" class="block text-sm font-medium text-gray-700 mb-1.5">Preferred Date</label>
                    <Input
                        type="date"
                        id="bookingDate"
                        v-model="bookingDate"
                        :min="todayDate"
                    />
                </div>
              </div>
              <div>
                  <label for="bookingTime" class="block text-sm font-medium text-gray-700 mb-1.5">Preferred Time</label>
                  <Input
                      type="time"
                      id="bookingTime"
                      v-model="bookingTime"
                  />
              </div>
            </template>

            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
              <Textarea
                id="message"
                v-model="message"
                required
                rows="5"
                placeholder="Write your message or additional booking details here..."
              />
            </div>

            <div>
              <label for="howHeard" class="block text-sm font-medium text-gray-700 mb-1.5">How did you hear about us? <span class="text-xs text-gray-500">(Optional)</span></label>
              <Select
                id="howHeard"
                v-model="howHeard"
                :items="howHeardOptions"
                placeholder="Select an option"
              />
            </div>
            
            <p v-if="contactStore.error" class="text-sm text-red-600 mt-2 text-center">{{ contactStore.error }}</p>

            <div class="pt-4">
              <Button
                type="submit"
                class="w-full text-lg"
                variant="default"
                size="lg"
                :disabled="contactStore.isLoading"
              >
                <SendIcon v-if="!contactStore.isLoading" class="h-5 w-5 mr-2.5" />
                <LoaderCircleIcon v-if="contactStore.isLoading" class="h-5 w-5 mr-2.5 animate-spin" />
                {{ contactStore.isLoading ? 'Sending...' : 'Send Message / Book Table' }}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.font-heading {
  font-family: 'Nyala', serif; /* Ensure this font is configured */
}
/* Styles for native date/time input placeholder text (if needed and supported) */
input[type="date"]:not(:valid):before,
input[type="time"]:not(:valid):before {
  content: attr(placeholder);
  color: #9ca3af; /* Tailwind gray-400 */
}
</style>
