import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lpvsoibpraceztdoqddh.supabase.co'; const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwdnNvaWJwcmFjZXp0ZG9xZGRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE3ODQ2MDAsImV4cCI6MjAyNzM2MDYwMH0.hmSHl0JMzG4kbgvxFYPEbeymFresZ3Weea25AKxYPqU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);