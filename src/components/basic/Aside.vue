<template>
    <div>
        <el-aside width="auto" class="el-aside" style="height: 100vh;">
            <el-row class="tac">
                <el-col :span="24">
                    <h1 class="title">个人博客</h1>
                    <el-menu
                        :default-active="activeNav"
                        class="el-menu"
                        ref="menu"
                        @select="handleSelect"
                        background-color="rgb(32, 34, 42)"
                        text-color="#fff"
                        active-text-color="#ffd04b"
                    >
                        <el-submenu index="/home">
                            <template slot="title">
                                <i class="el-icon-s-home"></i>
                                <span>主页</span>
                            </template>
                            <el-menu-item index="/home">主页</el-menu-item>
                        </el-submenu>

                        <div v-for="menu in menuList" :key="menu.title">
                            <div v-if="menu.children.length > 0">
                                <el-submenu :index="menu.index">
                                    <template slot="title">
                                        <i :class="menu.icon"></i>
                                        <span v-text="menu.title"></span>
                                    </template>
                                    <div
                                        v-for="secondaryMenu in menu.children"
                                        :key="secondaryMenu.title"
                                    >
                                        <div v-if="secondaryMenu.children.length === 0">
                                            <el-menu-item
                                                :key="secondaryMenu.title"
                                                v-text="secondaryMenu.title"
                                            ></el-menu-item>
                                        </div>
                                        <div v-else>
                                            <el-submenu :index="secondaryMenu.index">
                                                <template slot="title">
                                                    <span v-text="secondaryMenu.title"></span>
                                                </template>
                                                <el-menu-item-group>
                                                    <el-menu-item
                                                        v-for="thirdaryMenu in secondaryMenu.children"
                                                        :key="thirdaryMenu.title"
                                                        :index="thirdaryMenu.index"
                                                        v-text="thirdaryMenu.title"
                                                    ></el-menu-item>
                                                </el-menu-item-group>
                                            </el-submenu>
                                        </div>
                                    </div>
                                </el-submenu>
                            </div>
                            <div v-else>
                                <el-menu-item :index="menu.index">
                                    <i :class="menu.icon"></i>
                                    <span v-text="menu.title"></span>
                                </el-menu-item>
                            </div>
                        </div>
                    </el-menu>
                </el-col>
            </el-row>
        </el-aside>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    name: 'Aside',
    data() {
        return {}
    },
    methods: {
        ...mapMutations(['add_tab']),
        handleSelect(key, keyPath) {
            console.log(key, keyPath)
            this.add_tab(key)
        },
    },
    computed: {
        menuList() {
            return this.$store.state.menuList
        },
        activeNav() {
            return this.$store.state.activeNav
        }
    },
}
</script>

<style scoped>
.el-aside {
    display: block;
    position: relative;
    background-color: rgb(32, 34, 42) !important;
}

.el-menu {
    border-right-width: 0;
    width: 200px;
}

.title {
    text-align: center;
    color: white;
}
</style>