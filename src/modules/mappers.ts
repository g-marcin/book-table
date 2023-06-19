import { AuthorRecordType, BookRecordType, bookVolumeDTO } from "../types";

export const authorDataMapper = (DTO: bookVolumeDTO[]) => {
  if (!DTO) {
    return [];
  }
  const authorsCollection: AuthorRecordType[] = [];
  const authorsMap = new Map<string, AuthorRecordType>();
  DTO.forEach((item: bookVolumeDTO) => {
    if (!item.volumeInfo.authors) {
      return [];
    }
    if (!item.volumeInfo.publisher) {
      return [];
    }
    if (!item.volumeInfo.categories) {
      return [];
    }
    if (!item.volumeInfo.imageLinks) {
      return [];
    }
    authorsCollection.push({
      id: item.id,
      author: item.volumeInfo.authors[0],
      language: item.volumeInfo.language,
      category: item.volumeInfo.categories[0],
    });
    authorsMap.set(item.volumeInfo.authors[0], {
      id: item.id,
      author: item.volumeInfo.authors[0],
      language: item.volumeInfo.language,
      category: item.volumeInfo.categories[0],
    });
  });
  return [...authorsMap.values()];
};

export const bookDataMapper = (DTO: bookVolumeDTO[]) => {
  if (!DTO) {
    return [];
  }

  const booksMap = new Map<string, BookRecordType>();

  DTO.forEach((item: bookVolumeDTO) => {
    if (!item.volumeInfo.authors) {
      return [];
    }
    if (!item.volumeInfo.publisher) {
      return [];
    }
    if (!item.volumeInfo.categories) {
      return [];
    }
    if (!item.volumeInfo.imageLinks) {
      return [];
    }
    booksMap.set(item.volumeInfo.title, {
      id: item.id,
      title: item.volumeInfo.title,
      category: item.volumeInfo.categories[0],
      publisher: item.volumeInfo.publisher,
      image: item.volumeInfo.imageLinks.thumbnail,
    });
  });

  return [...booksMap.values()];
};
