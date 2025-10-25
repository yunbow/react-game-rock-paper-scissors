import type { Meta, StoryObj } from '@storybook/react';
import { RockPaperScissorsGame } from '../../features/rock-paper-scissors';

const meta: Meta<typeof RockPaperScissorsGame> = {
  title: 'features/rock-paper-scissors/RockPaperScissorsGame',
  component: RockPaperScissorsGame,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};