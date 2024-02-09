CREATE TABLE "public"."likes" ("id" serial NOT NULL, "user_id" integer NOT NULL, "post_id" integer NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") );
