/**
 *
 * @author fuyg
 * @date  `date +%Y-%m-%d`
 */
import Vue from 'vue'
import Component /*, { mixins } */ from 'vue-class-component'
// import { Prop, Ref, Watch } from 'vue-property-decorator'
// import { Action, Getter, namespace, State } from 'vuex-class'
// const storeModule = namespace('store-module-name')

/* eslint-disable @typescript-eslint/member-ordering */

@Component({
  name: 'ComponentName',
  // components: {
  // TODO
  // },
})
class ComponentName extends Vue /*mixins(ComponentNameMixin) */ {
  /**************************************************************************
   * props
   **************************************************************************/

  /**************************************************************************
   * vuex map state / getters / actions
   **************************************************************************/

  /**************************************************************************
   * data
   **************************************************************************/

  /**************************************************************************
   * computed
   **************************************************************************/

  /**************************************************************************
   * $ref
   **************************************************************************/

  /**************************************************************************
   * watch
   **************************************************************************/

  /**************************************************************************
   * methods
   **************************************************************************/

  private async fetchData(): Promise<void> {
    // TODO
  }

  /**************************************************************************
   * life cycle
   **************************************************************************/

  created(): void {
    this.fetchData()
  }
  // mounted(): void {}
  // beforeDestroy(): void {}
}

export default ComponentName
