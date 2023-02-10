<script setup lang="ts">
import { onClickOutside } from "@vueuse/core"
import { reactive, ref } from "vue"

const state = reactive(createState())

const button = ref<HTMLButtonElement | null>(null)
const panel = ref<HTMLDivElement | null>(null)

onClickOutside(panel, (event) => {
  state.close({ focusBackTo: button.value })
})

function createState() {
  return {
    open: false,

    toggle() {
      if (this.open) {
        return this.close()
      }

      if (button.value) {
        button.value.focus()
      }

      this.open = true
    },

    close(options?: { focusBackTo: HTMLButtonElement | null }) {
      if (!this.open) {
        return
      }

      this.open = false

      const focusBackTo = options?.focusBackTo

      focusBackTo && focusBackTo.focus()
    },
  }
}
</script>

<template>
  <div class="flex justify-center pt-12">
    <!-- @focusin.window="!$refs.panel.contains($event.target) && state.close()" -->
    <div x-id="['dropdown-panel']" class="relative">
      <!-- Button -->
      <button
        ref="button"
        @keydown.esc.prevent.stop="state.close({ focusBackTo: button })"
        @click="state.toggle()"
        type="button"
        class="border-2 border-gray-900 px-4 py-2 focus:outline-none focus:ring focus:ring-cyan-400"
      >
        <span>Actions</span>
      </button>

      <!-- Panel -->
      <!-- :id="$id('dropdown-panel')" -->

      <div
        v-show="state.open"
        ref="panel"
        class="absolute left-0 mt-2 w-40 border-2 border-gray-900 bg-white"
        style="display: none"
        x-transition.origin.top.left
      >
        <div>
          <a
            href="#"
            class="block w-full px-4 py-2 text-left hover:bg-gray-100 focus:outline-none focus:ring focus:ring-cyan-400 disabled:text-gray-500"
          >
            Add task above
          </a>

          <a
            href="#"
            class="block w-full px-4 py-2 text-left hover:bg-gray-100 focus:outline-none focus:ring focus:ring-cyan-400 disabled:text-gray-500"
          >
            Add task below
          </a>

          <a
            href="#"
            class="block w-full px-4 py-2 text-left hover:bg-gray-100 focus:outline-none focus:ring focus:ring-cyan-400 disabled:text-gray-500"
          >
            Edit task
          </a>

          <a
            href="#"
            disabled
            class="block w-full px-4 py-2 text-left hover:bg-gray-100 focus:outline-none focus:ring focus:ring-cyan-400 disabled:text-gray-500"
          >
            Delete task
          </a>
        </div>
      </div>

      <div class="mt-6 flex space-x-2">
        <button
          type="button"
          class="border-2 border-gray-900 px-4 py-2 focus:outline-none focus:ring focus:ring-cyan-400"
        >
          <span>Other Button</span>
        </button>

        <button
          type="button"
          class="border-2 border-gray-900 px-4 py-2 focus:outline-none focus:ring focus:ring-cyan-400"
        >
          <span>Another Button</span>
        </button>
      </div>
    </div>
  </div>
</template>
