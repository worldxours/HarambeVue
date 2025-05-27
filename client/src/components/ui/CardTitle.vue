<template>
  <h3 :class="cardTitleClasses">
    <slot />
  </h3>
</template>

<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import { cn } from '@/lib/utils';

const attrs = useAttrs();

const cardTitleClasses = computed(() => {
  return cn(
    'text-2xl font-semibold leading-none tracking-tight',
    (attrs.class as string) || ''
  );
});
</script>
