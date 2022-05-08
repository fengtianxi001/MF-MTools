<template>
    <div class="layout-menu">
        <div
            class="menu"
            v-for="menu in menus"
            :key="menu.id"
            @click="menuHandle(menu.id)"
            :class="{active: active === menu.id}"
        >
            <base-icon
                class="menu-icon"
                :icon="menu.icon"
                color="#767676"
            ></base-icon>
            <!-- <span>{{menu.name}}</span> -->
        </div>
    </div>
</template>
<script>
    export default {
        name: "menus",
        data() {
            return {
                active: "",
                menus: []
            };
        },
        computed: {},
        watch: {
            $route: {
                deep: true,
                immediate: true,
                handler(route) {
                    this.active = route.name;
                }
            }
        },
        created() {},
        mounted() {
            const menus = this.$router.options.routes[0]["children"] || [];
            this.menus = menus.map(menu => menu.meta);
        },
        methods: {
            menuHandle(name) {
                this.$router.push({ name });
            }
        }
    };
</script>
<style lang='scss' scoped>
    @import "@/assets/scss/handle.scss";
    .layout-menu {
        width: $layout-menu-w;
        height: $vh - $layout-bar-h;
        box-sizing: border-box;
        @include background_color("background_color3");
        padding: 20px 10px;
        border-right-width: 1px;
        border-right-style: solid;
        @include border_color("border_color2");
        .menu {
            color: #767676;
            font-weight: bold;
            height: 34px;
            font-size: 12px;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            user-select: none;
            cursor: pointer;
            &.active {
                color: #38a576;
            }
            .menu-icon {
                font-size: 24px;
                font-weight: normal;
            }
        }
    }
</style>