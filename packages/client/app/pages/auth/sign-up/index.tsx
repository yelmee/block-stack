"use client"
import * as React
    from 'react';
import {
    Form
} from "@app/components/Forms";
import {
    InputWithLabel
} from "@app/components/InputWithLabel";
import {
    useAuth,
    UserSignUpFormSchema
} from "@app/hooks/useAuth";

export default function  SignUp(){
    const { signUpWithPassword } = useAuth();

    return (
        <Form
            schema={UserSignUpFormSchema}
            onSubmit={signUpWithPassword}
        >
            {({ register, formState }) => (
                <div>
                    <h2>계정 등록</h2>
                    <InputWithLabel label="email" register={register} required />
                    {formState.errors?.email?.message && (
                        <p>{formState.errors.email.message}</p>
                    )}
                    <InputWithLabel label="password" register={register} required />
                    {formState.errors?.password?.message && (
                        <p>{formState.errors.password.message}</p>
                    )}
                    <button type="submit">계속</button>
                </div>
            )}
        </Form>
    );
};
