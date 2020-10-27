/**
 *
 * @author fuyg
 * @date  `date +%Y-%m-%d`
 */
import { getName } from '@/common/http/apis/name'
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'

/* tslint:disable:member-ordering */

@Module({
  namespaced: true,
  stateFactory: true,
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

export default ModuleName
