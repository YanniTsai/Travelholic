<template>
  <Loading :active="isLoading" style="z-index: 9999"></Loading>
  <div class="modal" tabindex="-1" ref="modal">
    <div class="modal-dialog modal-xl modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title">編輯商品</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <!-- 文字區 -->
            <div class="col-md-8">
              <div class="mb-2">
                <label for="title" class="form-label">商品名稱</label>
                <input
                  type="text"
                  id="title"
                  class="form-control"
                  placeholder="請輸入商品名稱"
                  v-model="tempProduct.title"
                  required
                />
              </div>
              <div class="row mb-2">
                <div class="col-md-6 mb-2">
                  <label for="category" class="form-label">商品類別</label>
                  <select
                    id="category"
                    class="form-select"
                    v-model="tempProduct.category"
                    required
                  >
                    <option value="category" selected disabled>商品類別</option>
                    <option value="亞洲">亞洲</option>
                    <option value="歐洲">歐洲</option>
                    <option value="非洲">非洲</option>
                    <option value="北美洲">北美洲</option>
                    <option value="南美洲">南美洲</option>
                    <option value="大洋洲">大洋洲</option>
                  </select>
                </div>
                <div class="col-md-6 mb-2">
                  <label for="unit" class="form-label">購買單位</label>
                  <select
                    id="unit"
                    class="form-select"
                    v-model="tempProduct.unit"
                    required
                  >
                    <option value="unit" selected disabled>購買單位</option>
                    <option value="人">人</option>
                  </select>
                </div>
              </div>
              <div class="row mb-2">
                <div class="col-md-6 mb-2">
                  <label for="origin_price" class="form-label">原價</label>
                  <input
                    type="number"
                    id="origin_price"
                    class="form-control"
                    placeholder="請輸入原價"
                    v-model="tempProduct.origin_price"
                    min="0"
                    required
                  />
                </div>
                <div class="col-md-6 mb-2">
                  <label for="price" class="form-label">售價</label>
                  <input
                    type="number"
                    id="price"
                    class="form-control"
                    placeholder="請輸入售價"
                    v-model="tempProduct.price"
                    min="0"
                    required
                  />
                </div>
              </div>
              <div class="mb-2">
                <label for="description" class="form-label">商品描述</label>
                <textarea
                  id="description"
                  class="form-control"
                  placeholder="請輸入商品描述"
                  v-model="tempProduct.description"
                ></textarea>
              </div>
              <div class="mb-2">
                <label for="content" class="form-label">內容說明</label>
                <textarea
                  id="content"
                  class="form-control"
                  placeholder="請輸入內容說明"
                  v-model="tempProduct.content"
                ></textarea>
              </div>
            </div>
            <!-- 圖片區 -->
            <div class="col-md-4">
              <div class="mb-2">
                <label for="imageUrl" class="form-label">商品主圖</label>
                <div class="input-group">
                    <input
                      type="file"
                      id="imageUrl"
                      class="form-control"
                      ref="imageUrl"
                      @change="uploadMainImg('imageUrl')"
                    />
                    <button class="btn btn-danger" @click.prevent="deleteMainImg">刪除</button>
                </div>
                <div class="mt-2" v-if="tempProduct.imageUrl">
                  <img :src="tempProduct.imageUrl" alt="商品主圖" width="200" />
                </div>
              </div>
              <div>
                <label for="imagesUrl" class="form-label">其他圖片</label>
                <div v-for="(item, key) in tempProduct.imagesUrl" :key="key">
                  <div class="input-group mb-2">
                    <input
                      type="file"
                      id="imagesUrl"
                      class="form-control"
                      @change="uploadOtherImg($event, key)"
                    />
                    <button class="btn btn-danger" @click.prevent="tempProduct.imagesUrl.splice(key, 1)">刪除</button>
                  </div>
                </div>
                <div class="text-end">
                  <button class="btn btn-primary" @click.prevent="tempProduct.imagesUrl.push('')">新增其他圖片</button>
                </div>
                <div class="mt-2" v-if="tempProduct.imagesUrl">
                  <div v-for="(item, key) in tempProduct.imagesUrl" :key="key">
                    <img
                      :src="tempProduct.imagesUrl[key]"
                      alt="商品圖片"
                      width="200"
                      class="mb-2"
                      v-if="tempProduct.imagesUrl[key] !== ''"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer justify-content-between">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              :true-value="1"
              :false-value="0"
              id="is_enabled"
              v-model="tempProduct.is_enabled"
            />
            <label class="form-check-label" for="is_enabled">
              啟用商品
            </label>
          </div>
          <div>
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              :disabled="btnDisabled"
            >
              取消
            </button>
            <button type="button" class="btn btn-primary ms-2" :disabled="btnDisabled" @click="updateProduct">確認編輯</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'

export default {
  props: {
    product: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      modal: {},
      tempProduct: {
        imageUrl: '',
        imagesUrl: []
      },
      tempImg: '',
      isLoading: false,
      btnDisabled: false
    }
  },
  watch: {
    product () {
      this.tempProduct = this.product
    }
  },
  emits: ['update-product'],
  methods: {
    showModal () {
      this.btnDisabled = false
      this.modal.show()
    },
    hideModal () {
      this.modal.hide()
    },
    uploadFile (inputElement) {
      this.isLoading = true

      return new Promise((resolve, reject) => {
        const uploadedFile = inputElement.files[0]
        // console.dir(uploadedFile)

        const formData = new FormData()
        formData.append('file-to-upload', uploadedFile)

        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`
        this.$http.post(api, formData).then((res) => {
          console.log(res.data)

          if (res.data.success) {
            this.isLoading = false
            this.tempImg = res.data.imageUrl
            resolve()
          } else {
            const error = new Error('上傳失敗')
            reject(error)
          }
        })
      })
    },
    uploadMainImg (input) {
      this.uploadFile(this.$refs[input]).then(() => {
        this.tempProduct.imageUrl = this.tempImg
        // console.log('主圖：', this.tempProduct.imageUrl)
        this.tempImg = ''
      })
    },
    uploadOtherImg (input, key) {
      this.uploadFile(input.target).then(() => {
        this.tempProduct.imagesUrl[key] = this.tempImg
        // console.log('其他圖：', this.tempProduct.imagesUrl)
        this.tempImg = ''
      })
    },
    deleteMainImg () {
      this.tempProduct.imageUrl = ''
      this.$refs.imageUrl.value = ''
    },
    updateProduct () {
      this.btnDisabled = true
      this.$emit('update-product', this.tempProduct)
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.modal)
  }
}
</script>
