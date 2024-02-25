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
import { useToast } from "primevue/usetoast";

const toast = useToast();
const router = useRouter();

const signout = () => {
  window.localStorage.removeItem("accessToken");
  toast.add({
    severity: "success",
    summary: "Success Message",
    detail: "User Successfully signed out",
    life: 3000,
  });
  router.push("/login");
};
</script>
