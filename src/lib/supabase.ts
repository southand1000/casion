import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://gyngyodjgdpklmugyyps.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd5bmd5b2RqZ2Rwa2xtdWd5eXBzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIzMjUzNjEsImV4cCI6MjA5NzkwMTM2MX0.ZUsPNEiZ3oUFzANbkMthy1lMIS4lylK3oLx-X_Atds0";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);