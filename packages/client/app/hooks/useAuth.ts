"use client"

import {
  useMemo,
  useState
} from "react";
import presenters
  from "@app/di/useDi";
import type {
  SubmitHandler,
} from "react-hook-form";
import {
  z
} from "zod";
import {
  AuthDTO
} from "adapters/src/dtos/AuthDTO";
import {
  SUPABASE_KEY,
  SUPABASE_URL
} from "@app/utils/constants";


export const UserSignUpFormSchema = z.object({
  email: z.string().email({ message: "이메일 양식이 아님" }),
  password: z.string().regex(new RegExp('[A-Za-z0-9_]'))
});
export type UserSignUpFormSchema = z.infer<typeof UserSignUpFormSchema>;

interface UserSignUp {
  email: string;
  password: string;
}


export const useAuth = () => {
  const [user, setUser] = useState<AuthDTO>();
  const di = useMemo(() => presenters(SUPABASE_URL, SUPABASE_KEY), [])


  const onSubmit: SubmitHandler<UserSignUp> = async (params) => {
    const res = await di.auth.signUp(params);
    if (res) {
      setUser(res)
    }
  };


  const signIn: SubmitHandler<UserSignUp> = async (params) => {
    return await di.auth.signIn(params);
  };





  return {
    signUpWithPassword: onSubmit,
    signIn,
    signOut: di.auth.signOut(),
    user,
  };
};
