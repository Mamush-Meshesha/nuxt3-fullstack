// import { defineStore } from 'pinia'
// import type { Login, User } from '~/types'

// export const useUserStore = defineStore("user", ()=> {
//     const user = ref()
//     const token = localStorage.getItem('accessToken') || ''

//     const setToken = (newToken: any) => {
//         localStorage.setItem('accessToken', newToken)
//     }
//     const setUser = (data: any) => (user.value = data)
    

//     const signIn = async (data: Login) => {
//         try {
//             const res = await $fetch<User>("http://host.docker.internal:3300/login", {
//                 method: "POST",
//                 body: data
//             })
//             setToken(res.token)
//         } catch (error) {
//             console.log(error)
//         }
//     };

//     const signOut = async () => {
//     setToken(null)
//     setUser(null)
//     }
//     return { user, token, setToken, setUser, signIn,signOut }

// })