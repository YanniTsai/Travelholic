"use strict";(self["webpackChunktravelholic"]=self["webpackChunktravelholic"]||[]).push([[235],{8892:function(t,e,a){a.d(e,{Z:function(){return y}});var l=a(3396),i=a(7139),o=a(9242);const s={class:"modal",tabindex:"-1",ref:"modal"},d={class:"modal-dialog"},n={class:"modal-content"},r={class:"modal-header bg-danger text-white"},c={class:"modal-title"},p=["disabled"],u={class:"modal-body"},m={class:"modal-footer"},h=["disabled"],g=["disabled"];function b(t,e,a,b,_,v){return(0,l.wg)(),(0,l.iD)("div",s,[(0,l._)("div",d,[(0,l._)("div",n,[(0,l._)("div",r,[(0,l._)("h5",c,"是否刪除 "+(0,i.zw)(a.title),1),(0,l._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",disabled:_.btnDisabled},null,8,p)]),(0,l._)("div",u,[(0,l._)("p",null,"確定要刪除 "+(0,i.zw)(a.title)+" 嗎？（刪除後無法恢復）",1)]),(0,l._)("div",m,[(0,l._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal",disabled:_.btnDisabled}," 取消 ",8,h),(0,l._)("button",{type:"button",class:"btn btn-danger",disabled:_.btnDisabled,onClick:e[0]||(e[0]=(0,o.iM)(((...t)=>v.deleteItem&&v.deleteItem(...t)),["prevent"]))},"確認刪除",8,g)])])])],512)}var _=a(7972),v=a.n(_),f={props:["title"],data(){return{modal:{},btnDisabled:!1}},methods:{showModal(){this.btnDisabled=!1,this.modal.show()},hideModal(){this.modal.hide()},deleteItem(){this.btnDisabled=!0,this.$emit("delete-item")}},mounted(){this.modal=new(v())(this.$refs.modal)}},P=a(89);const w=(0,P.Z)(f,[["render",b]]);var y=w},6832:function(t,e,a){a.d(e,{Z:function(){return w}});var l=a(3396),i=a(7139),o=a(9242);const s={"aria-label":"Page navigation"},d={class:"pagination justify-content-center"},n=(0,l._)("span",{"aria-hidden":"true"},"«",-1),r=[n],c=(0,l._)("span",{"aria-hidden":"true"},"‹",-1),p=[c],u=["onClick"],m=(0,l._)("span",{"aria-hidden":"true"},"›",-1),h=[m],g=(0,l._)("span",{"aria-hidden":"true"},"»",-1),b=[g];function _(t,e,a,n,c,m){return(0,l.wg)(),(0,l.iD)("nav",s,[(0,l._)("ul",d,[(0,l._)("li",{class:(0,i.C_)(["page-item",{disabled:!a.pagination.has_pre}])},[(0,l._)("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:e[0]||(e[0]=(0,o.iM)((t=>m.updatePage(1)),["prevent"]))},r)],2),(0,l._)("li",{class:(0,i.C_)(["page-item",{disabled:!a.pagination.has_pre}])},[(0,l._)("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:e[1]||(e[1]=(0,o.iM)((t=>m.updatePage(a.pagination.current_page-1)),["prevent"]))},p)],2),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.pagination.total_pages,(t=>((0,l.wg)(),(0,l.iD)("li",{class:"page-item",key:t},[(0,l._)("a",{class:(0,i.C_)(["page-link",{active:t===a.pagination.current_page}]),href:"#",onClick:(0,o.iM)((e=>m.updatePage(t)),["prevent"])},(0,i.zw)(t),11,u)])))),128)),(0,l._)("li",{class:(0,i.C_)(["page-item",{disabled:!a.pagination.has_next}])},[(0,l._)("a",{class:"page-link",href:"#","aria-label":"Next",onClick:e[2]||(e[2]=(0,o.iM)((t=>m.updatePage(a.pagination.current_page+1)),["prevent"]))},h)],2),(0,l._)("li",{class:(0,i.C_)(["page-item",{disabled:!a.pagination.has_next}])},[(0,l._)("a",{class:"page-link",href:"#","aria-label":"Next",onClick:e[3]||(e[3]=(0,o.iM)((t=>m.updatePage(a.pagination.total_pages)),["prevent"]))},b)],2)])])}var v={props:{pagination:{type:Object}},methods:{updatePage(t){this.$emit("update-page",t)}}},f=a(89);const P=(0,f.Z)(v,[["render",_]]);var w=P},6235:function(t,e,a){a.r(e),a.d(e,{default:function(){return wt}});var l=a(3396),i=a(9242),o=a(7139);const s={class:"text-end"},d={class:"table mt-3"},n=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",{class:"col-2"},"商品圖"),(0,l._)("th",{class:"col-4"},"商品名稱"),(0,l._)("th",{class:"col-1"},"商品類別"),(0,l._)("th",{class:"col-1 text-end"},"原價"),(0,l._)("th",{class:"col-1 text-end"},"售價"),(0,l._)("th",{class:"col-1 text-center"},"是否啟用"),(0,l._)("th",{class:"col-2"},"編輯")])],-1),r=["src","alt"],c={class:"text-end"},p={class:"text-end"},u={class:"text-center"},m={key:0,class:"text-success"},h={key:1,class:"text-secondary"},g=["onClick"],b=["onClick"];function _(t,e,a,_,v,f){const P=(0,l.up)("Loading"),w=(0,l.up)("ProductModal"),y=(0,l.up)("DeleteModal"),k=(0,l.up)("Pagination");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(P,{active:v.isLoading,style:{"z-index":"9999"}},null,8,["active"]),(0,l._)("div",s,[(0,l._)("button",{class:"btn btn-primary",onClick:e[0]||(e[0]=(0,i.iM)((t=>f.openModal(!0)),["prevent"]))},"新增產品")]),(0,l._)("table",d,[n,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(v.products,(t=>((0,l.wg)(),(0,l.iD)("tr",{key:t.id},[(0,l._)("td",null,[(0,l._)("img",{src:t.imageUrl,alt:t.title,class:"w-100"},null,8,r)]),(0,l._)("td",null,(0,o.zw)(t.title),1),(0,l._)("td",null,(0,o.zw)(t.category),1),(0,l._)("td",c,(0,o.zw)(t.origin_price),1),(0,l._)("td",p,(0,o.zw)(t.price),1),(0,l._)("td",u,[t.is_enabled?((0,l.wg)(),(0,l.iD)("span",m,"啟用")):((0,l.wg)(),(0,l.iD)("span",h,"未啟用"))]),(0,l._)("td",null,[(0,l._)("button",{class:"btn btn-outline-primary btn-sm",onClick:(0,i.iM)((e=>f.openModal(!1,t)),["prevent"])},"編輯",8,g),(0,l._)("button",{class:"btn btn-outline-danger btn-sm",onClick:(0,i.iM)((e=>f.openDeleteModal(t)),["prevent"])},"刪除",8,b)])])))),128))])]),(0,l.Wm)(w,{ref:"productModal",product:v.tempProduct,onUpdateProduct:f.updateProduct},null,8,["product","onUpdateProduct"]),(0,l.Wm)(y,{ref:"deleteModal",title:v.tempProduct.title,onDeleteItem:f.deleteProduct},null,8,["title","onDeleteItem"]),(0,l.Wm)(k,{pagination:v.pagination,onUpdatePage:f.getProducts},null,8,["pagination","onUpdatePage"])],64)}a(7658);const v={class:"modal",tabindex:"-1",ref:"modal"},f={class:"modal-dialog modal-xl modal-dialog-scrollable"},P={class:"modal-content"},w=(0,l._)("div",{class:"modal-header bg-dark text-white"},[(0,l._)("h5",{class:"modal-title"},"編輯商品"),(0,l._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),y={class:"modal-body"},k={class:"row"},M={class:"col-md-8"},U={class:"mb-2"},x=(0,l._)("label",{for:"title",class:"form-label"},"商品名稱",-1),D={class:"row mb-2"},C={class:"col-md-6 mb-2"},I=(0,l._)("label",{for:"category",class:"form-label"},"商品類別",-1),$=(0,l.uE)('<option value="category" selected disabled>商品類別</option><option value="亞洲">亞洲</option><option value="歐洲">歐洲</option><option value="非洲">非洲</option><option value="北美洲">北美洲</option><option value="南美洲">南美洲</option><option value="大洋洲">大洋洲</option>',7),L=[$],z={class:"col-md-6 mb-2"},q=(0,l._)("label",{for:"unit",class:"form-label"},"購買單位",-1),V=(0,l._)("option",{value:"unit",selected:"",disabled:""},"購買單位",-1),Z=(0,l._)("option",{value:"人"},"人",-1),H=[V,Z],Y={class:"row mb-2"},N={class:"col-md-6 mb-2"},W=(0,l._)("label",{for:"origin_price",class:"form-label"},"原價",-1),j={class:"col-md-6 mb-2"},F=(0,l._)("label",{for:"price",class:"form-label"},"售價",-1),K={class:"mb-2"},O=(0,l._)("label",{for:"description",class:"form-label"},"商品描述",-1),E={class:"mb-2"},A=(0,l._)("label",{for:"content",class:"form-label"},"內容說明",-1),B={class:"col-md-4"},G={class:"mb-2"},J=(0,l._)("label",{for:"imageUrl",class:"form-label"},"商品主圖",-1),Q={class:"input-group"},R={key:0,class:"mt-2"},S=["src"],T=(0,l._)("label",{for:"imagesUrl",class:"form-label"},"其他圖片",-1),X={class:"input-group mb-2"},tt=["onChange"],et=["onClick"],at={class:"text-end"},lt={key:0,class:"mt-2"},it=["src"],ot={class:"modal-footer justify-content-between"},st={class:"form-check"},dt=(0,l._)("label",{class:"form-check-label",for:"is_enabled"}," 啟用商品 ",-1),nt=["disabled"],rt=["disabled"];function ct(t,e,a,o,s,d){const n=(0,l.up)("Loading");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(n,{active:s.isLoading,style:{"z-index":"9999"}},null,8,["active"]),(0,l._)("div",v,[(0,l._)("div",f,[(0,l._)("div",P,[w,(0,l._)("div",y,[(0,l._)("div",k,[(0,l._)("div",M,[(0,l._)("div",U,[x,(0,l.wy)((0,l._)("input",{type:"text",id:"title",class:"form-control",placeholder:"請輸入商品名稱","onUpdate:modelValue":e[0]||(e[0]=t=>s.tempProduct.title=t),required:""},null,512),[[i.nr,s.tempProduct.title]])]),(0,l._)("div",D,[(0,l._)("div",C,[I,(0,l.wy)((0,l._)("select",{id:"category",class:"form-select","onUpdate:modelValue":e[1]||(e[1]=t=>s.tempProduct.category=t),required:""},L,512),[[i.bM,s.tempProduct.category]])]),(0,l._)("div",z,[q,(0,l.wy)((0,l._)("select",{id:"unit",class:"form-select","onUpdate:modelValue":e[2]||(e[2]=t=>s.tempProduct.unit=t),required:""},H,512),[[i.bM,s.tempProduct.unit]])])]),(0,l._)("div",Y,[(0,l._)("div",N,[W,(0,l.wy)((0,l._)("input",{type:"number",id:"origin_price",class:"form-control",placeholder:"請輸入原價","onUpdate:modelValue":e[3]||(e[3]=t=>s.tempProduct.origin_price=t),min:"0",required:""},null,512),[[i.nr,s.tempProduct.origin_price]])]),(0,l._)("div",j,[F,(0,l.wy)((0,l._)("input",{type:"number",id:"price",class:"form-control",placeholder:"請輸入售價","onUpdate:modelValue":e[4]||(e[4]=t=>s.tempProduct.price=t),min:"0",required:""},null,512),[[i.nr,s.tempProduct.price]])])]),(0,l._)("div",K,[O,(0,l.wy)((0,l._)("textarea",{id:"description",class:"form-control",placeholder:"請輸入商品描述","onUpdate:modelValue":e[5]||(e[5]=t=>s.tempProduct.description=t)},null,512),[[i.nr,s.tempProduct.description]])]),(0,l._)("div",E,[A,(0,l.wy)((0,l._)("textarea",{id:"content",class:"form-control",placeholder:"請輸入內容說明","onUpdate:modelValue":e[6]||(e[6]=t=>s.tempProduct.content=t)},null,512),[[i.nr,s.tempProduct.content]])])]),(0,l._)("div",B,[(0,l._)("div",G,[J,(0,l._)("div",Q,[(0,l._)("input",{type:"file",id:"imageUrl",class:"form-control",ref:"imageUrl",onChange:e[7]||(e[7]=t=>d.uploadMainImg("imageUrl"))},null,544),(0,l._)("button",{class:"btn btn-danger",onClick:e[8]||(e[8]=(0,i.iM)(((...t)=>d.deleteMainImg&&d.deleteMainImg(...t)),["prevent"]))},"刪除")]),s.tempProduct.imageUrl?((0,l.wg)(),(0,l.iD)("div",R,[(0,l._)("img",{src:s.tempProduct.imageUrl,alt:"商品主圖",width:"200"},null,8,S)])):(0,l.kq)("",!0)]),(0,l._)("div",null,[T,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(s.tempProduct.imagesUrl,((t,e)=>((0,l.wg)(),(0,l.iD)("div",{key:e},[(0,l._)("div",X,[(0,l._)("input",{type:"file",id:"imagesUrl",class:"form-control",onChange:t=>d.uploadOtherImg(t,e)},null,40,tt),(0,l._)("button",{class:"btn btn-danger",onClick:(0,i.iM)((t=>s.tempProduct.imagesUrl.splice(e,1)),["prevent"])},"刪除",8,et)])])))),128)),(0,l._)("div",at,[(0,l._)("button",{class:"btn btn-primary",onClick:e[9]||(e[9]=(0,i.iM)((t=>s.tempProduct.imagesUrl.push("")),["prevent"]))},"新增其他圖片")]),s.tempProduct.imagesUrl?((0,l.wg)(),(0,l.iD)("div",lt,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(s.tempProduct.imagesUrl,((t,e)=>((0,l.wg)(),(0,l.iD)("div",{key:e},[""!==s.tempProduct.imagesUrl[e]?((0,l.wg)(),(0,l.iD)("img",{key:0,src:s.tempProduct.imagesUrl[e],alt:"商品圖片",width:"200",class:"mb-2"},null,8,it)):(0,l.kq)("",!0)])))),128))])):(0,l.kq)("",!0)])])])]),(0,l._)("div",ot,[(0,l._)("div",st,[(0,l.wy)((0,l._)("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,id:"is_enabled","onUpdate:modelValue":e[10]||(e[10]=t=>s.tempProduct.is_enabled=t)},null,512),[[i.e8,s.tempProduct.is_enabled]]),dt]),(0,l._)("div",null,[(0,l._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal",disabled:s.btnDisabled}," 取消 ",8,nt),(0,l._)("button",{type:"button",class:"btn btn-primary ms-2",disabled:s.btnDisabled,onClick:e[11]||(e[11]=(...t)=>d.updateProduct&&d.updateProduct(...t))},"確認編輯",8,rt)])])])])],512)],64)}var pt=a(7972),ut=a.n(pt),mt={props:{product:{type:Object,default(){return{}}}},data(){return{modal:{},tempProduct:{imageUrl:"",imagesUrl:[]},tempImg:"",isLoading:!1,btnDisabled:!1}},watch:{product(){this.tempProduct=this.product}},emits:["update-product"],methods:{showModal(){this.btnDisabled=!1,this.modal.show()},hideModal(){this.modal.hide()},uploadFile(t){return this.isLoading=!0,new Promise(((e,a)=>{const l=t.files[0],i=new FormData;i.append("file-to-upload",l);const o="https://vue3-course-api.hexschool.io/api/yanni-hexschool-api/admin/upload";this.$http.post(o,i).then((t=>{if(console.log(t.data),t.data.success)this.isLoading=!1,this.tempImg=t.data.imageUrl,e();else{const t=new Error("上傳失敗");a(t)}}))}))},uploadMainImg(t){this.uploadFile(this.$refs[t]).then((()=>{this.tempProduct.imageUrl=this.tempImg,this.tempImg=""}))},uploadOtherImg(t,e){this.uploadFile(t.target).then((()=>{this.tempProduct.imagesUrl[e]=this.tempImg,this.tempImg=""}))},deleteMainImg(){this.tempProduct.imageUrl="",this.$refs.imageUrl.value=""},updateProduct(){this.btnDisabled=!0,this.$emit("update-product",this.tempProduct)}},mounted(){this.modal=new(ut())(this.$refs.modal)}},ht=a(89);const gt=(0,ht.Z)(mt,[["render",ct]]);var bt=gt,_t=a(8892),vt=a(6832),ft={data(){return{products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1}},components:{ProductModal:bt,DeleteModal:_t.Z,Pagination:vt.Z},methods:{getProducts(t=1){this.isLoading=!0;const e=`https://vue3-course-api.hexschool.io/api/yanni-hexschool-api/admin/products/?page=${t}`;this.$http.get(e).then((t=>{this.isLoading=!1,console.log(t.data),this.products=t.data.products,this.pagination=t.data.pagination}))},openModal(t,e){this.tempProduct=t?{imagesUrl:[]}:{...e},this.isNew=t,this.$refs.productModal.showModal()},updateProduct(t){this.isLoading=!0,this.tempProduct=t;let e="https://vue3-course-api.hexschool.io/api/yanni-hexschool-api/admin/product",a="post";this.isNew||(e=`https://vue3-course-api.hexschool.io/api/yanni-hexschool-api/admin/product/${t.id}`,a="put"),this.$http[a](e,{data:this.tempProduct}).then((t=>{this.isLoading=!1,console.log(t.data),this.$refs.productModal.hideModal(),this.getProducts()}))},openDeleteModal(t){this.tempProduct={...t},this.$refs.deleteModal.showModal()},deleteProduct(){this.isLoading=!0;const t=`https://vue3-course-api.hexschool.io/api/yanni-hexschool-api/admin/product/${this.tempProduct.id}`;this.$http.delete(t).then((t=>{this.isLoading=!1,console.log(t.data),this.$refs.deleteModal.hideModal(),this.getProducts()}))}},created(){this.getProducts()}};const Pt=(0,ht.Z)(ft,[["render",_]]);var wt=Pt}}]);
//# sourceMappingURL=235.1aba3c79.js.map