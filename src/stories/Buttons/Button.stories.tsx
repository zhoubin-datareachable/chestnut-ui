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
 * Primary Button style
 */
export const PrimaryNormal = Template.bind({});
PrimaryNormal.args = {
    type: 'primary',
    label: 'Button',
    height: '3.2rem',
    width: '8rem',
    size: 'normal',
    onClick: () => {
        console.log(123);
    },
};
/**
 * Primary Button style
 */
export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
    type: 'primary',
    label: 'Button',
    height: '3.2rem',
    width: '8rem',
    size: 'small',
};
/**
 * Primary Button style
 */
export const PrimaryBig = Template.bind({});
PrimaryBig.args = {
    type: 'primary',
    label: 'Conduct a survey',
    height: '3.1rem',
    width: '11.7rem',
    size: 'big',
};
/**
 * Primary Button style
 */
export const PrimaryLoading = Template.bind({});
PrimaryLoading.args = {
    type: 'primary',
    label: 'Button',
    height: '3.2rem',
    width: '20rem',
    loading: true,
};
/**
 * Primary Button style disabled
 */
export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
    type: 'primary',
    label: 'Button',
    height: '3.2rem',
    width: '8rem',
    disabled: true,
};
/**
 * Primary Button style disabled
 */
export const PrimaryIcon = Template.bind({});
PrimaryIcon.args = {
    type: 'primary',
    label: 'Button',
    height: '3.2rem',
    width: '10rem',
    icon: faThumbsUp,
};

/**
 * Secondary Button style
 */
export const SecondaryNormal = Template.bind({});
SecondaryNormal.args = {
    type: 'secondary',
    label: 'Button',
    height: '3.2rem',
    width: '8rem',
    size: 'normal',
};
/**
 * Secondary Button style
 */
export const SecondarySmall = Template.bind({});
SecondarySmall.args = {
    type: 'secondary',
    label: 'Button',
    height: '3.2rem',
    width: '8rem',
    size: 'small',
};
/**
 * Secondary Button style
 */
export const SecondaryBig = Template.bind({});
SecondaryBig.args = {
    type: 'secondary',
    label: 'Button',
    height: '3.2rem',
    width: '8rem',
    size: 'big',
};

export const SecondaryLoading = Template.bind({});
SecondaryLoading.args = {
    type: 'secondary',
    label: 'Button',
    height: '3.2rem',
    width: '20rem',
    loading: true,
};

/**
 * Danger Button style
 */
export const Danger = Template.bind({});
Danger.args = {
    type: 'danger',
    label: 'Button',
    height: '3.2rem',
    width: '8rem',
};
export const DangerLoading = Template.bind({});
DangerLoading.args = {
    type: 'danger',
    label: 'Button',
    height: '3.2rem',
    width: '20rem',
    loading: true,
};
