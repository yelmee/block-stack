import di
    from "../pages/api/(di)/di";
import {
    env
} from "./env";

export const DI = di(env.supabase_url!! , env.supabase_key!!);


