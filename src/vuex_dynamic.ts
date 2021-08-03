/**
 *
 * @author fuyg
 * @date  `date +%Y-%m-%d`
 */
import { getName } from '@/common/http/apis/name'
import { Action, Module, Mutation, VuexModule, getModule } from 'vuex-module-decorators'
import store from 'path/to/store'

/* eslint-disable @typescript-eslint/member-ordering */

@Module({
  namespaced: true,
  stateFactory: true,
  dynamic: true,
  store,
  name: 'moduleName'
})
class ModuleName extends VuexModule {
  /**************************************************************************
   * state
   **************************************************************************/

  name: string = ''

  /**************************************************************************
   * getters
   **************************************************************************/

  get theName(): string {
    return this.name
  }

  /**************************************************************************
   * muations
   **************************************************************************/

  @Mutation
  setName(name: string): void {
    this.name = name
  }

  /**************************************************************************
   * actions
   **************************************************************************/

  @Action({
    rawError: true,
    commit: 'setName',
  })
  async fetchName(params: string): Promise<string> {
    const data = getName(params)
    return data
  }
}

const moduleNameStore = getModule(ModuleName)

export default moduleNameStore
