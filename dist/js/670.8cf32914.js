"use strict";(self["webpackChunktravelholic"]=self["webpackChunktravelholic"]||[]).push([[670],{135:function(e,a,s){s.r(a),s.d(a,{default:function(){return I}});var l=s(3396),t=s(7139),c=s(9242),o=s.p+"img/orderInfo-banner.c3cd6cde.jpeg";const r=(0,l._)("div",{class:"banner mb-5"},[(0,l._)("img",{src:o,alt:"訂購人資訊"}),(0,l._)("div",{class:"banner-title p-3"},[(0,l._)("h5",{class:"m-2"},"確認訂單")])],-1),i={class:"container"},d={class:"row"},n={class:"col-md-8"},m=(0,l._)("div",{class:"mb-3 info-title"},[(0,l._)("i",{class:"bi bi-person"}),(0,l.Uk)(" 訂購人資訊")],-1),u={class:"mb-3"},p=(0,l._)("label",{for:"name",class:"form-label"},[(0,l._)("span",{class:"text-danger"},"*"),(0,l.Uk)("訂購人姓名")],-1),_={class:"mb-3"},f=(0,l._)("label",{for:"email",class:"form-label"},[(0,l._)("span",{class:"text-danger"},"*"),(0,l.Uk)("Email")],-1),h={class:"mb-3"},b=(0,l._)("label",{for:"tel",class:"form-label"},[(0,l._)("span",{class:"text-danger"},"*"),(0,l.Uk)("聯絡電話")],-1),v={class:"mb-3"},g=(0,l._)("label",{for:"address",class:"form-label"},[(0,l._)("span",{class:"text-danger"},"*"),(0,l.Uk)("地址")],-1),k={class:"mb-3"},w=(0,l._)("label",{for:"message",class:"form-label"},"訂單備註",-1),x=(0,l._)("div",{class:"text-end"},[(0,l._)("button",{class:"btn orange-btn"},"送出訂單")],-1),V={class:"col-md-4"},y=(0,l._)("div",{class:"mb-3 info-title"},[(0,l._)("i",{class:"bi bi-bag-check"}),(0,l.Uk)(" 訂購內容")],-1),U={class:"table my-3"},W=(0,l._)("tr",null,[(0,l._)("th",{class:"col-7"},"商品名稱"),(0,l._)("th",{class:"col-2 text-center"},"數量"),(0,l._)("th",{class:"col-3 text-end"},"金額")],-1),$={class:"text-center"},C={class:"text-end"},z={key:0,class:"mb-3"},q={class:"text-success"},E={class:"text-end mb-3"},D={key:0,class:"orange-price"};function L(e,a,s,o,L,j){const F=(0,l.up)("Loading"),H=(0,l.up)("Field"),I=(0,l.up)("ErrorMessage"),O=(0,l.up)("VForm");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(F,{active:e.isLoading,style:{"z-index":"9999"}},null,8,["active"]),r,(0,l._)("div",i,[(0,l._)("div",d,[(0,l._)("div",n,[m,(0,l.Wm)(O,{class:"col-md-10 my-3",onSubmit:j.createOrder},{default:(0,l.w5)((({errors:e})=>[(0,l._)("div",u,[p,(0,l.Wm)(H,{id:"name",name:"訂購人姓名",class:(0,t.C_)(["form-control",{"is-invalid":e["訂購人姓名"]}]),placeholder:"請輸入姓名",rules:"required",modelValue:L.form.user.name,"onUpdate:modelValue":a[0]||(a[0]=e=>L.form.user.name=e)},null,8,["class","modelValue"]),(0,l.Wm)(I,{name:"訂購人姓名",class:"invalid-feedback"})]),(0,l._)("div",_,[f,(0,l.Wm)(H,{id:"email",name:"Email",class:(0,t.C_)(["form-control",{"is-invalid":e["Email"]}]),placeholder:"請輸入Email",rules:"required|email",modelValue:L.form.user.email,"onUpdate:modelValue":a[1]||(a[1]=e=>L.form.user.email=e)},null,8,["class","modelValue"]),(0,l.Wm)(I,{name:"Email",class:"invalid-feedback"})]),(0,l._)("div",h,[b,(0,l.Wm)(H,{id:"tel",name:"聯絡電話",class:(0,t.C_)(["form-control",{"is-invalid":e["聯絡電話"]}]),placeholder:"請輸入手機號碼",rules:"required",modelValue:L.form.user.tel,"onUpdate:modelValue":a[2]||(a[2]=e=>L.form.user.tel=e)},null,8,["class","modelValue"]),(0,l.Wm)(I,{name:"聯絡電話",class:"invalid-feedback"})]),(0,l._)("div",v,[g,(0,l.Wm)(H,{id:"address",name:"地址",class:(0,t.C_)(["form-control",{"is-invalid":e["地址"]}]),placeholder:"請輸入地址",rules:"required",modelValue:L.form.user.address,"onUpdate:modelValue":a[3]||(a[3]=e=>L.form.user.address=e)},null,8,["class","modelValue"]),(0,l.Wm)(I,{name:"地址",class:"invalid-feedback"})]),(0,l._)("div",k,[w,(0,l.wy)((0,l._)("textarea",{id:"message",class:"form-control",cols:"20",rows:"10","onUpdate:modelValue":a[4]||(a[4]=e=>L.form.message=e)},null,512),[[c.nr,L.form.message]])]),x])),_:1},8,["onSubmit"])]),(0,l._)("div",V,[y,(0,l._)("table",U,[W,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(L.cart.carts,(a=>((0,l.wg)(),(0,l.iD)("tr",{key:a.id,class:"lh-lg"},[(0,l._)("td",null,(0,t.zw)(a.product.title),1),(0,l._)("td",$,(0,t.zw)(a.qty),1),(0,l._)("td",C,"$ "+(0,t.zw)(e.$filters.currency(a.product.price)),1)])))),128))]),L.coupon_code?((0,l.wg)(),(0,l.iD)("div",z,[(0,l._)("div",q,"已使用優惠碼： "+(0,t.zw)(L.coupon_code)+" （整單"+(0,t.zw)(L.coupon_percent/10)+"折）",1)])):(0,l.kq)("",!0),(0,l._)("div",E,[(0,l._)("div",{class:(0,t.C_)({"origin-price":L.coupon_code})},"訂單總金額： $ "+(0,t.zw)(e.$filters.currency(L.cart.total)),3),L.coupon_code?((0,l.wg)(),(0,l.iD)("div",D,"訂單總金額： $ "+(0,t.zw)(e.$filters.currency(L.cart.final_total)),1)):(0,l.kq)("",!0)])])])])],64)}s(7658);var j={data(){return{cart:{},coupon_code:"",coupon_percent:0,form:{user:{name:"",email:"",tel:"",address:""},message:""}}},inject:["emitter"],methods:{getCart(){this.isLoading=!0;const e="https://vue3-course-api.hexschool.io/api/yanni-hexschool-api/cart";this.$http.get(e).then((e=>{this.isLoading=!1,console.log(e.data),this.cart=e.data.data,e.data.data.carts[0].coupon&&(this.coupon_code=e.data.data.carts[0].coupon.code,this.coupon_percent=e.data.data.carts[0].coupon.percent)}))},createOrder(){const e="https://vue3-course-api.hexschool.io/api/yanni-hexschool-api/order",a=this.form;this.$http.post(e,{data:a}).then((e=>{console.log(e.data),this.$router.push(`/checkout/${e.data.orderId}`),this.emitter.emit("get-cart")}))}},created(){this.getCart()}},F=s(89);const H=(0,F.Z)(j,[["render",L]]);var I=H}}]);
//# sourceMappingURL=670.8cf32914.js.map