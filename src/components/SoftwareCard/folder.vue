<template>
    <div class="folder">
        <draggable
            v-for="(item,index) in data"
            :key="index"
            group="b"
        >
            {{item.name}}
        </draggable>

    </div>
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
    .folder {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 10px;
        background-color: yellow;
        width: 100%;
        height: 100%;
        div {
            background-color: red;
            width: 20px;
            height: 20px;
        }
    }
</style>