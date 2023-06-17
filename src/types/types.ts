export type MappedBookObject = {
  [k: string]: string;
};

export type fetchedBooksData = {
  [k: string]: any;
};

export type AuthorData = {
  id: string;
  author: string;
  title: string;
  category: string;
  publisher: string;
  image: string;

  isSelected: boolean;
};
