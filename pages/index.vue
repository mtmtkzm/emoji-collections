<template>
  <div class="page-index">
    <h2>TOP PAGE</h2>

    <ElButton @click="openEmojiUploader">
      Upload Emojis
    </ElButton>

    <ul>
      <li v-for="emoji in emojis" :key="emoji.id">
        <img :src="emoji.data.url" :alt="emoji.data.name" />
      </li>
    </ul>

    <EmojiUploader ref="emoji-uploader" />
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
  },
  methods: {
    openEmojiUploader: function() {
      this.$refs['emoji-uploader'].openDialog()
    }
  }
}
</script>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
}

li {
  border: 1px solid gray;
  margin: 20px;
  width: 128px;
  height: 128px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
