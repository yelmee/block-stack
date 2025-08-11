import z from "zod";

export const UserSignUpFormSchema = z.object({
    email: z.string().email({ message: "이메일 양식이 아님" }),
    password: z.string().regex(new RegExp('[A-Za-z0-9_]'))
});

export type UserSignUpFormSchema = z.infer<typeof UserSignUpFormSchema>;