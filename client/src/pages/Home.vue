<template>
  <div class="bg-gray-50 text-gray-800">
    <!-- Hero Section -->
    <section class="relative bg-cover bg-center text-white" :style="{ backgroundImage: `url(${heroBackgroundPath})` }">
      <div class="absolute inset-0 bg-black/60"></div>
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10 text-center">
        <h1 class="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Fresh Food, Authentic Ethiopian Experience
        </h1>
        <p class="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
          Discover the rich tapestry of Ethiopian flavors, crafted with love and the freshest ingredients. Join us for a memorable dining adventure.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <router-link
            to="/menu"
            class="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-semibold px-8 py-3 rounded-lg text-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black"
          >
            View Our Menu
          </router-link>
          <router-link
            to="/contact#booking-form"
            class="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-green-900 font-semibold px-8 py-3 rounded-lg text-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black"
          >
            Book a Table
          </router-link>
        </div>
        <div class="mt-12 flex items-center justify-center space-x-6 text-gray-300">
          <div class="flex items-center">
            <ClockIcon class="h-5 w-5 mr-2 text-yellow-400" />
            <span>Open Daily: 11 AM - 10 PM</span>
          </div>
          <div class="flex items-center">
            <MapPinIcon class="h-5 w-5 mr-2 text-yellow-400" />
            <span>123 Addis Ababa St, Flavor Town</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Welcome Section -->
    <section class="py-16 md:py-24 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="font-heading text-3xl md:text-4xl font-semibold text-green-800 mb-6">
              Welcome to Harambe Restaurant
            </h2>
            <p class="text-lg text-gray-700 mb-4 leading-relaxed">
              Step into a world of vibrant Ethiopian culture and cuisine. At Harambe, we pride ourselves on serving authentic dishes prepared with generations of tradition and the freshest local ingredients.
            </p>
            <p class="text-gray-700 mb-6 leading-relaxed">
              Our name, "Harambe," signifies unity and working together – a spirit we bring to our kitchen and our community. We invite you to share in the communal joy of Ethiopian dining.
            </p>
            <router-link
              to="/about"
              class="inline-flex items-center bg-green-700 hover:bg-green-800 text-white font-medium px-6 py-3 rounded-lg shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Learn More About Us
              <ArrowRightIcon class="ml-2 h-5 w-5" />
            </router-link>
          </div>
          <div class="rounded-lg overflow-hidden shadow-xl">
            <img :src="restaurantInteriorPath" alt="Warm and inviting interior of Harambe Restaurant" class="w-full h-auto object-cover">
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="py-16 md:py-24 bg-yellow-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="font-heading text-3xl md:text-4xl font-semibold text-green-800 text-center mb-12">
          Why Choose Harambe?
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="feature in features" :key="feature.title" class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-center justify-center bg-yellow-400 text-green-900 rounded-full h-16 w-16 mb-6 mx-auto">
              <component :is="feature.icon" class="h-8 w-8" />
            </div>
            <h3 class="text-xl font-semibold text-green-800 mb-3 text-center">{{ feature.title }}</h3>
            <p class="text-gray-600 text-center leading-relaxed">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-16 md:py-24 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="font-heading text-3xl md:text-4xl font-semibold text-green-800 text-center mb-12">
          What Our Customers Say
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="testimonial in testimonials" :key="testimonial.name" class="bg-gray-50 p-6 rounded-lg shadow-md">
            <div class="flex items-center mb-4">
              <img :src="testimonial.avatar" :alt="testimonial.name" class="h-12 w-12 rounded-full mr-4 object-cover" />
              <div>
                <h4 class="font-semibold text-green-700">{{ testimonial.name }}</h4>
                <div class="flex text-yellow-500">
                  <StarIcon v-for="i in 5" :key="i" class="h-5 w-5" />
                </div>
              </div>
            </div>
            <p class="text-gray-600 italic">"{{ testimonial.quote }}"</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="py-16 md:py-24 bg-green-800 text-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="font-heading text-3xl md:text-4xl font-bold mb-6">
          Ready to Experience Harambe?
        </h2>
        <p class="text-lg text-green-100 mb-10 max-w-xl mx-auto">
          Join us for an unforgettable meal, or let us cater your next event. We're excited to share our passion for Ethiopian food with you.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <router-link
            to="/menu"
            class="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-semibold px-8 py-3 rounded-lg text-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-green-800"
          >
            Explore Full Menu
          </router-link>
          <router-link
            to="/contact"
            class="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-green-900 font-semibold px-8 py-3 rounded-lg text-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-green-800"
          >
            Make a Reservation
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ClockIcon, MapPinIcon, LeafIcon, UtensilsIcon, WineIcon, ArrowRightIcon, StarIcon } from 'lucide-vue-next';

// Image imports - assuming Vite handles these paths correctly.
// In a real app, ensure these assets are in the public directory or handled by Vite's asset handling.
// import heroBackgroundPath from '@/assets/images/hero-background.jpg'; // Commented out - file likely missing
// import restaurantInteriorPath from '@/assets/images/restaurant-interior.jpg'; // Commented out - file likely missing
// import customer1Avatar from '@/assets/images/avatars/customer1.jpg'; // Commented out - file likely missing
// import customer2Avatar from '@/assets/images/avatars/customer2.jpg'; // Commented out - file likely missing
// import customer3Avatar from '@/assets/images/avatars/customer3.jpg'; // Commented out - file likely missing

// Using a placeholder for now
const heroBackgroundPath = ''; // Placeholder
const restaurantInteriorPath = ''; // Placeholder
const customer1Avatar = ''; // Placeholder
const customer2Avatar = ''; // Placeholder
const customer3Avatar = ''; // Placeholder


const features = [
  {
    icon: LeafIcon,
    title: 'Authentic Ingredients',
    description: 'We use traditional spices and fresh, locally-sourced produce to create genuine Ethiopian flavors.',
  },
  {
    icon: UtensilsIcon,
    title: 'Traditional Recipes',
    description: 'Our chefs follow age-old recipes passed down through generations, ensuring an authentic taste.',
  },
  {
    icon: WineIcon, // Placeholder, consider ThumbsUpIcon or SmileIcon if more appropriate
    title: 'Warm Hospitality',
    description: 'Experience the renowned Ethiopian hospitality in a cozy and welcoming atmosphere.',
  },
];

const testimonials = [
  {
    name: 'Abebe Bikila',
    avatar: customer1Avatar,
    quote: 'The Doro Wat was incredible! Tasted just like my grandmother used to make. I felt right at home.',
  },
  {
    name: 'Fatuma Roba',
    avatar: customer2Avatar,
    quote: 'A fantastic experience from start to finish. The staff were so friendly and the vegetarian platter was to die for!',
  },
  {
    name: 'Haile Gebrselassie',
    avatar: customer3Avatar,
    quote: 'Harambe is a gem! The injera is always fresh and the ambiance is perfect for a family dinner or a night out with friends.',
  },
];

// SEO and other meta information would be handled differently in Vue,
// possibly with a library like vue-meta or via router hooks for dynamic titles.
</script>

<style scoped>
/* Scoped styles for Home.vue - Tailwind utility classes are preferred */
.font-heading {
  font-family: 'Nyala', serif; /* Example of a custom font, ensure it's configured in Tailwind/CSS */
}
</style>
