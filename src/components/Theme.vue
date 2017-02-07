<template>
    <div>
        <!-- 主题列表 -->
        <div v-for="theme in themes" class="row underline" v-on:click.prevent="getThemesContent(theme.id)">
            <div class="col-md-2 center-vertical"><img :src="theme.thumbnail" class="thumbnail"></div>
            <div class="col-md-10 center-vertical">
                <p> {{ theme.name }} </p>
                <p> {{ theme.description }} </p>
            </div>
        </div>

        <router-view></router-view>
    </div>
</template>
<script type="text/javascript">
import {
    mapGetters,
    mapActions
} from 'vuex'

export default {

    // 注意 data 与 computed 的区别
    computed: {
        ...mapGetters({
            themes: 'getThemes'
        })
    },
    methods: {
        ...mapActions([
            'fetchThemes'
        ]),
        getThemesContent(themeID) {
            // this.$router.push({ // path: '/theme/id', // force: true // })

            this.$router.push({ path: '/theme/' + themeID, force: true })
        }
    },
    created: function() {
        this.fetchThemes()

    },
    // watch: {
    //     // 如果路由有变化，会再次执行该方法
    //     '$route': 'fetchThemes'
    // },
}
</script>
<style type="text/css">
.center-vertical {
    transform: translateY(15%);
}

.underline {
    border-bottom: 2px solid #F5F4F4;
}

.thumbnail {
    border-radius: 9px;
    width: 50px;
    height: 50px;
}
</style>
