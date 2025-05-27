import { useToast as useVueToast } from 'vue-toastification';

// Define your toast types if needed (e.g., success, error, info)
// This is a simplified version. The old system had variants like 'destructive'.
// You might need to map these to vue-toastification's types or custom classes.
interface ToastOptions {
  title: string;
  description?: string;
  variant?: 'default' | 'destructive'; // Example variants
}

export function useToast() {
  const toastInstance = useVueToast();

  const toast = (options: ToastOptions) => {
    const message = options.description ? `${options.title}\n${options.description}` : options.title;
    // Map variants to vue-toastification types or use custom classes
    if (options.variant === 'destructive') {
      toastInstance.error(message);
    } else {
      // Defaulting to success for now, can add more types like info, warning
      toastInstance.success(message);
    }
    // `vue-toastification` doesn't have a direct title/description like Radix.
    // You might need to format the message or use custom components with the toast.
    // For now, a simple mapping is fine.
  };

  return { toast };
}
