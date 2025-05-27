<template>
  <div class="flex flex-col min-h-screen bg-gray-50">
    <Header />
    <main class="flex-grow pt-16"> {/* Added pt-16 to account for fixed header height */}
      <router-view />
    </main>
    <Footer />
    {/* Toaster equivalent will be handled in a later step */}
  </div>
</template>

<script setup lang="ts">
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';
// Global styles are typically imported in main.ts or index.html (via <link>)
// Or can be placed in a <style> tag here if not global
</script>

<style>
/* If you have global styles that were in App.css or similar, they can be placed here,
   or preferably in client/src/index.css if they are truly global.
   For now, assuming index.css handles basic body/html styling.
*/

/* Example of a global style that might have been in an App.css */
body {
  font-family: 'Inter', sans-serif; /* Example font */
  @apply antialiased;
}

/* Ensure main content area can grow and push footer down */
.flex-grow {
  flex-grow: 1;
}
</style>
