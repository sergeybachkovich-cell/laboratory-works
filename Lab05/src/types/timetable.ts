export interface Lesson {
    id: number; 
    subject: string;
    time: string;
    type: 'lecture' | 'practice';
    room: string;
}