alter table "public"."likes" drop constraint "likes_user_id_fkey",
  add constraint "likes_user_id_fkey3"
  foreign key ("user_id")
  references "public"."posts"
  ("id") on update restrict on delete restrict;
