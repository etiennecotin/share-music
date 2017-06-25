<template>
    <!--<div>-->

        <header class="col-sm-12 header-accueil-perso text-center text-perso-white" style="background-image: url('/assets/img/banniere_accueil.png')">

            <h1>Découvrez ShareMusic !</h1>
            <h2>Écoutez et partagez !</h2>

            <div class="row">

                <div class="col-sm-offset-3 col-sm-3">
                    <router-link :to="{ name: 'signUp'}">
                        <div class="bouton text-center">
                        Inscription
                        </div>
                    </router-link>
                </div>

                <div class="col-sm-3">
                    <router-link :to="{ name: 'login'}">
                        <div class="bouton text-center">Connexion</div>
                    </router-link>

                </div>
            </div>

            <div class="col-sm-12 text-center text-perso-white"> Venez découvrir de nouveau morceaux et partager vos chansons préférées gratuitement sur ShareMusic.</div>

        </header>
        <!--<md-layout md-align="center">-->
            <!--<h1 class="center">Découvrez ShareMusic !</h1>-->
            <!--<h3 class="center" >Écoutez et partagez !</h3>-->
        <!--</md-layout>-->
        <!--<br>-->
        <!--<md-layout md-gutter>-->

            <!--<md-layout md-align="center">-->
                <!--<router-link :to="{ name: 'signUp'}" class="waves-effect waves-light btn-large"> <md-button class="md-raised md-primary">Inscription</md-button></router-link>-->
            <!--</md-layout>-->

            <!--<md-layout md-align="center">-->
                <!--<router-link :to="{ name: 'login'}" class="waves-effect waves-light btn-large" > <md-button class="md-raised md-primary">Connexion</md-button></router-link>-->
            <!--</md-layout>-->

            <!--<p>Venez découvrir de nouveau morceaux et partager vos chansons préférées gratuitement sur ShareMusic. eee</p>-->
        <!--</md-layout>-->
    <!--</div>-->
</template>

<script>

    import store from '../../store/index'
    import {mapGetters} from 'vuex'

    export default {
        name: 'logout',
        store,


    }
</script>

<style lang="scss">

</style>