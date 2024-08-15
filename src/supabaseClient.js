import { createClient } from "@supabase/supabase-js";


const supabaseUrl = 'https://bmyvvoagtteewnvoexur.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJteXZ2b2FndHRlZXdudm9leHVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM3MjQ2MTQsImV4cCI6MjAzOTMwMDYxNH0.fvUm9J-Hqoyfcw3XUZJSG9lMaFTMgAHlFflyny-pFjU';

export const supabase = createClient(supabaseUrl, supabaseKey);
