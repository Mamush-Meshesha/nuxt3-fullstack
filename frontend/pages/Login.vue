<template>
  <div
    class="dark:bg-[#0F172A] sm:w-[320px] md:w-[720px] lg:w-[1024px] pt-[5%] xl:w-[1544px] 2xl:w-screen sm:overflow-x-hidden sm:min-h-screen overflow-y-hidden"
  >
    <div class="flex w-screen justify-center items-center">
      <div
        class="flex h-[700px] flex-col rounded-lg shadow-lg items-center w-[700px] border justify-center"
      >
        <h1
          class="text-3xl bg-gradient-to-r from-[#71eed7] via-[#9f22c5] to-[#92a300] bg-clip-text pb-12 text-transparent inline-block capitalize"
        >
          Login into your account
        </h1>
        <form @submit.prevent="login" class="flex flex-col gap-4 w-[80%]">
          <label for="email" class="text-xl font-sarif">Email :</label>
          <input
            v-model="email"
            type="text"
            placeholder="Email"
            class="h-11 outline-none border bg-[#f6f4f4] px-3 rounded-md"
          />
          <span class="text-red-800">
            {{ errors.email }}
          </span>
          <label for="Password" class="text-xl font-sarif">Password :</label>
          <input
            v-model="password"
            type="password"
            placeholder="Password"
            class="h-11 outline-none border bg-[#f6f4f4] px-3 rounded-md"
          />
          <span class="text-red-800">
            {{ errors.password }}
          </span>
          <div class="w-[100%] flex justify-center pt-6">
            <button
              type="submit"
              class="px-3 py-2 bg-[#49884e] border rounded-md w-[30%]"
            >
              Login
            </button>
          </div>
        </form>
        <div class="py-20 flex gap-3 ml-[35%]">
          <h1>Don't have an account?</h1>
          <NuxtLink to="/register" class="text-[#2d3cc9]"
            >Register Here</NuxtLink
          >
        </div>
      </div>
    </div>
    lorem30
  </div>
</template>

<script setup>
console.log(useApollo());
import gql from "graphql-tag";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "primevue/usetoast";

const toast = useToast();

// const email = ref("");
// const password = ref("");
const router = useRouter();

const LOGIN_USER = gql`
  mutation UserLogin($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      accessToken
    }
  }
`;
const { mutate: UserLogin, onDone, onError } = useMutation(LOGIN_USER);

const { getToken, onLogin, onLogout } = useApollo();
const login = async () => {
  try {
    const res = await UserLogin({
      email: email.value,
      password: password.value,
    });

    onLogin(res?.data.login.accessToken);
    console.log(res?.data.login.accessToken);
    toast.add({
      severity: "success",
      summary: "Success Message",
      detail: "Sussesfully Posted",
      life: 3000,
    });
    router.push("/home");
  } catch (error) {
    console.error(error);
  }
};

import * as z from "zod";
import { useField, useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";

const validationSchema = toTypedSchema(
  z.object({
    email: z
      .string()
      .nonempty()
      .min(8, { message: "email must contain identifier eg. @gmail.com" })
      .max(50),
    password: z
      .string()
      .nonempty()
      .min(3)
      .max(50, { message: "atleast 3 letters" }),
  })
);

const { handleSubmit, errors } = useForm({
  validationSchema,
});

const { value: password } = useField("password");
const { value: email } = useField("email");

definePageMeta({
  middleware: "already-auth",
});
</script>
