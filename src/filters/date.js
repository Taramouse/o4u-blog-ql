
import moment from 'moment'

export default function date (input) {
  return moment(input).format('MMMM Do YYYY, h:mm:ss a')
}
