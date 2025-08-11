// import {
//     useState
// } from "react";
// import {
//     IAuthDTO
// } from "domains/src/dtos/interfaces/IAuthDTO";
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
// export default async function SignIn(){
//     const [user, setUser] = useState<IAuthDTO>({id: '', email:''});
//
//     return (
//         <Form
//             schema={UserSignUpFormSchema}
//             onSubmit={signIn}
//         >
//             {
//                 ({ register, formState }) => (
//                     <div>
//                         <h2>계정 추가</h2>
//                         <InputWithLabel label="email" register={register} required />
//                         {formState.errors?.email?.message && (
//                             <p>{formState.errors.email.message}</p>
//                         )}
//                         <InputWithLabel label="password" register={register} required />
//                         {formState.errors?.password?.message && (
//                             <p>{formState.errors.password.message}</p>
//                         )}
//                         <button type="submit">계속</button>
//                         {/*<Link to={'/sign-up'}><button>계정 등록</button></Link>*/}
//
//                     </div>
//                 )
//             }
//         </Form>
//     );
// };
// type Repo = {
//     name: string
//     stargazers_count: number
// }
//
// // export const getStaticPaths = (async () => {
// //     return {
// //         paths: [
// //             {
// //                 params: {
// //                     name: 'next.js',
// //                 },
// //             }, // See the "paths" section below
// //         ],
// //         fallback: true, // false or "blocking"
// //     }
// // }) satisfies GetStaticPaths
// //
// // export const getStaticProps = (async (context) => {
// //     const res = await fetch(`${API_URL}/api/sign-in`)
// //     const repo = await res.json()
// //     return { props: { repo } }
// // }) satisfies GetStaticProps<{
// //     repo: Repo
// // }>