export interface Character {
  id: string;
  name: string;
  job: string;
  origin: string;
  description: string;
  pictures: [ { url: string } ];
}