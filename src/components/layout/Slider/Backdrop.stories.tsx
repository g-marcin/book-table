import type { Meta, StoryObj } from '@storybook/react';

import { Backdrop } from './Backdrop';

const meta = {
  component: Backdrop,
} satisfies Meta<typeof Backdrop>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    setIsOpen: () => {}
  }
};