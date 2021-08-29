export interface TechDTO {
  id: string;
  name: string;
  start_date: Date;
  type: 'web' | 'mobile' | 'developer';
  formatted_start_date: string;
}