<template>
  
    <div class="flex flex-col bg-tangerine">
      <!-- Header Bar -->
      <div class="flex ">
        
      </div>

      <!-- Main Container -->
      <div class="flex h-screen">

        <!-- Left Column -->
        <History v-bind:users="users"/>
        
        <!-- Center Column -->
        <ChatWindow/>

        <!-- Right Column -->
        <ContactDetail/>
      </div>
    </div>
    
</template>

<script>

import ContactDetail from '../components/ContactDetail.vue'
import ChatWindow from '../components/ChatWindow.vue'
import History from '../components/History.vue'

  export default {
    components: {
      ChatWindow,
      History,
      ContactDetail
    },
    name: 'app',

    data() {
      return {
        users: []
      }
    },

    created() {
      fetch("/api/users")
        .then(res => res.json())
        .then(json => {
          this.users = json.users
        })
    }
  }
</script>