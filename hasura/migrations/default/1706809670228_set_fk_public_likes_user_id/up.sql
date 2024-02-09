alter table "public"."likes"
  add constraint "likes_user_id_fkey"
  foreign key ("user_id")
  references "public"."posts"
  ("id") on update restrict on delete cascade;
