import Vue from 'vue'
import VueRouter from 'vue-router'
//官方的元件

import Home from '@/components/Home';
import SortMenu from '@/components/SortMenu';
import ProductDetails from '@/components/ProductDetails'
import DetailsPage from '@/components/pages/DetailsPage'
import HomeIndex from '@/components/pages/HomeIndex'
import ProductList from '@/components/pages/ProductList'
import Page from '@/components/pages/page';
import child from '@/components/pages/child';
import child2 from '@/components/pages/child2';
import child3 from '@/components/pages/child3';
import child4 from '@/components/pages/child4';
import Menu from '@/components/pages/menu';
//自訂的分頁文件

Vue.use(VueRouter)


export default new VueRouter({
    // mode:'history',    //開發時先不要打開
    linkActiveClass:'active',
    routes:[
        {
            //name:'首頁', //元件的呈現名稱
            path:'/', //對應的虛擬路徑
            component:Home, //對應的元件
            children:[
                {
                    name:'首頁',
                    path:'',
                    components:{
                        default:HomeIndex,
                        sortmenu:SortMenu,
                    },
                },
                {
                    name:'商品列表',
                    path:'product_list',
                    component:ProductList,
                }
            ]
        },
        {
            //name:'商品詳細頁',
            path:'/product_details', //對應的虛擬路徑
            component:ProductDetails, //對應的元件
            children:[
                {
                    name:'商品詳細頁',
                    path:'',
                    component:DetailsPage,
                }
            ]
        }
        ,{
            // name:'分頁',
            path:'/page',
            // component:Page,
            components:{
                default:Page,
                menu:Menu,
            },
            children:[
                {
                    name:'卡片', //元件的呈現名稱
                    path:'', //對應的虛擬路徑
                    component:child, //對應的元件
                },
                {
                    name:'卡片2', //元件的呈現名稱
                    path:'child2', //對應的虛擬路徑
                    component:child2, //對應的元件
                },
                // {
                //     name:'卡片3', //元件的呈現名稱
                //     path:'child/:id', //對應的虛擬路徑
                //     component:child3, //對應的元件
                // },
                {
                    name:'卡片3', //元件的呈現名稱
                    path:'child3', //對應的虛擬路徑
                    component:child3, //對應的元件
                },
                {
                    name:'卡片4', //元件的呈現名稱
                    path:'child4', //對應的虛擬路徑
                    component:child4, //對應的元件
                },
                
            ]
        }
    ]
});