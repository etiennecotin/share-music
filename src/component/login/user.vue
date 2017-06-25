<template >
    <div>

        <router-view></router-view>

    </div>
</template>

<script>

    import store from '../../store/index'
    import {mapGetters} from 'vuex'

    export default {
        name: 'user',
        store,
        computed: mapGetters({
            user: 'user',
        }),


    }
</script>

<style lang="scss">

    .center {
        text-align: center;
        line-height: 1em;

    }

    .md-sidenav-content{
        width: 220px !important;

    }
</style>