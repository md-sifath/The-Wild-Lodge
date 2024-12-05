import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://xevkhkhbdcjvsipjqmsh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhldmtoa2hiZGNqdnNpcGpxbXNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQwMDMzODEsImV4cCI6MjAzOTU3OTM4MX0.m2IDmTwCYAnVscs-EkJj7RDrYB13kt6EE05-efhLQZI";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

// https://xevkhkhbdcjvsipjqmsh.supabase.co/storage/v1/object/public/cabin-tmages/cabin-001.jpg
