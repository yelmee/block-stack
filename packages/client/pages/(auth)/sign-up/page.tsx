// import {
//     signUpWithPassword
// } from "../../../utils/auth-util";
// import {
//     Form
// } from "../../../utils/useForms";
// import {
//     UserSignUpFormSchema
// } from "../../../utils/Schema";
// import {
//     InputWithLabel
// } from "../../../components/ui/InputWithLabel";
//
// export default async function  SignUp(){
//
//     return (
//         <Form
//             schema={UserSignUpFormSchema}
//             onSubmit={signUpWithPassword}
//         >
//             {({ register, formState }) => (
//                 <div>
//                     <h2>계정 등록</h2>
//                     <InputWithLabel label="email" register={register} required />
//                     {formState.errors?.email?.message && (
//                         <p>{formState.errors.email.message}</p>
//                     )}
//                     <InputWithLabel label="password" register={register} required />
//                     {formState.errors?.password?.message && (
//                         <p>{formState.errors.password.message}</p>
//                     )}
//                     <button type="submit">계속</button>
//                 </div>
//             )}
//         </Form>
//     );
// };
