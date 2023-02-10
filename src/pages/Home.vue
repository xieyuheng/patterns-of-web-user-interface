<script setup lang="ts">
import Link from "../components/Link.vue"
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="mt-12 flex max-w-max flex-col space-y-2">
      <Link class="border border-black p-3" href="/dropdown"> Dropdown </Link>
      <Link class="border border-black p-3" href="/modal"> Modal </Link>
    </div>
  </div>
</template>
