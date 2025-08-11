//
// import {
//   useMemo,
// } from "react";
// import type {
//   SubmitHandler,
// } from "react-hook-form";
// import {
//   IUserInfoVOParams
// } from "domains/src/vos/interfaces/IUserInfoVO";
// import {
//   DI
// } from "../lib/di";
//
//
//
// const di = useMemo(() => DI(), [])
//
//   const signUpWithPassword: SubmitHandler<IUserInfoVOParams> = async (params: IUserInfoVOParams) => {
//       const res = await di.auth.signUp(params);
//       console.log(res, 'signup log')
//     }
//
//
//   const signIn: SubmitHandler<IUserInfoVOParams> =  async (params: IUserInfoVOParams) => {
//      return await di.auth.signIn({email: params.email, password: params.password});
//   }
//
// const signOut = async () => {
//     return  await di.auth.signOut();
//   }
//
// const getUser = async () => {
//   return await di.auth.getUser();
// }
//
//
//   export {
//     signUpWithPassword,
//     signIn,
//     signOut,
//     getUser
//   }
//
