<template>
    <draggable
        group="b"
        class="single"
    >
        {{data.name}}
    </draggable>
</template>
<script>
    import draggable from "vuedraggable";

    export default {
        
        props: {
            data: Array
        },
        components: {
            draggable
        }
    };
</script>
<style lang='scss' scoped>
    .single {
        width: 100%;
        height: 100%;
        background-color: blue;
        border: 6px;
    }
</style>