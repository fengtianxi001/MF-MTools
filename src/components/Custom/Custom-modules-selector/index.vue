<template>
    <base-dialog
        title="请选择添加至模块"
        :visible.sync="visible"
        @confirm="confirmHandle"
    >
        <ul class="modules-selector">
            <li
                v-for="{icon,name,id} in list"
                :key="id"
                :class="{active:active===id}"
                @click="itemHandle(id)"
            >
                <base-icon :icon="icon"></base-icon>
                <span>{{name}}</span>
            </li>
        </ul>
    </base-dialog>
</template>
<script>
    export default {
        name: "custom-modules-selector",
        props: {},
        data() {
            return {
                active: "projects",
                list: [
                    { id: "projects", icon: "product", name: "项目管理" },
                    { id: "files", icon: "folder", name: "文件管理" },
                    { id: "apps", icon: "save", name: "程序管理" }
                ]
            };
        },
        computed: {
            visible: {
                get() {
                    return this.$attrs.visible;
                },
                set(bool) {
                    this.$emit("update:visible", bool);
                }
            }
        },
        methods: {
            itemHandle(id) {
                this.active = id;
            },
            confirmHandle() {
                this.$emit("confirm", this.active);
            }
        }
    };
</script>
<style lang='scss' scoped>
    .modules-selector {
        display: flex;
        li {
            width: 90px;
            height: 90px;
            margin-right: 14px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-size: 12px;
            border: 2px solid #3c3c3c;
            transition: all 0.3s ease;
            &.active {
                border: 2px solid $active_green;
                color: $active_green;
            }
            span {
                margin-top: 4px;
            }
            .base-icon {
                font-size: 36px;
            }
        }
    }
</style>