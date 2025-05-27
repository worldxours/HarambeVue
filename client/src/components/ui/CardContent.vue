<template>
  <div :class="cardContentClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import { cn } from '@/lib/utils';

const attrs = useAttrs();

const cardContentClasses = computed(() => {
  return cn(
    'p-6 pt-0',
    (attrs.class as string) || ''
  );
});
</script>
