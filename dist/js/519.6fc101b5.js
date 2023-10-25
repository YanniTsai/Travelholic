"use strict";(self["webpackChunktravelholic"]=self["webpackChunktravelholic"]||[]).push([[519],{1519:function(t,e,o){o.r(e),o.d(e,{default:function(){return lt}});var s=o(3396),a=o(7139),l=o(9242);const i={class:"container"},n=(0,s._)("h3",{class:"m-3"},"購物車",-1),c={key:0,class:"d-flex flex-column align-items-center"},d=(0,s._)("div",null,"購物車目前沒有商品！",-1),r={class:"btn yellow-btn"},u={key:1,class:"row"},m={class:"col-md-7 cart-list"},p={class:"mb-3"},h={class:"row"},v=["src","alt"],_={class:"col-md-6"},g={class:"mb-2"},b={class:"fw-light mb-2"},w={class:"col-md-3 d-flex align-items-center"},f={class:"input-group"},y=["onUpdate:modelValue","onChange"],x=(0,s._)("span",{class:"input-group-text bg-white border-0"},"人",-1),k=(0,s._)("hr",null,null,-1),C={class:"d-flex justify-content-between align-items-center"},I=["onClick"],$=(0,s._)("i",{class:"bi bi-trash3"},null,-1),M=[$],z={class:"fw-bold"},L={class:"col-md-5"},D={class:"mt-3 ms-3 mb-3 pt-3"},U=(0,s._)("div",{class:"mb-3"},"套用優惠",-1),q={class:"input-group mb-1"},R={key:0,class:"text-success ms-3"},W=(0,s._)("i",{class:"bi bi-check2-circle"},null,-1),j={class:"d-flex justify-content-end mb-3"},V={class:"mb-2"},H=(0,s._)("span",null,"總計：",-1),Y={key:0},Z={class:"orange-price"},K={class:"btn orange-btn w-100 mt-3"},O=(0,s._)("i",{class:"bi bi-arrow-right"},null,-1);function A(t,e,o,$,A,B){const E=(0,s.up)("Loading"),F=(0,s.up)("router-link"),G=(0,s.up)("RemoveItemModal");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(E,{active:A.isLoading,style:{"z-index":"9999"}},null,8,["active"]),(0,s._)("div",i,[n,0===A.cartlength?((0,s.wg)(),(0,s.iD)("div",c,[d,(0,s._)("button",r,[(0,s.Wm)(F,{to:"/products",class:"text-dark text-decoration-none"},{default:(0,s.w5)((()=>[(0,s.Uk)("探索行程")])),_:1})])])):((0,s.wg)(),(0,s.iD)("div",u,[(0,s._)("div",m,[(0,s._)("div",p,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(A.cart.carts,(e=>((0,s.wg)(),(0,s.iD)("div",{class:"cart-item p-3 m-3",key:e.id},[(0,s._)("div",h,[(0,s._)("img",{src:e.product.imageUrl,alt:e.product.title,class:"col-md-3"},null,8,v),(0,s._)("div",_,[(0,s.Wm)(F,{to:`/products/${e.product.id}`,class:"text-muted text-decoration-none"},{default:(0,s.w5)((()=>[(0,s._)("div",g,(0,a.zw)(e.product.title),1),(0,s._)("div",b,(0,a.zw)(e.product.description),1),(0,s._)("div",null,"$ "+(0,a.zw)(e.product.price),1)])),_:2},1032,["to"])]),(0,s._)("div",w,[(0,s._)("div",f,[(0,s.wy)((0,s._)("input",{type:"number",min:"1",class:"form-control","onUpdate:modelValue":t=>e.qty=t,onChange:t=>B.updateCart(e)},null,40,y),[[l.nr,e.qty,void 0,{number:!0}]]),x])])]),k,(0,s._)("div",C,[(0,s._)("button",{class:"btn",onClick:(0,l.iM)((t=>B.openRemoveModal(e)),["prevent"])},M,8,I),(0,s._)("div",z,"$ "+(0,a.zw)(t.$filters.currency(e.total)),1)])])))),128))])]),(0,s._)("div",L,[(0,s._)("div",D,[U,(0,s._)("div",q,[(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",placeholder:"輸入優惠碼","aria-label":"coupon_code","aria-describedby":"usecoupon","onUpdate:modelValue":e[0]||(e[0]=t=>A.coupon_code=t)},null,512),[[l.nr,A.coupon_code]]),(0,s._)("button",{class:"btn yellow-btn border",type:"button",id:"usecoupon",onClick:e[1]||(e[1]=(0,l.iM)(((...t)=>B.addCoupon&&B.addCoupon(...t)),["prevent"]))},"使用")]),A.discont?((0,s.wg)(),(0,s.iD)("div",R,[(0,s.Uk)("優惠碼："+(0,a.zw)(A.coupon_code)+" ",1),W])):(0,s.kq)("",!0)]),(0,s._)("div",j,[(0,s._)("div",null,[(0,s._)("div",V,(0,a.zw)(A.cartlength)+" 件商品 ",1),(0,s._)("div",{class:(0,a.C_)(["d-flex align-items-center",{"text-secondary":A.discont}])},[H,(0,s._)("span",{class:(0,a.C_)(["fw-bold",{"text-decoration-line-through":A.discont}])},(0,a.zw)(t.$filters.currency(A.cart.total))+" 元",3)],2),A.discont?((0,s.wg)(),(0,s.iD)("div",Y,[(0,s._)("span",Z,"優惠價： "+(0,a.zw)(t.$filters.currency(A.cart.final_total))+" 元",1)])):(0,s.kq)("",!0),(0,s._)("button",K,[(0,s.Wm)(F,{to:"/order",class:"text-decoration-none text-dark"},{default:(0,s.w5)((()=>[(0,s.Uk)(" 結帳去 "),O])),_:1})])])])])]))]),(0,s.Wm)(G,{ref:"removeItemModal",cartItem:A.tempItem,onRemoveItem:B.removeItem},null,8,["cartItem","onRemoveItem"])],64)}const B={class:"modal",tabindex:"-1",ref:"modal"},E={class:"modal-dialog modal-dialog-centered"},F={class:"modal-content"},G=(0,s._)("div",{class:"modal-header"},[(0,s._)("h5",{class:"modal-title"},"刪除行程")],-1),J={class:"modal-body"},N={class:"modal-footer"},P=(0,s._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Q(t,e,o,i,n,c){return(0,s.wg)(),(0,s.iD)("div",B,[(0,s._)("div",E,[(0,s._)("div",F,[G,(0,s._)("div",J,[(0,s._)("p",null,"確定要刪除 "+(0,a.zw)(o.cartItem.title)+" 嗎？",1)]),(0,s._)("div",N,[P,(0,s._)("button",{type:"button",class:"btn btn-danger",onClick:e[0]||(e[0]=(0,l.iM)((e=>t.$emit("remove-item")),["prevent"]))},"刪除")])])])],512)}var S=o(7972),T=o.n(S),X={props:{cartItem:{type:Object}},data(){return{modal:{}}},methods:{showModal(){this.modal.show()},hideModal(){this.modal.hide()}},mounted(){this.modal=new(T())(this.$refs.modal)}},tt=o(89);const et=(0,tt.Z)(X,[["render",Q]]);var ot=et,st={data(){return{cart:{},cartlength:0,tempItem:{},coupon_code:"",discont:!1,isLoading:!1}},components:{RemoveItemModal:ot},watch:{cart(){this.cartlength=this.cart.carts.length}},methods:{getCart(){this.isLoading=!0;const t="https://vue3-course-api.hexschool.io/api/yanni-hexschool-api/cart";this.$http.get(t).then((t=>{this.isLoading=!1,console.log(t.data),this.cart=t.data.data}))},updateCart(t){this.isLoading=!0;const e={product_id:t.id,qty:t.qty},o=`https://vue3-course-api.hexschool.io/api/yanni-hexschool-api/cart/${t.id}`;this.$http.put(o,{data:e}).then((t=>{this.isLoading=!1,console.log(t.data),this.getCart()}))},openRemoveModal(t){this.tempItem=t,this.$refs.removeItemModal.showModal()},removeItem(){this.isLoading=!0,console.log(this.tempItem);const t=`https://vue3-course-api.hexschool.io/api/yanni-hexschool-api/cart/${this.tempItem.id}`;this.$http.delete(t).then((t=>{this.isLoading=!1,console.log(t.data),this.$refs.removeItemModal.hideModal(),this.getCart()}))},addCoupon(){const t={code:this.coupon_code},e="https://vue3-course-api.hexschool.io/api/yanni-hexschool-api/coupon";this.$http.post(e,{data:t}).then((t=>{t.data.success&&(console.log(t.data),this.discont=!0),this.getCart()}))}},created(){this.getCart()}};const at=(0,tt.Z)(st,[["render",A]]);var lt=at}}]);
//# sourceMappingURL=519.6fc101b5.js.map