import type { Meta, StoryObj } from '@storybook/react';

import Details from './Details';

const meta = {
  component: Details,
} satisfies Meta<typeof Details>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};