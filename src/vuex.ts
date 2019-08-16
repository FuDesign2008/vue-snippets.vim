/**
 *
 * @author fuyg
 * @date  `date +%Y-%m-%d`
 */
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

  get theName() {
    return this.name
  }

  /**************************************************************************
   * muations
   **************************************************************************/

  @Mutation
  setName(name: string) {
    this.name = name
  }

  /**************************************************************************
   * actions
   **************************************************************************/

  @Action({ commit: 'setName' })
  async fetchName() {
    const url = 'TODO'
    const response = await axios.get(url)
    return response.data
  }
}

export default ModuleName
