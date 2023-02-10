<script setup lang="ts">
import { ref } from "vue"

const open = ref(false)
</script>

<template>
  <div class="flex justify-center pt-12">
    <!-- Trigger -->
    <button
      @click="open = true"
      type="button"
      class="border-2 border-gray-900 bg-white px-4 py-2 focus:outline-none focus:ring focus:ring-cyan-400"
    >
      Open dialog
    </button>

    <!-- Modal -->
    <div
      v-show="open"
      role="dialog"
      aria-modal="true"
      class="fixed inset-0 z-10 overflow-y-auto"
    >
      <!-- Overlay -->
      <div v-show="open" class="fixed inset-0 bg-black bg-opacity-50"></div>

      <!-- Panel -->
      <div
        v-show="open"
        @click="open = false"
        class="relative flex min-h-screen items-center justify-center p-4"
      >
        <div
          @click.stop
          class="relative w-full max-w-2xl overflow-y-auto border-2 border-gray-900 bg-white p-12 shadow-lg"
        >
          <!-- Title -->
          <h2 class="text-3xl font-bold">Launch nuclear ballistic missile</h2>
          <!-- Content -->
          <p class="mt-2 text-gray-600">Are you sure you want to do this?</p>
          <!-- Controls -->
          <div class="mt-8 flex space-x-2">
            <button
              type="button"
              class="border-2 border-gray-900 bg-white px-4 py-2 focus:outline-none focus:ring focus:ring-cyan-400"
            >
              Confirm
            </button>
            <button
              type="button"
              class="border-2 border-gray-900 bg-white px-4 py-2 focus:outline-none focus:ring focus:ring-cyan-400"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
