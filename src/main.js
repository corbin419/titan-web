import './assets/main.css';

import {createApp} from 'vue';
import {createPinia} from 'pinia';

import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(createPinia());
app.use(router);
// 引入 font awesome
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';

// 選擇你要用的 icon（以下為 magnifying-glass 範例）
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

library.add(faMagnifyingGlass, faHeart);

app.use(createPinia());
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
