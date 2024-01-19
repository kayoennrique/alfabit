import { Meta, StoryObj } from "@storybook/react"

import Button, { ButtonProps } from "./Button"

const meta: Meta<ButtonProps> = {
  title: 'Molecules/Button',
  component: Button,
  argTypes: {
    children: {
      type: "string"
    },
    disabled: {
      type: "boolean"
    },
    className: {
      type: "string"
    },
  }
}

export default meta

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: 'Action'
  }
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    children: 'Action',
    disabled: true
  }
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    children: 'Action',
    variant: 'secondary'
  }
}

export const SecondaryDisabled: StoryObj<ButtonProps> = {
  args: {
    children: 'Action',
    variant: 'secondary',
    disabled: true
  }
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    children: 'Action',
    variant: 'tertiary'
  }
}

export const TertiaryDisabled: StoryObj<ButtonProps> = {
  args: {
    children: 'Action',
    variant: 'tertiary',
    disabled: true
  }
}

export const Violet: StoryObj<ButtonProps> = {
  args: {
    children: 'Action',
    className: 'theme-violet'
  }
}

export const VioletSecondary: StoryObj<ButtonProps> = {
  args: {
    children: 'Action',
    className: 'theme-violet',
    variant: 'secondary'
  }
}

export const VioletTertiary: StoryObj<ButtonProps> = {
  args: {
    children: 'Action',
    className: 'theme-violet',
    variant: 'tertiary'
  }
}