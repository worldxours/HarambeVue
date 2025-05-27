<template>
  <div :class="cardFooterClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import { cn } from '@/lib/utils';

const attrs = useAttrs();

const cardFooterClasses = computed(() => {
  return cn(
    'p-6 pt-0', // Original was 'flex items-center p-6 pt-0'
    (attrs.class as string) || ''
  );
});
</script>
