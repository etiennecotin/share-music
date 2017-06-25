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

                    <a href="">
                        <i class="fa fa-microphone fa-fw fa-1x"></i>
                        Genres
                    </a>
                </li>
                <!--{% for catego in categorie %}-->

                <li class="sidebar-lien {% if uri2 %}{% if catego.musique_categorie_nom == uri2 %}sidebar-active{% endif %}{% endif %}">
                    <a href="" >nom de la catego </a>
                </li>

                <!--{% endfor %}-->
                <!--{#<li class="sidebar-lien"><a href="#">Reggae </a></li>#}-->
                <!--{#<li class="sidebar-lien"><a href="#">Pop</a></li>#}-->
                <!--{#<li class="sidebar-lien"><a href="#">Electro</a></li>#}-->
                <!--{#<li class="sidebar-lien"><a href="#">Rap</a></li>#}-->
                <!--{#<li class="sidebar-lien"><a href="#">Funk</a></li>#}-->


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

                <!--{% if playlist_user ==  FALSE %}-->
                <div class="sidebar-lien">
                    <p>Vous n'avez pas encore de playlist</p>
                </div>
                <!--{% else %}-->

                <!--{% for playlist in playlist_user %}-->
                <li class="sidebar-lien {% if uri2 %}{% if playlist.playlist_nom_url == uri2 %}sidebar-active{% endif %}{% endif %}">
                    <a href="">playlist nom</a>
                </li>

                <!--{% endfor %}-->

                <!--{% endif %}-->

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


        <!--<md-toolbar>-->
            <!--<md-button class="md-icon-button" @click.native="toggleLeftSidenav" v-if="user.logged">-->
                <!--<md-icon>menu</md-icon>-->
            <!--</md-button>-->
            <!--<div v-bind:class="[!user.logged ? isLoggedIn : '', errorClass]">-->
                <!--<h2 class="md-title"><router-link :to="{ name: 'home'}" >Night Spot</router-link></h2>-->
            <!--</div>-->
        <!--</md-toolbar>-->
        <!--<md-toolbar class="md-dense" v-if="!home">-->
            <!--<md-button class="md-icon-button" @click.native="goBack">-->
                <!--<md-icon >undo</md-icon>-->
            <!--</md-button>-->

            <!--&lt;!&ndash;<h2 class="md-title" style="flex: 1">Dense</h2>&ndash;&gt;-->

            <!--&lt;!&ndash;<md-button class="md-icon-button">&ndash;&gt;-->
            <!--&lt;!&ndash;<md-icon>favorite</md-icon>&ndash;&gt;-->
            <!--&lt;!&ndash;</md-button>&ndash;&gt;-->
        <!--</md-toolbar>-->

        <!--<md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">-->
            <!--<md-toolbar class="md-large">-->
                <!--<div class="md-toolbar-container">-->
                    <!--<h3 class="md-title">My profil</h3>-->
                    <!--<h3 class="md-title" v-if="!user.logged">Non connecté</h3>-->
                <!--</div>-->
            <!--</md-toolbar>-->

            <!--<div class="nav-bar-link" >-->
                <!--<md-list>-->
                        <!--<md-list-item >-->
                            <!--<md-icon>move_to_inbox</md-icon> <span>Inbox</span>-->
                        <!--</md-list-item>-->

                        <!--<md-list-item>-->
                            <!--<md-icon>send</md-icon> <span><router-link :to="{ name: 'panier'}" ref="leftSidenav" @click.native="toggleLeftSidenav" >Go to panier</router-link></span>-->
                        <!--</md-list-item>-->

                        <!--<md-list-item>-->
                            <!--<md-icon>delete</md-icon> <span><router-link :to="{ name: 'test'}" ref="leftSidenav" @click.native="toggleLeftSidenav" >test</router-link></span>-->
                        <!--</md-list-item>-->

                        <!--<md-list-item>-->
                            <!--<md-icon>error</md-icon> <span><router-link :to="{ name: 'home'}" ref="leftSidenav" @click.native="toggleLeftSidenav">Go to home</router-link></span>-->

                            <!--<md-divider class="md-inset"></md-divider>-->
                        <!--</md-list-item>-->

                        <!--<md-list-item>-->
                            <!--<md-icon>error</md-icon> <span><router-link :to="{ name: 'logout'}" ref="leftSidenav" @click.native="toggleLeftSidenav">Logout</router-link></span>-->

                            <!--&lt;!&ndash;<md-divider class="md-inset"></md-divider>&ndash;&gt;-->
                        <!--</md-list-item>-->
                <!--</md-list>-->
            <!--</div>-->
        <!--</md-sidenav>-->
    </div>
</template>

<script>

    import store from '../store/index'
    import {mapGetters} from 'vuex'

    export default {
        name: 'sideBar',
        store,
        data () {
            return {
                home: false,
                url: this.$route.name,

                isLoggedIn : 'bloc-center',
                errorClass : '',
            }
        },
        created () {

            if(this.url == 'home'){
                this.home = true
            }else{
                this.home = false
            }
        },
        computed: mapGetters({
            user: 'user',
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
            '$route': function(e){

                if(e.name == 'home'){
//                    console.log(this.url.name);
                    this.home = true
                }else{
//                    console.log(this.url);
                    this.home = false
                }
            },
            user: function (val) {

                console.warn(val)
                if (val == true){
                    this.user.logged = false
                }else {
                    this.user.logged = true
                }
            }
        }

    }


</script>

<style lang="scss">

</style>