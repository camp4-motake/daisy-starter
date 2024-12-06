<script setup lang="ts">
import { useMenuStore } from '~/stores/menu'

const menu = useMenuStore()
</script>

<template>
  <header>
    <h1>test</h1>
    <div>{{ menu.isOpen ? 'on':'off' }}</div>
  </header>
</template>
