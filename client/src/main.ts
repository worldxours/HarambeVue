import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import './index.css';
import Toast, { type PluginOptions } from 'vue-toastification';
import 'vue-toastification/dist/index.css';

const app = createApp(App);
const pinia = createPinia();

const toastOptions: PluginOptions = {
  // Example: position: "top-right", timeout: 5000
  position: "top-right",
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: "button",
  icon: true,
  rtl: false
};

app.use(pinia);
app.use(router);
app.use(Toast, toastOptions);

app.mount('#app');
