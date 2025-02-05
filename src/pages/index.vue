<template>
  <q-page padding>
    <div class="row q-col-gutter-x-lg">
      <PostLeftBar class="col-grow" v-model:category="category" />

      <section class="col-7">
        <PostHeader v-model:sort="sort" />
        <PostListSkeleton v-if="isLoading" />

        <!-- <q-card v-for="id in 100" :key="id" @click="goPostDetails(id)">
        <q-card-section>{{ id }}게시글</q-card-section>
      </q-card> -->
        <!-- <q-card v-for="id in 100" :key="id" @click="goPostDetails(id)">
        <router-link :to="`/posts/${id}`">
          <q-card-section>{{ id }}게시글</q-card-section>
        </router-link>
      </q-card> -->
        <PostList :items="items" />
        <!-- <q-btn
          v-if="isLoadMore"
          class="full-width q-mt-md"
          label="더보기"
          outline
          @click="loadMore"
        ></q-btn> -->
        <div v-intersection-observer="handleIntersectionObserver"></div>
      </section>
      <PostRightBar
        class="col-3"
        @open-write-dialog="openWriteDialog"
        v-model:tags="tags"
      />
    </div>
  </q-page>
  <!-- :model-value="postDialog"
  @update:model-value="val => (postDialog = val)" -->
  <PostWriteDialog v-model="postDialog" @complete="completeRegistrationPost" />
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { getPosts } from 'src/services';
import { useAsyncState } from '@vueuse/core';
import { vIntersectionObserver } from '@vueuse/components';
import { usePostQuery } from 'src/composables/usePostQuery';
import { useAuthStore } from 'src/stores/auth';

import PostList from 'src/components/apps/post/PostList.vue';
import PostHeader from './components/PostHeader.vue';
import PostLeftBar from './components/PostLeftBar.vue';
import PostRightBar from './components/PostRightBar.vue';
import PostWriteDialog from 'src/components/apps/post/PostWriteDialog.vue';
import PostListSkeleton from 'src/components/skeletons/PostListSkeleton.vue';

// import { useRouter } from 'vue-router';

// const router = useRouter();
// const goPostDetails = id => router.push(`/posts/${id}`);

// const posts = Array.from(Array(20), (_, index) => ({
//   id: 'A' + index,
//   title: 'Vue3 Firebase 강의' + index,
//   content:
//     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, illo amet vitae unde soluta quaerat animi aliquid esse, rerum rem, autem iure perspiciatis voluptas aliquam at delectus officia ipsam deleniti',
//   readCount: 1,
//   commentCount: 1,
//   likeCount: 3,
//   bookmarkCount: 4,
//   tags: ['html', 'css', 'javascript'],
//   uid: 'uid',
//   category: '카테고리' + index,
// }));

const { category, sort, tags } = usePostQuery();
const authStore = useAuthStore();

const params = computed(() => ({
  category: category.value,
  tags: tags.value,
  sort: sort.value,
  limit: 6,
}));

const items = ref([]);
const start = ref(null);
const isLoadMore = ref(true);

const { execute } = useAsyncState(getPosts, [], {
  immediate: false,
  throwError: true,
  onSuccess: result => {
    if (start.value) {
      items.value = items.value.concat(result.items);
    } else {
      items.value = result.items;
    }
    isLoadMore.value = result.items.length >= params.value.limit;
    start.value = result.lastItem;
  },
});

watch(
  params,
  () => {
    start.value = null;
    execute(0, params.value);
  },
  {
    deep: true,
    // immediate: true,
  },
);

const postDialog = ref(false);
const openWriteDialog = () => {
  if (!authStore.isAuthenticated) {
    alert('로그인 후 이용 가능합니다.');
    return;
  }
  postDialog.value = true;
};
const completeRegistrationPost = () => {
  postDialog.value = false;
  execute(0, params.value);
};

// const vIntersectionObserver = {
//   beforeMount: (el, binding) => {
//     const observer = new IntersectionObserver(binding.value);
//     observer.observe(el);
//   },
// };

const loadMore = () => {
  execute(0, { ...params.value, start: start.value });
};

const handleIntersectionObserver = ([{ isIntersecting }]) => {
  if (isIntersecting && isLoadMore.value) {
    console.log('### handleIntersectionObserver ###');
    loadMore();
  }
};
</script>

<style lang="scss" scoped></style>
