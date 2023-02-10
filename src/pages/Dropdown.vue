<script setup lang="ts">
import { reactive } from "vue"

const state = reactive(createState())

function createState() {
  return {
    open: false,

    toggle() {
      if (this.open) {
        return this.close()
      }

      // this.$refs.button.focus()

      this.open = true
    },

    close(options: { focusBackTo?: HTMLButtonElement } = {}) {
      if (!this.open) {
        return
      }

      this.open = false

      options.focusBackTo && options.focusBackTo.focus()
    },
  }
}
</script>

<template>
  <div class="flex justify-center pt-12">
    <!-- @keydown.escape.prevent.stop="state.close({ focusBackTo: $refs.button })" -->
    <!-- @focusin.window="!$refs.panel.contains($event.target) && state.close()" -->
    <div x-id="['dropdown-panel']" class="relative">
      <!-- Button -->
      <!-- :aria-controls="$id('dropdown-panel')" -->
      <button
        x-ref="button"
        @click="state.toggle()"
        :aria-expanded="state.open"
        type="button"
        class="border-2 border-gray-900 px-4 py-2 focus:outline-none focus:ring focus:ring-cyan-400"
      >
        <span>Actions</span>
      </button>

      <!-- Panel -->
      <!-- :id="$id('dropdown-panel')" -->
      <!-- @click.outside="state.close({ focusBackTo: $refs.button })" -->
      <div
        x-ref="panel"
        v-show="state.open"
        x-transition.origin.top.left
        style="display: none"
        class="absolute left-0 mt-2 w-40 border-2 border-gray-900 bg-white"
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
