<template>
  <div class="w-1/4 ext-center bg-white m-1">
      <div class="flex flex-col  p-5">
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
                <td><a href="#" class="text-blue-600">charliebrown@peanuts.com</a></td>
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
            <td><a href="#" class="text-blue-600">https://example1.com</a></td>
            <td class="text-gray-500"><small>Now</small></td>
          </tr>
          <tr>
            <td><a href="#" class="text-blue-600">https://example2.com</a></td>
            <td class="text-gray-500"><small>20m</small></td>
          </tr>
          <tr>
            <td><a href="#" class="text-blue-600">https://example3.com</a></td>
            <td class="text-gray-500"><small>35min</small></td>
          </tr>
          <tr>
            <td><a href="#" class="text-blue-600">https://example4.com</a></td>
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
            <td>With <a href="#" class="text-blue-600">Snoopy</a></td>
            <td class="text-gray-500"><small>2 days</small></td>
          </tr>
          <tr>
            <td>With <a href="#" class="text-blue-600">Peppermint Patty</a></td>
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
      <div class="flex flex-wrap justify-center insex-x-0 mt-20" >
        <button class="bg-tangerine px-3 py-2 rounded-lg text-white shadow">Edit Contact</button>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'ContactDetail',
    data() {
      return {

      }
    }
  }
</script>