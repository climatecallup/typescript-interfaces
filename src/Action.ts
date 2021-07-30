export interface Action {
  dateExpires: Date;
  dateFrom: Date;
  dateDisplayFormat: string;
  description: string;
  difficulty: number;
  id: string;
  image: string;
  imageCredit?: string;
  impactPoints: number;
  link?: string;
  status: 'draft' | 'published';
  timeLimited: boolean;
  tips: string;
  title: string;
  type: 'inPerson' | 'onlineExternal';
}
