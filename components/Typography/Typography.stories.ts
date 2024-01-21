// Typography.stories.ts
import { Meta, StoryObj } from "@storybook/react";

import Typography, { type TypographyProps } from "./Typography";

const meta: Meta<TypographyProps> = {
  title: "Design System/Atoms/Typography",
  component: Typography,
  argTypes: {
    className: {
      type: "string",
    },
  },
};

export default meta;

export const Primary: StoryObj<TypographyProps> = {
  args: {
    children: "Text",
  },
};

export const TextHeadingH1: StoryObj<TypographyProps> = {
  args: {
    children: "Text",
    element: "h1",
    size: "title1",
    className: "font-extrabold",
  },
};

export const TextHeadingH2: StoryObj<TypographyProps> = {
  args: {
    children: "Text",
    element: "h2",
    size: "title2",
    className: "font-extrabold",
  },
};

export const TextHeadingH3: StoryObj<TypographyProps> = {
  args: {
    children: "Text",
    element: "h3",
    size: "title3",
    className: "font-extrabold",
  },
};

export const TextParagraph: StoryObj<TypographyProps> = {
  args: {
    children: "Text",
    element: "p",
    size: "md",
    className: "text-primary",
  },
};