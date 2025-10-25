import type { Meta, StoryObj } from '@storybook/react';
import { HandIcon } from '../components/HandIcon';

const meta: Meta<typeof HandIcon> = {
  title: 'common/HandIcon',
  component: HandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Rock: Story = {
  args: {
    emoji: '✊',
    label: 'グー',
  },
};

export const Scissors: Story = {
  args: {
    emoji: '✌️',
    label: 'チョキ',
  },
};

export const Paper: Story = {
  args: {
    emoji: '✋',
    label: 'パー',
  },
};

export const Unknown: Story = {
  args: {
    emoji: '?',
    label: '不明',
  },
};