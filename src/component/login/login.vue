<template>
    <div class="row">

        <!--<md-layout >-->
            <!--<router-link :to="'-1'">Return</router-link>-->
        <!--</md-layout>-->

        <!--<div class="center">-->
            <!--<h2>Connexion</h2>-->
        <!--</div>-->

        <!--{# Debut Container #}-->
        <div class="container-fluid contenu login-perso">
            <div class="row">

                <div class="col-sm-12 text-center">
                    <h1 class="text-perso-blue">Connexion</h1>
                </div>

                <form class="headerSearch form-group" v-on:submit.prevent  @submit.stop.prevent="submit">

                    <div class="col-sm-offset-3 col-sm-6">
                        <div class="text-center text-perso-blue">
                            <input type="text" class=" input-connexion form-control" name="pseudo" placeholder="Pseudo" v-model="username">
                        </div>
                    </div>

                    <div class="col-sm-offset-3 col-sm-6">
                        <div class="text-center text-perso-blue">
                            <input type="password" class=" input-connexion form-control" name="password" placeholder="Mot de passe" id="password" v-model="password">
                        </div>
                    </div>

                    <div class="col-sm-offset-3 col-sm-6 text-center">
                        <input type="submit" class="btn btn-perso" value="Connexion" v-on:click="submit">
                    </div>

                </form>

            </div>

            <div class="row">
                <div class="col-sm-offset-3 col-sm-6 alert text-center text-perso-blue">
                    <!--<p>{{ succes }}</p>-->
                </div>
            </div>

            <div class="row">

                <br>
                <br>


                <div class="col-sm-12 text-center text-perso-blue">
                    <!--<a href="">Créer un compte </a>-->
                    <!--link-->
                    <router-link :to="{ name: 'signUp'}">
                        Créer un compte
                    </router-link>
                </div>

                <div class="col-sm-12 text-center text-perso-blue">
                    <!--<a href="">Mot de passe oublié ?</a>-->
                    <router-link :to="{ name: 'signUp'}">
                        Mot de passe oublié ?
                    </router-link>
                </div>

            </div>

        </div>
        <!--{# Fin Container #}-->

        <!--<form class="col s6 offset-s3" v-on:submit.prevent  @submit.stop.prevent="submit">-->
        <!--&lt;!&ndash;<div class="col s6 offset-s3">&ndash;&gt;-->

            <!--<md-input-container>-->
                <!--<label>Email or username</label>-->
                <!--<md-input type="email" v-model="username"></md-input>-->
            <!--</md-input-container>-->

            <!--<md-input-container md-has-password>-->
                <!--<label>Password</label>-->
                <!--<md-input type="password" v-model="password"></md-input>-->
            <!--</md-input-container>-->


            <!--&lt;!&ndash;<div class="row">&ndash;&gt;-->
                <!--&lt;!&ndash;<div class="input-field col s12">&ndash;&gt;-->
                    <!--&lt;!&ndash;<input id="password" type="password" class="validate" v-model="password">&ndash;&gt;-->
                    <!--&lt;!&ndash;<label for="password">Password</label>&ndash;&gt;-->
                <!--&lt;!&ndash;</div>&ndash;&gt;-->
            <!--&lt;!&ndash;</div>&ndash;&gt;-->
            <!--<md-layout md-align="center">-->
                <!--<md-button class="md-raised md-primary large-button" type="submit" v-on:click="submit" >Connexion</md-button>-->
            <!--</md-layout>-->
            <!--&lt;!&ndash;<div class="row">&ndash;&gt;-->
                <!--&lt;!&ndash;<div class="input-field col s12">&ndash;&gt;-->
                    <!--&lt;!&ndash;<button class="btn waves-effect waves-light" type="submit" name="action" v-on:click="submit">Submit&ndash;&gt;-->
                        <!--&lt;!&ndash;<i class="material-icons right">Connexion</i>&ndash;&gt;-->
                    <!--&lt;!&ndash;</button>&ndash;&gt;-->
                <!--&lt;!&ndash;</div>&ndash;&gt;-->
            <!--&lt;!&ndash;</div>&ndash;&gt;-->
            <!--&lt;!&ndash;<md-snackbar :md-position="vertical + ' ' + horizontal" ref="snackbar" :md-duration="duration">&ndash;&gt;-->
                <!--&lt;!&ndash;<span>Connection timeout. Showing limited messages.</span>&ndash;&gt;-->
                <!--&lt;!&ndash;<md-button class="md-accent" md-theme="light-blue" @click.native="$refs.snackbar.close()">Retry</md-button>&ndash;&gt;-->
            <!--&lt;!&ndash;</md-snackbar>&ndash;&gt;-->
            <!--<div>-->

                <!--&lt;!&ndash;<md-spinner md-indeterminate></md-spinner>&ndash;&gt;-->
                <!--&lt;!&ndash;<i  class="fa fa-spinner fa-spin"></i>&ndash;&gt;-->
                <!--<md-spinner  v-show="loading" :md-size="60" md-indeterminate class="md-warn"></md-spinner>-->
                <!--&lt;!&ndash;<span v-if="posts" v-for="user, index in posts">&ndash;&gt;-->
                    <!--&lt;!&ndash;{{index}}.{{user}} / {{user.id}} -> {{user.title}}&ndash;&gt;-->
                    <!--&lt;!&ndash;<br>&ndash;&gt;-->
                <!--&lt;!&ndash;</span>&ndash;&gt;-->

            <!--</div>-->
        <!--&lt;!&ndash;</div>&ndash;&gt;-->
        <!--</form>-->
    </div>
</template>

<script>

    import store from '../../store/index'
    import {mapGetters} from 'vuex'
    import {HTTP} from '../../api.js'

    export default {
        name: 'login',
        store,
        data () {
            return {
                username: '',
                password: '',
                posts:'',
                loading: false,
            }

        },
        computed: mapGetters({
            user:'user'
        }),
        created () {

            this.loading = true;

            setTimeout(function () {this.loading = false}.bind(this),500)

//            setTimeout(function () { this.changeUrl() }.bind(this), 100)
//            HTTP.get('posts/1').then(response => {
//                    this.posts = response.data;
//                    this.loading = false;
////                    alert(this.posts)
//
//                })
//                .catch(e => {
//                    this.errors.push(e)
//                })
        },
        methods: {
            submit: function () {

                this.loading = true;


                if (this.username && this.password){

                    store.dispatch('logIn', {'username':this.username, 'password':this.password}).then(response => {
                        console.warn('Logged')
//                        this.user.logged=true

                        setTimeout(function () {this.$router.push({ name: 'home'})}.bind(this),2000)
                    }, error => {
                        console.error("Not logged")
                    })
                }
//                this.posts = null;

//                HTTP.get('posts/'+this.username).then(response => {
//                        this.posts = response.data;
//                        this.loading = false;
////                        alert(this.posts)
////                        this.$refs.snackbar.open();
//                    })
//                    .catch(e => {
//                        this.loading = false;
//
//                        store.dispatch('addNotification', 'Un  problème est survenue').then(() => {})
//                    })



            }
        },
        Watch: {
            user: function (e) {
               console.log(e)
            }
        }


    }
</script>