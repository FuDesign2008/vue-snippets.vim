/**
 *
 * @author fuyg
 * @date  `date +%Y-%m-%d`
 */
import { Store } from 'vuex'
import { Module } from 'vuex-module-decorators'
import StaticModuleName from 'path/to/ModuleName'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createModuleName(store: Store<any>) {
  @Module({
    namespaced: true,
    dynamic: true,
    stateFactory: true,
    store,
    name: 'moduleName',
  })
  class ModuleName extends StaticModuleName {}

  return ModuleName
}
