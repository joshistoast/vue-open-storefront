<script setup lang="ts">
import { useCart } from '@/stores'
import { CartLineEdge } from '@/types'
import { Icon } from '@iconify/vue'
import { formatLocalePrice } from '@/utilities/money'

interface CartItem {
  item: CartLineEdge
}
const props = defineProps<CartItem>()

const quantity = ref(props.item.node.quantity)

const image = {
  url: props.item.node.merchandise.product.featuredImage.thumbnail,
  width: +props.item.node.merchandise.product.featuredImage.width,
  height: +props.item.node.merchandise.product.featuredImage.height,
  altText: props.item.node.merchandise.product.featuredImage.altText ?? '',
}
const price = computed(() => formatLocalePrice(
  +props.item.node.estimatedCost.subtotalAmount.amount,
  "en-US",
  props.item.node.estimatedCost.subtotalAmount.currencyCode
))

const askRemove = () => {
  const confirm = window.confirm(`Are you sure you want to remove ${props.item.node.merchandise.product.title} from your cart?`)
  if (confirm) {
    useCart().removeFromCart([props.item.node.id])
  }
}
const updateQuantity = () => {
  const line = {
    id: props.item.node.id,
    quantity: +quantity.value,
  }
  useCart().updateCartItem([line])
}

watch(quantity, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    updateQuantity()
  }
})

</script>

<template>
  <div class="grid grid-cols-8 grid-rows-2 gap-8 py-8 -mb-[1px] border-gray-300 border-y">
    <div class="col-span-2 row-span-2">
      <img
        class="object-cover w-full rounded-md aspect-square"
        :src="image.url"
        :alt="image.altText"
        :width="image.width"
        :height="image.height"
      />
    </div>
    <div class="flex flex-row items-start justify-between col-span-6 row-span-1">
      <div>
        <NuxtLink
          class="font-medium hover:underline"
          :to="{ name: 'products-handle', params: { handle: item.node.merchandise.product.handle } }"
        >
          {{ item.node.merchandise.product.title }}
        </NuxtLink>
        <div class="flex items-center my-2 text-sm text-gray-500">
          <template v-for="(option, i) in item.node.merchandise.selectedOptions">
            <template v-if="option.value !== 'Default Title'">
              <span :class="i !== item.node.merchandise.selectedOptions.length - 1 || i === 0 ? 'pr-3' : 'pl-3 border-l border-gray-300'">
                {{ option.value }}
              </span>
            </template>
          </template>
        </div>
        <div>{{ price }}</div>
      </div>
      <UISelect
        size="sm"
        v-model="quantity"
        :options="[...Array(10).keys()].map(i => i + 1)"
      />
      <div @click="askRemove" class="text-gray-400 cursor-pointer hover:text-gray-600">
        <Icon icon="uil:times" class="w-6 h-6" />
      </div>
    </div>
    <div class="self-end col-span-6 row-span-1 text-sm">
      <div class="flex items-center space-x-2">
        <template v-if="item.node.merchandise.availableForSale">
          <Icon icon="uil:check" class="w-6 h-6 text-emerald-500" />
          <span>In Stock</span>
        </template>
        <template v-else>
          <Icon icon="uil:times" class="w-6 h-6" />
          <span>Not Available</span>
        </template>
      </div>
    </div>
  </div>
</template>
