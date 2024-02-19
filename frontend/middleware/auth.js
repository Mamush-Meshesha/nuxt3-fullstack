
export default defineNuxtRouteMiddleware(async(to, from) => {
  // const router = useRouter();
  // const route = useRoute();

  // // const isProtectedRoute = to.path !== "/login" && to.path !== "/"; // Adjust according to your protected routes

  // // if (isProtectedRoute) {
  // //   const accessToken = useCookie("accessToken").value;

  // //   if (!accessToken) {
  // //     // Redirect to login or register if there's no token
  // //     return router.push("/login");
  // //   }
    
  // // } else {
  // //   // Handle login/register routes if token exists
  // //   if (useCookie("accessToken").value) {
  // //     // Redirect to home if accessing login/register with valid token
  // //     return router.push("/home");
  // //   }
  // // }


  // const protectedRoutes = [
  //   // List all paths that require authentication here, e.g.,
  //   "/home",
  //   "/profile",
  //   "/post"
  //   // ...
  // ];

  // // Check if token exists
  // const accessToken = useCookie("accessToken").value;

  // // Handle protected routes based on token presence
  // if (protectedRoutes.includes(to.path)) {
  //   if (!accessToken) {
  //     // Redirect to login if no token for protected routes
  //     return router.push("/login");
  //   } else {
  //     // If token exists and user attempts to access login/register routes,
  //     // redirect to a custom authorized destination if desired (e.g., "/home")
  //     if (["/login", "/"].includes(to.path)) {
  //       // Replace with your preferred authorized route
  //       if (accessToken) {
  //         return router.push("/post");
  //       }
  //     }
  //   }
  // }

  const accessToken = useCookie("accessToken").value
  
  if (!accessToken) {
    return await navigateTo("/login")
  }


});
