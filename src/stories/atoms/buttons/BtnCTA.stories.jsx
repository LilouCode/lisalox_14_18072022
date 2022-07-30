import { BtnCTA } from "../../../components/atoms/buttons/BtnCTA";

export default{
    title: 'HRnet',
    component: BtnCTA,
    argTypes:{
    }
}
const Template = args => <BtnCTA {...args}/>;
export const Default = Template.bind({});
Default.args = {
    text: 'Okay'
}