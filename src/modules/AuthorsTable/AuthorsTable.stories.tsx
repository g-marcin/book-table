import type { Meta, StoryObj } from '@storybook/react';

import { AuthorsTable } from './AuthorsTable';

const meta = {
  component: AuthorsTable,
} satisfies Meta<typeof AuthorsTable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};