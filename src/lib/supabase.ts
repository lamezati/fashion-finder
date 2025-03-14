import { createClient } from '@supabase/supabase-js';

// These values should be set in environment variables in production
const supabaseUrl = 'https://your-project-url.supabase.co';
const supabaseKey = 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseKey);
