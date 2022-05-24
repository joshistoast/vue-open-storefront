<script setup lang="ts">
import { ProductOption, ProductVariantConnection } from '@/types'
import { useProduct } from '@/stores/product'

interface ProductForm {
  options: ProductOption[]
  variants: ProductVariantConnection
}
const props = defineProps<ProductForm>()
const selectedOptions = ref<{name: string, value: string}[]>([])

const variantFromSelectedOptions = computed(() => {
  // match selected options to variant's selected options
  if (selectedOptions.value.length === props.options.length) {
    return props.variants.edges.find((variant) => {
      return variant.node.selectedOptions.every((selectedOption, i) => {
        return selectedOptions.value[i]?.value === selectedOption.value
      })
    })
  } else {
    return null
  }
})

const isSelected = (option: string, value: string) => {
  // return true if option and value are selected options under selected variant
  const index = selectedOptions.value.findIndex((selectedOption) => {
    return selectedOption.name === option
  })
  return index !== -1 && selectedOptions.value[index].value === value
}

const pushCurrentVariant = () => {
  if (variantFromSelectedOptions.value?.node) {
    useProduct().setVariant(variantFromSelectedOptions.value.node)
  }
}
const setSelectedOptions = (option: string, value: string) => {
  const index = selectedOptions.value.findIndex((selectedOption) => {
    return selectedOption.name === option
  })
  if (index === -1) {
    selectedOptions.value.push({ name: option, value: value })
  } else {
    selectedOptions.value[index].value = value
  }
  pushCurrentVariant()
}

onMounted(() => {
  if (props.variants.edges.length === 1) {
    useProduct().setVariant(props.variants.edges[0].node)
  } else {
    useProduct().setVariant(null)
  }
})

</script>

<template>
  <div class="grid gap-4">
    <div
      v-for="(option, i) in options"
      class="grid gap-3"
    >
      <template v-if="!option.name.toLowerCase().includes('title')">
        <h4 class="font-medium text-gray-900">{{ option.name }}</h4>
        <div class="grid grid-cols-5 gap-2">
          <div
            v-for="optionName in option.values"
            class="relative px-4 py-3 text-sm font-medium text-center text-gray-900 uppercase bg-white border rounded-md shadow-sm cursor-pointer hover:bg-gray-50"
            :class="[
              isSelected(option.name, optionName) ? 'border-indigo-500 ring-2 ring-indigo-500' : ''
            ]"
            :title="optionName"
            @click="setSelectedOptions(option.name, optionName)"
          >
            {{ optionName }}
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
