<template>
  <Loading :active="isLoading" style="z-index: 9999"></Loading>
  <table class="table mt-3">
    <thead>
      <tr>
        <th>下單時間</th>
        <th>訂單編號</th>
        <th>訂購人Email</th>
        <th>訂購項目</th>
        <th class="text-end">應付金額</th>
        <th>編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, key) in orders" :key="key">
        <td>{{ $filters.date(item.create_at) }}</td>
        <td>{{ item.id }}</td>
        <td>{{ item.user.email }}</td>
        <td>
          <ul>
            <li v-for="(product, p_key) in item.products" :key="p_key">
              {{ product.product.title }}：{{ product.qty }}
              {{ product.product.unit }}
            </li>
          </ul>
        </td>
        <td class="text-end">{{ $filters.currency(item.total) }}</td>
        <td>
          <button class="btn btn-outline-primary btn-sm" @click.prevent="openModal(item)">檢視</button>
          <button
            class="btn btn-outline-danger btn-sm"
            @click="openDeleteModal(item)"
          >
            刪除
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  <OrderModal ref="orderModal" :order="tempOrder"></OrderModal>
  <DeleteModal
    ref="deleteModal"
    :title="`訂單編號：${tempOrder.id}`"
    @delete-item="deleteOrder"
  ></DeleteModal>
  <Pagination :pagination="pagination" @update-page="getOrders"></Pagination>
</template>

<script>
import OrderModal from '../../components/admin/OrderModal.vue'
import DeleteModal from '../../components/admin/DeleteModal.vue'
import Pagination from '../../components/admin/Pagination.vue'

export default {
  data () {
    return {
      orders: {},
      pagination: {},
      tempOrder: {},
      isLoading: false
    }
  },
  components: {
    OrderModal,
    DeleteModal,
    Pagination
  },
  methods: {
    getOrders (page = 1) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders/?page=${page}`

      this.$http.get(api).then((res) => {
        this.isLoading = false

        console.log(res.data)
        this.orders = res.data.orders
        this.pagination = res.data.pagination
      })
    },
    openModal (item) {
      this.tempOrder = { ...item }

      this.$refs.orderModal.showModal()
    },
    openDeleteModal (item) {
      this.tempOrder = { ...item }

      this.$refs.deleteModal.showModal()
    },
    deleteOrder () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`

      this.$http.delete(api).then((res) => {
        this.isLoading = false

        console.log(res)

        this.$refs.deleteModal.hideModal()
        this.getOrders()
      })
    }
  },
  created () {
    this.getOrders()
  }
}
</script>
