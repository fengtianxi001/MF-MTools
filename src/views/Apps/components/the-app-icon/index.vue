<template>
    <div class="the-app-icon">
        <img :src="app.ico">
    </div>
</template>
<script>
    export default {
        name: "the-file-icon",
        props: {
            app: Object
        }
    };
</script>
<style lang='scss' scoped>
    @import "@/assets/scss/handle.scss";
    .the-app-icon {
        img {
            width: 58px;
            height: 58px;
        }
    }
</style>