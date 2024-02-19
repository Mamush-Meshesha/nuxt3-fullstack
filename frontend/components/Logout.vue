<template>
  <div>
    <div>
      <form>
        <button @click="signout()">Logout</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const signout = () => {
  window.localStorage.removeItem("accessToken");
  router.push("/login");
};
</script>
