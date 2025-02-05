<template>
  <q-page padding>
    <div class="text-h4">HOME</div>
    <section class="q-gutter-y-sm q-mt-lg">
      <q-card v-for="id in 100" :key="id">
        <q-card-section>{{ id }}게시글</q-card-section>
      </q-card>
    </section>
    <ul>
      <li>
        <router-link to="/posts/1">1번 게시글</router-link>
      </li>
    </ul>
  </q-page>
</template>

<script setup></script>

<style lang="scss" scoped></style>

<route lang="yaml">
name: home-page
meta:
  requiresAuth: true
  width: 600px
</route>
