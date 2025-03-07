import type { Meta, StoryObj } from '@storybook/react';

import { AuthorRecord } from './AuthorRecord';
import { RouterDecorator } from 'src/stories/RouterDecorator/RouterDecorator';

const meta = {
  component: AuthorRecord,
  decorators: [RouterDecorator],
} satisfies Meta<typeof AuthorRecord>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    author: "author"
  }
};