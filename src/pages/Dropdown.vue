<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue"
</script>

<template>
  <div class="flex mt-12 w-full items-center justify-center">
    <Menu as="div" class="flex flex-col">
      <MenuButton class="border border-black p-3 text-left">More</MenuButton>
      <div class="relative">
        <MenuItems class="absolute top-2 right-0 flex flex-col min-w-max">
          <MenuItem v-slot="{ active }" class="border border-black p-3">
            <a :class="{ 'bg-stone-200': active }"> Account settings </a>
          </MenuItem>
          <MenuItem v-slot="{ active }" class="border border-black p-3">
            <a :class="{ 'bg-stone-200': active }"> Documentation </a>
          </MenuItem>
          <MenuItem disabled class="border border-black p-3">
            <span class="opacity-50">Invite a friend (coming soon!)</span>
          </MenuItem>
        </MenuItems>
      </div>
    </Menu>
  </div>
</template>
