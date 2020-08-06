<template>
  <div class=" relative w-1/2 text-gray-600 bg-gray-100 px-1 py-1 m-1">
    <div class="w-full flex flex-col ">
      <div class=" flex px-6 py-2 bg-white shadow-xs items-center mb-2">
        <div class="flex flex-col">
          <img  class="h-20 w-auto" src="../assets/cart-text.png" alt="logo"/>
        </div>
      </div>

      <!-- Message Bubble -->
      <div class="px-6 py-2 flex-1 overflow-scroll-x  w-60 mb-1 rounded-lg float-left">
        <div class="flex items-start mb-4">
          <div class="flex flex-col">
            <div class="flex items-end">
              <span class="font-bold text-md mr-2">Me</span>
              <span class="text-gray text-xs font-light">12:45pm</span>
            </div>
            <p class="font-light text-md text-gray-darkest pt-1">What do you think, how does this look???</p>
          </div>
        </div>
      </div> 
      <!-- Message Bubble End -->   
      <!-- Message Bubble -->
      <div class="px-6 py-2 flex-1 overflow-scroll-x bg-blue-500 text-white mb-1 rounded-lg float-left">
        <div class="flex items-start mb-4">
          <div class="flex flex-col">
            <div class="flex items-end">
              <span class="font-bold text-md mr-2">Lucy van Pelt</span>
              <span class="text-gray text-xs font-light">12:45pm</span>
            </div>
            <p class="font-light text-md text-gray-darkest pt-1">It looks great</p>
          </div>
        </div>
      </div> 
      <!-- Message Bubble End -->   
      <!-- Message Bubble -->
      <div class="px-6 py-2 flex-1 overflow-scroll-x mb-1 rounded-lg">
        <div class="flex items-start mb-4">
          <div class="flex flex-col">
            <div class="flex items-end">
              <span class="font-bold text-md mr-2">Me</span>
              <span class="text-gray text-xs font-light">12:45pm</span>
            </div>
            <p class="font-light text-md text-gray-darkest pt-1">meh...</p>
          </div>
        </div>
      </div> 
      <!-- Message Bubble End -->  

      
      
 

    </div>
     <form class="flex m-6   overflow-hidden absolute inset-x-0 bottom-5">
        <input type="text" class="w-full rounded p-3 border-2 border-grey" placeholder="Message..."/>
        <button type="submit" class=" rounded ml-3 p-2 text-white bg-blue-500 text-bold cursor-pointer duration-1000">Send</button>
      </form>


          
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