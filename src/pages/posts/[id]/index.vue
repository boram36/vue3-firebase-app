<template>
  <q-page padding>
    <PostDetails />
    <q-separator class="q-my-xl"></q-separator>
    <PostComments />
  </q-page>
</template>

<script setup>
import PostComments from './components/postComments.vue';
import PostDetails from './components/postDetails.vue';
</script>

<style lang="scss" scoped></style>
<route lang="yaml">
  meta:
  width:800px
</route>
