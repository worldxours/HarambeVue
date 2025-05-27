<template>
  <header :class="['sticky top-0 z-50 w-full transition-all duration-300', isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white shadow-sm']">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <router-link to="/" class="flex items-center space-x-2">
            <img class="h-10 w-auto" :src="harambeLogoPath" alt="Harambe Restaurant" />
            <span class="font-bold text-xl text-green-800">Harambe</span>
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-4">
          <router-link
            v-for="item in navigation"
            :key="item.name"
            :to="item.href"
            :class="[
              'px-3 py-2 rounded-md text-sm font-medium',
              isActive(item.href) ? 'bg-yellow-400 text-green-900' : 'text-gray-700 hover:bg-yellow-100 hover:text-green-800',
              'transition-colors duration-150'
            ]"
          >
            {{ item.name }}
          </router-link>
        </nav>

        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center">
          <button
            @click="isOpen = true"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-800 hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400"
          >
            <span class="sr-only">Open main menu</span>
            <MenuIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu (Sheet equivalent) -->
    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="isOpen = false" class="relative z-50 md:hidden">
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black/30" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div class="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as="template"
              enter="transition ease-in-out duration-300 transform"
              enter-from="-translate-x-full"
              enter-to="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leave-from="translate-x-0"
              leave-to="-translate-x-full"
            >
              <DialogPanel class="fixed inset-y-0 left-0 w-full max-w-xs sm:max-w-sm bg-white p-6 shadow-xl ring-1 ring-gray-900/10 transform transition-all">
                <div class="flex items-center justify-between mb-6">
                  <router-link to="/" class="flex items-center space-x-2" @click="isOpen = false">
                    <img class="h-10 w-auto" :src="harambeLogoPath" alt="Harambe Restaurant" />
                     <span class="font-bold text-xl text-green-800">Harambe</span>
                  </router-link>
                  <button
                    type="button"
                    class="-m-2.5 p-2.5 text-gray-700 hover:text-green-800"
                    @click="isOpen = false"
                  >
                    <span class="sr-only">Close menu</span>
                    <XIcon class="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <nav class="space-y-1">
                  <router-link
                    v-for="item in navigation"
                    :key="item.name"
                    :to="item.href"
                    @click="isOpen = false"
                    :class="[
                      'block px-3 py-2 rounded-md text-base font-medium',
                      isActive(item.href) ? 'bg-yellow-400 text-green-900' : 'text-gray-700 hover:bg-yellow-100 hover:text-green-800',
                      'transition-colors duration-150'
                    ]"
                  >
                    {{ item.name }}
                  </router-link>
                </nav>
                 <div class="mt-6 pt-6 border-t border-gray-200">
                    <router-link
                      to="/contact"
                      @click="isOpen = false"
                      class="block w-full px-4 py-2 text-center text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 transition-colors duration-150"
                    >
                      Contact Us
                    </router-link>
                  </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { MenuIcon, XIcon } from 'lucide-vue-next';
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue';
import harambeLogoPath from '@/assets/harambe-logo-transparent.png';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Menu', href: '/menu' },
  { name: 'About Us', href: '/about' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Events', href: '/events' },
  { name: 'Contact', href: '/contact' },
];

const isScrolled = ref(false);
const isOpen = ref(false);
const route = useRoute();

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const isActive = (path: string) => {
  // For home, exact match. For others, startsWith to handle sub-routes if any.
  return path === '/' ? route.path === path : route.path.startsWith(path);
};
</script>

<style scoped>
/* Add any component-specific styles here if needed, Tailwind classes are preferred */
.container {
  max-width: 1280px; /* Or your preferred container width */
}

/* Custom active link style for desktop if needed beyond Tailwind classes */
.router-link-active.router-link-exact-active { /* More specific for exact matches if needed */
  /* Example: border-bottom: 2px solid theme('colors.yellow.500'); */
}
</style>
