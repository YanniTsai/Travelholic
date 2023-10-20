<template>
  <div class="modal" tabindex="-1" ref="modal">
    <div class="modal-dialog modal-lg modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">檢視訂單</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <!-- 訂購人資訊 -->
            <div class="col-md-4 mb-3">
              <h5>訂購人資訊</h5>
              <table class="table">
                <tbody v-if="tempOrder.user">
                  <tr>
                    <th>姓名：</th>
                    <td>{{ tempOrder.user.name }}</td>
                  </tr>
                  <tr>
                    <th>Email：</th>
                    <td>{{ tempOrder.user.email }}</td>
                  </tr>
                  <tr>
                    <th>電話：</th>
                    <td>{{ tempOrder.user.tel }}</td>
                  </tr>
                  <tr>
                    <th>地址：</th>
                    <td>{{ tempOrder.user.address }}</td>
                  </tr>
                  <tr>
                    <th>留言：</th>
                    <td>{{ tempOrder.message }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- 訂單細節 -->
            <div class="col-md-8">
                <!-- 訂單資訊 -->
                <div class="mb-3">
                    <h5>訂單資訊</h5>
                    <table class="table">
                        <tbody>
                            <tr>
                                <th>訂單編號</th>
                                <td>{{ tempOrder.id }}</td>
                            </tr>
                            <tr>
                                <th>下單時間</th>
                                <td>{{ $filters.date(tempOrder.create_at) }}</td>
                            </tr>
                            <tr>
                                <th>付款時間</th>
                                <td>{{ $filters.date(tempOrder.paid_date) }}</td>
                            </tr>
                            <tr>
                                <th>付款狀態</th>
                                <td class="text-success" v-if="tempOrder.is_paid">已付款</td>
                                <td class="text-danger" v-else>尚未付款</td>
                            </tr>
                            <tr>
                                <th>訂單總金額</th>
                                <td>{{ $filters.currency(tempOrder.total) }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- 訂購商品 -->
                <div class="mb-3">
                    <h5>訂購商品</h5>
                    <table class="table">
                        <tbody>
                            <tr>
                                <th>商品名稱</th>
                                <th>商品數量</th>
                                <th>金額</th>
                            </tr>
                            <tr v-for="item in tempOrder.products" :key="item.id">
                                <td>{{ item.product.title }}</td>
                                <td>{{ item.qty }}</td>
                                <td>{{ $filters.currency(item.product.price) }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
          </div>
        </div>
        <!-- <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'

export default {
  props: {
    order: {
      type: Object
    }
  },
  data () {
    return {
      modal: {},
      tempOrder: {}
    }
  },
  watch: {
    order () {
      this.tempOrder = this.order
    }
  },
  methods: {
    showModal () {
      this.modal.show()
    },
    hideModal () {
      this.modal.hide()
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.modal)
  }
}
</script>
