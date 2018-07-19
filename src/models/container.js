export default {
  namespace: 'container',
  state: {},
  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen((location) => {
        console.log('****', location)
      })
    }
  }
}
