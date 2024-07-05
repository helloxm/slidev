<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { computed } from 'vue'
import { configs } from '../env'
import PoweredBySlidev from '../builtin/PoweredBySlidev.vue'
import Modal from './Modal.vue'

const props = defineProps({
  modelValue: {
    default: false,
  },
})

const emit = defineEmits(['update:modelValue'])
const value = useVModel(props, 'modelValue', emit)
const hasInfo = computed(() => typeof configs.info === 'string')
</script>

<template>
  <Modal v-model="value" class="px-6 py-4">
    <div class="slidev-info-dialog slidev-layout flex flex-col gap-4 text-base">
      <div
        v-if="hasInfo"
        class="mb-4"
        v-html="configs.info"
      />
      <PoweredBySlidev />
    </div>
  </Modal>
</template>

<style lang="postcss">
.slidev-info-dialog {
  @apply !p-4 max-w-150;
}
</style>
