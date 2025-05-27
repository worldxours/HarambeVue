import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useToast } from '@/composables/useToast';
import type { InsertContact, extendedContactSchema } from '../../shared/schema'; // Adjusted path
import { z } from 'zod';

// Infer the type from the Zod schema
type ContactFormData = z.infer<typeof extendedContactSchema>;

export const useContactStore = defineStore('contact', () => {
  const isLoading = ref(false);
  const error = ref<string | null>(null); // Store specific error messages for the form
  const { toast } = useToast();

  async function submitContactForm(formData: ContactFormData) {
    isLoading.value = true;
    error.value = null;

    try {
      // Frontend validation using the Zod schema (as shown in the example)
      const validationResult = extendedContactSchema.safeParse(formData);
      if (!validationResult.success) {
        // Pick the first error for simplicity in this example
        const firstError = validationResult.error.errors[0];
        const errorMessage = `Validation Error: ${firstError.path.join('.')} - ${firstError.message}`;
        throw new Error(errorMessage);
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // From original apiRequest
        body: JSON.stringify(validationResult.data), // Send validated data
      });

      const responseData = await response.json();

      if (!response.ok) {
        const errorMessage = responseData.message || `Error: ${response.status} ${response.statusText}`;
        throw new Error(errorMessage);
      }

      toast({
        title: 'Success!',
        description: responseData.message || 'Your message has been sent successfully.',
        // Assuming 'default' variant in useToast maps to a success style
        // or vue-toastification's success type if not specified
      });
      return true; // Indicate success

    } catch (err: any) {
      const message = err.message || 'An unexpected error occurred.';
      error.value = message; // Set form-specific error
      toast({
        title: 'Error',
        description: message,
        variant: 'destructive',
      });
      return false; // Indicate failure
    } finally {
      isLoading.value = false;
    }
  }

  return {
    isLoading,
    error,
    submitContactForm,
  };
});
