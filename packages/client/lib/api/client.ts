import ApiDB
    from "adapters/src/infrastructures/ApiDB";
import IndexedDB
    from "adapters/src/infrastructures/IndexedDB";
import {
    env
} from "../env";


const network = new ApiDB({
    key: env.supabase_key!!, url: env.supabase_url!!
})

const  storage = new IndexedDB()

export {network, storage}