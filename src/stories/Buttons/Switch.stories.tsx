import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Switch, SwitchProps } from '../../Components/Buttons/Switch';

export default {
    title: 'Buttons/Switch 开关',
    component: Switch,
} as Meta;

const Template: Story<SwitchProps> = (args) => <Switch {...args} />;

/**
 * default style
 */
export const Default = Template.bind({});
Default.args = {
    defaultChecked: false,
};
