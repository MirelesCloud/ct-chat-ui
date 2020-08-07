<template>
  <div class=" relative w-1/2 text-gray-600 bg-gray-100  m-1">
    <div class="w-full flex flex-col ">
      <div class=" flex px-6 py-2 bg-white shadow items-center mb-2">
        <div class="flex flex-col">
          <img  class="h-20 w-auto" src="../assets/cart-text.png" alt="logo"/>
        </div>
      </div>
      <!-- Message Bubble -->
      <div class="px-2 mx-3 w-2/3 mr-auto py-2 flex-1 overflow-scroll-x mb-1 rounded-lg">
        <div class="flex items-start mb-4">
          <img class="h-8 w-8 rounded mr-3" src="../assets/cart-text-icon.png" alt="chat icon"/>
          <div class="flex flex-col">
            <div class="flex items-end">
              <span class="font-bold text-md mr-2">CartText</span>
              <span class="text-gray text-xs font-light">12:45pm</span>
            </div>
            <p class="font-light text-sm text-gray-darkest pt-1">What do you think, how does this look???</p>
          </div>
        </div>
      </div> 
      <!-- Message Bubble End -->   
      <!-- Message Bubble -->
      <div class="px-2 py-2 mx-3 w-2/3 ml-auto flex-1 overflow-scroll-x bg-blue-500 text-white mb-1 rounded-lg">
        <div class="flex items-start mb-4">
           <img class="h-8 w-8 rounded-full mr-3" src="../assets/charlie-brown.jpg" alt="user"/>
          <div class="flex flex-col">
            <div class="flex items-end">
              <span class="font-bold text-md mr-2">Charlie Brown</span>
              <span class="text-gray text-xs font-light">12:50pm</span>
            </div>
            <p class="font-light text-sm text-gray-darkest pt-1">It looks great</p>
          </div>
        </div>
      </div> 
      <!-- Message Bubble End -->   
      <!-- Message Bubble -->
     <div class="px-2 mx-3 w-2/3 mr-auto py-2 flex-1 overflow-scroll-x mb-1 rounded-lg">
        <div class="flex items-start mb-4">
          <img class="h-8 w-8 rounded mr-3" src="../assets/cart-text-icon.png" alt="chat icon"/>
          <div class="flex flex-col">
            <div class="flex items-end">
              <span class="font-bold text-md mr-2">CartText</span>
              <span class="text-gray text-xs font-light">12:45pm</span>
            </div>
            <p class="font-light text-sm text-gray-darkest pt-1">Thank you, but it needs a little more work</p>
          </div>
        </div>
      </div> 
      <!-- Message Bubble End -->  
    </div>
     <form class="flex m-6   overflow-hidden absolute inset-x-0 bottom-5">
        <input type="text" class="w-full rounded p-3 border-2 border-grey" placeholder="Message..."/>
        <button type="submit" class=" rounded-lg ml-3 p-2 w-20 text-white bg-blue-500 text-bold cursor-pointer">Send</button>
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