CREATE TABLE "public"."is_active" ("id" serial NOT NULL, "user_id" integer NOT NULL, "updated_at" timestamptz NOT NULL DEFAULT now(), "active" boolean NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON UPDATE restrict ON DELETE restrict);
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_is_active_updated_at"
BEFORE UPDATE ON "public"."is_active"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_is_active_updated_at" ON "public"."is_active"
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
