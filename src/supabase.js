import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://termewaizhasxpcnzaci.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRlcm1ld2Fpemhhc3hwY256YWNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI4NTc5NDksImV4cCI6MTk5ODQzMzk0OX0.R5f5IeV3bmJBFlN7JfhcgKYvhiT6yOv0QWsbUqQHsKM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
