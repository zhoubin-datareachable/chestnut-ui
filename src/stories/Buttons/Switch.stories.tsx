import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Switch, SwitchProps } from '../../Components/Buttons/Switch';

export default {
    title: 'Buttons/Switch 开关',
    component: Switch,
} as Meta;

const Template: Story<SwitchProps> = (args) => <Switch {...args} />;

/**
 * Primary Button style
 */
export const PrimaryNormal = Template.bind({});
PrimaryNormal.args = {
    type: 'primary',
};
