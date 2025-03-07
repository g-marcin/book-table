import type { Meta, StoryObj } from '@storybook/react';

import { BookRecord } from './BookRecord';

const meta = {
  component: BookRecord,
} satisfies Meta<typeof BookRecord>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "id",
    image: "image",
    title: "title",
    category: "category",
    publisher: "publisher"
  }
};