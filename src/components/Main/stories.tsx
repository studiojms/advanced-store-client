import { Meta, Story } from '@storybook/react/types-6-0';

import Main from '.';

export default {
  title: 'Main',
  component: Main,
} as Meta;

export const Basic: Story = args => <Main {...args} />;

Basic.args = {
  title: 'Advanced React',
  description: 'Typescript, ReactJS, NextJS and Styled Components',
};