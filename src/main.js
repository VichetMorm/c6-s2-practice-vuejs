import { createApp } from 'vue'
import App from './App.vue'
import FriendNav from './components/friend-nav.vue'
import FriendForm from './components/friend-form.vue'
import FriendCard from './components/friend-card.vue'

const app = createApp(App)
app.component('friend-nav',FriendNav)
app.component('friend-form',FriendForm)
app.component('friend-card',FriendCard)

app.mount('#app')
