import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from '../../Components/Buttons/Button';
export default {
    title: 'Buttons/Button',
    component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

/**
 * Default
 */
export const Default = Template.bind({});
Default.args = {
    type: 'primary',
    children: 'Button',
    onClick: () => null,
};
