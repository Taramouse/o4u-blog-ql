
import moment from 'moment'

export default function datetime (input) {
  return moment(input).format('MMMM Do YYYY, h:mm:ss a')
}
