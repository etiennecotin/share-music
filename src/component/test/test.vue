<template>
<div class="panel panel-primary">
  <h1>test</h1>
  <p>{{msg}}</p>
  <br>
  <p>{{ count }}.</p>
  <p>
    <button @click="increment">+</button>
    <button v-if="count > 0" @click="decrement">-</button>


  </p>
</div>
</template>
 
<script>
 
import store from '../../store/index'
import {mapGetters} from 'vuex'

export default {
  name: 'Informations',
  store,
  data () {
        return {
            msg: 'Welcome to Your Vue.js App',
//            notifications: []

        }
    },
    computed: mapGetters({
            count: 'checkoutStatus',
            notification: 'notification'
    }),
    methods: {
      increment () {
//        this.$store.commit('increment')

          store.dispatch('increment')
      },
      decrement () {
//        this.$store.commit('decrement')

          store.dispatch('decrement').then(() => {
//              this.success = true;

              store.dispatch('addNotification', 'Un  problème est survenue').then(() => {})
//              setTimeout(() => { this.success = false; }, 1000)
//              Materialize.toast('Notification !', 2000) // 4000 is the duration of the toast

          })
      }
  }
}
</script>