"use strict";(self["webpackChunktravelholic"]=self["webpackChunktravelholic"]||[]).push([[344],{8892:function(e,t,l){l.d(t,{Z:function(){return O}});var a=l(3396),n=l(7139),d=l(9242);const i={class:"modal",tabindex:"-1",ref:"modal"},s={class:"modal-dialog"},r={class:"modal-content"},o={class:"modal-header bg-danger text-white"},u={class:"modal-title"},c=["disabled"],p={class:"modal-body"},_={class:"modal-footer"},h=["disabled"],m=["disabled"];function g(e,t,l,g,b,w){return(0,a.wg)(),(0,a.iD)("div",i,[(0,a._)("div",s,[(0,a._)("div",r,[(0,a._)("div",o,[(0,a._)("h5",u,"是否刪除 "+(0,n.zw)(l.title),1),(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",disabled:b.btnDisabled},null,8,c)]),(0,a._)("div",p,[(0,a._)("p",null,"確定要刪除 "+(0,n.zw)(l.title)+" 嗎？（刪除後無法恢復）",1)]),(0,a._)("div",_,[(0,a._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal",disabled:b.btnDisabled}," 取消 ",8,h),(0,a._)("button",{type:"button",class:"btn btn-danger",disabled:b.btnDisabled,onClick:t[0]||(t[0]=(0,d.iM)(((...e)=>w.deleteItem&&w.deleteItem(...e)),["prevent"]))},"確認刪除",8,m)])])])],512)}var b=l(7972),w=l.n(b),v={props:["title"],data(){return{modal:{},btnDisabled:!1}},methods:{showModal(){this.btnDisabled=!1,this.modal.show()},hideModal(){this.modal.hide()},deleteItem(){this.btnDisabled=!0,this.$emit("delete-item")}},mounted(){this.modal=new(w())(this.$refs.modal)}},f=l(89);const y=(0,f.Z)(v,[["render",g]]);var O=y},6832:function(e,t,l){l.d(t,{Z:function(){return y}});var a=l(3396),n=l(7139),d=l(9242);const i={"aria-label":"Page navigation"},s={class:"pagination justify-content-center"},r=(0,a._)("span",{"aria-hidden":"true"},"«",-1),o=[r],u=(0,a._)("span",{"aria-hidden":"true"},"‹",-1),c=[u],p=["onClick"],_=(0,a._)("span",{"aria-hidden":"true"},"›",-1),h=[_],m=(0,a._)("span",{"aria-hidden":"true"},"»",-1),g=[m];function b(e,t,l,r,u,_){return(0,a.wg)(),(0,a.iD)("nav",i,[(0,a._)("ul",s,[(0,a._)("li",{class:(0,n.C_)(["page-item",{disabled:!l.pagination.has_pre}])},[(0,a._)("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:t[0]||(t[0]=(0,d.iM)((e=>_.updatePage(1)),["prevent"]))},o)],2),(0,a._)("li",{class:(0,n.C_)(["page-item",{disabled:!l.pagination.has_pre}])},[(0,a._)("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:t[1]||(t[1]=(0,d.iM)((e=>_.updatePage(l.pagination.current_page-1)),["prevent"]))},c)],2),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.pagination.total_pages,(e=>((0,a.wg)(),(0,a.iD)("li",{class:"page-item",key:e},[(0,a._)("a",{class:(0,n.C_)(["page-link",{active:e===l.pagination.current_page}]),href:"#",onClick:(0,d.iM)((t=>_.updatePage(e)),["prevent"])},(0,n.zw)(e),11,p)])))),128)),(0,a._)("li",{class:(0,n.C_)(["page-item",{disabled:!l.pagination.has_next}])},[(0,a._)("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[2]||(t[2]=(0,d.iM)((e=>_.updatePage(l.pagination.current_page+1)),["prevent"]))},h)],2),(0,a._)("li",{class:(0,n.C_)(["page-item",{disabled:!l.pagination.has_next}])},[(0,a._)("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[3]||(t[3]=(0,d.iM)((e=>_.updatePage(l.pagination.total_pages)),["prevent"]))},g)],2)])])}var w={props:{pagination:{type:Object}},methods:{updatePage(e){this.$emit("update-page",e)}}},v=l(89);const f=(0,v.Z)(w,[["render",b]]);var y=f},9344:function(e,t,l){l.r(t),l.d(t,{default:function(){return X}});var a=l(3396),n=l(7139),d=l(9242);const i={class:"table mt-3"},s=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,"下單時間"),(0,a._)("th",null,"訂單編號"),(0,a._)("th",null,"訂購人Email"),(0,a._)("th",null,"訂購項目"),(0,a._)("th",{class:"text-end"},"應付金額"),(0,a._)("th",null,"編輯")])],-1),r={class:"text-end"},o=["onClick"],u=["onClick"];function c(e,t,l,c,p,_){const h=(0,a.up)("Loading"),m=(0,a.up)("OrderModal"),g=(0,a.up)("DeleteModal"),b=(0,a.up)("Pagination");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(h,{active:p.isLoading,style:{"z-index":"9999"}},null,8,["active"]),(0,a._)("table",i,[s,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(p.orders,((t,l)=>((0,a.wg)(),(0,a.iD)("tr",{key:l},[(0,a._)("td",null,(0,n.zw)(e.$filters.date(t.create_at)),1),(0,a._)("td",null,(0,n.zw)(t.id),1),(0,a._)("td",null,(0,n.zw)(t.user.email),1),(0,a._)("td",null,[(0,a._)("ul",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.products,((e,t)=>((0,a.wg)(),(0,a.iD)("li",{key:t},(0,n.zw)(e.product.title)+"："+(0,n.zw)(e.qty)+" "+(0,n.zw)(e.product.unit),1)))),128))])]),(0,a._)("td",r,(0,n.zw)(e.$filters.currency(t.total)),1),(0,a._)("td",null,[(0,a._)("button",{class:"btn btn-outline-primary btn-sm",onClick:(0,d.iM)((e=>_.openModal(t)),["prevent"])},"檢視",8,o),(0,a._)("button",{class:"btn btn-outline-danger btn-sm",onClick:e=>_.openDeleteModal(t)}," 刪除 ",8,u)])])))),128))])]),(0,a.Wm)(m,{ref:"orderModal",order:p.tempOrder},null,8,["order"]),(0,a.Wm)(g,{ref:"deleteModal",title:`訂單編號：${p.tempOrder.id}`,onDeleteItem:_.deleteOrder},null,8,["title","onDeleteItem"]),(0,a.Wm)(b,{pagination:p.pagination,onUpdatePage:_.getOrders},null,8,["pagination","onUpdatePage"])],64)}const p={class:"modal",tabindex:"-1",ref:"modal"},_={class:"modal-dialog modal-lg modal-dialog-scrollable"},h={class:"modal-content"},m=(0,a._)("div",{class:"modal-header"},[(0,a._)("h5",{class:"modal-title"},"檢視訂單"),(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),g={class:"modal-body"},b={class:"row"},w={class:"col-md-4 mb-3"},v=(0,a._)("h5",null,"訂購人資訊",-1),f={class:"table"},y={key:0},O=(0,a._)("th",null,"姓名：",-1),k=(0,a._)("th",null,"Email：",-1),D=(0,a._)("th",null,"電話：",-1),M=(0,a._)("th",null,"地址：",-1),z=(0,a._)("th",null,"留言：",-1),C={class:"col-md-8"},$={class:"mb-3"},x=(0,a._)("h5",null,"訂單資訊",-1),P={class:"table"},Z=(0,a._)("th",null,"訂單編號",-1),L=(0,a._)("th",null,"下單時間",-1),H=(0,a._)("th",null,"付款時間",-1),I=(0,a._)("th",null,"付款狀態",-1),Y={key:0,class:"text-success"},K={key:1,class:"text-danger"},W=(0,a._)("th",null,"訂單總金額",-1),j={class:"mb-3"},q=(0,a._)("h5",null,"訂購商品",-1),E={class:"table"},N=(0,a._)("tr",null,[(0,a._)("th",null,"商品名稱"),(0,a._)("th",null,"商品數量"),(0,a._)("th",null,"金額")],-1);function U(e,t,l,d,i,s){return(0,a.wg)(),(0,a.iD)("div",p,[(0,a._)("div",_,[(0,a._)("div",h,[m,(0,a._)("div",g,[(0,a._)("div",b,[(0,a._)("div",w,[v,(0,a._)("table",f,[i.tempOrder.user?((0,a.wg)(),(0,a.iD)("tbody",y,[(0,a._)("tr",null,[O,(0,a._)("td",null,(0,n.zw)(i.tempOrder.user.name),1)]),(0,a._)("tr",null,[k,(0,a._)("td",null,(0,n.zw)(i.tempOrder.user.email),1)]),(0,a._)("tr",null,[D,(0,a._)("td",null,(0,n.zw)(i.tempOrder.user.tel),1)]),(0,a._)("tr",null,[M,(0,a._)("td",null,(0,n.zw)(i.tempOrder.user.address),1)]),(0,a._)("tr",null,[z,(0,a._)("td",null,(0,n.zw)(i.tempOrder.message),1)])])):(0,a.kq)("",!0)])]),(0,a._)("div",C,[(0,a._)("div",$,[x,(0,a._)("table",P,[(0,a._)("tbody",null,[(0,a._)("tr",null,[Z,(0,a._)("td",null,(0,n.zw)(i.tempOrder.id),1)]),(0,a._)("tr",null,[L,(0,a._)("td",null,(0,n.zw)(e.$filters.date(i.tempOrder.create_at)),1)]),(0,a._)("tr",null,[H,(0,a._)("td",null,(0,n.zw)(e.$filters.date(i.tempOrder.paid_date)),1)]),(0,a._)("tr",null,[I,i.tempOrder.is_paid?((0,a.wg)(),(0,a.iD)("td",Y,"已付款")):((0,a.wg)(),(0,a.iD)("td",K,"尚未付款"))]),(0,a._)("tr",null,[W,(0,a._)("td",null,(0,n.zw)(e.$filters.currency(i.tempOrder.total)),1)])])])]),(0,a._)("div",j,[q,(0,a._)("table",E,[(0,a._)("tbody",null,[N,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.tempOrder.products,(t=>((0,a.wg)(),(0,a.iD)("tr",{key:t.id},[(0,a._)("td",null,(0,n.zw)(t.product.title),1),(0,a._)("td",null,(0,n.zw)(t.qty),1),(0,a._)("td",null,(0,n.zw)(e.$filters.currency(t.product.price)),1)])))),128))])])])])])])])])],512)}var A=l(7972),B=l.n(A),F={props:{order:{type:Object}},data(){return{modal:{},tempOrder:{}}},watch:{order(){this.tempOrder=this.order}},methods:{showModal(){this.modal.show()},hideModal(){this.modal.hide()}},mounted(){this.modal=new(B())(this.$refs.modal)}},G=l(89);const J=(0,G.Z)(F,[["render",U]]);var Q=J,R=l(8892),S=l(6832),T={data(){return{orders:{},pagination:{},tempOrder:{},isLoading:!1}},components:{OrderModal:Q,DeleteModal:R.Z,Pagination:S.Z},methods:{getOrders(e=1){this.isLoading=!0;const t=`https://vue3-course-api.hexschool.io/api/yanni-hexschool-api/admin/orders/?page=${e}`;this.$http.get(t).then((e=>{this.isLoading=!1,console.log(e.data),this.orders=e.data.orders,this.pagination=e.data.pagination}))},openModal(e){this.tempOrder={...e},this.$refs.orderModal.showModal()},openDeleteModal(e){this.tempOrder={...e},this.$refs.deleteModal.showModal()},deleteOrder(){this.isLoading=!0;const e=`https://vue3-course-api.hexschool.io/api/yanni-hexschool-api/admin/order/${this.tempOrder.id}`;this.$http.delete(e).then((e=>{this.isLoading=!1,console.log(e),this.$refs.deleteModal.hideModal(),this.getOrders()}))}},created(){this.getOrders()}};const V=(0,G.Z)(T,[["render",c]]);var X=V}}]);
//# sourceMappingURL=344.a5f1fd65.js.map