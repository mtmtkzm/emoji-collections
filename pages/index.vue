<template>
  <div class="page-index">
    <h2>TOP PAGE</h2>

    <pre>
      {{ user }}
    </pre>
  </div>
</template>

<script>
export default {
  computed: {
    user: function() {
      return this.$store.state.user
    }
  }
}
</script>
