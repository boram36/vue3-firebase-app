<template>
  <q-page padding>
    <ais-instant-search :search-client="searchClient" index-name="dev_posts">
      <ais-configure :hits-per-page.camel="8" />
      <div class="row q-col-gutter-x-lg">
        <section class="col-3">
          <q-card flat bordered class="q-pa-md">
            <ais-panel>
              <template #header>카테고리</template>
              <template #default>
                <ais-refinement-list attribute="category" />
              </template>
            </ais-panel>
          </q-card>
          <q-card flat bordered class="q-pa-md q-mt-md">
            <ais-panel>
              <template #header>태그</template>
              <template #default>
                <ais-refinement-list attribute="tags" />
              </template>
            </ais-panel>
          </q-card>
        </section>
        <section class="col-9">
          <ais-search-box />
          <q-separator spaced />
          <ais-hits :transform-items="transformItems">
            <template v-slot="{ items }">
              <template v-for="item in items" :key="item.id">
                <PostItem :item="item"></PostItem>
              </template>
            </template>
          </ais-hits>
          <div class="pagination flex flex-center q-mt-md">
            <ais-pagination />
          </div>
        </section>
      </div>
    </ais-instant-search>
  </q-page>
</template>

<script setup>
import { algoliasearch } from 'algoliasearch';
import 'instantsearch.css/themes/algolia-min.css';
import PostItem from 'src/components/apps/post/PostItem.vue';

const searchClient = algoliasearch(
  'JT50Y7Z850',
  '9823606d0d0942c8e289187427c21c99',
);

const transformItems = items => {
  return items.map(item => ({
    id: item.objectID,
    title: item.title,
    content: item._snippetResult.content.value,
    category: item.category,
    tags: item.tags,
    createdAt: item.createdAt,
    readCount: item.readCount,
    likeCount: item.likeCount,
    bookmarkCount: item.bookmarkCount,
    commentCount: item.commentCount,
    uid: item.uid,
  }));
};
</script>

<style lang="scss">
.ais-RefinementList-label {
  display: flex;
  align-items: center;
  width: 100%;
  text-transform: lowercase;
  cursor: pointer;
}
.ais-RefinementList-label > * {
  display: inline-block;
}
.ais-RefinementList-label > .ais-RefinementList-checkbox {
  margin-right: 6px;
}
.ais-RefinementList-label > .ais-RefinementList-labelText {
  flex-grow: 1;
}
.ais-RefinementList-label > .ais-RefinementList-count {
  padding: 0.01rem 0.4rem;
  border-radius: 50%;
}
</style>
