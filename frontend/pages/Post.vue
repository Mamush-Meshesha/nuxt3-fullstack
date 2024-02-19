<template>
  <div>
    <div
      class="w-[50%] ml-[22%] dark:bg-[#0F172A] mt-[7%] h-[600px] border rounded-md flex justify-center"
    >
      <div>
        <h1 class="text-xl pt-4 capitalize">what's on your mind?</h1>
        <form @submit.prevent="handleUserPost" class="py-4">
          <input v-model="descriptions"
            type="text"
            placeholder="Write your feeling..."
            class="text-xl px-3 h-[300px] pb-52 w-[500px] border pt-0 outline-none rounded-md"
          />
          <div class="card pt-5">
            <Toast />
            <label class="file-upload">
              <input
                type="file"
                :auto="true"
                @change="handleFileUpload"
                accept="image/*"
              />
              <div class="flex gap-3 py-1 items-center">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15"
                    stroke="#1fff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 16V3M12 3L16 7.375M12 3L8 7.375"
                    stroke="#fff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <h1>Choose</h1>
                <button
                  @click="uploadImage"
                  class="px-2 py-1 bg-[#24803e] text-white rounded-md"
                >
                  upload
                </button>
              </div>
            </label>
          </div>
          <div class="float-right py-6">
            <button type="sumbit" @click="handleUserPost"
              class="px-5 py-2 bg-[#391fcc] text-white rounded-md"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";

const toast = useToast();

const onUpload = () => {
  toast.add({
    severity: "success",
    summary: "Success Message",
    detail: "Sussesfully Logged In",
    life: 3000,
  });
};

//cloudinary
import { Cloudinary } from "@cloudinary/url-gen";
import { ref } from "vue";

const selectedFile = ref(null);
const cloudName = "dmjtytstd";
const apiKey = process.env.VUE_APP_CLOUDINARY_API_KEY;
const apiSecret = process.env.VUE_APP_CLOUDINARY_API_SECRET;

const descriptions = ref("");
const imageUrl = ref("");
const cld = new Cloudinary({
  cloud: {
    cloudName: cloudName,
    apiKey: apiKey,
    apiSecret: apiSecret,
  },
});

const handleFileUpload = (event) => {
  selectedFile.value = event.target.files[0];
};

const uploadImage = () => {
  if (selectedFile.value) {
    const formData = new FormData();
    formData.append("file", selectedFile.value);
    formData.append("upload_preset", "mam-upload");

    fetch(`https://api.cloudinary.com/v1_1/${cloudName}/upload`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("image uploaded successfully", data.secure_url);
        imageUrl.value = data.secure_url;
        toast.add({
          severity: "success",
          summary: "Success Message",
          detail: "Sussesfully Posted",
          life: 3000,
        });
      })

      .catch((error) => {
        console.log("error uploading", error);
      });
  } else {
    console.error(" no file selected");
  }
};

//graphql
import { useMutation } from "@vue/apollo-composable";
import gql from "graphql-tag";

const MUTATION_POST = gql`
  mutation userPost($descriptions: String, $url: String, ) {
    insert_posts_one(
      object: { descriptions: $descriptions, url: $url }
    ) {
      descriptions
      id
      url
      user_id
    }
  }
`;

const { mutate: userPost } = useMutation(MUTATION_POST);

const handleUserPost = async () => {
  try {
    await userPost({
      descriptions: descriptions.value,
      url: imageUrl.value,
    });
    toast.add({
      severity: "success",
      summary: "Success Message",
      detail: "Sussesfully Posted",
      life: 3000,
    });
  } catch (error) {
    console.log(error);
  }
  console.log(userPost);
};
definePageMeta({
  middleware: ["auth"]
})
</script>

<style scoped>
input[type="file"] {
  display: none;
}
.file-upload {
  border: 1px solid #dd0808;
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
  background: #0a581e;
  color: white;
  border-radius: 10px;
}
</style>
