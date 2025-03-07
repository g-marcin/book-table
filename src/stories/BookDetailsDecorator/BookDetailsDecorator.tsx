import { StoryFn } from '@storybook/react';
import * as hooks from '../../hooks/useBookDetails/useBookDetails';
import { useBookDetailsMock } from '../../mocks/mockBookDetails';
import { httpClient } from '../../common/httpClient/httpClient';

export const BookDetailsDecorator = (Story: StoryFn) => {
  // Mock the useBookDetails hook
  jest.spyOn(hooks, 'useBookDetails').mockImplementation(useBookDetailsMock);

  return (
    <Story />
  );
};