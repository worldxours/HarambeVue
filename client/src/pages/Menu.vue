<template>
  <div class="bg-gray-50 text-gray-800">
    <!-- Page Header Section -->
    <section class="bg-yellow-500 text-green-900 py-12 md:py-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="font-heading text-4xl md:text-5xl font-bold">Our Menu</h1>
        <p class="text-lg md:text-xl text-green-800 mt-4 max-w-2xl mx-auto">
          Explore a wide variety of authentic Ethiopian dishes, from savory wots to fresh injera.
        </p>
      </div>
    </section>

    <!-- Menu Section -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Category Filters -->
        <div class="mb-12 flex flex-wrap justify-center gap-3">
          <Button
            @click="setActiveCategory('all')"
            :variant="activeCategory === 'all' ? 'default' : 'outline'"
            class="px-6 py-3 text-sm md:text-base"
            :class="{'bg-green-700 hover:bg-green-800 text-white shadow-lg': activeCategory === 'all', 'bg-white text-green-700 border border-green-200 hover:bg-green-50 hover:shadow-md': activeCategory !== 'all'}"
          >
            All Dishes
          </Button>
          <Button
            v-for="category in uniqueCategories"
            :key="category.id"
            @click="setActiveCategory(category.id)"
            :variant="activeCategory === category.id ? 'default' : 'outline'"
            class="px-6 py-3 text-sm md:text-base"
            :class="{'bg-green-700 hover:bg-green-800 text-white shadow-lg': activeCategory === category.id, 'bg-white text-green-700 border border-green-200 hover:bg-green-50 hover:shadow-md': activeCategory !== category.id}"
          >
            {{ category.name }}
          </Button>
        </div>

        <!-- Menu Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          <div
            v-for="item in filteredItems"
            :key="item.id"
            class="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 flex flex-col"
          >
            <div class="relative">
              <img :src="item.image" :alt="item.name" class="w-full h-64 object-cover">
              <Badge
                v-if="item.isSpecial"
                variant="default"
                class="absolute top-3 right-3 bg-yellow-400 text-green-900 shadow-sm"
              >
                Chef's Special
              </Badge>
              <Badge
                v-if="item.isVegetarian"
                variant="default"
                class="absolute top-3 left-3 bg-green-600 text-white shadow-sm flex items-center"
              >
                <LeafIcon class="h-4 w-4 mr-1.5" /> Vegetarian
              </Badge>
            </div>
            <div class="p-6 flex flex-col flex-grow">
              <h3 class="text-2xl font-semibold text-green-800 mb-2 font-heading">{{ item.name }}</h3>
              <p class="text-gray-600 text-sm mb-4 leading-relaxed flex-grow">{{ item.description }}</p>
              <div class="flex justify-between items-center mb-4">
                <span class="text-2xl font-bold text-yellow-600">${{ item.price.toFixed(2) }}</span>
                <Badge
                  :variant="item.spiceLevel === 'Hot' ? 'destructive' : (item.spiceLevel === 'Medium' ? 'secondary' : 'default')"
                  class="text-xs font-medium"
                  :class="{
                    'bg-red-100 text-red-700 border-transparent': item.spiceLevel === 'Hot',
                    'bg-yellow-100 text-yellow-700 border-transparent': item.spiceLevel === 'Medium',
                    'bg-green-100 text-green-700 border-transparent': item.spiceLevel === 'Mild',
                  }"
                >
                  {{ item.spiceLevel }}
                </Badge>
              </div>
              <Button
                @click="handleOrder(item)"
                variant="default"
                class="w-full bg-green-700 hover:bg-green-800 text-white"
              >
                <ShoppingCartIcon class="h-5 w-5 mr-2" />
                Add to Order
              </Button>
            </div>
          </div>
        </div>

        <div v-if="filteredItems.length === 0" class="text-center py-12">
          <SearchXIcon class="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <p class="text-xl text-gray-500">No dishes found for "{{ activeCategoryName }}".</p>
          <p class="text-gray-400 mt-2">Try selecting another category or checking back later!</p>
        </div>
      </div>
    </section>

    <!-- Dietary Information Section -->
    <section class="py-16 md:py-24 bg-green-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="font-heading text-3xl md:text-4xl font-semibold text-green-800 text-center mb-10">
          Dietary Options & Information
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md flex items-start">
            <LeafIcon class="h-8 w-8 text-green-600 mr-4 mt-1 flex-shrink-0" />
            <div>
              <h3 class="text-xl font-semibold text-green-700 mb-2">Vegetarian & Vegan</h3>
              <p class="text-gray-600 text-sm leading-relaxed">
                We offer a wide array of delicious vegetarian and vegan dishes, clearly marked on our menu. Our Beyaynetu (vegetarian platter) is a house favorite!
              </p>
            </div>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md flex items-start">
            <WheatOffIcon class="h-8 w-8 text-yellow-600 mr-4 mt-1 flex-shrink-0" />
            <div>
              <h3 class="text-xl font-semibold text-green-700 mb-2">Gluten-Free Options</h3>
              <p class="text-gray-600 text-sm leading-relaxed">
                Most of our wots (stews) are naturally gluten-free. While traditional injera is made with teff flour, please inform your server about any gluten sensitivities for guidance.
              </p>
            </div>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md flex items-start">
            <InfoIcon class="h-8 w-8 text-blue-600 mr-4 mt-1 flex-shrink-0" />
            <div>
              <h3 class="text-xl font-semibold text-green-700 mb-2">Allergen Awareness</h3>
              <p class="text-gray-600 text-sm leading-relaxed">
                Your safety is important. Please speak to our staff about any allergies or dietary restrictions you may have. We'll do our best to accommodate your needs.
              </p>
            </div>
          </div>
        </div>
         <p class="text-center mt-10 text-gray-700">
          For detailed ingredient lists or specific concerns, please don't hesitate to <router-link to="/contact" class="text-green-700 hover:text-yellow-600 font-medium underline">contact us</router-link>.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { menuData, MenuCategory, MenuItem } from '@/data/menuData'; // Assuming path is correct
import { LeafIcon, ShoppingCartIcon, SearchXIcon, WheatOffIcon, InfoIcon } from 'lucide-vue-next';
import Button from '@/components/ui/Button.vue';
import Badge from '@/components/ui/Badge.vue';
import { useToast } from '@/composables/useToast';

const activeCategory = ref<string>('all'); // 'all' or category id
const { toast } = useToast();

const uniqueCategories = computed(() => {
  const categories = new Map<string, MenuCategory>();
  menuData.forEach(item => {
    if (!categories.has(item.category.id)) {
      categories.set(item.category.id, item.category);
    }
  });
  return Array.from(categories.values());
});

const setActiveCategory = (categoryId: string) => {
  activeCategory.value = categoryId;
};

const filteredItems = computed(() => {
  if (activeCategory.value === 'all') {
    return menuData;
  }
  return menuData.filter(item => item.category.id === activeCategory.value);
});

const activeCategoryName = computed(() => {
  if (activeCategory.value === 'all') return 'All Dishes';
  const foundCategory = uniqueCategories.value.find(cat => cat.id === activeCategory.value);
  return foundCategory ? foundCategory.name : '';
});

const handleOrder = (item: MenuItem) => {
  // In a real app, this would likely add to a cart (e.g., using Pinia store)
  console.log('Ordering item:', item.name);
  toast({
    title: "Added to Order!",
    description: `${item.name} has been added to your (simulated) order.`,
    // variant: 'default' // or 'success' if you map it in useToast
  });
};

// SEO meta data would be handled via router or a dedicated Vue meta plugin.
</script>

<style scoped>
.font-heading {
  font-family: 'Nyala', serif; /* Ensure this font is configured */
}
/* Additional specific styles if needed */
</style>
