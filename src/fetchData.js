// src/utils/fetchData.js
import { supabase } from './supabaseClient';

export const fetchHistoricalData = async () => {
  const { data, error } = await supabase
    .from('safesteps')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error(error);
    return [];
  }

  return data;
};
