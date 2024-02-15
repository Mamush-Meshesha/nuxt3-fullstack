alter table "public"."likes" drop constraint "likes_user_id_fkey3",
  add constraint "likes_user_id_fkey"
  foreign key ("user_id")
  references "public"."posts"
  ("id") on update restrict on delete restrict;
