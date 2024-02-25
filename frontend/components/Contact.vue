<template>
  <div
    class="w-[30%] fixed bottom-0 right-0 top-0 dark:bg-[#0F172A] dark:text-white"
  >
    <div class="flex flex-col gap-5 p-20">
      <h1 class="text-xl">Contacts</h1>
      <div
        class="flex flex-col"
        v-for="user in data?.users"
        :key="user.id"
      >
        <div class="flex">
          <div class="">
            <img
              src="../logo/mlogo.png"
              alt=""
              class="w-10 h-10 rounded-full object-cover"
            />
          </div>
          <h1>
            {{ user.email }}
          </h1>
        </div>
      </div>
      <button class="pr-36">see more ...</button>

      <div class="flex flex-col gap-5">
        <h1 class="text-xl">Groups</h1>
        <div v-for="user in data?.users" :key="user.id">
          {{ user.first_name }}
          {{ user.last_name }}
        </div>
        <button lass="ml-36">see more...</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import gql from "graphql-tag";


const QUERY = gql`
  query MyQuery {
    users(limit:5) {
      first_name
      email
      last_name
      username
    }
  }
`;

const { data } = await useAsyncQuery(QUERY);
</script>
