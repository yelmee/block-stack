import {
    SupabaseClient,
} from "@supabase/supabase-js";


export default class ApiDB extends SupabaseClient{

  constructor({url, key}: {url: string, key: string}) {
      super(url,
          key,)

  }


}
