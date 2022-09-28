import { ComponentName } from './ComponentName.vue'
import { Meta, StoryFn } from '@storybook/vue'

export default {
    title: 'ComponentName',
    component: ComponentName,
} as Meta<typeof ComponentName>

interface StoryArgs {
    // TODO
}

const Template: StoryFn<typeof ComponentName> = (args: StoryArgs) => ({
    components: {
        ComponentName,
    },
    setup() {
        return {
            ...args,
        }
    },
    template: `
      <ComponentName v-bind="args"/>
    `,
})

export const Base = Template.bind({})
const baseArgs: StoryArgs = {
    // TODO
}
Base.args = baseArgs
