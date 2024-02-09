alter table "public"."likes"
  add constraint "likes_user_id_fkey2"
  foreign key ("user_id")
  references "public"."users"
  ("id") on update restrict on delete cascade;
