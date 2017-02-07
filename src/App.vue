<template>
    <div>
        <header>
            <app-nav></app-nav>
        </header>
        <div id="main" class="container">
            <div class="root-style">
                <router-view></router-view>
            </div>
            <footer>
                <app-footer></app-footer>
            </footer>
        </div>
    </div>
</template>
<script>
// 这上面 html 中的模板 <app-nav></app-nav>，就是来自于 这里导入的 AppNav，
// 虽然这里的 AppNav 是驼峰法表示的，而上面 就是把驼峰法变成用 “-” 连接的

import AppNav from './components/AppNav'
import AppFooter from './components/AppFooter'

export default {
    components: {
        AppNav,
        AppFooter
    }
}
</script>
<style type="text/css">
@media screen and (min-width: 640px) {
    html {
        font-size: 15px;
    }
    .root-style {
        width: 640px;
        margin-left: 50%;
        transform: translateX(-50%);
    }
}
</style>
