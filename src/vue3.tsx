/**
 *
 *
 * @author fuyg
 * @date  2021-07-26
 */

import {
    defineComponent,
    // computed,
    // toRefs,
    // ref,
    // inject,
    // PropType,
} from '@vue/composition-api'
import styles from './ComponentName.module.scss'

export default defineComponent({
    name: 'ComponentName',

    // props: { },

    setup(/*props*/) {
        // TODO
        return {
            // TODO
        }
    },

    render() {
        // TODO
        return (
            <div
                class={{
                    'component-name': true,
                    [styles.componentName]: true,
                }}
            />
        )
    },
})
