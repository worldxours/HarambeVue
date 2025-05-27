<template>
  <Listbox
    :model-value="modelValue"
    @update:modelValue="(value) => emit('update:modelValue', value)"
    :disabled="disabled"
  >
    <div :class="cn('relative', $attrs.class as string)">
      <ListboxButton
        :class="cn(
          'relative w-full cursor-default rounded-md border border-input bg-background py-2 pl-3 pr-10 text-left text-sm shadow-sm',
          'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
          'disabled:cursor-not-allowed disabled:opacity-50',
          triggerClass
        )"
      >
        <span class="block truncate">
          {{ selectedLabel || placeholder || 'Select an option' }}
        </span>
        <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronDownIcon class="h-4 w-4 text-muted-foreground" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          :class="cn(
            'absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-popover text-popover-foreground shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm',
            contentClass
          )"
        >
          <ListboxOption
            v-for="item in items"
            :key="item.value"
            :value="item.value"
            v-slot="{ active, selected }"
            as="template"
            :disabled="item.disabled"
          >
            <li
              :class="cn(
                'relative cursor-default select-none py-2 pl-8 pr-4 text-sm',
                active ? 'bg-accent text-accent-foreground' : '',
                item.disabled ? 'opacity-50 cursor-not-allowed' : '',
                itemClass
              )"
            >
              <span :class="cn('block truncate', selected ? 'font-medium' : 'font-normal')">
                {{ item.label }}
              </span>
              <span
                v-if="selected"
                class="absolute inset-y-0 left-0 flex items-center pl-2 text-primary"
              >
                <CheckIcon class="h-4 w-4" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
           <div v-if="!items || items.length === 0" :class="cn('relative cursor-default select-none py-2 px-4 text-sm text-muted-foreground', itemClass)">
            No options available.
          </div>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue';
import { CheckIcon, ChevronDownIcon } from 'lucide-vue-next';
import { cn } from '@/lib/utils';

export interface SelectItem {
  label: string;
  value: string | number | boolean | Record<string, any>; // Allow complex objects as values
  disabled?: boolean;
}

const props = defineProps<{
  modelValue: string | number | boolean | Record<string, any> | null;
  items: SelectItem[];
  placeholder?: string;
  disabled?: boolean;
  triggerClass?: string;
  contentClass?: string;
  itemClass?: string;
}>();

const emit = defineEmits(['update:modelValue']);

const selectedLabel = computed(() => {
  const foundItem = props.items.find(item => {
    if (typeof item.value === 'object' && item.value !== null && typeof props.modelValue === 'object' && props.modelValue !== null) {
      // Basic object comparison, might need deep equality for complex cases
      return JSON.stringify(item.value) === JSON.stringify(props.modelValue);
    }
    return item.value === props.modelValue;
  });
  return foundItem?.label;
});
</script>

<style scoped>
/* Additional styles can be added here if needed, though Tailwind is preferred */
</style>
