export type Role='teacher'|'student'; export type ExerciseType='multiple_choice'|'fill_blank'|'essay'|'listening'|'speaking';
export type Profile={user_id:string;full_name:string;role:Role;email?:string};
export type Classroom={id:string;name:string;description:string|null;teacher_id:string;created_at:string;class_members?:{count:number}[]};
export type Question={id?:string;type:ExerciseType;prompt:string;passage?:string|null;options?:string[];audio_path?:string|null;points:number;sort_order:number};
export type Assignment={id:string;classroom_id:string;title:string;description:string|null;due_at:string|null;published:boolean;created_at:string;classrooms?:{name:string}|{name:string}[];questions?:Question[]};
export const TYPE_LABEL:Record<ExerciseType,string>={multiple_choice:'Trắc nghiệm',fill_blank:'Điền từ',essay:'Tự luận',listening:'Nghe',speaking:'Nói'};
