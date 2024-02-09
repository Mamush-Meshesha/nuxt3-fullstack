<template>
  <div
    class="dark:bg-[#0F172A] sm:w-[320px] md:w-[720px] lg:w-[1024px] pt-[2%] xl:w-[1544px] 2xl:w-screen sm:overflow-x-hidden sm:min-h-screen overflow-y-hidden"
  >
    <div class="flex w-screen justify-center items-center">
      <div
        class="flex h-[870px] flex-col rounded-lg shadow-lg items-center w-[700px] border justify-center"
      >
        <h1
          class="text-3xl bg-gradient-to-r from-[#71eed7] via-[#9f22c5] to-[#92a300] bg-clip-text text-transparent inline-block pb-4"
        >
          Sign Up here Freely!
        </h1>
        <form class="flex flex-col gap-4 w-[80%]">
          <label for="username">Username</label>
          <input
            v-model="username"
            type="text"
            placeholder="Username"
            class="h-11 outline-none border bg-[#f6f4f4] px-3 rounded-md"
          />
           <span class="text-red-800">
          {{ errors.username }}
        </span>
          <label for="firstname">First Name</label>
          <input
            v-model="first_name"
            type="text"
            placeholder="First Name"
            class="h-11 outline-none border bg-[#f6f4f4] px-3 rounded-md"
          />
           <span class="text-red-800">
          {{ errors.first_name }}
        </span>
          <label for="lastname">Last Name</label>
          <input
            v-model="last_name"
            type="text"
            placeholder="Last Name"
            class="h-11 outline-none border bg-[#f6f4f4] px-3 rounded-md"
          />
          <span class="text-red-800">
          {{ errors.last_name }}
        </span>
          <label for="email">Email</label>
          <input
            v-model="email"
            type="email"
            placeholder="Email"
            class="h-11 outline-none border bg-[#f6f4f4] px-3 rounded-md"
          />
          <span class="text-red-800">
          {{ errors.email }}
        </span>
          <label for="password">Password</label>
          <input
            v-model="password"
            type="password"
            placeholder="Password"
            class="h-11 outline-none border bg-[#f6f4f4] px-3 rounded-md"
          />
          <span class="text-red-800">
          {{ errors.password }}
        </span>
        </form>
        <div class="py-5">
          <button @click="register" class="py-2 px-5 bg-[#49884e] rounded-md">
            Register
          </button>
        </div>
        <div class="flex gap-5 pl-[27%]">
          <h1 class="dark:text-white">Already have an account?</h1>
          <NuxtLink to="/login" class="text-[#2e3ebb]"> Login Here </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import gql from "graphql-tag";
import { useMutation } from "@vue/apollo-composable";
import { ref } from "vue";

// const username = ref("");
// const password = ref("");
// const email = ref("");
// const first_name = ref("");
// const last_name = ref("");

const MUTATION_REGISTER = gql`
  mutation RegisterUser(
    $email: String!
    $first_name: String!
    $last_name: String!
    $username: String!
    $password: String!
  ) {
    register(
      email: $email
      first_name: $first_name
      last_name: $last_name
      password: $password
      username: $username
    ) {
      success
    }
  }
`;

const {
  mutate: RegisterUser,
  onDone,
  onError,
} = useMutation(MUTATION_REGISTER);

const register = async () => {
  await RegisterUser({
    username: username.value,
    first_name: first_name.value,
    last_name: last_name.value,
    email: email.value,
    password: password.value,
  });
};

onDone((result) => {
  console.log(result.data.register.success);
  alert("Successfully registered");
});

onError((error) => {
  console.log(error);
});


//vee-validation
import * as z from "zod"
import { useForm, useField } from "vee-validate"
import { toTypedSchema } from "@vee-validate/zod";

const validationSchema = toTypedSchema(
  z.object({
    first_name: z.string().nonempty().min(5, { message: "First name is required" }).max(50),
    last_name: z.string().nonempty().min(5, { message: "Last name is required" }).max(50),
    username: z.string().nonempty().min(5, { message: "Username atleast contain 5 character" }).max(50),
    email: z.string().nonempty().min(5, { message: "email must contain atleast @gmail.com" }).max(50),
    password: z.string().nonempty().min(5, { message: "password is atleast 6 elements" }).max(50)
  })
)

const { handleSubmit, errors } = useForm({
validationSchema
})

const { value: first_name } = useField("first_name")
const { value: last_name } = useField("last_name")
const { value: username } = useField("username")
const { value: password } = useField("password")
const { value: email} = useField("email")

</script>
