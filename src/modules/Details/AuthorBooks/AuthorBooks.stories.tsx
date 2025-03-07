import type { Meta, StoryObj } from '@storybook/react';

import { AuthorBooks } from './AuthorBooks';

const meta = {
  component: AuthorBooks,
} satisfies Meta<typeof AuthorBooks>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fetchedBooks: []
  }
};