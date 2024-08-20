import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://luzizkvqjblnsppbxaot.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1eml6a3ZxamJsbnNwcGJ4YW90Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQxNTcxMTksImV4cCI6MjAzOTczMzExOX0.nHxs3SzAAQCBFr3FOb9_wfs5ai5P65E8Fa7gUJX8rPs';
export const supabase = createClient(supabaseUrl, supabaseKey);
