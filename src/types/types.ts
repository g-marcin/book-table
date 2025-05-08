export type bookVolumeDTO = {
  id: string;
  volumeInfo: {
    title:string;
    author: string;
    category: string;
    language: string;
    authors:string[]
    categories:string[]
    publisher:string
    imageLinks:{
      thumbnail:string
    }
    
    [k: string]: unknown;
  };
  [k: string]: unknown;
};

export type AuthorRecordType = {
  id: string;
  author: string;
  language: string;
  category: string;
};

export type BookRecordType = {
  id: string;
  title: string;
  category: string;
  publisher: string;
  image: string;
};

export type BookDetailsType = {
  title: string;
  description: string;
  [k: string]: unknown;
};
