<script setup lang="ts">
import { useMenuStore } from '~/stores/menu'

const menu = useMenuStore()
</script>

<template>
  <div>
    <div class="container mx-auto p-10">
      <h1>Sample</h1>
      <button
        class="btn"
        @click="menu.toggle"
      >
        Button
      </button>
      <button class="btn btn-neutral">
        Neutral
      </button>
      <button class="btn btn-primary">
        Primary
      </button>
      <button class="btn btn-secondary">
        Secondary
      </button>
      <button class="btn btn-accent">
        Accent
      </button>
      <button class="btn btn-ghost">
        Ghost
      </button>
      <button class="btn btn-link">
        Link
      </button>
      <div class="my-10 rounded border-2 border-solid border-sky-500 p-5">
        <div
          contenteditable="true"
          translate="no"
          enterkeyhint="enter"
          tabindex="0"
          class="m-auto max-w-[60ch] break-words rounded border-2 border-solid"
        >
          <p
            data-placeholder="Reply to Claude..."
            class="before:!text-text-500 before:whitespace-nowrap"
          >
            <br class="">
          </p>
        </div>
      </div>
      <img src="~/assets/images/test300x300.png">
    </div>
  </div>
</template>
