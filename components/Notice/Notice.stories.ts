import { Meta, StoryObj } from "@storybook/react";

import Notice, { type NoticeProps } from "./Notice";

const meta: Meta<NoticeProps> = {
  title: "Design System/Molecules/Notice",
  component: Notice,
};

export default meta;

export const Primary: StoryObj<NoticeProps> = {
  args: {},
};

export const NoticeSuccess: StoryObj<NoticeProps> = {
  args: {
    type: "success",
    message: "This is a Standard Box",
  },
};

export const NoticeAlert: StoryObj<NoticeProps> = {
  args: {
    type: "alert",
    message: "This is a warning",
  },
};

export const NoticeError: StoryObj<NoticeProps> = {
  args: {
    type: "error",
    message: "Operation completed successfully!",
  },
};