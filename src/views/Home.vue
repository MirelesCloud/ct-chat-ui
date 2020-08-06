<template>
  
    <div class="flex flex-col bg-gray-100">
      <!-- Header Bar -->
      <!-- <div class="flex bg-white h-18 w-">
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
        <div class=" w-1/4 text-gray-600 bg-gray-100 px-2 py-2 m-2">
          <div class="flex flex-wrap items-center">
            <div class="flex text-2xl ml-3 mt-3 text-black font-semibold antialiased tracking-normal">
              Messages
            </div>
            <div class="flex bg-blue-500 h-5 w-5 rounded-full ml-3 text-white text-xs ">
              5
            </div>
          </div>
          <ul class="flex flex-wrap text-xs mt-3 ml-3">
              <li class="mr-2">
                <a class="hover:font-extrabold" href="#">All Chats</a>
              </li>
                <li class="mr-2">
                <a class="hover:font-extrabold" href="#">People Chats</a>
              </li>
                <li class="mr-2">
                <a class="hover:font-extrabold" href="#">Group Chats</a>
              </li>
          </ul>
          <div class="flex flex-col bg-gray-100 mt-3" id="users">
            

            <div v-for="user in users" v-bind:key="user.id" class="max-w-sm rounded-lg bg-white overflow-hidden shadow-xs px-5 py-2 mt-1 border-2 border-white hover:border-blue-500 focus:outline-none focus:shadow-outline cursor-pointer">
              <div class="flex flex-wrap items-center">
                <img class="w-8 h-8 rounded-full" src="../assets/avatar2.png" alt="avatar"/>
                <div class="font-bold text-lg ml-3">{{ user.name}} </div>
                <div class="text-xs ml-auto">20m</div>
              </div>
              <div class="flex text-sm p-3 ">
                What is happening?
              </div>
              <hr/>
              <div class="flex flex-wrap items-center p-3 opacity-75">
                <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.992 511.992">
                  <path d="M239.992 159.998h-48v-80a16.04 16.04 0 00-10.208-14.944c-6.144-2.368-13.152-.704-17.632 4.192l-160 176c-5.536 6.08-5.536 15.392 0 21.504l160 176c3.104 3.392 7.424 5.248 11.84 5.248 1.952 0 3.904-.352 5.792-1.056a16.04 16.04 0 0010.208-14.944v-80h44.512c91.328 0 179.776 32.704 249.088 92.16 4.704 4.064 11.456 4.992 17.088 2.368 5.696-2.592 9.312-8.288 9.312-14.528 0-149.984-122.016-272-272-272zm-3.488 160h-60.512c-8.832 0-16 7.168-16 16v54.624L37.624 255.998l122.368-134.624v54.624c0 8.832 7.168 16 16 16h64c64.096 0 124.384 24.96 169.696 70.272 37.024 37.024 60.48 84.032 67.808 134.912-70.08-49.984-154.336-77.184-240.992-77.184z"/>
                </svg>
                <div class="text-center text-sm mx-2">
                  You go girl!
                </div>
                <img class="w-5 h-5 rounded-full" src="../assets/img_avatar6.png" alt="avatar" />
              </div>
            </div>

          </div>
         </div>
        
        <!-- Center Column -->
        <div class=" relative w-1/2 text-gray-600 bg-gray-200 px-4 py-2 m-2">
          <div class="absolute inset-x-0 bottom-5 p-1">
            <form >
              <input class="rounded-lg h-16 w-full p-3 shadow-xs" placeholder="Type a message..."/>
            </form>
          </div>
        </div>

        <!-- Right Column -->
        <ContactDetail/>
      </div>
    </div>
    
</template>

<script>

import ContactDetail from '../components/ContactDetail.vue'

  export default {
    components: {
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