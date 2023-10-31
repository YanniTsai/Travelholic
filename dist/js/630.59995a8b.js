"use strict";(self["webpackChunktravelholic"]=self["webpackChunktravelholic"]||[]).push([[630],{2572:function(t,e,o){o.r(e),o.d(e,{default:function(){return dt}});var s=o(3396),i=o(7139),a=o(9242),l=o.p+"img/cart-banner.7004dd33.jpeg";const n=(0,s._)("div",{class:"banner mb-5"},[(0,s._)("img",{src:l,alt:"購物車"}),(0,s._)("div",{class:"banner-title p-3"},[(0,s._)("h5",{class:"m-2"},"購物車")])],-1),c={class:"container"},d={key:0,class:"d-flex flex-column align-items-center"},r=(0,s._)("div",{class:"mb-3"},"購物車目前沒有商品！",-1),m={class:"btn yellow-btn"},u={key:1,class:"row"},p={class:"col-md-7 cart-list"},h={class:"d-flex align-items-center"},_=(0,s._)("div",{class:"m-3 info-title"},[(0,s._)("i",{class:"bi bi-suitcase-lg"}),(0,s.Uk)(" 已選行程")],-1),v={class:"cart-num-lg d-flex justify-content-center align-items-center"},g={class:"mb-3"},b={class:"row"},f=["src","alt"],w={class:"col-md-6"},y={class:"mb-2"},x={class:"fw-light mb-2"},k={class:"col-md-3 d-flex align-items-center"},C={class:"input-group"},$=["onUpdate:modelValue","onChange"],I=(0,s._)("span",{class:"input-group-text bg-white border-0"},"人",-1),M=(0,s._)("hr",null,null,-1),z={class:"d-flex justify-content-between align-items-center"},L=["onClick"],U=(0,s._)("i",{class:"bi bi-trash3"},null,-1),D=[U],T={class:"fw-bold"},q={class:"col-md-5"},R={class:"m-3"},j=(0,s._)("div",{class:"mb-3 info-title"},[(0,s._)("i",{class:"bi bi-ticket-perforated"}),(0,s.Uk)(" 套用優惠")],-1),W={class:"input-group mt-3 mb-1"},V={key:0,class:"text-success ms-3"},H=(0,s._)("i",{class:"bi bi-check2-circle"},null,-1),Y={class:"d-flex justify-content-end mb-3"},Z={class:"mb-2"},K=(0,s._)("span",null,"總計：",-1),A={key:0},B={class:"orange-price"},E={class:"btn orange-btn w-100 mt-3"},F=(0,s._)("i",{class:"bi bi-arrow-right"},null,-1);function G(t,e,o,l,U,G){const J=(0,s.up)("Loading"),N=(0,s.up)("router-link"),O=(0,s.up)("RemoveItemModal");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(J,{active:U.isLoading,style:{"z-index":"9999"}},null,8,["active"]),n,(0,s._)("div",c,[0===U.cartlength?((0,s.wg)(),(0,s.iD)("div",d,[r,(0,s._)("button",m,[(0,s.Wm)(N,{to:"/products",class:"text-dark text-decoration-none"},{default:(0,s.w5)((()=>[(0,s.Uk)("探索行程")])),_:1})])])):((0,s.wg)(),(0,s.iD)("div",u,[(0,s._)("div",p,[(0,s._)("div",h,[_,(0,s._)("div",v,[(0,s._)("span",null,(0,i.zw)(U.cartlength),1)])]),(0,s._)("div",g,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(U.cart.carts,(e=>((0,s.wg)(),(0,s.iD)("div",{class:"cart-item p-3 m-3",key:e.id},[(0,s._)("div",b,[(0,s._)("img",{src:e.product.imageUrl,alt:e.product.title,class:"col-md-3"},null,8,f),(0,s._)("div",w,[(0,s.Wm)(N,{to:`/products/${e.product.id}`,class:"text-muted text-decoration-none"},{default:(0,s.w5)((()=>[(0,s._)("div",y,(0,i.zw)(e.product.title),1),(0,s._)("div",x,(0,i.zw)(e.product.description),1),(0,s._)("div",null,"$ "+(0,i.zw)(t.$filters.currency(e.product.price)),1)])),_:2},1032,["to"])]),(0,s._)("div",k,[(0,s._)("div",C,[(0,s.wy)((0,s._)("input",{type:"number",min:"1",class:"form-control","onUpdate:modelValue":t=>e.qty=t,onChange:t=>G.updateCart(e)},null,40,$),[[a.nr,e.qty,void 0,{number:!0}]]),I])])]),M,(0,s._)("div",z,[(0,s._)("button",{class:"btn",onClick:(0,a.iM)((t=>G.openRemoveModal(e)),["prevent"])},D,8,L),(0,s._)("div",T,"$ "+(0,i.zw)(t.$filters.currency(e.total)),1)])])))),128))])]),(0,s._)("div",q,[(0,s._)("div",R,[j,(0,s._)("div",W,[(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",placeholder:"輸入優惠碼","aria-label":"coupon_code","aria-describedby":"usecoupon","onUpdate:modelValue":e[0]||(e[0]=t=>U.coupon_code=t)},null,512),[[a.nr,U.coupon_code]]),(0,s._)("button",{class:"btn yellow-btn border",type:"button",id:"usecoupon",onClick:e[1]||(e[1]=(0,a.iM)(((...t)=>G.addCoupon&&G.addCoupon(...t)),["prevent"]))},"使用")]),U.discont?((0,s.wg)(),(0,s.iD)("div",V,[(0,s.Uk)("優惠碼："+(0,i.zw)(U.coupon_code)+" ",1),H])):(0,s.kq)("",!0)]),(0,s._)("div",Y,[(0,s._)("div",null,[(0,s._)("div",Z,(0,i.zw)(U.cartlength)+" 件商品 ",1),(0,s._)("div",{class:(0,i.C_)(["d-flex align-items-center",{"text-secondary":U.discont}])},[K,(0,s._)("span",{class:(0,i.C_)(["fw-bold",{"text-decoration-line-through":U.discont}])},(0,i.zw)(t.$filters.currency(U.cart.total))+" 元",3)],2),U.discont?((0,s.wg)(),(0,s.iD)("div",A,[(0,s._)("span",B,"優惠價： "+(0,i.zw)(t.$filters.currency(U.cart.final_total))+" 元",1)])):(0,s.kq)("",!0),(0,s._)("button",E,[(0,s.Wm)(N,{to:"/order",class:"text-decoration-none text-dark"},{default:(0,s.w5)((()=>[(0,s.Uk)(" 結帳去 "),F])),_:1})])])])])]))]),(0,s.Wm)(O,{ref:"removeItemModal",itemTitle:U.tempItemTitle,onRemoveItem:G.removeItem},null,8,["itemTitle","onRemoveItem"])],64)}const J={class:"modal",tabindex:"-1",ref:"modal"},N={class:"modal-dialog modal-dialog-centered"},O={class:"modal-content"},P=(0,s._)("div",{class:"modal-header"},[(0,s._)("h5",{class:"modal-title"},"刪除行程")],-1),Q={class:"modal-body"},S={class:"modal-footer"},X=(0,s._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function tt(t,e,o,l,n,c){return(0,s.wg)(),(0,s.iD)("div",J,[(0,s._)("div",N,[(0,s._)("div",O,[P,(0,s._)("div",Q,[(0,s._)("p",null,"確定要刪除 "+(0,i.zw)(o.itemTitle)+" 嗎？",1)]),(0,s._)("div",S,[X,(0,s._)("button",{type:"button",class:"btn btn-danger",onClick:e[0]||(e[0]=(0,a.iM)((e=>t.$emit("remove-item")),["prevent"]))},"刪除")])])])],512)}var et=o(7972),ot=o.n(et),st={props:["itemTitle"],data(){return{modal:{}}},methods:{showModal(){this.modal.show()},hideModal(){this.modal.hide()}},mounted(){this.modal=new(ot())(this.$refs.modal)}},it=o(89);const at=(0,it.Z)(st,[["render",tt]]);var lt=at,nt={data(){return{cart:{},cartlength:0,tempItem:{},tempItemTitle:"",coupon_code:"",discont:!1,isLoading:!1}},components:{RemoveItemModal:lt},inject:["emitter"],methods:{getCart(){this.isLoading=!0;const t="https://vue3-course-api.hexschool.io/api/yanni-hexschool-api/cart";this.$http.get(t).then((t=>{this.isLoading=!1,console.log(t.data),this.cart=t.data.data,this.cartlength=this.cart.carts.length}))},updateCart(t){this.isLoading=!0;const e={product_id:t.id,qty:t.qty},o=`https://vue3-course-api.hexschool.io/api/yanni-hexschool-api/cart/${t.id}`;this.$http.put(o,{data:e}).then((t=>{this.isLoading=!1,console.log(t.data),this.getCart()}))},openRemoveModal(t){this.tempItem=t,this.tempItemTitle=t.product.title,this.$refs.removeItemModal.showModal()},removeItem(){this.isLoading=!0,console.log(this.tempItem);const t=`https://vue3-course-api.hexschool.io/api/yanni-hexschool-api/cart/${this.tempItem.id}`;this.$http.delete(t).then((t=>{this.isLoading=!1,console.log(t.data),this.$refs.removeItemModal.hideModal(),this.emitter.emit("get-cart"),this.getCart()}))},addCoupon(){const t={code:this.coupon_code},e="https://vue3-course-api.hexschool.io/api/yanni-hexschool-api/coupon";this.$http.post(e,{data:t}).then((t=>{t.data.success&&(console.log(t.data),this.discont=!0),this.getCart()}))}},created(){this.getCart()}};const ct=(0,it.Z)(nt,[["render",G]]);var dt=ct}}]);
//# sourceMappingURL=630.59995a8b.js.map