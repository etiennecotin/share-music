<template>

    <div class="container">


        <nav class="navbar navbar-perso navbar-fixed-top" id="page-top">
            <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" href="#menu-toggle" id="menu-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand"><img class="logo" width="220px;" src="/assets/img/logofinale.png"></a>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                    <form class="navbar-form navbar-left">
                        <div class="form-group">
                            <div class="input-group">
                                <input type="text" class="form-perso" placeholder="  Rechercher">
                                <span class="input-group-btn">
                  <button class="btn btn-default button-perso" type="button"><span class="glyphicon glyphicon-search text-perso-blue"></span></button>
                </span>
                            </div>
                        </div>

                    </form>

                    <ul class="nav navbar-nav navbar-right">

                        <!-- ZONE NOTIFS -->
                        <li><a href="#page-top"><span class="icon-menu-perso glyphicon glyphicon-music text-perso-blue" data-toggle="modal" data-target="#modal-perso"></span></a></li>

                        <!--<li><a href="#"><span class="icon-menu-perso glyphicon glyphicon-envelope text-perso-blue"></span></a></li> -->

                        <li><a href="#"><span class="icon-menu-perso glyphicon glyphicon-bell text-perso-blue"></span></a></li>

                        <!-- ZONE PROFIL -->
                        <li class="dropdown utilisateur-perso">

                            <a href="#" class="dropdown-toggle text-perso-blue" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" style="text-decoration: none;">
                                <!-- affichage de la photo de l'utilisateur -->
                                <!--{% for user in info_user %}-->
                                <img class="img-abonne" src="/assets/img/user.png">
                                <!--{% else %}-->
                                <!--<img class="img-abonne" src="">-->
                                <!--{% endfor %}-->

                                <!-- affichage du nom de l'utilisateur -->
                                <i class="fa fa-caret-down fa-fw fa-1x text-perso-blue"></i>
                            </a>

                            <ul class="dropdown-menu dropdown-menu-base text-perso-blue">

                                <!-- gestion du dropdown en fonction de la connexion -->
                                <!--{% if sessionPseudo %}-->

                                <li class="dropdown-user-perso" v-if="user.logged">
                                    <a href="">
                                        <i class="fa fa-user fa-fw fa-1x text-perso-blue"></i>Profil
                                    </a>
                                </li>

                                <li class="dropdown-user-perso" v-if="user.logged">
                                    <a href="">
                                        <i class="fa fa-cog fa-fw fa-1x text-perso-blue"></i>Réglages
                                    </a>
                                </li>


                                <!--{% for user in info_user %}-->

                                <!--{% if user.uti_grade == 2 %}-->
                                <li role="separator" class="divider" v-if="user.logged.admin"></li>
                                <li class="dropdown-user-perso" v-if="user.logged.admin">
                                    <a href=""><i class="fa fa-cogs fa-fw fa-1x text-perso-blue"></i>Administration</a>
                                </li>
                                <!--{% endif %}-->
                                <!--{% endfor %}-->

                                <li role="separator" class="divider" v-if="user.logged"></li>

                                <li  v-if="user.logged" class="dropdown-user-perso">
                                    <!--<a href=""></a>-->
                                    <router-link :to="{ name: 'logout'}" ref="leftSidenav" ><i class="fa fa-power-off fa-fw fa-1x text-perso-blue"></i>Déconnexion</router-link>
                                </li>
                                <!--{% else %}-->
                                <li  v-if="!user.logged" class="dropdown-user-perso">
                                    <!--<a href=""><i class="fa fa-sign-in fa-fw fa-1x text-perso-blue"></i>Connexion</a>-->
                                    <router-link :to="{ name: 'login'}" ref="leftSidenav" ><i class="fa fa-sign-in fa-fw fa-1x text-perso-blue"></i>Connexion</router-link>
                                </li>
                                <li  v-if="!user.logged" class="dropdown-user-perso">
                                    <!--<a href=""><i class="fa fa-plus fa-fw fa-1x text-perso-blue"></i>Inscription</a>-->
                                    <router-link :to="{ name: 'signUp'}" ref="leftSidenav" ><i class="fa fa-plus fa-fw fa-1x text-perso-blue"></i>Inscription</router-link>
                                </li>

                            </ul>

                        </li>

                    </ul>

                </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
        </nav>


        <div id="wrapper">

            <!-- Sidebar -->
            <side-bar></side-bar>



            <!-- /#sidebar-wrapper -->


            <!-- Contenu -->
            <div id="page-content-wrapper">

                <transition name="slide-fade" mode="out-in">
                    <router-view></router-view>
                </transition>

            </div>
            <!-- /#page-content-wrapper -->
        </div>



            <!--if user log-->

            <!--<side-bar></side-bar>-->


        <!--<div class="main-content">-->

            <!--<transition name="slide-fade" mode="out-in">-->
                <!--<router-view></router-view>-->
            <!--</transition>-->

            <!--&lt;!&ndash;Affichage des notifications depuis store&ndash;&gt;-->
            <!--<md-snackbar :md-position="vertical + ' ' + horizontal" ref="snackbar" :md-duration="duration" >-->
                <!--<span>{{notification}}.</span>-->
                <!--<md-button class="md-accent" md-theme="light-blue" @click.native="$refs.snackbar.close()">Retry</md-button>-->
            <!--</md-snackbar>-->
        <!--</div>-->
    </div>

</template>

<script>

    import store from '../store/index'
    import sideBar from './side-bar.vue'
    import {mapGetters} from 'vuex'

    export default {
        name: 'base',

        store,
        data () {
            return {
                state: store.state,
                home: false,
                url: this.$route.name,

                vertical: 'bottom',
                horizontal: 'center',
                duration: 4000
            }
        },
        created () {

            if(this.url == 'home'){
//                console.log(this.url.name);
                this.home = true
            }else{
//                console.log(this.url);
                this.home = false
            }

        },
        computed: mapGetters({
            notification: 'notification',
            user: 'user',
        }),
        methods: {

        },
        components: {

            'side-bar': sideBar,
        },
        watch: {

            notification () {
                if (this.notification != null){
                    this.$refs.snackbar.open();
                }

            }
        }

    }
</script>

<style lang="scss">

    /*@import '../../node_modules/vue-material/dist/vue-material.css';*/
    /*@import '../../node_modules/vue-material/src/core/stylesheets/variables.scss';*/

    /* Enter and leave animations can use different */
    /* durations and timing functions.              */
    .slide-fade-enter-active {
        transition: all .1s ease;
    }
    .slide-fade-leave-active {
        transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active for <2.1.8 */ {
        transform: translateX(100px);
        opacity: 0;
    }

</style>