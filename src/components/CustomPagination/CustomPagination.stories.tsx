import type { Meta, StoryObj } from '@storybook/react';

import { CustomPagination } from './CustomPagination';

const meta = {
  component: CustomPagination,
} satisfies Meta<typeof CustomPagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    page: 0,
    setPageHandler: () => {}
  }
};