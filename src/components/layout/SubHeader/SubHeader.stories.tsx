import type { Meta, StoryObj } from '@storybook/react';

import { SubHeader } from './SubHeader';

const meta = {
  component: SubHeader,
} satisfies Meta<typeof SubHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};