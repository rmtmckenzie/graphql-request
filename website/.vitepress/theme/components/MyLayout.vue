<script setup>
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #nav-bar-content-before>
      <div id="graffle-warning-message">Graffle is a work in progress. <a href="https://github.com/graffle-js/graffle/discussions/1163">Learn more</a>.</div>
    </template>
  </Layout>
</template>
