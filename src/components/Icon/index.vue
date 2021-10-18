<template>
    <svg
        class="icon"
        aria-hidden="true"
    >
        <use :xlink:href="iconName"></use>
    </svg>
</template>
<script>
 
    export default {
        name: "m-icon",
        props: {
            icon: String
        },
        computed: {
            iconName() {
                const { icon } = this;
                if (icon.indexOf("#") >= 0) {
                    return icon;
                } else {
                    return "#" + icon;
                }
            }
        }
    };
</script>
<style lang="scss" scoped>
    .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>