import { arrowBack, arrowNext, favorite_off, favorite_on, star_on } from ".";
import IconSVG from "./IconSVG";


export default {
    title: "UI/IconSVg",
    component: IconSVG,
}

const Template = (args) => <IconSVG {...args}/>

export const Heart_line = Template.bind({})
Heart_line.args = {
    iconProps: favorite_off
}
export const Heart_fill = Template.bind({})
Heart_fill.args = {
    iconProps: favorite_on
}
export const Star = Template.bind({})
Star.args = {
    iconProps: star_on
}

export const ArrowRight = Template.bind({})
ArrowRight.args = ({
    iconProps: arrowNext
})

export const ArrowLeft = Template.bind({})
ArrowLeft.args = ({
    iconProps: arrowBack
})