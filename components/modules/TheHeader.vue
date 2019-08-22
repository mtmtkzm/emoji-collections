<template>
  <header class="the-header">
    <template v-if="user">
      <ElDropdown trigger="click">
        <div class="user">
          <span class="user__name">
            {{ user.data.displayName }}
          </span>
          <img
            class="user__image"
            :src="user.data.photoURL"
            :alt="user.data.displayName"
          />
        </div>

        <ElDropdownMenu slot="dropdown">
          <ElDropdownItem disabled>
            <NuxtLink to="/profile">PROFILE</NuxtLink>
          </ElDropdownItem>
          <ElDropdownItem v-if="user" divided>
            <div @click="logout">LOG OUT</div>
          </ElDropdownItem>
        </ElDropdownMenu>
      </ElDropdown>
    </template>
  </header>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    logout: function() {
      this.$store.dispatch('logoutWithGoogle')
    }
  }
}
</script>

<style scoped>
.the-header {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.user {
  display: flex;
  align-items: center;
}

.user__image {
  width: 24px;
  height: 24px;
  margin-left: 12px;
}

.user__name {
}
</style>
