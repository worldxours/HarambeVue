<template>
  <p :class="cardDescriptionClasses">
    <slot />
  </p>
</template

<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import { cn } from '@/lib/utils';

const attrs = useAttrs();

const cardDescriptionClasses = computed(() => {
  return cn(
    'text-sm text-muted-foreground',
    (attrs.class as string) || ''
  );
});
</script>
