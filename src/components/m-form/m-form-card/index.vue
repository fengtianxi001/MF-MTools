<template>
    <div class="form-card">
        <div class="form-card-title">{{title}}</div>
        <div class="from-card-body">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: "m-form-card",
        props: {
            title: String
        }
    };
</script>
<style lang='scss' scoped>
    .form-card {
        background-color: #222d35;
        overflow: hidden;
        border-radius: 3px;
        border:$border;
        &:nth-child(n+2){
            margin-top: 20px;
        }
        .form-card-title {
            color: #fff;
            /* font-weight: bold; */
            padding: 10px 0 0px;
            /* background-color:#0c0f10; */
            padding-left: 10px;
            font-size: 14px;
            margin-left: 10px;
            position: relative;
            /* &::after{
                content: "";
                display: block;
                width: 8px;
                height: 8px;
                background-color: #38a576;
                position: absolute;
                top: 8px;
                border-radius: 50%;
                left: -2px;
            } */
            /* border-left: 4px solid #42a378; */
        }
        .from-card-body{
            box-sizing: border-box;
            padding: 20px;

        }
    }
</style>