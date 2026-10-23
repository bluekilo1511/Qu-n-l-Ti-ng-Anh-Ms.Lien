import { createClient } from '@supabase/supabase-js';
const url=import.meta.env.VITE_SUPABASE_URL as string|undefined; const key=import.meta.env.VITE_SUPABASE_ANON_KEY as string|undefined;
export const configured=Boolean(url&&key&& !url.includes('YOUR_PROJECT') && !key.includes('YOUR_SUPABASE'));
export const supabase=configured?createClient(url!,key!,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}}):null;
export async function api<T=any>(action:string,payload:Record<string,unknown>={}){if(!supabase)throw new Error('Hãy cấu hình Supabase trong tệp .env trước.');const {data,error}=await supabase.functions.invoke('center-api',{body:{action,...payload}});if(error)throw new Error(error.message);if(data?.error)throw new Error(data.error);return data as T;}
export function friendlyError(e:unknown){return e instanceof Error?e.message:'Đã xảy ra lỗi. Vui lòng thử lại.';}
