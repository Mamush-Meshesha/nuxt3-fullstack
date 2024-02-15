<template>
  <div class="h-20 border border-[#2ba5ca] flex items-center">
    <div class="flex justify-between w-[97%]">
      <div class="flex gap-3 p-6" v-for="user in data.profile" :key="user.id">
        <div class="relative">
          <img
            src="https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp"
            alt=""
            class="w-[50px] h-[50px] rounded-full object-cover"
          />
          <div
            class="w-3 h-3 rounded-full bg-[#159439] absolute bottom-0 right-0"
          ></div>
        </div>
        <div>
          <h1 class="text-xl">
            {{ user.first_name }} {{ user.last_name }}
          </h1>
          <h1 class="capitalize text-xs">active now</h1>
        </div>
      </div>
      <!-- icons -->
      <div class="flex items-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path
            d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path
            d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import gql from "graphql-tag";

const Profile_Query = gql`
  query MyQuery {
    profile {
      age
      education_level
      first_name
      gender
      id
      last_name
      middle_name
      url
      user_id
    }
  }
`;

const { data } = useAsyncQuery(Profile_Query);
</script>
