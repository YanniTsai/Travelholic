"use strict";(self["webpackChunktravelholic"]=self["webpackChunktravelholic"]||[]).push([[971],{8233:function(a,e,t){t.r(e),t.d(e,{default:function(){return B}});var i=t(3396),n=t(7139),l=t.p+"img/orderhistory-banner.f1b24534.jpeg";const s=(0,i._)("div",{class:"banner mb-5"},[(0,i._)("img",{src:l,alt:"購物車"}),(0,i._)("div",{class:"banner-title p-3"},[(0,i._)("h5",{class:"m-2"},"歷史訂單")])],-1),r={class:"col-md-6 mx-auto"},d={class:"d-flex justify-content-between align-items-center"},o={key:0,class:"text-success"},c={key:1,class:"text-danger"},p=["data-bs-target","aria-controls"],u=(0,i._)("i",{class:"bi bi-chevron-down"},null,-1),g=[u],_=["id"],h=(0,i._)("hr",null,null,-1),v=(0,i._)("div",null,"訂單內容：",-1),b={class:"table"},w=(0,i._)("tr",null,[(0,i._)("th",null,"商品名稱"),(0,i._)("th",{class:"text-center"},"數量"),(0,i._)("th",{class:"text-center"},"金額")],-1),f={class:"text-center"},k={class:"text-center"},m=(0,i._)("div",null,"訂購人資訊：",-1),x={class:"m-2"};function y(a,e,t,l,u,y){const C=(0,i.up)("Loading"),D=(0,i.up)("router-link"),P=(0,i.up)("Pagination");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(C,{active:u.isLoading,style:{"z-index":"9999"}},null,8,["active"]),s,(0,i._)("div",r,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(u.orders,(e=>((0,i.wg)(),(0,i.iD)("div",{class:"m-3 p-3 order-info",key:e.id},[(0,i._)("div",d,[(0,i._)("div",null,[(0,i._)("div",null,"訂單編號："+(0,n.zw)(e.id),1),(0,i._)("div",null,"訂單時間："+(0,n.zw)(a.$filters.date(e.create_at)),1),(0,i._)("div",null,"訂單金額：$ "+(0,n.zw)(a.$filters.currency(e.total)),1),(0,i._)("div",null,[(0,i.Uk)("付款狀態： "),e.is_paid?((0,i.wg)(),(0,i.iD)("span",o,"已付款")):((0,i.wg)(),(0,i.iD)("span",c,"未付款"))])]),(0,i._)("button",{class:"btn","data-bs-toggle":"collapse","data-bs-target":`#orderDetail${e.id}`,"aria-expanded":"false","aria-controls":`#orderDetail${e.id}`},g,8,p)]),(0,i._)("div",{class:"collapse",id:`orderDetail${e.id}`},[h,(0,i._)("div",null,[v,(0,i._)("table",b,[(0,i._)("thead",null,[w,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.products,(e=>((0,i.wg)(),(0,i.iD)("tr",{key:e.id},[(0,i._)("td",null,[(0,i.Wm)(D,{to:`/products/${e.product_id}`,class:"text-decoration-none text-dark"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.zw)(e.product.title),1)])),_:2},1032,["to"])]),(0,i._)("td",f,(0,n.zw)(e.qty),1),(0,i._)("td",k,"$ "+(0,n.zw)(a.$filters.currency(e.final_total)),1)])))),128))])])]),(0,i._)("div",null,[m,(0,i._)("div",x,[(0,i._)("div",null,"姓名： "+(0,n.zw)(e.user.name),1),(0,i._)("div",null,"Email： "+(0,n.zw)(e.user.email),1),(0,i._)("div",null,"電話： "+(0,n.zw)(e.user.tel),1),(0,i._)("div",null,"地址： "+(0,n.zw)(e.user.address),1)])])],8,_)])))),128))]),(0,i.Wm)(P,{pagination:u.pagination,onUpdatePage:y.getOrders},null,8,["pagination","onUpdatePage"])],64)}var C=t(9242);const D={"aria-label":"Page navigation"},P={class:"pagination front-pagination justify-content-center"},z=(0,i._)("span",{"aria-hidden":"true"},"«",-1),$=[z],L=(0,i._)("span",{"aria-hidden":"true"},"‹",-1),M=[L],j=["onClick"],H=(0,i._)("span",{"aria-hidden":"true"},"›",-1),O=[H],U=(0,i._)("span",{"aria-hidden":"true"},"»",-1),Y=[U];function K(a,e,t,l,s,r){return(0,i.wg)(),(0,i.iD)("nav",D,[(0,i._)("ul",P,[(0,i._)("li",{class:(0,n.C_)(["page-item",{disabled:!t.pagination.has_pre}])},[(0,i._)("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:e[0]||(e[0]=(0,C.iM)((a=>r.updatePage(1)),["prevent"]))},$)],2),(0,i._)("li",{class:(0,n.C_)(["page-item",{disabled:!t.pagination.has_pre}])},[(0,i._)("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:e[1]||(e[1]=(0,C.iM)((a=>r.updatePage(t.pagination.current_page-1)),["prevent"]))},M)],2),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.pagination.total_pages,(a=>((0,i.wg)(),(0,i.iD)("li",{class:"page-item",key:a},[(0,i._)("a",{class:(0,n.C_)(["page-link",{active:a===t.pagination.current_page}]),href:"#",onClick:(0,C.iM)((e=>r.updatePage(a)),["prevent"])},(0,n.zw)(a),11,j)])))),128)),(0,i._)("li",{class:(0,n.C_)(["page-item",{disabled:!t.pagination.has_next}])},[(0,i._)("a",{class:"page-link",href:"#","aria-label":"Next",onClick:e[2]||(e[2]=(0,C.iM)((a=>r.updatePage(t.pagination.current_page+1)),["prevent"]))},O)],2),(0,i._)("li",{class:(0,n.C_)(["page-item",{disabled:!t.pagination.has_next}])},[(0,i._)("a",{class:"page-link",href:"#","aria-label":"Next",onClick:e[3]||(e[3]=(0,C.iM)((a=>r.updatePage(t.pagination.total_pages)),["prevent"]))},Y)],2)])])}var W={props:{pagination:{type:Object}},methods:{updatePage(a){this.$emit("update-page",a)}}},N=t(89);const Z=(0,N.Z)(W,[["render",K]]);var q=Z,E={data(){return{orders:[],pagination:{},isLoading:!1}},components:{Pagination:q},methods:{getOrders(a=1){this.isLoading=!0;const e=`https://vue3-course-api.hexschool.io/api/yanni-hexschool-api/orders/?page=${a}`;this.$http.get(e).then((a=>{this.isLoading=!1,console.log(a.data),this.orders=a.data.orders,this.pagination=a.data.pagination}))}},created(){this.getOrders()}};const A=(0,N.Z)(E,[["render",y]]);var B=A}}]);
//# sourceMappingURL=971.c9452883.js.map