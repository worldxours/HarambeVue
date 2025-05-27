<template>
  <div :class="cardHeaderClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import { cn } from '@/lib/utils';

const attrs = useAttrs();

const cardHeaderClasses = computed(() => {
  return cn(
    'flex flex-col space-y-1.5 p-6',
    (attrs.class as string) || ''
  );
});
</script>
