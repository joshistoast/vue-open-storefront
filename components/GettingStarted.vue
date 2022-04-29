<template>
  <div class="grid min-h-screen place-items-center">
    <div class="w-full max-w-6xl p-10">
      <h1 class="text-5xl font-bold leading-relaxed">Getting Started</h1>
      <p>To link <span class="font-bold">Vue Open Storefront</span> to your Shopify Store, complete the following:</p>
      <div class="grid w-full grid-cols-1 gap-2 p-4 my-4 bg-gray-100 rounded-md">
        <div>1. In your Shopify Dashboard, go to apps and create a new app with full Storefront API access</div>
        <div>2. Install the app on your store and insert the <span class="font-bold">storefront_api_access_token</span> into the <span class="font-bold">.env</span> file</div>
        <div>3. Replace <span class="font-bold">STOREFRONT_API_ENDPOINT</span> with your api endpoint in the <span>.env</span> file.</div>
      </div>
    </div>
  </div>
</template>
