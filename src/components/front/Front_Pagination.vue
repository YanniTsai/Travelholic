<template>
  <nav aria-label="Page navigation">
    <ul class="pagination front-pagination justify-content-center">
      <li class="page-item" :class="{ disabled: !pagination.has_pre }">
        <a
          class="page-link"
          href="#"
          aria-label="Previous"
          @click.prevent="updatePage(1)"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item" :class="{ disabled: !pagination.has_pre }">
        <a
          class="page-link"
          href="#"
          aria-label="Previous"
          @click.prevent="updatePage(pagination.current_page - 1)"
        >
          <span aria-hidden="true">&lsaquo;</span>
        </a>
      </li>
      <li class="page-item" v-for="page in pagination.total_pages" :key="page">
        <a
          class="page-link"
          href="#"
          @click.prevent="updatePage(page)"
          :class="{ active: page === pagination.current_page }"
        >
          {{ page }}
        </a>
      </li>
      <li class="page-item" :class="{ disabled: !pagination.has_next }">
        <a
          class="page-link"
          href="#"
          aria-label="Next"
          @click.prevent="updatePage(pagination.current_page + 1)"
        >
          <span aria-hidden="true">&rsaquo;</span>
        </a>
      </li>
      <li class="page-item" :class="{ disabled: !pagination.has_next }">
        <a
          class="page-link"
          href="#"
          aria-label="Next"
          @click.prevent="updatePage(pagination.total_pages)"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    pagination: {
      type: Object
    }
  },
  methods: {
    updatePage (page) {
      this.$emit('update-page', page)
    }
  }
}
</script>
