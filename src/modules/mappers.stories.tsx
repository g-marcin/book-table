import type { Meta, StoryObj } from '@storybook/react';

import { authorDataMapper } from './mappers';

const meta = {
  component: authorDataMapper,
} satisfies Meta<typeof authorDataMapper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};