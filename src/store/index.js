import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        menuList: [
            {
                //一级菜单
                title: '应用',
                index: '/app',
                icon: 'el-icon-menu',
                //二级菜单
                children: [
                    {
                        title: '内容系统',
                        index: '/content',
                        //三级菜单
                        children: [
                            {
                                title: '编辑文章',
                                index: '/edit',
                            },
                            {
                                title: '文章列表',
                                index: '/list',
                            },
                            {
                                title: '分类管理',
                                index: '/category',
                            },
                            {
                                title: '评论管理',
                                index: '/comment',
                            },
                        ],
                    },
                ],
            },
            {
                //一级菜单
                title: '用户',
                index: '/user',
                icon: 'el-icon-user-solid',
                //二级菜单
                children: [
                    {
                        title: '角色管理',
                        index: '/roles',
                        children: [],
                    },
                    {
                        title: '权限管理',
                        index: '/permissions',
                        children: [],
                    },
                    {
                        title: '用户管理',
                        index: '/users',
                        children: [],
                    },
                ],
            },
            {
                //一级菜单
                title: '设置',
                index: '/set',
                icon: 'el-icon-setting',
                //二级菜单
                children: [
                    {
                        title: '系统设置',
                        index: '/system',
                        //三级菜单
                        children: [
                            {
                                title: '网站设置',
                                index: '/web',
                            },
                            {
                                title: '邮件服务',
                                index: '/email',
                            },
                        ],
                    },
                    {
                        title: '我的设置',
                        index: '/mine',
                        children: [
                            {
                                title: '基本资料',
                                index: '/basic',
                            },
                            {
                                title: '修改密码',
                                index: '/changePwd',
                            },
                        ],
                    },
                ],
            },
        ],
        activeName: 'Home',
        tabList: [
            /* {
                title: '编辑文章',
                component: 'Edit',
                name: '/edit',
            }, */
        ],
        activeNav: '/home'
    },
    getters: {
        getMenuList(state) {
            return state.menuList
        }
    },
    mutations: {
        add_tab(state, val) {      //val：导航栏点击获得的路径，即要在标签页添加的

            state.activeNav = val

            //判断已经打开的tabList里是否已存在要添加的页面，true表示不存在，false表示存在
            let flag = true
            let titname = ''

            // name = name.replace('/', "")

            if ('/home' === val) {
                state.activeName = 'Home'
                flag = false
                return
            }

            state.tabList.forEach((element) => {
                if (element.name === val) {
                    state.activeName = element.component
                    flag = false
                    return
                }
            })

            if (flag) {
                state.menuList.forEach((element) => {
                    if (element.children.length > 0) {
                        element.children.forEach((e) => {
                            if (e.children.length > 0) {
                                e.children.forEach((echidren) => {
                                    if (echidren.index === val) {
                                        titname = echidren.title
                                    }
                                })
                            } else {
                                if (e.index === val) {
                                    titname = e.title
                                }
                            }
                        })
                    } else {
                        if (element.index === val) {
                            titname = element.title
                        }
                    }
                })

                let component = (val.replace('/', '')).substring(0, 1).toUpperCase() + (val.replace('/', '')).substring(1)

                console.log(component);

                state.tabList.push({
                    component: component,
                    title: titname,
                    name: val,
                })
                
                state.activeName = component
            }
        },
        remove_tab(state, val) {   //val：要删除的tab的属性中的name，即component

            let tabList = state.tabList

            tabList.forEach((tab, index) => {
                if(tab.component === val) {
                    let nextTab = tabList[index + 1] || tabList[index - 1]
                    state.tabList.splice(index, 1)
                    if(nextTab) {
                        state.activeName = nextTab.component
                        state.activeNav = nextTab.name
                    } else {
                        state.activeName = 'Home'
                        state.activeNav = '/home'
                    }
                }
            })
        },
        set_active_name(state, val) { //val：当前tab的name
            state.activeName = val
        },
    },
    actions: {

    }
})