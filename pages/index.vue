<template>
  <div class="page-index">
    <h2>TOP PAGE</h2>

    <ul>
      <li v-for="emoji in emojis" :key="emoji.id">
        <p>{{ emoji.id }}</p>
        <img :src="emoji.data.url" :alt="emoji.data.name" />
      </li>
    </ul>
    <EmojiUploader />
  </div>
</template>

<script>
import EmojiUploader from '~/components/EmojiUploader'

export default {
  components: {
    EmojiUploader
  },
  computed: {
    emojis: function() {
      return this.$store.getters.userEmojiList
    }
  },
  async fetch({ store }) {
    const userId = store.state.user.id
    await store.dispatch('getUserEmojis', { userId })
  }
}
</script>
