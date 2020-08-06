<template>
  
    <div class="flex flex-col bg-gray-100">
      <div class="flex bg-white h-15 w-">
        abb
      </div>
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
          <div class="flex flex-col bg-gray-100 mt-3">
            <div class="max-w-sm rounded-lg bg-white overflow-hidden shadow-xs px-5 py-2 mt-1 border-2 border-white hover:border-blue-500 focus:outline-none focus:shadow-outline cursor-pointer">
              <div class="flex flex-wrap items-center">
                <img class="w-8 h-8 rounded-full" src="../assets/avatar2.png" alt="avatar"/>
                <div class="font-bold text-lg ml-3">Charlie Brown</div>
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
            <div class="max-w-sm rounded-lg bg-white overflow-hidden shadow px-4 py-2 mt-1">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Julio</div>
              </div>
            </div>
            <div class="max-w-sm rounded-lg bg-white overflow-hidden shadow px-4 py-2 mt-1">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">What'shisname</div>
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
      <div class="w-1/4 ext-center bg-gray-100  m-2">
        <div class="flex flex-col bg-white  p-5">
          <div class="flex flex-wrap">
            <img class=" flex w-10 h-10 rounded-full" src="../assets/avatar2.png" alt="avatar"/>
            <div class="flex flex-col ml-3">
              <div class="text-xl  text-black font-semibold antialiased tracking-normal">
                Charlie Brown
              </div>
              
              <div class="text-xs text-gray-500 m-auto">
                charliebrown@peanuts.com
              </div>
            </div>
            <svg  class="h-3 w-3 ml-auto cursor-pointer" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg>
          </div>
        </div>
        <hr/>
        <div class="flex flex-col bg-white p-5">
          <div class="text-sm text-black font-semibold">
            Details
          </div>
          <table class="table-fixed text-xs text-gray-600 mt-1">
              <tbody>
                <tr >
                  <td class="w-1/2">Email:</td>
                  <td><a href="#" >charliebrown@peanuts.com</a></td>
                </tr>
                <tr>
                  <td class="w-1/2">Company:</td>
                  <td>Peanuts</td>
                </tr>
                <tr>
                  <td class="w-1/2">Phone:</td>
                  <td>(123) 456-7890</td>
                </tr>
              </tbody>

            </table>
        </div>
        <hr/>
        <div class="flex flex-col bg-white p-5">
          <div class="text-base text-black font-semibold">
            Recent Pageviews
          </div>
          <table class="table table-fixed text-xs text-gray-600 mt-1">
            <tr>
              <td><a href="#">https://example1.com</a></td>
              <td class="text-gray-500"><small>Now</small></td>
            </tr>
            <tr>
              <td><a href="#">https://example2.com</a></td>
              <td class="text-gray-500"><small>20m</small></td>
            </tr>
            <tr>
              <td><a href="#">https://example3.com</a></td>
              <td class="text-gray-500"><small>35min</small></td>
            </tr>
            <tr>
              <td><a href="#">https://example4.com</a></td>
              <td class="text-gray-500"><small>2hrs</small></td>
            </tr>

          </table>
          
        </div>
        <hr/>
        <div class="flex flex-col bg-white p-5">
          <div class="text-base text-black font-semibold">
            Recent Conversation
          </div>
          <table class="table tablex-fixed text-xs text-gray-600 mt-1">
            <tr>
              <td>With <a href="#" class="text-blue-600">Julio</a></td>
              <td class="text-gray-500"><small>2 days</small></td>
            </tr>
            <tr>
              <td>With <a href="#" class="text-blue-600">Taquache</a></td>
              <td class="text-gray-500"><small>4 days</small></td>
            </tr>
          </table>
        </div>
        <hr/>
        <div class="flex flex-col bg-white p-5">
          <div class="text-base text-black font-semibold">
            Integrations
          </div>
          <div class="flex flex-col mt-1 text-sm text-gray-600">
            <div class="flex shadow-xl p-5 items-center mt-2 rounded-lg">
              <img src="../assets/Slack_RGB.png" href="https://slack.com" alt="Slack Logo" class="h-7 w-auto"/>
              <div class="h-3 w-3 ml-auto cursor-pointer"><svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg></div>
            </div>
            <div class="flex shadow-xl p-5 items-center mt-2 rounded-lg">
              <img src="../assets/Stripe.png" href="https://slack.com" alt="Slack Logo" class="h-7 w-auto"/>
              <div class="h-3 w-3 ml-auto cursor-pointer"><svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg></div>
            </div>
            <div class="flex shadow-xl p-5 items-center mt-2 rounded-lg">
              <img src="../assets/Twillio.png" href="https://slack.com" alt="Slack Logo" class="h-7 w-auto"/>
              <div class="h-3 w-3 ml-auto cursor-pointer"><svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg></div>
            </div>
            <div class="flex shadow-xl p-5 items-center mt-2 rounded-lg">
              <img src="../assets/Discord.png" href="https://slack.com" alt="Slack Logo" class="h-7 w-auto"/>
              <div class="h-3 w-3 ml-auto cursor-pointer"><svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg></div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    
</template>

<script>
export default {}
</script>
