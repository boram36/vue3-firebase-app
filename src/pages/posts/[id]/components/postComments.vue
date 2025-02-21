<template>
  <div>
    <div class="text-subtitle1 text-weight-bold q-mb-lg">댓글 6</div>

    <div v-if="isActive">
      <q-form @submit.prevent="handleAddComment">
        <q-input
          v-model="message"
          type="textarea"
          outlined
          hide-bottom-space
          :rules="[validateRequired]"
        ></q-input>
        <div class="flex justify-end q-gutter-x-sm q-mt-sm">
          <q-btn label="취소" color="dark" unelevated @click="toggleActive" />
          <q-btn
            type="submit"
            label="등록"
            color="primary"
            unelevated
            :loading="isLoading"
          />
        </div>
      </q-form>
    </div>

    <BaseCard v-if="!isActive" @click="toggleActive" class="cursor-pointer">
      <q-card-section class="flex items-center">
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>
        <div class="text-grey-6 q-ml-md">댓글을 작성해보세요.</div>
      </q-card-section>
    </BaseCard>

    <CommentList
      :post-id="$route.params.id"
      :items="comments"
      @deleted="deletedComment"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { useRoute } from 'vue-router';
import { useAsyncState } from '@vueuse/core';
import { useAuthStore } from 'src/stores/auth';
import { addComment, getComments } from 'src/services';

import BaseCard from 'src/components/base/BaseCard.vue';
import CommentList from 'src/components/apps/comment/CommentList.vue';
import { validateRequired } from 'src/utils/validate-rules';

const isActive = ref(false);
const toggleActive = () => {
  if (!isActive.value && !authStore.isAuthenticated) {
    alert('로그인 후 이용 가능합니다.');
    return;
  }
  isActive.value = !isActive.value;
};

const route = useRoute();
const authStore = useAuthStore();

const { state: comments, execute: executeGetComments } = useAsyncState(
  () => getComments(route.params.id),
  [],
  {
    resetOnExecute: false,
  },
);

const message = ref('');
const { isLoading, execute: executeAddComment } = useAsyncState(
  addComment,
  null,
  {
    immediate: false,
    throwError: true,
    onSuccess: () => {
      message.value = '';
      isActive.value = false;
      executeGetComments(0);
    },
  },
);
const handleAddComment = async () => {
  executeAddComment(0, route.params.id, {
    message: message.value,
    uid: authStore.uid,
  });
};

const deletedComment = () => executeGetComments(0);
</script>

<style lang="scss" scoped></style>
