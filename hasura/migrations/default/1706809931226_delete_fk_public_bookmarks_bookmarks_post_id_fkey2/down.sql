alter table "public"."bookmarks"
  add constraint "bookmarks_post_id_fkey2"
  foreign key ("post_id")
  references "public"."posts"
  ("id") on update restrict on delete cascade;
