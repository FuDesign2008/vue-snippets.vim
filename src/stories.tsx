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

export const ComponentNameStory = Template.bind({})

ComponentNameStory.args = {
    // TODO
} as StoryArgs
