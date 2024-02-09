<script setup>
import gql from "graphql-tag";
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
<template>
  <div>
    <div
      class="lg:w-[50%] w-[100%] dark:bg-[#0F172A] dark:text-white min-h-screen ml-[20%]"
    >
      <Search />
      <div class="border border-black mt-20">
        <!-- <div>
          <FrontHead />
        </div>
        <div>
          <h1 class="px-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
            accusantium facere minus iure perspiciatis dicta optio id atque est
            natus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, a?
          </h1>
          <button class="text-[#42bf34] px-4">Show More...</button>
        </div>
        <div class="px-4 py-4">
          <img
            src="https://metro.co.uk/wp-content/uploads/2020/11/wentworth-miller-9ba8.png"
            alt=""
            class="w-[99%] h-[500px] rounded-md"
          />
        </div>
        <div
          class="w-[100%] h-20 border border-[#2f42ae] border-t-0 items-center flex"
        >
          <div class="flex justify-evenly w-[100%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="2rem"
              viewBox="0 0 24 24"
              width="2rem"
              fill="#11b"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              transform="scale(-1, 1)"
              fill="#11b"
            >
              <path
                fill="#11f"
                d="M12 22H3a1 1 0 0 1-.707-1.707l1.964-1.964A10 10 0 1 1 12 22"
                opacity=".5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 20 20"
            >
              <path
                fill="#11b"
                d="m18 8l-5 4V9.01c-2.58.06-4.88.45-7 2.99c.29-3.57 2.66-5.66 7-5.94V3zM4 14h11v-2l2-1.6V16H2V5h9.43c-1.83.32-3.31 1-4.41 2H4z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="#11b"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16l-5.918-3.805a2 2 0 0 0-2.164 0z"
              />
            </svg>
          </div>
        </div> -->

        <div v-for="user in data?.users" :key="user.id" class="text-white">
          {{ user.first_name }} {{ user.last_name }}
        </div>
      </div>
      <!-- <div class="border border-black">
        <div>
          <FrontHead />
        </div>
        <div>
          <h1 class="px-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
            accusantium facere minus iure perspiciatis dicta optio id atque est
            natus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, a?
          </h1>
          <button class="text-[#42bf34] px-4">Show More...</button>
        </div>
        <div class="px-4 py-4">
          <img
            src="https://metro.co.uk/wp-content/uploads/2020/11/wentworth-miller-9ba8.png"
            alt=""
            class="w-[99%] h-[500px] rounded-md"
          />
        </div>
        <div
          class="w-[100%] h-20 border-b-2 border-[#2f42ae] border-t-0 border-l-0 border-r-0 items-center flex"
        >
          <div class="flex justify-evenly w-[100%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="2rem"
              viewBox="0 0 24 24"
              width="2rem"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              transform="scale(-1, 1)"
            >
              <path
                fill="currentColor"
                d="M12 22H3a1 1 0 0 1-.707-1.707l1.964-1.964A10 10 0 1 1 12 22"
                opacity=".5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                d="m18 8l-5 4V9.01c-2.58.06-4.88.45-7 2.99c.29-3.57 2.66-5.66 7-5.94V3zM4 14h11v-2l2-1.6V16H2V5h9.43c-1.83.32-3.31 1-4.41 2H4z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="#000000"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16l-5.918-3.805a2 2 0 0 0-2.164 0z"
              />
            </svg>
          </div>
        </div>
        <div>
          <ul>
            {{}}
          </ul>
        </div>
      </div> -->
    </div>
  </div>
</template>
