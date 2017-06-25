<template>

<div>
    <header class="col-sm-12 header-accueil-perso text-center text-perso-white" style="background-image: url('/assets/img/banniere_accueil.png')">


        <h1>Bonjour, {{user.username}}</h1>
        <h2> Qu'allez vous écouter aujourd'hui ?</h2>


    </header>

    <div class="container-fluid contenu">
        <div class="row">

        </div>
    </div>
</div>
</template>

<script>

    import store from '../../store/index'
    import {mapGetters} from 'vuex'
    import {HTTP} from '../../api.js'

    export default {
        name: 'logged',
        store,
        data () {
          return {
              posts : [],
              loading: false
          }
        },
        computed: mapGetters({
            user: 'user',
        }),
        created () {

            this.loading = true;
            HTTP.get('posts').then(response => {
                        this.posts = response.data;
                        this.loading = false;
//                        alert(this.posts)
//                        this.$refs.snackbar.open();
                    })
                    .catch(e => {
                        this.loading = false;

                        store.dispatch('addNotification', 'Un  problème est survenue').then(() => {})
                    })
        }


    }
</script>

<style lang="scss">

</style>