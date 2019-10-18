import date from './date'
import datetime from './datetime'

export default {
  install (Vue) {
    Vue.filter('date', date)
    Vue.filter('datetime', datetime)
  }
}
