CREATE OR REPLACE FUNCTION public.post_likes(post_row posts, hasura_session json)
 RETURNS boolean
 LANGUAGE sql
 STABLE
AS $function$
SELECT EXISTS (
    SELECT 1
    FROM likes A
    WHERE A.user_id = CAST((hasura_session ->> 'x-hasura-user-id') as INTEGER)  AND A.post_id = post_row.id
);
$function$;
