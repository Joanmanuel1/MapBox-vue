import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import mapboxgl from 'mapbox-gl'; 
mapboxgl.accessToken = 'pk.eyJ1Ijoiam1yb21lcm8iLCJhIjoiY2w4dWQ4Mnh2MDBhNDN3cTJjYTZhajcycCJ9.Dk9jypFNTIpuvt6hCJCq_w';
if ( !navigator.geolocation ) {
    alert('Tu navegador no soporta el GeoLocation');
    throw new Error('Tu navegador no soporta el GeoLocation');
}

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
