import type { Meta, StoryObj } from '@storybook/react';

import { AuthorRecord } from './AuthorRecord';

const meta = {
  component: AuthorRecord,
} satisfies Meta<typeof AuthorRecord>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    author: "author"
  }
};