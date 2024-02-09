<template>
  <div
    class="fixed top-0 left-0 bottom-0 w-[20%] dark:bg-[#0F172A] dark:from-[#0F172A] dark:via-[#0F172A] dark:to-[#0F172A] h-screen bg-[#b4b4b4]"
  >
    <div>
      <div>
        <img src="../logo/mlogo.png" alt="" class="w-[250px] h-[130px]" />
      </div>

      <div
        class="flex flex-col gap-6 sm:w-[10%] md:w-[20%] dark:text-white px-20 items-stretch h-screen"
      >
        <div>
          <RouterLink
            to="/"
            class="md:w-[290px] w-[10%] h-14 rounded-l-xl hover:bg-[#000] focus:text-black text-xl flex items-center px-10"
          >
            <button class="hidden md:block">Get Started</button>
            <button class="md:hidden block"> 
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                width="30"
                height="30"
              >
                <path
                  fill="#fff"
                  d="m20.969,20.027c-.487-3.659-3.257-6.084-5.669-8.027,2.412-1.943,5.183-4.368,5.669-8.026.133-1.003-.172-2.016-.84-2.777-.666-.76-1.626-1.196-2.635-1.196H6.505c-1.009,0-1.969.437-2.635,1.198-.667.763-.973,1.776-.839,2.781.489,3.656,3.258,6.08,5.669,8.021-2.411,1.942-5.18,4.365-5.669,8.021-.135,1.007.171,2.022.839,2.785.664.759,1.623,1.194,2.629,1.194h11c1.007,0,1.965-.435,2.629-1.193.667-.762.973-1.775.839-2.78Zm-1.592,2.122c-.474.541-1.158.852-1.876.852H6.5c-.719,0-1.403-.311-1.876-.852-.478-.546-.697-1.273-.601-1.994.469-3.508,3.419-5.868,5.79-7.764.119-.095.188-.239.188-.391s-.069-.295-.188-.391c-2.371-1.896-5.32-4.256-5.79-7.764-.096-.719.123-1.444.6-1.99.476-.543,1.162-.855,1.882-.855h10.988c.721,0,1.407.311,1.883.854.478.545.696,1.269.601,1.987-.467,3.509-3.418,5.871-5.79,7.768-.119.095-.187.239-.187.391s.069.295.187.391c2.372,1.897,5.323,4.258,5.79,7.768.096.72-.123,1.445-.601,1.99Zm-1.976-18.515c.042-.15.011-.312-.084-.436-.095-.125-.242-.197-.398-.197H7.138c-.156,0-.303.074-.397.197-.094.124-.126.285-.085.435.601,2.208,2.708,3.894,4.747,5.523,0,0,.186.158.27.244.094.097.223.151.358.151s.264-.054.358-.151c.084-.086.173-.167.268-.243,1.937-1.549,4.132-3.305,4.746-5.524Zm-5.371,4.743h0s0,0,0,0c0,0-.002-.001-.002-.001-1.696-1.357-3.444-2.755-4.178-4.374h8.354c-.754,1.641-2.559,3.084-4.174,4.375Z"
                />
              </svg>
            </button>
          </RouterLink>
          <RouterLink
            to="/post"
            class="w-[290px] h-14 rounded-l-xl hover:bg-[#000] focus:text-black text-xl flex items-center px-10"
          >
            <button class="hidden md:block">Home</button>
            <button class="md:hidden block">
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.5"
                  d="M2 12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039Z"
                  fill="#1fff"
                />
                <path
                  d="M9 17.25C8.58579 17.25 8.25 17.5858 8.25 18C8.25 18.4142 8.58579 18.75 9 18.75H15C15.4142 18.75 15.75 18.4142 15.75 18C15.75 17.5858 15.4142 17.25 15 17.25H9Z"
                  fill="#fff"
                />
              </svg>
            </button>
          </RouterLink>
          <RouterLink
            to="/"
            class="w-[290px] h-14 rounded-l-xl hover:bg-[#000] focus:text-black text-xl flex items-center px-10"
          >
            <button>Chat</button>
          </RouterLink>
          <RouterLink
            to="/"
            class="w-[290px] h-14 rounded-l-xl hover:bg-[#000] focus:text-black text-xl flex items-center px-10"
          >
            <button>Post</button>
          </RouterLink>
          <RouterLink
            to="/"
            class="w-[290px] h-14 rounded-l-xl hover:bg-[#000] focus:text-black text-xl flex items-center px-10"
          >
            <button>Services</button>
          </RouterLink>
          <RouterLink
            to="/"
            class="w-[290px] h-14 rounded-l-xl hover:bg-[#000] focus:text-black text-xl flex items-center px-10"
          >
            <button>About Me</button>
          </RouterLink>
          <div class="pl-10 w-[200px] pt-5">
            <button
              @click="toggleTheme"
              class="transform transition-all duration-1000 ease-in-out"
            >
              <svg
                v-if="colorMode.preference === 'light'"
                class="text-2xl"
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
              >
                <g fill="none" stroke="#000" stroke-width="1.5">
                  <path
                    fill="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
                  />
                  <path d="M17 17H7A5 5 0 0 1 7 7h10a5 5 0 0 1 0 10Z" />
                </g>
              </svg>
              <svg
                v-else
                class="text-2xl"
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
                transform="scale(-1, 1)"
              >
                <g fill="none" stroke="#45c83c" stroke-width="1.5">
                  <path
                    fill="#45c83c"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
                  />
                  <path d="M17 17H7A5 5 0 0 1 7 7h10a5 5 0 0 1 0 10Z" />
                </g>
              </svg>
            </button>
          </div>
        </div>
        <div class="mt-6 relative">
          <button
            @click="showProfile"
            class="capitalize h-12 border rounded-md w-28 cursor-pointer"
          >
            profile
          </button>

          <div
            v-if="Profile"
            class="w-[260px] h-[140px] border border-white rounded-lg mt-2"
          >
            <div class="flex flex-col gap-3 pt-16 px-6 absolute top-0">
              <div>
                <button @click="Profile = false">mam1620she@gmail.com</button>
              </div>
              <div>
                <button>Add Other Account</button>
              </div>
              <div>
                <Logout />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const Profile = ref(false);

const showProfile = () => {
  Profile.value = !Profile.value;
  if (Profile.value) {
    return true;
  } else {
    return false;
  }
};

//darkmode
const colorMode = useColorMode();
const toggleTheme = () => {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
};
</script>
