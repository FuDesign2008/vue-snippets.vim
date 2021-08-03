/**
 *
 * @author fuyg
 * @date  `date +%Y-%m-%d`
 */
import { getModule } from 'vuex-module-decorators'
import store from 'path/to/store'
import { createModuleName } from '../factory/ModuleName'

const ModuleName = createModuleName(store)
const moduleNameStore = getModule(ModuleName)

export default moduleNameStore
