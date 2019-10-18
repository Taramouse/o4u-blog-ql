
import moment from 'moment'

export default function date (input) {
  return moment(input).format('Do MMMM YYYY')
}
