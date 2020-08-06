<template>
  <div class=" relative w-1/2 text-gray-600 bg-gray-200 px-1 py-1 m-2">
    <div class="w-full flex flex-col">
      <div class="border-b flex px-6 py-2 items-center">
        <div class="flex flex-col">
          <h3 class="text-gray-darkest text-md mb-1 font-extrabold">Chatting</h3>
          <div class="text-gray font-thin text-sm">
            ay caramba
          </div>
        </div>
        <div class="ml-auto hidden md:block">
          <input type="search" placeholder="Search" class="border border-gray rounded-lg p-2"/>
        </div>
      </div>
      <div class="px-6 py-2 flex-1 overflow-scroll-x bg-blue-100">
        <div class="flex items-start mb-4">
          <div class="flex flex-col">
            <div class="flex items-end">
              <span class="font-bold text-md mr-2">Charlie Brown</span>
              <span class="text-gray text-xs font-light">12:45pm</span>
            </div>
            <p class="font-light text-md text-gray-darkest pt-1">What does this look like???</p>

          </div>

        </div>
      </div>    

    </div>

          
  </div>
</template>

<script>
  export default {
    name: 'ChatWindow',
    data() {
      return {}
    }
  }
</script>