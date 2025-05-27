<template>
  <div class="bg-gray-50 text-gray-800">
    <!-- Page Header Section -->
    <section class="bg-green-800 text-white py-12 md:py-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="font-heading text-4xl md:text-5xl font-bold">Gallery</h1>
        <p class="text-lg md:text-xl text-green-100 mt-4 max-w-2xl mx-auto">
          A glimpse into the vibrant atmosphere and delectable dishes at Harambe Restaurant.
        </p>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Category Filters -->
        <div class="mb-12 flex flex-wrap justify-center gap-3">
          <button
            @click="setActiveCategory('all')"
            :class="['px-6 py-3 rounded-full font-medium text-sm md:text-base transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2',
                     activeCategory === 'all' ? 'bg-yellow-500 text-green-900 shadow-lg hover:bg-yellow-600' : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100 hover:shadow-md']"
          >
            All Images
          </button>
          <button
            v-for="category in uniqueImageCategories"
            :key="category"
            @click="setActiveCategory(category)"
            :class="['px-6 py-3 rounded-full font-medium text-sm md:text-base transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2',
                     activeCategory === category ? 'bg-yellow-500 text-green-900 shadow-lg hover:bg-yellow-600' : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100 hover:shadow-md']"
          >
            {{ category }}
          </button>
        </div>

        <!-- Image Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div
            v-for="(image, index) in filteredImages"
            :key="image.id"
            class="group relative aspect-square rounded-lg overflow-hidden shadow-lg cursor-pointer"
            @click="openLightbox(index)"
          >
            <img
              :src="image.src"
              :alt="image.alt"
              class="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <ZoomInIcon class="h-12 w-12 text-white" />
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                <p class="text-white text-sm font-semibold truncate">{{ image.alt }}</p>
                <p class="text-yellow-300 text-xs">{{ image.category }}</p>
            </div>
          </div>
        </div>

         <div v-if="filteredImages.length === 0" class="text-center py-12">
          <ImageIcon class="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <p class="text-xl text-gray-500">No images found for "{{ activeCategoryName }}".</p>
          <p class="text-gray-400 mt-2">Try selecting another category!</p>
        </div>
      </div>
    </section>

    <!-- Lightbox Modal -->
    <TransitionRoot appear :show="isLightboxOpen" as="template">
      <Dialog as="div" @close="closeLightbox" class="relative z-50">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black/75" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div class="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel class="w-full max-w-3xl transform overflow-hidden rounded-lg bg-white p-4 text-left align-middle shadow-xl transition-all">
                <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900 sr-only">
                  Image Lightbox
                </DialogTitle>
                 <button
                    @click="closeLightbox"
                    class="absolute top-3 right-3 z-10 p-2 bg-white/50 hover:bg-white/80 rounded-full text-gray-700 hover:text-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  >
                    <XIcon class="h-6 w-6" />
                    <span class="sr-only">Close lightbox</span>
                  </button>

                <div v-if="currentImage" class="relative">
                  <img
                    :src="currentImage.src"
                    :alt="currentImage.alt"
                    class="w-full h-auto max-h-[80vh] object-contain rounded-md"
                  />
                   <button
                    @click="prevImage"
                    :disabled="currentIndex === 0"
                    class="absolute left-2 top-1/2 -translate-y-1/2 p-3 bg-white/60 hover:bg-white/90 rounded-full text-gray-800 hover:text-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeftIcon class="h-7 w-7" />
                    <span class="sr-only">Previous image</span>
                  </button>
                  <button
                    @click="nextImage"
                    :disabled="currentIndex === filteredImages.length - 1"
                    class="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-white/60 hover:bg-white/90 rounded-full text-gray-800 hover:text-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronRightIcon class="h-7 w-7" />
                    <span class="sr-only">Next image</span>
                  </button>
                </div>
                <div v-if="currentImage" class="mt-3 text-center">
                  <p class="text-sm text-gray-700">{{ currentImage.alt }}</p>
                  <p class="text-xs text-yellow-600">{{ currentImage.category }}</p>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { galleryData, GalleryImage } from '@/data/galleryData'; // Assuming path is correct
import { ZoomInIcon, XIcon, ChevronLeftIcon, ChevronRightIcon, ImageIcon } from 'lucide-vue-next';
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';

const activeCategory = ref<string>('all'); // 'all' or category name

const uniqueImageCategories = computed(() => {
  const categories = new Set<string>();
  galleryData.forEach(item => categories.add(item.category));
  return Array.from(categories);
});

const setActiveCategory = (category: string) => {
  activeCategory.value = category;
};

const filteredImages = computed(() => {
  if (activeCategory.value === 'all') {
    return galleryData;
  }
  return galleryData.filter(item => item.category === activeCategory.value);
});

const activeCategoryName = computed(() => {
  return activeCategory.value === 'all' ? 'All Images' : activeCategory.value;
});

const isLightboxOpen = ref(false);
const currentIndex = ref(0);

const currentImage = computed<GalleryImage | null>(() => {
  return filteredImages.value[currentIndex.value] || null;
});

const openLightbox = (index: number) => {
  currentIndex.value = index;
  isLightboxOpen.value = true;
};

const closeLightbox = () => {
  isLightboxOpen.value = false;
};

const nextImage = () => {
  if (currentIndex.value < filteredImages.value.length - 1) {
    currentIndex.value++;
  }
};

const prevImage = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};

// SEO meta data would be handled via router or a dedicated Vue meta plugin.
</script>

<style scoped>
.font-heading {
  font-family: 'Nyala', serif; /* Ensure this font is configured */
}
/* Additional specific styles if needed */
</style>
