import { ref, onMounted, onUnmounted, readonly } from 'vue';

const MOBILE_BREAKPOINT = 768; // Same as original

export function useMobile() {
  const isMobile = ref<boolean>(window.innerWidth < MOBILE_BREAKPOINT);

  const onChange = () => {
    isMobile.value = window.innerWidth < MOBILE_BREAKPOINT;
  };

  onMounted(() => {
    // Initial check is already done with ref initialization
    window.addEventListener('resize', onChange);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', onChange);
  });

  // Return a readonly ref to prevent accidental modification outside the composable
  return readonly(isMobile);
}
