import type { Meta, StoryObj } from '@storybook/react';

import BooksPage from './BooksPage';

const meta = {
  component: BooksPage,
} satisfies Meta<typeof BooksPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};