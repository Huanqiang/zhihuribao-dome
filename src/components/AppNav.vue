<template>
    <div class="container" id="app-header">
        <div class="nav-brand row">
            <h2><a href="#">知乎日报仿</a></h2>
        </div>
        <div class="row nav-link-bar">
            <div class="col-md-4">
                <router-link to="/dailies" active-class="active" exact>日报</router-link>
            </div>
            <div class="col-md-4">
                <router-link to="/themes" active-class="active" exact>主题</router-link>
            </div>
            <div class="col-md-4">
                <router-link to="/about" active-class="active" exact>关于</router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {}
</script>
<style type="text/css">
.nav-brand {
    padding-top: 20px;
}

.col-md-4 {
    font-size: 18px;
}

.nav-link-bar {
    color: black !important;
    text-align: center;
    /* ===color=== */
    border-bottom: 2px solid #F5F4F4;
}
</style>
