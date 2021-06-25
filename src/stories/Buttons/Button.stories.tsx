/**
 * @file
 * @date 2020-09-04
 * @author Mark
 * @lastModify Mark 2020-09-04
 */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from '../../Components/Buttons/Button';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';

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
};
