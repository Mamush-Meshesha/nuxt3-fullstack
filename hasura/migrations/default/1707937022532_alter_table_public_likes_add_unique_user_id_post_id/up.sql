alter table "public"."likes" add constraint "likes_user_id_post_id_key" unique ("user_id", "post_id");
