import { useLocalStorage, StorageSerializers } from '@vueuse/core';
import { defineStore } from 'pinia';
import { computed } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  // const user = ref(null);
  const user = useLocalStorage('auth/user', null, {
    serializer: StorageSerializers.object,
  });
  const isAuthenticated = computed(() => !!user.value);
  const uid = computed(() => user.value?.uid || null);

  const setUser = userData => {
    console.log('userData: ', userData);
    user.value = userData;
    if (userData) {
      user.value = {
        uid: userData.uid,
        photoURL: userData.photoURL,
        displayName: userData.displayName,
        email: userData.email,
        emailVerified: userData.emailVerified,
      };
    } else {
      user.value = null;
    }
  };

  const hasOwnContent = contentUid => {
    if (!isAuthenticated.value) {
      return false;
    }
    return uid.value === contentUid;
  };

  return {
    user,
    isAuthenticated,
    uid,
    setUser,
    hasOwnContent,
  };
});
