<template>
  <div class="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] bg-gray-100 text-gray-800 px-4">
    <div class="bg-white p-10 rounded-xl shadow-2xl max-w-md w-full text-center">
      <div class="mb-6">
        <AlertCircleIcon class="h-20 w-20 text-red-500 mx-auto animate-pulse" />
      </div>
      <h1 class="text-5xl font-bold text-red-600 mb-4 font-heading">404</h1>
      <h2 class="text-2xl font-semibold text-gray-700 mb-3">Page Not Found</h2>
      <p class="text-gray-600 mb-8">
        Oops! The page you're looking for doesn't seem to exist. It might have been moved, deleted, or you might have mistyped the URL.
      </p>
      <div class="space-y-4">
        <router-link
          to="/"
          class="inline-flex items-center justify-center w-full px-6 py-3 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-lg shadow-md transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          <HomeIcon class="h-5 w-5 mr-2" />
          Go to Homepage
        </router-link>
        <button
          @click="goBack"
          class="inline-flex items-center justify-center w-full px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-green-900 font-semibold rounded-lg shadow-md transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
        >
          <ArrowLeftIcon class="h-5 w-5 mr-2" />
          Go Back
        </button>
      </div>
      <p class="mt-10 text-sm text-gray-500">
        If you believe this is an error, please
        <router-link to="/contact" class="text-green-700 hover:text-yellow-600 underline">contact support</router-link>.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { AlertCircleIcon, HomeIcon, ArrowLeftIcon } from 'lucide-vue-next';

const router = useRouter();

const goBack = () => {
  router.go(-1);
};

// SEO meta data would be handled via router or a dedicated Vue meta plugin.
// e.g., using useHead from @vueuse/head or similar
// useHead({
//   title: 'Page Not Found - Harambe Restaurant',
//   meta: [
//     { name: 'description', content: 'The page you are looking for could not be found.' }
//   ],
// });
</script>

<style scoped>
.font-heading {
  font-family: 'Nyala', serif; /* Ensure this font is configured */
}
/* Add any specific styles for the 404 page here */
</style>
