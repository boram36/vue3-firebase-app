<template>
  <q-page padding>
    <BaseCard>
      <q-toolbar>
        <q-toolbar-title>글쓰기</q-toolbar-title>
      </q-toolbar>
      <PostForm
        v-model:title="form.title"
        v-model:category="form.category"
        v-model:content="form.content"
        v-model:tags="form.tags"
        @submit="handleSubmit"
      >
        <template #actions>
          <q-btn flat label="취소" v-close-popup />
          <q-btn
            type="submit"
            flat
            label="수정"
            color="primary"
            :loading="isLoading"
          />
        </template>
      </PostForm>
      <q-separator />
    </BaseCard>
  </q-page>
</template>

<!-- <script>
export default {
  inheritAttrs: false,
};
</script> -->

<script>
const getInitialForm = () => ({
  title: '',
  category: '',
  content: '',
  tags: [],
});
</script>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useQuasar } from 'quasar';
import { getPost, updatePost } from 'src/services';
import { useAsyncState } from '@vueuse/core';
import PostForm from 'src/components/apps/post/PostForm.vue';
import BaseCard from 'src/components/base/BaseCard.vue';

const route = useRoute();
const $q = useQuasar();
useAsyncState(
  () => getPost(route.params.id),
  {},
  {
    onSuccess: post => {
      form.value.title = post.title;
      form.value.category = post.category;
      form.value.content = post.content;
      form.value.tags = post.tags;
    },
  },
);

const { isLoading, execute: executeUpdatePost } = useAsyncState(
  updatePost,
  null,
  {
    immediate: false,
    throwError: true,
    onSuccess: () => {
      $q.notify('수정완료');
    },
  },
);

const handleSubmit = async () => {
  if (confirm('수정 하시겠어요?') === false) {
    return;
  }
  executeUpdatePost(1000, route.params.id, form.value);
};

const form = ref(getInitialForm());
</script>

<style lang="scss" scoped></style>

<route lang="yaml">
meta:
width: 800px
</route>
