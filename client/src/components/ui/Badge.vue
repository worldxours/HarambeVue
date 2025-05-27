<template>
  <span :class="badgeClasses">
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

type BadgeVariantProps = VariantProps<typeof badgeVariants>;

const props = defineProps<{
  variant?: BadgeVariantProps['variant'];
}>();

const attrs = useAttrs();

const badgeClasses = computed(() => {
  return cn(badgeVariants({ variant: props.variant }), (attrs.class as string) || '');
});
</script>
