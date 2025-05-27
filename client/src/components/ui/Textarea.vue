<template>
  <textarea
    :class="textareaClasses"
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import { cn } from '@/lib/utils';

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<{
  modelValue?: string | number; // For v-model
}>();

defineEmits(['update:modelValue']);

const attrs = useAttrs();

const textareaClasses = computed(() => {
  return cn(
    'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
    (attrs.class as string) || ''
  );
});
</script>
