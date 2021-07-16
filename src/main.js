import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import { Button, List, Cell, Tabbar, TabbarItem, NavBar, Icon, Sticky, Card } from 'vant';
import 'amfe-flexible'

const app = createApp(App)
app.use(store).use(router).mount('#app')
