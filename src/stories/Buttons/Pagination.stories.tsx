import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Pagination, PaginationProps } from '../../Components/Buttons/Pagination';

export default {
    title: 'Buttons/Pagination 分页',
    component: Pagination,
} as Meta;

const Template: Story<PaginationProps> = (args) => <Pagination {...args} />;

/**
 * default style
 */
export const Default = Template.bind({});
Default.args = {
    type: '',
};
