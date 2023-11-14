import { defineStore } from 'pinia';
import { ref } from 'vue';
export const useAuthStore = defineStore('auth', () => {
    const isAuthenticated = ref(false);
    const username = ref("josehh");
    const password = ref("12345");

    function login(username, password) {
        if (username == 'joseh' && password == '12345') {
            isAuthenticated.value = true;
            return true;
        } else {
            return false;
        }
    }
    return {username,password,login}
})


