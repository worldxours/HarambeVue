<template>
  <div class="bg-gray-50 text-gray-800">
    <!-- Page Header Section -->
    <section class="bg-green-800 text-white py-12 md:py-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="font-heading text-4xl md:text-5xl font-bold">About Harambe Restaurant</h1>
        <p class="text-lg md:text-xl text-green-100 mt-4 max-w-2xl mx-auto">
          Discover our story, our passion for Ethiopian cuisine, and our commitment to the community.
        </p>
      </div>
    </section>

    <!-- Our Story Section -->
    <section class="py-16 md:py-24 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="rounded-lg overflow-hidden shadow-xl">
            <img :src="ourStoryImagePath" alt="Founders of Harambe Restaurant" class="w-full h-auto object-cover">
          </div>
          <div>
            <h2 class="font-heading text-3xl md:text-4xl font-semibold text-green-800 mb-6">
              Our Story: A Culinary Journey
            </h2>
            <p class="text-lg text-gray-700 mb-4 leading-relaxed">
              Harambe Restaurant was born from a dream to share the rich culinary heritage of Ethiopia with our community. Founded by [Founder's Name(s)], who immigrated from Addis Ababa, our restaurant is a celebration of authentic flavors, traditional cooking methods, and the vibrant culture of our homeland.
            </p>
            <p class="text-gray-700 mb-4 leading-relaxed">
              The name "Harambe," meaning "all pull together" in Swahili, reflects our philosophy of unity and collective effort. While the term is more common in East Africa, its spirit resonates with the Ethiopian tradition of communal dining and shared experiences. We aim to create a space where people can come together, share delicious food, and connect with one another.
            </p>
            <p class="text-gray-700 leading-relaxed">
              From hand-picked spices to meticulously prepared dishes, every meal at Harambe is a testament to our dedication to quality and authenticity. We invite you to join our family and experience the warmth of Ethiopian hospitality.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Mission & Values Section -->
    <section class="py-16 md:py-24 bg-yellow-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="font-heading text-3xl md:text-4xl font-semibold text-green-800">
            Our Mission & Values
          </h2>
          <p class="text-lg text-gray-600 mt-4 max-w-xl mx-auto">
            Guiding principles that shape every dish and every interaction at Harambe.
          </p>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="value in values" :key="value.title" class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <div class="flex items-center justify-center bg-yellow-400 text-green-900 rounded-full h-16 w-16 mb-6 mx-auto">
              <component :is="value.icon" class="h-8 w-8" />
            </div>
            <h3 class="text-xl font-semibold text-green-800 mb-3">{{ value.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Meet the Team Section (Optional) -->
    <section class="py-16 md:py-24 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="font-heading text-3xl md:text-4xl font-semibold text-green-800 text-center mb-12">
          Meet Our Passionate Team
        </h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="member in teamMembers" :key="member.name" class="text-center">
            <div class="relative inline-block mb-4">
                <img :src="member.image" :alt="member.name" class="h-40 w-40 rounded-full object-cover shadow-md mx-auto">
                 <div class="absolute inset-0 rounded-full ring-2 ring-yellow-400 ring-offset-2 ring-offset-white"></div>
            </div>
            <h3 class="text-xl font-semibold text-green-700">{{ member.name }}</h3>
            <p class="text-yellow-600 font-medium">{{ member.role }}</p>
            <p class="text-gray-600 mt-2 text-sm leading-relaxed px-4">{{ member.bio }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Community Involvement Section -->
     <section class="py-16 md:py-24 bg-green-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="font-heading text-3xl md:text-4xl font-semibold text-green-800 mb-6">
              Connecting with Our Community
            </h2>
            <p class="text-lg text-gray-700 mb-4 leading-relaxed">
              At Harambe, we believe in giving back to the community that supports us. We actively participate in local events, source ingredients from nearby farms when possible, and strive to create a positive impact beyond our restaurant walls.
            </p>
            <p class="text-gray-700 mb-6 leading-relaxed">
             We are proud to partner with [Local Charity/Organization Name] to [describe initiative, e.g., provide meals, support local artists]. Our commitment to "Harambe" extends to fostering a strong, vibrant, and supportive neighborhood.
            </p>
             <router-link
              to="/contact"
              class="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-green-900 font-semibold px-6 py-3 rounded-lg shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
            >
              Get in Touch
              <SendIcon class="ml-2 h-5 w-5" />
            </router-link>
          </div>
          <div class="rounded-lg overflow-hidden shadow-xl">
            <img :src="communityImagePath" alt="Harambe team volunteering in the community" class="w-full h-auto object-cover">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { HeartIcon, BookOpenIcon, UsersIcon, SendIcon } from 'lucide-vue-next'; // Placeholder icons

// Image imports
// import ourStoryImagePath from '@/assets/images/our-story.jpg'; // Commented out - file likely missing
// import communityImagePath from '@/assets/images/community-event.jpg'; // Commented out - file likely missing
// import chefImage from '@/assets/images/team/chef.jpg'; // Commented out - file likely missing
// import managerImage from '@/assets/images/team/manager.jpg'; // Commented out - file likely missing
// import serverImage from '@/assets/images/team/server.jpg'; // Commented out - file likely missing

// Using placeholders for now
const ourStoryImagePath = ''; // Placeholder
const communityImagePath = ''; // Placeholder
const chefImage = ''; // Placeholder
const managerImage = ''; // Placeholder
const serverImage = ''; // Placeholder


const values = [
  {
    icon: HeartIcon,
    title: 'Authenticity',
    description: 'Serving genuine Ethiopian dishes made with traditional recipes and the freshest ingredients.',
  },
  {
    icon: BookOpenIcon, // Represents tradition/heritage
    title: 'Cultural Heritage',
    description: 'Sharing the rich culture and culinary traditions of Ethiopia with our guests.',
  },
  {
    icon: UsersIcon,
    title: 'Community',
    description: 'Fostering a welcoming environment and giving back to the community that supports us.',
  },
];

const teamMembers = [
  {
    name: 'Chef Taye',
    role: 'Head Chef',
    image: chefImage,
    bio: 'With over 20 years of experience in Ethiopian cuisine, Chef Taye brings passion and precision to every dish.',
  },
  {
    name: 'Alem K.',
    role: 'Restaurant Manager',
    image: managerImage,
    bio: 'Alem ensures every guest feels like family, overseeing operations with a warm smile and dedication.',
  },
  {
    name: 'Sara M.',
    role: 'Lead Server & Host',
    image: serverImage,
    bio: 'Sara is the friendly face that greets you, passionate about sharing Ethiopian culture and ensuring a delightful dining experience.',
  },
];

// SEO meta data would be handled via router or a dedicated Vue meta plugin.
</script>

<style scoped>
.font-heading {
  font-family: 'Nyala', serif; /* Ensure this font is configured */
}
/* Additional specific styles if needed */
</style>
