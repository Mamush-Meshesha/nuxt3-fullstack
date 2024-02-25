<script setup>
import gql from "graphql-tag";
import { useRoute } from "vue-router";
import { useToast } from "primevue/usetoast";
import { ref } from "vue";

const toast = useToast();
const visible = ref(false);
const comment = ref("");
const routes = useRoute();
const idPa = routes.params.id;

const QUERY = gql`
  query MyQuery {
    users {
      first_name
      email
      last_name
      username
      posts {
        descriptions
        url
        id
        is_liked
        is_booked
        likes {
          id
        }
        comments_aggregate {
          aggregate {
            count
          }
        }
        likes_aggregate {
          aggregate {
            count
          }
        }
        bookmarks_aggregate {
          aggregate {
            count
          }
        }
      }
    }
  }
`;

const { data } = useAsyncQuery(QUERY);
// const description = data?.users?.posts;
const isFullTextShown = ref(false);

// const truncated = computed(() => {
//   if (data.users[0].posts[0].descriptions.length < 20) {
//     return data.users[0].posts[0].descriptions;
//   }
//   return data.users[0].posts[0].descriptions.slice(0, 20) + "...";
// });

// const check = () => {
//   console.log(description)
// }

//users bookmark

const USER_BOOKMARK = gql`
  mutation userBookmark($post_id: Int) {
    insert_bookmarks_one(
      object: { post_id: $post_id }
      on_conflict: {
        constraint: bookmarks_user_id_post_id_key
        update_columns: post_id
      }
    ) {
      id
    }
  }
`;

const DELETE_BOOKED = gql`
  mutation deleteBooked($post_id: Int!) {
    delete_bookmarks(where: { post_id: { _eq: $post_id } }) {
      affected_rows
    }
  }
`;

//comments mutation

const USER_COMMENT = gql`
  mutation usersComment($post_id: Int!, $comment: String!) {
    insert_comments_one(object: { post_id: $post_id, comment: $comment }) {
      comment
      id
    }
  }
`;

//likes query
const USERS_LIKE = gql`
  mutation userLike($post_id: Int!) {
    insert_likes_one(
      object: { post_id: $post_id }
      on_conflict: {
        constraint: likes_user_id_post_id_key
        update_columns: post_id
      }
    ) {
      id
    }
  }
`;
const DELETE_LIKE = gql`
  mutation deleteLike($post_id: Int!) {
    delete_likes(where: { post_id: { _eq: $post_id } }) {
      affected_rows
    }
  }
`;
const { mutate: deleteBooked } = useMutation(DELETE_BOOKED);
const { mutate: userBookmark } = useMutation(USER_BOOKMARK);
const { mutate: deleteLike } = useMutation(DELETE_LIKE);
const { mutate: userLike } = useMutation(USERS_LIKE);

//users like, comment. bookmarks

const handleLikes = async (post_id, is_liked) => {
  try {
    if (is_liked == null) {
      return console.log("no post id");
    }
    if (is_liked) {
      deleteLike({ post_id, is_liked });
      return;
    }
    await userLike({
      post_id: post_id,
    });
  } catch (error) {
    console.log(error);
  }
};

const handleBookmark = async (post_id, is_booked) => {
  try {
    if (post_id == null) {
      return console.log("no post id");
    }
    if (is_booked) {
      deleteBooked({ post_id, is_booked });
      return;
    }

    await userBookmark({
      post_id: post_id,
    });
  } catch (error) {
    console.log(error);
  }
};



definePageMeta({
  middleware: ["auth"],
});
</script>
<template>
  <div>
    <div
      class="lg:w-[50%] w-[100%] dark:bg-[#0F172A] dark:text-white min-h-screen ml-[20%]"
    >
      <Search />
      <div class="pt-20" v-for="user in data?.users" :key="user.id">
        <div v-for="post in user.posts" :key="post.id" class="border">
          <div>
            <FrontHead />
          </div>
          <div v-if="post">
            <div v-if="!isFullTextShown">
              <h1 class="px-4"></h1>
              <button
                @click="isFullTextShown = true"
                class="text-[#42bf34] px-4"
              >
                Show More...
              </button>
            </div>
            <div v-if="isFullTextShown">
              <h1 class="px-4">
                {{ post.descriptions }}
              </h1>
              <button
                @click="isFullTextShown = false"
                class="text-[#42bf34] px-4"
              >
                Show less...
              </button>
            </div>
          </div>
          <div v-if="post" class="px-4 py-4">
            <img
              :src="post.url"
              alt=""
              class="w-[99%] h-[500px] rounded-md object-cover"
            />
          </div>
          <div class="w-[100%] h-20 border border-t-0 items-center flex">
            <div class="flex justify-evenly w-[100%]">
              <button
                @click="handleLikes(post.id, post.is_liked)"
                class="flex gap-3 items-center"
              >
                <svg
                  class="dark:fill-[#cfc5c5]"
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  fill="#000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.9751 12.1852L20.2361 12.0574L20.9751 12.1852ZM20.2696 16.265L19.5306 16.1371L20.2696 16.265ZM6.93776 20.4771L6.19055 20.5417H6.19055L6.93776 20.4771ZM6.1256 11.0844L6.87281 11.0198L6.1256 11.0844ZM13.9949 5.22142L14.7351 5.34269V5.34269L13.9949 5.22142ZM13.3323 9.26598L14.0724 9.38725V9.38725L13.3323 9.26598ZM6.69813 9.67749L6.20854 9.10933H6.20854L6.69813 9.67749ZM8.13687 8.43769L8.62646 9.00585H8.62646L8.13687 8.43769ZM10.518 4.78374L9.79207 4.59542L10.518 4.78374ZM10.9938 2.94989L11.7197 3.13821L11.7197 3.13821L10.9938 2.94989ZM12.6676 2.06435L12.4382 2.77841L12.4382 2.77841L12.6676 2.06435ZM12.8126 2.11093L13.0419 1.39687L13.0419 1.39687L12.8126 2.11093ZM9.86194 6.46262L10.5235 6.81599V6.81599L9.86194 6.46262ZM13.9047 3.24752L13.1787 3.43584V3.43584L13.9047 3.24752ZM11.6742 2.13239L11.3486 1.45675L11.3486 1.45675L11.6742 2.13239ZM20.2361 12.0574L19.5306 16.1371L21.0086 16.3928L21.7142 12.313L20.2361 12.0574ZM13.245 21.25H8.59634V22.75H13.245V21.25ZM7.68497 20.4125L6.87281 11.0198L5.37839 11.149L6.19055 20.5417L7.68497 20.4125ZM19.5306 16.1371C19.0238 19.0677 16.3813 21.25 13.245 21.25V22.75C17.0712 22.75 20.3708 20.081 21.0086 16.3928L19.5306 16.1371ZM13.2548 5.10015L12.5921 9.14472L14.0724 9.38725L14.7351 5.34269L13.2548 5.10015ZM7.18772 10.2456L8.62646 9.00585L7.64728 7.86954L6.20854 9.10933L7.18772 10.2456ZM11.244 4.97206L11.7197 3.13821L10.2678 2.76157L9.79207 4.59542L11.244 4.97206ZM12.4382 2.77841L12.5832 2.82498L13.0419 1.39687L12.897 1.3503L12.4382 2.77841ZM10.5235 6.81599C10.8354 6.23198 11.0777 5.61339 11.244 4.97206L9.79207 4.59542C9.65572 5.12107 9.45698 5.62893 9.20041 6.10924L10.5235 6.81599ZM12.5832 2.82498C12.8896 2.92342 13.1072 3.16009 13.1787 3.43584L14.6306 3.05921C14.4252 2.26719 13.819 1.64648 13.0419 1.39687L12.5832 2.82498ZM11.7197 3.13821C11.7547 3.0032 11.8522 2.87913 11.9998 2.80804L11.3486 1.45675C10.8166 1.71309 10.417 2.18627 10.2678 2.76157L11.7197 3.13821ZM11.9998 2.80804C12.1345 2.74311 12.2931 2.73181 12.4382 2.77841L12.897 1.3503C12.3872 1.18655 11.8312 1.2242 11.3486 1.45675L11.9998 2.80804ZM14.1537 10.9842H19.3348V9.4842H14.1537V10.9842ZM14.7351 5.34269C14.8596 4.58256 14.824 3.80477 14.6306 3.0592L13.1787 3.43584C13.3197 3.97923 13.3456 4.54613 13.2548 5.10016L14.7351 5.34269ZM8.59634 21.25C8.12243 21.25 7.726 20.887 7.68497 20.4125L6.19055 20.5417C6.29851 21.7902 7.34269 22.75 8.59634 22.75V21.25ZM8.62646 9.00585C9.30632 8.42 10.0391 7.72267 10.5235 6.81599L9.20041 6.10924C8.85403 6.75767 8.30249 7.30493 7.64728 7.86954L8.62646 9.00585ZM21.7142 12.313C21.9695 10.8365 20.8341 9.4842 19.3348 9.4842V10.9842C19.9014 10.9842 20.3332 11.4959 20.2361 12.0574L21.7142 12.313ZM12.5921 9.14471C12.4344 10.1076 13.1766 10.9842 14.1537 10.9842V9.4842C14.1038 9.4842 14.0639 9.43901 14.0724 9.38725L12.5921 9.14471ZM6.87281 11.0198C6.84739 10.7258 6.96474 10.4378 7.18772 10.2456L6.20854 9.10933C5.62021 9.61631 5.31148 10.3753 5.37839 11.149L6.87281 11.0198Z"
                    fill="#1C274C"
                  />
                  <path
                    opacity="0.5"
                    d="M3.9716 21.4709L3.22439 21.5355L3.9716 21.4709ZM3 10.2344L3.74721 10.1698C3.71261 9.76962 3.36893 9.46776 2.96767 9.48507C2.5664 9.50239 2.25 9.83274 2.25 10.2344L3 10.2344ZM4.71881 21.4063L3.74721 10.1698L2.25279 10.299L3.22439 21.5355L4.71881 21.4063ZM3.75 21.5129V10.2344H2.25V21.5129H3.75ZM3.22439 21.5355C3.2112 21.383 3.33146 21.2502 3.48671 21.2502V22.7502C4.21268 22.7502 4.78122 22.1281 4.71881 21.4063L3.22439 21.5355ZM3.48671 21.2502C3.63292 21.2502 3.75 21.3686 3.75 21.5129H2.25C2.25 22.1954 2.80289 22.7502 3.48671 22.7502V21.2502Z"
                    fill="#1C274C"
                  />
                </svg>
                {{ post.likes_aggregate.aggregate.count }}
              </button>

              <div class="card flex justify-content-center">
                <NuxtLink
                  :to="{name: 'comment-id', params: { id: post.id}}"
                  class="flex gap-3 items-center"
                >
                  <svg
                    class="dark:fill-[#cfc5c5]"
                    fill="#000"
                    width="30px"
                    height="30px"
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>comment-right</title>
                    <path
                      d="M30.535 28.373c-1.809-1.73-3.119-3.968-3.7-6.485l-0.017-0.088c1.782-1.921 2.888-4.489 2.932-7.315l0-0.009c0-6.686-6.393-12.124-14.25-12.124s-14.25 5.438-14.25 12.124 6.393 12.125 14.25 12.125c0.004 0 0.009 0 0.014 0 1.883 0 3.691-0.319 5.374-0.906l-0.114 0.035c2.528 1.962 5.604 3.343 8.96 3.887l0.115 0.015c0.046 0.010 0.098 0.015 0.152 0.016h0c0.414-0 0.75-0.336 0.75-0.75 0-0.205-0.082-0.39-0.215-0.526l0 0zM21.426 24.348c-0.010-0.009-0.025-0.004-0.035-0.013-0.128-0.11-0.296-0.177-0.479-0.177h-0c-0.022 0-0.039 0.007-0.061 0.009-0.070 0.001-0.137 0.011-0.2 0.030l0.005-0.001c-1.516 0.574-3.269 0.906-5.099 0.906-0.020 0-0.040-0-0.060-0h0.003c-7.030 0-12.75-4.766-12.75-10.625s5.72-10.624 12.75-10.624c7.031 0 12.75 4.766 12.75 10.624-0.024 2.593-1.087 4.934-2.791 6.63l-0 0-0.010 0.026c-0.111 0.124-0.18 0.288-0.183 0.468v0.001c-0.001 0.015-0.002 0.033-0.002 0.050 0 0.007 0 0.014 0 0.022l-0-0.001c-0.002 0.017-0.002 0.037-0.002 0.058 0 0.008 0 0.016 0 0.024l-0-0.001c0.415 2.246 1.34 4.227 2.652 5.887l-0.021-0.028c-2.496-0.614-4.669-1.747-6.49-3.285l0.024 0.019z"
                    ></path>
                  </svg>
                  {{ post.comments_aggregate.aggregate.count }}
                </NuxtLink>
              </div>
              <button class="flex items-center">
                <svg
                  class="dark:fill-[#cfc5c5]"
                  height="30px"
                  width="30px"
                  fill="#000"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  enable-background="new 0 0 512 512"
                >
                  <g>
                    <path
                      fill="#231F20"
                      d="m366.2,392.5c-11.6,0-22.3,3.7-31.1,9.9l-138.1-128.5c2-5.6 3-11.6 3-17.9 0-6.3-1.1-12.3-3-17.9l138-128.5c8.8,6.2 19.6,9.9 31.1,9.9 29.9,0 54.2-24.3 54.2-54.2 0-29.9-24.3-54.2-54.2-54.2-29.9,0-54.2,24.3-54.2,54.2 0,10.8 3.2,20.9 8.7,29.3l-134.5,125.2c-9.9-11-24.3-18-40.3-18-29.9,0-54.2,24.3-54.2,54.2s24.3,54.2 54.2,54.2c16,0 30.4-7 40.3-18l134.5,125.2c-5.5,8.5-8.7,18.5-8.7,29.3 0,29.9 24.3,54.2 54.2,54.2 29.9,0 54.2-24.3 54.2-54.2 0.1-29.8-24.2-54.2-54.1-54.2zm0-360.6c18.4,2.13163e-14 33.4,15 33.4,33.4 0,18.4-15,33.4-33.4,33.4-18.4,0-33.4-15-33.4-33.4 0-18.5 15-33.4 33.4-33.4zm-220.4,257.5c-18.4,0-33.4-15-33.4-33.4s15-33.4 33.4-33.4c18.4,0 33.4,15 33.4,33.4s-15,33.4-33.4,33.4zm220.4,190.7c-18.4,0-33.4-15-33.4-33.4 0-18.4 15-33.4 33.4-33.4 18.4,0 33.4,15 33.4,33.4 5.68434e-14,18.5-15,33.4-33.4,33.4z"
                    />
                  </g>
                </svg>
              </button>
              <button
                @click="handleBookmark(post.id, post.is_booked)"
                class="flex gap-3 items-center"
              >
                <svg
                  class="dark:fill-[#cfc5c5]"
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 6.2C5 5.07989 5 4.51984 5.21799 4.09202C5.40973 3.71569 5.71569 3.40973 6.09202 3.21799C6.51984 3 7.07989 3 8.2 3H15.8C16.9201 3 17.4802 3 17.908 3.21799C18.2843 3.40973 18.5903 3.71569 18.782 4.09202C19 4.51984 19 5.07989 19 6.2V21L12 16L5 21V6.2Z"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                </svg>
                {{ post.bookmarks_aggregate.aggregate.count }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
