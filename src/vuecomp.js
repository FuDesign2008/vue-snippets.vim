/**
 *
 * @author fuyg
 * @date  `date +%Y-%m-%d`
 */
import Vue from 'vue'
// import { mapState, mapGetters, mapActions } from 'vuex'

export default Vue.extend({
  name: '',

  // el: '#id',

  // components: {},

  // props: {},

  // mixins: [],

  data() {
    return {
      // TODO
    }
  },

  computed: {
    withSetter: {
      get() {
        // TODO
      },
      set(/* value */) {
        // TODO
      },
    },

    // TODO
  },

  watch: {
    // TODO
  },

  methods: {
    async fetchData() {
      // TODO
    },
    // TODO
  },

  filters: {
    // TODO
  },

  /**
   * life cycle
   */
  created() {
    this.fetchData()
  },
  // mounted() {},
  // beforeDestroy() {},
})
