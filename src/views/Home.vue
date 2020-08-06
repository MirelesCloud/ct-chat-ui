<template>
  
    <div class="flex flex-col bg-gray-100">
      <!-- Header Bar -->
     <!--  <div class="flex bg-white h-18 w-">
        <div class="w-1/4 m-3">
          <form>
            <div class="flex items-center border-b border-teal-500 py-2">
              <input placeholder="Search" class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 px-2 leading-tight focus:outline-none" type="text" aria-label="Search"/>

            </div>
          </form>
        </div>
        <div class="w-3/4 mt-5 ">
          <h3 class="">Charlie Brown</h3>

        </div>
      </div> -->

      <!-- Main Container -->
      <div class="flex h-screen">

        <!-- Left Column -->
        <History users="users"/>
        
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