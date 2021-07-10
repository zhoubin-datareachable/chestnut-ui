import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Checkbox, CheckboxProps } from '../../Components/Buttons/Checkbox';

export default {
    title: 'Buttons/Checkbox 多选框',
    component: Checkbox,
} as Meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

/**
 * default style
 */
export const Default = Template.bind({});
Default.args = {
    defaultChecked: false,
};
