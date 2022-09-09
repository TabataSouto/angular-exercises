export interface Character {
  name: string;
  job: string;
  origin: string;
  description: string;
  pictures: [
    {
      url: string;
    }
  ]
}