<template>
  <div
    class="dark:bg-[#131f3a] dark:text-white sm:w-[320px] md:w-[720px] lg:w-[1024px] pt-[5%] xl:w-[1544px] 2xl:w-screen sm:overflow-x-hidden sm:min-h-screen overflow-y-hidden"
  >
    <div class="ml-[23%]">
      <div class="flex gap-4">
        <svg
          width="30px"
          height="30px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_15_82)">
            <rect width="24" height="24" fill="white" />
            <g filter="url(#filter0_d_15_82)">
              <path
                d="M14.3365 12.3466L14.0765 11.9195C13.9082 12.022 13.8158 12.2137 13.8405 12.4092C13.8651 12.6046 14.0022 12.7674 14.1907 12.8249L14.3365 12.3466ZM9.6634 12.3466L9.80923 12.8249C9.99769 12.7674 10.1348 12.6046 10.1595 12.4092C10.1841 12.2137 10.0917 12.022 9.92339 11.9195L9.6634 12.3466ZM4.06161 19.002L3.56544 18.9402L4.06161 19.002ZM19.9383 19.002L20.4345 18.9402L19.9383 19.002ZM16 8.5C16 9.94799 15.2309 11.2168 14.0765 11.9195L14.5965 12.7737C16.0365 11.8971 17 10.3113 17 8.5H16ZM12 4.5C14.2091 4.5 16 6.29086 16 8.5H17C17 5.73858 14.7614 3.5 12 3.5V4.5ZM7.99996 8.5C7.99996 6.29086 9.79082 4.5 12 4.5V3.5C9.23854 3.5 6.99996 5.73858 6.99996 8.5H7.99996ZM9.92339 11.9195C8.76904 11.2168 7.99996 9.948 7.99996 8.5H6.99996C6.99996 10.3113 7.96342 11.8971 9.40342 12.7737L9.92339 11.9195ZM9.51758 11.8683C6.36083 12.8309 3.98356 15.5804 3.56544 18.9402L4.55778 19.0637C4.92638 16.1018 7.02381 13.6742 9.80923 12.8249L9.51758 11.8683ZM3.56544 18.9402C3.45493 19.8282 4.19055 20.5 4.99996 20.5V19.5C4.70481 19.5 4.53188 19.2719 4.55778 19.0637L3.56544 18.9402ZM4.99996 20.5H19V19.5H4.99996V20.5ZM19 20.5C19.8094 20.5 20.545 19.8282 20.4345 18.9402L19.4421 19.0637C19.468 19.2719 19.2951 19.5 19 19.5V20.5ZM20.4345 18.9402C20.0164 15.5804 17.6391 12.8309 14.4823 11.8683L14.1907 12.8249C16.9761 13.6742 19.0735 16.1018 19.4421 19.0637L20.4345 18.9402Z"
                fill="#000000"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d_15_82"
              x="2.55444"
              y="3.5"
              width="18.8911"
              height="19"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="0.5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_15_82"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_15_82"
                result="shape"
              />
            </filter>
            <clipPath id="clip0_15_82">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <h1 class="text-xl">Your Profile</h1>
      </div>
      <!-- header -->
      <div>
        <form @submit.prevent="handleUpdateUser">
          <h1 class="text-2xl font-bold">Profile details</h1>
          <div class="flex gap-10">
            <div>
              <h1>Profile picture</h1>
              <img
                src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"
                alt=""
                class="w-56 h-56 rounded-md border-dotted border-2 border-black p-4"
              />
            </div>
            <div class="flex flex-col">
              <div class="flex gap-20">
                <div>
                  <h1>First Name</h1>
                  <input
                    v-model="first_name"
                    type="text"
                    placeholder="First Name"
                    class="outline-none border-b-2 pt-4"
                  />
                </div>
                <div>
                  <h1>Last Name</h1>
                  <input
                    v-model="last_name"
                    type="text"
                    placeholder="Last Name"
                    class="outline-none border-b-2 pt-4"
                  />
                </div>
              </div>
              <div class="pt-20">
                <h1 class="pb-7 text-xl font-bold">Gender</h1>
                <div class="flex gap-20">
                  <div class="flex gap-3 items-center">
                    <input
                      type="checkbox"
                      class="outline-none border-b-2 pt-4"
                    />
                    <h1>Male</h1>
                  </div>
                  <div class="flex gap-3 items-center">
                    <input
                      type="checkbox"
                      class="outline-none border-b-2 pt-4"
                    />
                    <h1>Female</h1>
                  </div>
                </div>
              </div>
              <div class="py-10">
                <div class="flex flex-col gap-8">
                  <div class="flex flex-col">
                    <label for="email">Email Address</label>
                    <input
                      v-model="email"
                      type="email"
                      placeholder="Email"
                      class="outline-none border-b-2 pt-4"
                    />
                  </div>
                  <div class="flex flex-col">
                    <label for="username">Username</label>
                    <input
                      v-model="username"
                      type="text"
                      placeholder="Username"
                      class="outline-none border-b-2 pt-4"
                    />
                  </div>
                </div>
              </div>
              <button type="submit">Update</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"],
});

import { useToast } from "primevue/usetoast";

const toast = useToast();

const email = ref("");
const first_name = ref("");
const last_name = ref("");
const username = ref("");

const UPDATE_MUTATION = gql`
  mutation profileUpdate(
    $id: Int
    $email: String
    $first_name: String
    $last_name: String
    $username: String
  ) {
    update_users(
      where: { id: { _eq: $id } }
      _set: {
        email: $email
        first_name: $first_name
        last_name: $last_name
        username: $username
      }
    ) {
      affected_rows
      returning {
        id
        first_name
        email
        last_name
        password
        username
        password
      }
    }
  }
`;

const { mutate: profileUpdate, refetch } = useMutation(UPDATE_MUTATION);

const handleUpdateUser = async () => {
  try {
    await profileUpdate({
      id: 3,
      email: email.value,
      username: username.value,
      first_name: first_name.value,
      last_name: last_name.value,
    });
    console.log(profileUpdate);
    toast.add({
      severity: "success",
      summary: "Success Message",
      detail: "Sussesfully Posted",
      life: 3000,
    });
  } catch (error) {
    console.log(error);
  }
};
</script>
