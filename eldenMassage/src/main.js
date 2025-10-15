import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Importer la gestion des balises meta via vueuse/head
import { createHead } from '@vueuse/head';

const app = createApp(App);

// Utiliser @vueuse/head pour gérer les balises meta
const head = createHead();
app.use(head);
app.use(router);

app.mount('#app');
