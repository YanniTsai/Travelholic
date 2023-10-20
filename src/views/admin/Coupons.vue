<template>
  <Loading :active="isLoading" style="z-index: 9999"></Loading>
  <div class="text-end mt-3">
    <button class="btn btn-primary" @click.prevent="openModal(true)">新增優惠券</button>
  </div>
  <table class="table">
    <thead>
      <tr>
        <th>優惠券名稱</th>
        <th>優惠碼</th>
        <th>折扣百分比</th>
        <th>到期日</th>
        <th>啟用</th>
        <th>編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, key) in coupons" :key="key">
        <td>{{ item.title }}</td>
        <td>{{ item.code }}</td>
        <td>{{ item.percent }}</td>
        <td>{{ new Date(item.due_date * 1000).toLocaleDateString() }}</td>
        <td>
            <span class="text-success" v-if="item.is_enabled">啟用</span>
            <span class="text-secondary" v-else>未啟用</span>
        </td>
        <td>
          <button class="btn btn-outline-primary" @click.prevent="openModal(false, item)">編輯</button>
          <button class="btn btn-outline-danger" @click.prevent="openDeleteModal(item)">刪除</button>
        </td>
      </tr>
    </tbody>
  </table>
  <CouponModal ref="couponModal" :coupon="tempCoupon" @update-coupon="updateCoupon"></CouponModal>
  <DeleteModal ref="deleteModal" :title="tempCoupon.title" @delete-item="deleteCoupon"></DeleteModal>
  <Pagination :pagination="pagination" @update-page="getCoupons"></Pagination>
</template>

<script>
import CouponModal from '../../components/admin/CouponModal.vue'
import DeleteModal from '../../components/admin/DeleteModal.vue'
import Pagination from '../../components/admin/Pagination.vue'

export default {
  data () {
    return {
      coupons: {},
      pagination: {},
      tempCoupon: {},
      isLoading: false,
      isNew: false
    }
  },
  components: {
    CouponModal,
    DeleteModal,
    Pagination
  },
  methods: {
    getCoupons (page = 1) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`

      this.$http.get(api).then((res) => {
        this.isLoading = false

        console.log(res.data)

        this.coupons = res.data.coupons
        this.pagination = res.data.pagination
      })
    },
    openModal (isNew, item) {
      if (isNew) {
        this.tempCoupon = {
          // getTime() 取得的時間為毫秒級， 需透過 / 1000 轉為秒級（Unix Timestamp 格式 -> api 規格需求）。
          due_date: new Date().getTime() / 1000,
          is_enabled: 0
        }
      } else {
        this.tempCoupon = { ...item }
      }

      this.isNew = isNew
      this.$refs.couponModal.showModal()
    },
    updateCoupon (item) {
      this.isLoading = true
      this.tempCoupon = item

      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`
      let httpMethod = 'post'

      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
        httpMethod = 'put'
      }

      this.$http[httpMethod](api, { data: this.tempCoupon }).then((res) => {
        this.isLoading = false
        console.log(res.data)
        this.$refs.couponModal.hideModal()
        this.getCoupons()
      })
    },
    openDeleteModal (item) {
      this.tempCoupon = { ...item }
      this.$refs.deleteModal.showModal()
    },
    deleteCoupon () {
      this.isLoading = true

      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`

      this.$http.delete(api).then((res) => {
        this.isLoading = false

        console.log(res.data)

        this.$refs.deleteModal.hideModal()
        this.getCoupons()
      })
    }
  },
  created () {
    this.getCoupons()
  }
}
</script>
