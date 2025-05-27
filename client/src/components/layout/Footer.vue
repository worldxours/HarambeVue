<template>
  <footer class="bg-green-900 text-green-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <!-- Logo and About -->
        <div class="md:col-span-1 lg:col-span-1">
          <router-link to="/" class="inline-block mb-4">
            <img :src="harambeLogoPath" alt="Harambe Restaurant" class="h-16 w-auto" />
          </router-link>
          <p class="text-sm text-green-200 leading-relaxed">
            Experience the rich flavors of Ethiopia. Authentic cuisine, warm hospitality.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold text-yellow-400 mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li><router-link to="/menu" class="hover:text-yellow-300 transition-colors">Menu</router-link></li>
            <li><router-link to="/about" class="hover:text-yellow-300 transition-colors">About Us</router-link></li>
            <li><router-link to="/events" class="hover:text-yellow-300 transition-colors">Special Events</router-link></li>
            <li><router-link to="/contact" class="hover:text-yellow-300 transition-colors">Contact</router-link></li>
            <li><router-link to="/gallery" class="hover:text-yellow-300 transition-colors">Gallery</router-link></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-semibold text-yellow-400 mb-4">Contact Us</h3>
          <ul class="space-y-3 text-sm">
            <li class="flex items-start">
              <MapPinIcon class="h-5 w-5 mr-3 mt-0.5 text-yellow-400 flex-shrink-0" />
              <span class="text-green-100">123 Addis Ababa St, Flavor Town, ET</span>
            </li>
            <li class="flex items-center">
              <PhoneIcon class="h-5 w-5 mr-3 text-yellow-400 flex-shrink-0" />
              <a href="tel:+251912345678" class="hover:text-yellow-300 transition-colors text-green-100">+251 912 345 678</a>
            </li>
            <li class="flex items-center">
              <MailIcon class="h-5 w-5 mr-3 text-yellow-400 flex-shrink-0" />
              <a href="mailto:info@harambe.com" class="hover:text-yellow-300 transition-colors text-green-100">info@harambe.com</a>
            </li>
            <li class="flex items-center">
              <ClockIcon class="h-5 w-5 mr-3 text-yellow-400 flex-shrink-0" />
              <span class="text-green-100">Open Daily: 11 AM - 10 PM</span>
            </li>
          </ul>
        </div>

        <!-- Newsletter Subscription -->
        <div>
          <h3 class="text-lg font-semibold text-yellow-400 mb-4">Stay Updated</h3>
          <p class="text-sm text-green-200 mb-3">Get the latest news and special offers.</p>
          <form @submit.prevent="handleNewsletterSubmit" class="flex">
            <input
              type="email"
              v-model="email"
              placeholder="Your email address"
              required
              class="w-full px-4 py-2 text-gray-900 bg-green-50 border border-transparent rounded-l-md focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-colors"
            />
            <button
              type="submit"
              class="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-semibold px-4 py-2 rounded-r-md transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-green-900"
            >
              <SendHorizonalIcon class="h-5 w-5" />
              <span class="sr-only">Subscribe</span>
            </button>
          </form>
           <p v-if="newsletterMessage" class="mt-2 text-sm" :class="newsletterError ? 'text-red-400' : 'text-yellow-300'">{{ newsletterMessage }}</p>
        </div>
      </div>

      <!-- Social Media Links -->
      <div class="mt-10 pt-8 border-t border-green-700 flex flex-col sm:flex-row justify-between items-center">
        <div class="flex space-x-4 mb-4 sm:mb-0">
          <a href="#" target="_blank" rel="noopener noreferrer" class="text-green-300 hover:text-yellow-400 transition-colors">
            <FacebookIcon class="h-6 w-6" />
            <span class="sr-only">Facebook</span>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" class="text-green-300 hover:text-yellow-400 transition-colors">
            <InstagramIcon class="h-6 w-6" />
            <span class="sr-only">Instagram</span>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" class="text-green-300 hover:text-yellow-400 transition-colors">
            <TwitterIcon class="h-6 w-6" />
            <span class="sr-only">Twitter</span>
          </a>
        </div>
        <p class="text-sm text-green-300">&copy; {{ new Date().getFullYear() }} Harambe Ethiopian Restaurant. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { FacebookIcon, InstagramIcon, TwitterIcon, MapPinIcon, PhoneIcon, MailIcon, ClockIcon, SendHorizonalIcon } from 'lucide-vue-next';
import harambeLogoPath from '@/assets/harambe-logo-transparent.png';

const email = ref('');
const newsletterMessage = ref('');
const newsletterError = ref(false);

const handleNewsletterSubmit = async () => {
  // Basic client-side validation
  if (!email.value || !email.value.includes('@')) {
    newsletterMessage.value = 'Please enter a valid email address.';
    newsletterError.value = true;
    return;
  }

  try {
    // Placeholder for actual API call
    // const response = await fetch('/api/newsletter-subscribe', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email: email.value }),
    // });
    // if (!response.ok) throw new Error('Subscription failed');
    // const data = await response.json();

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Subscribing with:', email.value);


    newsletterMessage.value = 'Thank you for subscribing!';
    newsletterError.value = false;
    email.value = ''; // Clear input
  } catch (error) {
    newsletterMessage.value = 'Subscription failed. Please try again later.';
    newsletterError.value = true;
    console.error('Newsletter subscription error:', error);
  } finally {
    setTimeout(() => {
        newsletterMessage.value = '';
        newsletterError.value = false;
    }, 5000); // Clear message after 5 seconds
  }
};
</script>

<style scoped>
/* Scoped styles if any - Tailwind utility classes are preferred */
.container {
  max-width: 1280px; /* Or your preferred container width */
}
</style>
