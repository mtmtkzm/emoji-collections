<template>
  <div class="page-index">
    <h2>TOP PAGE</h2>

    <div>
      <EmojiUploader />
    </div>
  </div>
</template>

<script>
import EmojiUploader from '~/components/EmojiUploader'

export default {
  components: {
    EmojiUploader
  },
  mounted() {
    console.log('this.$store.state.user:', this.$store.state.user)
  }
}
</script>
