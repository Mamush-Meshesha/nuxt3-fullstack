<template>
  <div>
    <div>
      <div class="md:hidden block">
        <!-- menu icon -->
        <button @click="showMenu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 48 48"
          >
            <linearGradient
              id="9iHXMuvV7brSX7hFt~tsna_Rdp3AydLFY2A_gr1"
              x1="12.066"
              x2="34.891"
              y1=".066"
              y2="22.891"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".237" stop-color="#3bc9f3"></stop>
              <stop offset=".85" stop-color="#1591d8"></stop>
            </linearGradient>
            <path
              fill="url(#9iHXMuvV7brSX7hFt~tsna_Rdp3AydLFY2A_gr1)"
              d="M43,15H5c-1.1,0-2-0.9-2-2v-2c0-1.1,0.9-2,2-2h38c1.1,0,2,0.9,2,2v2C45,14.1,44.1,15,43,15z"
            ></path>
            <linearGradient
              id="9iHXMuvV7brSX7hFt~tsnb_Rdp3AydLFY2A_gr2"
              x1="12.066"
              x2="34.891"
              y1="12.066"
              y2="34.891"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".237" stop-color="#3bc9f3"></stop>
              <stop offset=".85" stop-color="#1591d8"></stop>
            </linearGradient>
            <path
              fill="url(#9iHXMuvV7brSX7hFt~tsnb_Rdp3AydLFY2A_gr2)"
              d="M43,27H5c-1.1,0-2-0.9-2-2v-2c0-1.1,0.9-2,2-2h38c1.1,0,2,0.9,2,2v2C45,26.1,44.1,27,43,27z"
            ></path>
            <linearGradient
              id="9iHXMuvV7brSX7hFt~tsnc_Rdp3AydLFY2A_gr3"
              x1="12.066"
              x2="34.891"
              y1="24.066"
              y2="46.891"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".237" stop-color="#3bc9f3"></stop>
              <stop offset=".85" stop-color="#1591d8"></stop>
            </linearGradient>
            <path
              fill="url(#9iHXMuvV7brSX7hFt~tsnc_Rdp3AydLFY2A_gr3)"
              d="M43,39H5c-1.1,0-2-0.9-2-2v-2c0-1.1,0.9-2,2-2h38c1.1,0,2,0.9,2,2v2C45,38.1,44.1,39,43,39z"
            ></path>
          </svg>
        </button>
        <!-- end of menu icon -->
      </div>
      <Header class="hidden md:block" />
      <NuxtPage />
      <Contact class="md:block hidden"/>
    </div>
  </div>
</template>
<script setup lang="ts">
import "primevue/resources/themes/aura-light-green/theme.css";
import { ref } from "vue";
const menu = ref(false);
const showMenu = () => {
  menu.value = !menu.value;
};
</script>
