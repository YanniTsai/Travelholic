"use strict";(self["webpackChunktravelholic"]=self["webpackChunktravelholic"]||[]).push([[375],{2390:function(t,a,n){n.r(a),n.d(a,{default:function(){return E}});var e=n(3396);function r(t,a,n,r,l,o){const s=(0,e.up)("Navbar"),c=(0,e.up)("router-view"),i=(0,e.up)("Footer");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(s),(0,e.Wm)(c),(0,e.Wm)(i)],64)}var l=n(7139),o=n(9242),s=n.p+"img/logo.f6a43114.png";const c={class:"navbar navbar-expand-lg navbar-light"},i={class:"container-fluid"},d=(0,e._)("a",{class:"navbar-brand",href:"#"},[(0,e._)("img",{src:s,width:"150",alt:"travelholic"})],-1),u=(0,e._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,e._)("span",{class:"navbar-toggler-icon"})],-1),g={class:"collapse navbar-collapse justify-content-end",id:"navbarSupportedContent"},p={class:"navbar-nav"},v=(0,e._)("li",{class:"nav-link"},"精彩文章",-1),b=(0,e._)("li",{class:"nav-link"},"我的最愛",-1),f={class:"dropdown"},h={class:"dropdown-menu","aria-labelledby":"navbarDropdown"},w={key:0,class:"d-flex flex-column justify-content-center align-items-center m-4"},_=(0,e._)("span",{class:"mb-2"},"購物車目前沒有商品！",-1),m=[_],k={key:1},y={class:"row border-bottom pb-2 m-2"},x=["src"],C={class:"col-6"},D={class:"fw-bold"},z={class:"orange-price"},W={class:"d-flex justify-content-between m-2 cart-menu-bottom"},L={class:"d-flex align-items-center"},$=(0,e._)("span",null,"總計：",-1),j={class:"price"};function T(t,a,n,r,s,_){const T=(0,e.up)("Loading"),H=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(T,{active:s.isLoading,style:{"z-index":"9999"}},null,8,["active"]),(0,e._)("nav",c,[(0,e._)("div",i,[d,u,(0,e._)("div",g,[(0,e._)("ul",p,[(0,e.Wm)(H,{to:"/products",class:"nav-link link-effect"},{default:(0,e.w5)((()=>[(0,e.Uk)("探索行程")])),_:1}),v,b,(0,e._)("div",f,[(0,e._)("a",{class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false","data-bs-offset":"-100,0",onClick:a[0]||(a[0]=(...t)=>_.getCart&&_.getCart(...t))}," 購物車 "),(0,e._)("div",h,[0===s.cartlength?((0,e.wg)(),(0,e.iD)("div",w,m)):((0,e.wg)(),(0,e.iD)("div",k,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(s.cart.carts,((a,n)=>((0,e.wg)(),(0,e.iD)("ul",{class:"list-unstyled",key:n},[(0,e.Wm)(H,{to:`/products/${a.product.id}`,class:"text-muted text-decoration-none"},{default:(0,e.w5)((()=>[(0,e._)("li",y,[(0,e._)("img",{src:a.product.imageUrl,alt:"商品圖片",class:"col-6"},null,8,x),(0,e._)("table",C,[(0,e._)("tr",D,(0,l.zw)(a.product.title),1),(0,e._)("tr",null,(0,l.zw)(a.qty)+" "+(0,l.zw)(a.product.unit),1),(0,e._)("tr",z,(0,l.zw)(t.$filters.currency(a.total))+" 元",1)])])])),_:2},1032,["to"])])))),128)),(0,e._)("div",W,[(0,e._)("div",L,[$,(0,e._)("span",j,(0,l.zw)(t.$filters.currency(s.cart.total))+" 元",1)]),(0,e._)("button",{class:"btn yellow-btn",onClick:a[1]||(a[1]=(0,o.iM)(((...t)=>_.goToCart&&_.goToCart(...t)),["prevent"]))},"查看購物車")])]))])])])])])])],64)}n(7658);var H={data(){return{cart:{},cartlength:0,isLoading:!1}},watch:{cart(){this.cartlength=this.cart.carts.length}},methods:{getCart(){this.isLoading=!0;const t="https://vue3-course-api.hexschool.io/api/yanni-hexschool-api/cart";this.$http.get(t).then((t=>{this.isLoading=!1,console.log(t.data),this.cart=t.data.data}))},goToCart(){this.$router.push("/cart")}},mounted(){this.getCart()}},S=n(89);const U=(0,S.Z)(H,[["render",T]]);var Y=U;const Z={class:"container-fluid bg-dark text-light footer d-flex justify-content-center align-items-center"},F=(0,e._)("i",{class:"bi bi-c-circle"},null,-1);function N(t,a){return(0,e.wg)(),(0,e.iD)("div",Z,[F,(0,e.Uk)("  2023 | 僅作為練習使用，無任何商業用途。 ")])}const q={},K=(0,S.Z)(q,[["render",N]]);var M=K,A={components:{Navbar:Y,Footer:M}};const B=(0,S.Z)(A,[["render",r]]);var E=B}}]);
//# sourceMappingURL=375.02ab6a87.js.map