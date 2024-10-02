import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANONE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL and key must be provided in the environment variables.");
}

export const supabase = createClient(supabaseUrl, supabaseKey);
