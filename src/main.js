import { createApp } from 'vue'
import router from './router'
import Wrapper from './Wrapper.vue'
import LandingComponent from './components/LandingComponent.vue'
const app = createApp(LandingComponent)

app.use(router)

app.mount('#app')
