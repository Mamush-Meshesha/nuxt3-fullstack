<template>
  <div
    class="w-[30%] fixed bottom-0 right-0 top-0 dark:bg-[#0F172A] dark:text-white"
  >
    <div class="flex flex-col gap-20 p-20">
      <div class="flex flex-col gap-4">
        <h1 class="text-xl">Contacts</h1>
        <div class="flex gap-4">
          <div class="w-11 h-11 rounded-full">
            <img
              src="../logo/mlogo.png"
              alt=""
              class="w-10 h-10 rounded-full object-cover"
            />
          </div>
          <h1>Mamush Meshesha</h1>
        </div>
        <div class="flex gap-4">
          <div class="w-11 h-11 rounded-full">
            <img
              src="../logo/mlogo.png"
              alt=""
              class="w-10 h-10 rounded-full object-cover"
            />
          </div>
          <h1>Mamush Meshesha</h1>
        </div>
        <div class="flex gap-4">
          <div class="w-11 h-11 rounded-full">
            <img
              src="../logo/mlogo.png"
              alt=""
              class="w-10 h-10 rounded-full object-cover"
            />
          </div>
          <h1>Mamush Meshesha</h1>
        </div>
      </div>

      <div class="flex flex-col gap-5">
        <h1 class="text-xl">Groups</h1>
        <div v-for="user in data?.users" :key="user.id">
          {{ user.first_name}} <br>
          {{ user.last_name}}
         {{ user.username}} <br>
          {{ user.email}}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import gql from "graphql-tag";
// import { useUserStore } from "../stores/use";

// const useStore = useUserStore()

const QUERY = gql`
  query MyQuery {
    users {
      first_name
      email
      last_name
      username
    }
  }
`;

const { data } = await useAsyncQuery(QUERY);

</script>
