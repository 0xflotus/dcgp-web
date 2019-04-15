import { combineReducers } from 'redux'
import evolution from './evolution/reducers'
import settings from './settings/reducers'
import datasets from './dataset/reducers'

export default combineReducers({
  evolution,
  settings,
  datasets,
})