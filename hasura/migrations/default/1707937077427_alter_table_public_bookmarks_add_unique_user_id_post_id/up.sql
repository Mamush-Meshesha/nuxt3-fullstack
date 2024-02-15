alter table "public"."bookmarks" add constraint "bookmarks_user_id_post_id_key" unique ("user_id", "post_id");
