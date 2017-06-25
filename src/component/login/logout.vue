<template>
    <div>
        <h3 v-if="success">Vous avez été deconnecté</h3>
        <h3 v-else="!success">Problème lors de la déconnexion</h3>
    </div>
</template>

<script>

    import store from '../../store/index'
    import {mapGetters} from 'vuex'

    export default {
        name: '',
        store,
        computed: mapGetters({
            user: 'user',
        }),
        data: function () {
              return {
                  success: null
              }
        },
        created () {

//            console.log(this.$route.name);

            if(this.user.logged == true){
//
                store.dispatch('logOut').then((response) => {

                    console.warn('LogOut')

                    this.success = true

                    setTimeout(function () {this.$router.push({ name: 'home'})}.bind(this),2000)

                }, (error) => {
                    console.error("not logout")

                    this.success = false
                    setTimeout(function () {this.$router.push({ name: 'home'})}.bind(this),2000)
                })

            }else{
               this.$router.push({ name: 'home'})
            }




        },

    }
</script>

<style lang="scss">

</style>