<template>
  <div
    class="dark:bg-[#131f3a] dark:text-white sm:w-[320px] md:w-[720px] lg:w-[1024px] pt-[5%] xl:w-[1500px] 2xl:w-screen sm:overflow-x-hidden sm:min-h-screen overflow-x-hidden"
  >
    <div class="ml-[22%]">
      <div class="w-[59%]">
        <div>
          <FrontHead />
        </div>
        <div v-for="user in data.users" :key="user.id">
          <ul v-for="post in user.posts" :key="post.PosId">
            <img
              :src="post.url"
              alt=""
              class="w-[99%] h-[500px] rounded-md object-cover"
            />
            <div v-for="comment in post.comments" :key="comment.id">
              <div class="border mt-6">
                <div class="pt-5">
                  <div class="flex items-center gap-4">
                    <img
                      src="https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp"
                      alt=""
                      class="w-[50px] h-[50px] rounded-full object-cover"
                    />
                    <div>
                      <h1 class="">{{ user.first_name }}</h1>
                      <p class="text-xs">
                        {{ formatTimestamp(comment.created_at) }}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="pl-10">
                  <p class="py-3">{{ comment.comment }}</p>
                </div>
              </div>
              <div class="pt-5">
                <form
                  @submit.prevent="handleComment(post.id)"
                  class="flex relative"
                >
                  <input
                    v-model="comment_new"
                    type="text"
                    placeholder="Write your comment"
                    class="h-16 outline-none border rounded-md w-full px-4"
                  />
                  <button type="submit"
                    class="absolute right-0 mt-3 mr-10 py-2 border bg-[#167453] px-4 rounded-lg"
                  >
                    send
                  </button>
                </form>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useToast } from "primevue/usetoast";
const comment_new = ref("");
const toast = useToast();
const route = useRoute();
const PosId = route.params.id;
import gql from "graphql-tag";
const QUERY = gql`
  query MyQuery($id: Int) {
    users {
      first_name
      email
      last_name
      username
      posts(where: { id: { _eq: $id } }) {
        descriptions
        url
        id
        is_liked
        is_booked
        likes {
          id
        }
        comments {
          id
          comment
          created_at
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

//users comment

const USER_COMMENT = gql`
  mutation usersComment($post_id: Int!, $comment: String!) {
    insert_comments_one(object: { post_id: $post_id, comment: $comment }) {
      comment
      id
    }
  }
`;
const { mutate: usersComment } = useMutation(USER_COMMENT);
const { data } = useAsyncQuery(QUERY, { id: PosId });

// handle comments sending
const handleComment = async (post_id) => {
  try {
    await usersComment({
      post_id: post_id,
      comment: comment_new.value,
    });
    comment_new.value = "";
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

const formatTimestamp = (timestamp) => {
  const createdAt = new Date(timestamp);
  const now = new Date();
  const diff = now - createdAt;

  const hours = Math.floor(diff / 3600000); // Calculate hours
  const days = Math.floor(hours / 24); // Calculate days
  const minutes = Math.floor(diff / 60000); // Calculate minutes

  if (days > 0) {
    return `${days} days ago`;
  } else if (hours > 0) {
    return `${hours} hours ago`;
  } else {
    return `${minutes} minutes ago`;
  }
};
</script>
