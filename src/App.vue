<template>
  <div>

    <router-view />
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    showMenu: false,
    showProfileMenu: false,
    links: [
      { text: 'Home', to: '/' },
      
    ],
  }),
})
</script>
