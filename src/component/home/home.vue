<template v-if="user.logged">
    <div>

                <content-logged v-if="user.logged"></content-logged>

                <content-logout v-if="!user.logged"></content-logout>


    </div>
</template>

<script>

    import store from '../../store/index'
    import logged from './logged.vue'
    import logout from './logout.vue'
    import {mapGetters} from 'vuex'

    export default {
        name: 'home_page',
        store,
        components: {

            'content-logged': logged,
            'content-logout': logout,
        },
        computed: mapGetters({
            user: 'user',
        }),


    }
</script>

<style lang="scss">

    /*.center {*/
        /*text-align: center;*/
        /*line-height: 1em;*/

    /*}*/

    /*.md-sidenav-content{*/
        /*width: 220px !important;*/

    /*}*/
</style>