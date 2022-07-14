import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button } from '../../components/common/Button'

export default { 
    component: Button,
    title: "Components/Common/Button"
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
    <Button {...args} />
)

export const Primary = Template.bind({})
Primary.args = { variant: 'primary', text : "Click me!"}

export const Secondary = Template.bind({})
Secondary.args = { variant: 'secondary', text : "Click me!"}

export const Disabled = Template.bind({})
Disabled.args = { variant: 'disabled', text : "Click me!"}