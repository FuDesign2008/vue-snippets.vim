import { mapState, mapGetters, mapActions } from 'vuex'

const computed = {
  ...mapState('moduleName', ['name1', 'name2']),

  ...mapState('moduleName', {
    nameAlias: 'name',

    newName(state) {
      return state.name + this.name
    },
  }),

  ...mapGetters('moduleName', ['name1', 'name2']),

  ...mapGetters('moduleName', {
    nameAlias: 'name',
  }),
}
const methods = {
  ...mapActions('moduleName', ['name1', 'name2']),

  ...mapActions('moduleName', {
    nameAlias: 'name',
  }),
}
