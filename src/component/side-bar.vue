<template>
    <div>


        <div id="sidebar-wrapper">

            <ul class="sidebar-nav">
                <li class="sidebar-titre {% if uri2 == '0' %}sidebar-active{% endif %}">
                    <!--<a href="">-->
                        <!--<i class="fa fa-home fa-fw fa-1x"></i>-->
                        <!--Accueil-->
                    <!--</a>-->
                    <router-link :to="{ name: 'home'}">
                        <i class="fa fa-home fa-fw fa-1x"></i>
                        Accueil
                    </router-link>

                </li>

                <li class="sidebar-titre {% if uri == 'categorie' %}sidebar-active{% endif %}">

                    <router-link :to="{ name: 'allCategory'}">
                        <i class="fa fa-microphone fa-fw fa-1x"></i>
                        Genres
                    </router-link>
                    <!--<a href="">-->
                        <!--<i class="fa fa-microphone fa-fw fa-1x"></i>-->
                        <!--Genres-->
                    <!--</a>-->
                </li>
                <!--{% for catego in categorie %}-->

                <!--<li class="sidebar-lien {% if uri2 %}{% if catego.musique_categorie_nom == uri2 %}sidebar-active{% endif %}{% endif %}">-->
                    <!--<a href="" >nom de la catego </a>-->
                <!--</li>-->

                <li class="sidebar-lien" v-for="category in allCategory">
                    <!--<a href="" > </a>-->
                    <router-link :to="{ name: 'category', params: { url_name: category.nom_url }}">
                        {{category.nom}}
                    </router-link>
                </li>


                <li class="sidebar-titre {% if uri == 'playlist' %}sidebar-active{% endif %}">

                    <a href="">
                        <i class="fa fa-headphones fa-fw fa-1x"></i>
                        Playlists
                    </a>
                </li>

                <!--{% if sessionPseudo %}-->

                <li class="sidebar-lien {% if uri == 'playlist/add_playlist' %}sidebar-active{% endif %}">
                    <a href=""><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span><b>Créer une playlist</b></a>
                </li>

                <div class="sidebar-lien" v-if="!user.logged">
                    <p>Connectez-vous pour accéder a vos playlists</p>
                </div>
                <div class="sidebar-lien" v-if="user.logged && user.logged">
                    <p>Vous n'avez pas encore de playlist</p>
                </div>

                <li class="sidebar-lien {% if uri2 %}{% if playlist.playlist_nom_url == uri2 %}sidebar-active{% endif %}{% endif %}">
                    <a href="">playlist nom</a>
                </li>

                <li class="sidebar-titre {% if uri == 'user/abonnes' %}sidebar-active{% endif %}">
                    <a href="">
                        <i class="fa fa-users fa-fw fa-1x"></i>
                        Abonnés
                    </a>
                </li>

                <!--{% endif %}-->



            </ul>

            <div class="sidebar-footer" style="text-align: center;">
                <a href="">Contact</a>  -  <a href="">CGU</a><br>
                <p>Copyright @ Average Agency</p>
            </div>

        </div>
    </div>
</template>

<script>

    import store from '../store/index'
    import {mapGetters} from 'vuex'

    export default {
        name: 'sideBar',
        store,
        props: ['user','allCategory'],
        data () {
            return {
                home: false,
                url: this.$route.name,

                isLoggedIn : 'bloc-center',
                errorClass : '',
            }
        },
        computed: mapGetters({

        }),
        methods: {
            toggleLeftSidenav() {
                this.$refs.leftSidenav.toggle();
            },
            goBack(){
                console.log('go back side');
                this.$router.go(-1);

//                setTimeout(function () { this.changeUrl() }.bind(this), 100)
            },

        },
        watch: {

        }

    }


</script>

<style lang="scss">

</style>