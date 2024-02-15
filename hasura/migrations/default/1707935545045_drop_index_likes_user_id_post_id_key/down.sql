CREATE  INDEX "likes_user_id_post_id_key" on
  "public"."likes" using btree ("post_id", "user_id");
