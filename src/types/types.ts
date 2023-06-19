export type bookVolumeDTO = {
  id: string;
  volumeInfo: {
    author: string;
    category: string;
    language: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [k: string]: any;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [k: string]: any;
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [k: string]: any;
};
