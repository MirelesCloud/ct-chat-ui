<template>
    <!-- Header -->
   <div class=" w-1/4 text-gray-600 bg-white m-1" >
    <div class="bg-white ">
      <div class="flex flex-wrap items-center mt-3">
        <div class="flex">
          <div class=" flex text-2xl ml-3 text-black font-semibold antialiased tracking-normal text-center">
            Messages
          </div>
          <div class="flex bg-blue-500 h-5 w-5 rounded-full ml-3 text-white text-xs text-center">
            5
          </div>
        </div>
      </div>
      <ul class="flex flex-wrap text-xs mt-3 ml-3">
          <li class="mr-2">
            <a class="hover:font-extrabold hover:underline" href="#">All Chats</a>
          </li>
            <li class="mr-2">
            <a class="hover:font-extrabold hover:underline" href="#">People Chats</a>
          </li>
            <li class="mr-2">
            <a class="hover:font-extrabold hover:underline" href="#">Group Chats</a>
          </li>
      </ul>

    </div>
   

    <!-- History -->
    <div class="flex flex-col bg-gray-100 mt-3" id="users">
      <div v-for="user in users" v-bind:key="user.id" class="max-w-sm bg-white overflow-hidden shadow-xs px-5 py-2 border-2 border-white hover:border-blue-500 focus:outline-none focus:shadow-outline cursor-pointer">
        <div class="flex flex-wrap items-center">
          <img class="w-8 h-8 rounded-full" src="../assets/avatar2.png" alt="avatar"/>
          <div class="font-bold text-lg ml-3">{{ user.name }} </div>
          <div class="text-xs ml-auto">{{ user.time }}</div>
        </div>
        <div class="flex text-sm p-3 ">
          {{ user.message }}
        </div>
        
       
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'History',
  props: ['users']
}
</script>