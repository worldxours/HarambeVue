<template>
  <div :class="cardClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import { cn } from '@/lib/utils';

const attrs = useAttrs();

const cardClasses = computed(() => {
  return cn(
    'rounded-lg border bg-card text-card-foreground shadow-sm',
    (attrs.class as string) || ''
  );
});
</script>
