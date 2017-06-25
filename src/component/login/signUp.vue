<template>

    <div class="container-fluid contenu login-perso">
        <div class="row">

            <div class="col-sm-12 text-center">
                <h1 class="text-perso-blue">Inscription</h1>
            </div>

            <form class="headerSearch form-group" method="post">

                <div class="col-sm-offset-3 col-sm-6">
                    <div class="text-center text-perso-blue">
                        <input type="text" class=" input-connexion form-control" name="pseudo" placeholder="Pseudo">
                    </div>
                </div>

                <div class="col-sm-offset-3 col-sm-6">
                    <div class="text-center text-perso-blue">
                        <input type="text" class=" input-connexion form-control" name="nom" placeholder="Nom">
                    </div>
                </div>

                <div class="col-sm-offset-3 col-sm-6">
                    <div class="text-center text-perso-blue">
                        <input type="text" class=" input-connexion form-control" name="prenom" placeholder="Prénom">
                    </div>
                </div>

                <div class="col-sm-offset-3 col-sm-6">
                    <div class="text-center text-perso-blue">
                        <input type="email" class=" input-connexion form-control" name="email" placeholder="Email">
                    </div>
                </div>

                <div class="col-sm-offset-3 col-sm-6">
                    <div class="text-center text-perso-blue">
                        <input type="password" class=" input-connexion form-control" name="password" placeholder="Mot de passe">
                    </div>
                </div>

                <div class="col-sm-offset-3 col-sm-6">
                    <div class="text-center text-perso-blue">
                        <input type="date" class=" input-connexion form-control" name="birthday" placeholder="Date de naissance">
                    </div>
                </div>

                <div class="col-sm-offset-3 col-sm-6">
                    <div class="text-center text-perso-blue">
                        <select type="text" class=" bouton-connexion selectpicker" name="genre">
                            <option value="2">Homme</option>
                            <option value="1">Femme</option>
                        </select>
                    </div>
                </div>

                <div class="col-sm-offset-3 col-sm-6 text-center">
                    <input type="submit" class="btn btn-perso" value="Insciption">
                </div>

            </form>

        </div>


        <div class="row">
            <div class="col-sm-offset-3 col-sm-6 alert text-center text-perso-blue">
                <!--<p>{{ succes }}</p>-->
            </div>
        </div>



    </div>
    <!--{# Fin Container #}-->

</template>

<script>

    import store from '../../store/index'
    import {mapGetters} from 'vuex'

    export default {
        name: '',
        store


    }
</script>

<style lang="scss">

</style>