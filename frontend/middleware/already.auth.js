export default defineNuxtRouteMiddleware(async (to, from) => {
  const accessToken = useCookie("accessToken").value

    
  if (!!accessToken) {
    return await navigateTo("/home");
  }
});
