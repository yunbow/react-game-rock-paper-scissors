import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../components/Text';

const meta: Meta<typeof Text> = {
  title: 'common/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'body', 'large'],
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'success', 'danger', 'warning'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Title: Story = {
  args: {
    children: 'じゃんけんゲーム',
    variant: 'h1',
  },
};

export const Subtitle: Story = {
  args: {
    children: 'あなたの手を選んでください',
    variant: 'h2',
  },
};

export const GameMessage: Story = {
  args: {
    children: 'さあ、じゃんけんをしましょう！',
    variant: 'large',
    color: 'primary',
  },
};

export const WinMessage: Story = {
  args: {
    children: '勝ちました！おめでとう！',
    variant: 'large',
    color: 'success',
  },
};

export const LoseMessage: Story = {
  args: {
    children: '負けました...また挑戦してね',
    variant: 'large',
    color: 'danger',
  },
};

export const DrawMessage: Story = {
  args: {
    children: '引き分けです。もう一回！',
    variant: 'large',
    color: 'warning',
  },
};