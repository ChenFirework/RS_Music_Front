import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login/Login.vue'
import Register from '../components/Register/Register.vue'
import Navigation from '../components/Navigation/Navigation.vue'
import Ranking from '../components/Ranking/Ranking.vue'
import Rank from '../components/Rank/Rank.vue'
import Home from '../components/Home/Home.vue'
import Headers from '../components/Headers/Headers.vue'
import Footers from '../components/Footers/Footers.vue'
import Carousel from '../components/Carousel/Carousel.vue'
import Songsheet from '../components/Songsheet/Songsheet.vue'
import Newsong from '../components/Newsong/Newsong.vue'
import Singers from '../components/Singers/Singers.vue'
import Comment from '../components/Comment/Comment.vue'
import Players from '../components/Players/players.vue'
import Ranks from '../components/Ranks/Ranks.vue'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/navigation',
      name: 'navigation',
      component: Navigation
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: Ranking
    },
    {
      path: '/ranks',
      name: 'ranks',
      component: Ranks
    },
    {
      path: '/rank',
      name: 'rank',
      component: Rank
    },
    {
      path: '/footers',
      name: 'footers',
      component: Footers
    },
    {
      path: '/headers',
      name: 'headers',
      component: Headers
    },
    {
      path: '/carousel',
      name: 'carousel',
      component: Carousel
    },
    {
      path: '/songsheet',
      name: 'songsheet',
      component: Songsheet
    },
    {
      path: '/newsong',
      name: 'newsong',
      component: Newsong
    },
    {
      path: '/singers',
      name: 'singers',
      component: Singers
    },
    {
      path: '/comment',name: 'comment', component: Comment
    },
    {
      path: '/players',name: 'players', component: Players
    }
  ]
})
