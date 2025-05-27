<template>
  <input
    :type="type"
    :class="inputClasses"
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import { cn } from '@/lib/utils';

defineOptions({
  inheritAttrs: false, // Use $attrs for non-prop attributes
});

const props = defineProps<{
  type?: string;
  modelValue?: string | number; // For v-model
}>();

defineEmits(['update:modelValue']);

const attrs = useAttrs();

const inputClasses = computed(() => {
  return cn(
    'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
    (attrs.class as string) || ''
  );
});
</script>
