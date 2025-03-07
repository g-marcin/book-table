import type { Meta, StoryObj } from '@storybook/react';

import { Hamburger } from './Hamburger';

const meta = {
  component: Hamburger,
} satisfies Meta<typeof Hamburger>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    setIsMenuOpen: () => {}
  }
};