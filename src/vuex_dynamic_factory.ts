/**
 *
 * @author fuyg
 * @date  `date +%Y-%m-%d`
 */
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { Store } from 'vuex'
import { getName } from '@/common/http/apis/name'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createModuleName(store: Store<any>) {

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

  return ModuleName
}


