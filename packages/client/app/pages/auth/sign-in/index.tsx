"use client"
import * as React
    from 'react';
import {
    useAuth,
    UserSignUpFormSchema
} from "@app/hooks/useAuth";
import {
    InputWithLabel
} from "@app/components/InputWithLabel";
import {
    Form
} from "@app/components/Forms";

export default function SignIn(){
    const { signIn } = useAuth();

    return (
        <Form
            schema={UserSignUpFormSchema}
            onSubmit={signIn}
        >
            {
                ({ register, formState }) => (
                    <div>
                        <h2>계정 추가</h2>
                        <InputWithLabel label="email" register={register} required />
                        {formState.errors?.email?.message && (
                            <p>{formState.errors.email.message}</p>
                        )}
                        <InputWithLabel label="password" register={register} required />
                        {formState.errors?.password?.message && (
                            <p>{formState.errors.password.message}</p>
                        )}
                        <button type="submit">계속</button>
                        {/*<Link to={'/sign-up'}><button>계정 등록</button></Link>*/}

                    </div>
                )
            }
        </Form>
    );
};
