import { ComponentMeta, ComponentStory } from "@storybook/react";
import { arrowRight } from "../Icon_svg";
import IconSVG from "../Icon_svg/IconSVG";
import Button from "./Button";
import { ButtonProps } from "./types";

export default {
    title: "UI/Button",
    component: Button,
} as ComponentMeta <typeof Button>

const Template: ComponentStory <typeof Button> = (args: ButtonProps) => <Button {...args}/>

export const Basic = Template.bind({})
Basic.args = {
    label: "SCOPRI",
    mode: "primary"
}

export const withIcon = Template.bind({})
withIcon.args = {
    icon: <IconSVG iconProps={arrowRight}/>,
    label: "Arrow",
}