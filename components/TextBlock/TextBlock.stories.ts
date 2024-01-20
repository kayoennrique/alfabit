import { Meta, StoryObj } from "@storybook/react";

import TextBlock, { type TextBlockProps } from "./TextBlock";

const meta: Meta<TextBlockProps> = {
  title: "Molecules/TextBlock",
  component: TextBlock,
  argTypes: {
    type: {
      type: "string",
    },
    title: {
      type: "string",
    },
    children: {
      type: "string",
    },
  },
};

export default meta;

export const Primary: StoryObj<TextBlockProps> = {
  args: {
    title: "Title",
    children: "Hello, I'm a standard text block",
  },
};

export const TextBlockPrimary: StoryObj<TextBlockProps> = {
  args: {
    title: "Title",
    children: "Hi, I'm a Primary Text block",
    type: "primary",
  },
};

export const TextBlockSecondary: StoryObj<TextBlockProps> = {
  args: {
    title: "Title",
    children: "Hello, I am a Secondary Text block",
    type: "secondary",
  },
};

export const TextBlockTertiary: StoryObj<TextBlockProps> = {
  args: {
    title: "Title",
    children: "Hello, I am a Tertiary Text block",
    type: "dark",
  },
};
