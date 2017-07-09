<template>


    <div>


        <div class="container-fluid contenu">
            <div class="row" v-if="pageLoader">
                <h1>load</h1>
                <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
                <span class="sr-only">Loading...</span>

            </div>
            <div class="row" v-else="!pageLoader">
                <h1>Categorie {{category[0].nom}} - <button @click="test">go</button></h1>



            </div>
        </div>
    </div>

</template>

<script>

    import store from '../../store/index'
    import {mapGetters} from 'vuex'

    export default {
        name: 'category',

        store,
        data () {
            return {
                pageLoader: false
            }
        },
        created () {

            this.pageLoader = true
            store.dispatch('getCategory', this.paramCategory).then((response) => {
                if (response){
                    this.pageLoader = false
                }
            })

        },
        computed: {
            ...mapGetters({
                   category: "category"
               }),
            paramCategory: function () {


                return this.$route.params.url_name;
            }
        },
        methods: {

            test() {
                this.$router.push({ name: 'allCategory'})
            }
        },
        components: {


        },
        watch: {
            paramCategory: function (val) {

                if(val != this.category[0].nom_url){

                    this.pageLoader = true

                    store.dispatch('getCategory', val).then((response) => {

                        if (response){
                            this.pageLoader = false
                        }
//                        console.log(response)

                    })
                }
            }
        }

    }
</script>

<style lang="scss">



</style>