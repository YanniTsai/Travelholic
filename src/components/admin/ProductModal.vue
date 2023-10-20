<template>
  <div class="modal" tabindex="-1" ref="modal">
    <div class="modal-dialog modal-xl modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title">新增商品</h5>
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
                    <option value="Japan">日本</option>
                    <option value="Thailand">泰國</option>
                    <option value="Philippines">菲律賓</option>
                    <option value="Indonesia">印尼</option>
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
                    <option value="people">人</option>
                  </select>
                </div>
              </div>
              <div class="row mb-2">
                <div class="col-md-6 mb-2">
                  <label for="origin_price" class="form-label">原價</label>
                  <input
                    type="text"
                    id="origin_price"
                    class="form-control"
                    placeholder="請輸入原價"
                    v-model="tempProduct.origin_price"
                    required
                  />
                </div>
                <div class="col-md-6 mb-2">
                  <label for="price" class="form-label">售價</label>
                  <input
                    type="text"
                    id="price"
                    class="form-control"
                    placeholder="請輸入售價"
                    v-model="tempProduct.price"
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
                <input
                  type="file"
                  id="imageUrl"
                  class="form-control"
                  ref="imageUrl"
                  @change="uploadMainImg($refs.imageUrl)"
                />
                <div class="mt-2" v-if="tempProduct.imageUrl">
                  <img :src="tempProduct.imageUrl" alt="商品主圖" width="200" />
                </div>
              </div>
              <div>
                <label for="imagesUrl" class="form-label">其他圖片</label>
                <div>
                  <input
                    type="file"
                    id="imageUrl"
                    class="form-control"
                    ref="imagesUrl"
                    @change="uploadOtherImg($refs.imagesUrl)"
                  />
                </div>
                <div class="mt-2" v-if="tempProduct.imagesUrl">
                  <div v-for="(item, key) in tempProduct.imagesUrl" :key="key">
                    <img
                      :src="tempProduct.imagesUrl[key]"
                      alt="商品圖片"
                      width="200"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 是否啟用 -->
          <div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="is_enabled"
                  id="is_enabled"
                  v-model="tempProduct.is_enabled"
                />
                <label class="form-check-label" for="is_enabled">
                  啟用商品
                </label>
              </div>
            </div>
          </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn btn-primary">確認編輯</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'

export default {
  data () {
    return {
      modal: {},
      tempProduct: {
        imagesUrl: []
      },
      tempImg: ''
    }
  },
  methods: {
    showModal () {
      this.modal.show()
    },
    hideModal () {
      this.modal.hide()
    },
    uploadFile (inputElement) {
      return new Promise((resolve, reject) => {
        const uploadedFile = inputElement.files[0]
        // console.dir(uploadedFile)

        const formData = new FormData()
        formData.append('file-to-upload', uploadedFile)

        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`
        this.$http.post(api, formData).then((res) => {
          console.log(res.data)

          if (res.data.success) {
            this.tempImg = res.data.imageUrl
            resolve()
          } else {
            const error = new Error('上傳失敗')
            reject(error)
          }
        })
      })
    },
    uploadMainImg (inputElement) {
      this.uploadFile(inputElement).then(() => {
        this.tempProduct.imageUrl = this.tempImg
        console.log('主圖：', this.tempProduct.imageUrl)
        this.tempImg = ''
      })
    },
    uploadOtherImg (inputElement) {
      this.uploadFile(inputElement).then(() => {
        this.tempProduct.imagesUrl.push(this.tempImg)
        console.log('其他圖：', this.tempProduct.imagesUrl)
        this.tempImg = ''
      })
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.modal)
  }
}
</script>
