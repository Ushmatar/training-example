import * as React from 'react'
import { connect } from 'react-redux'
import * as Types from 'types'
import { Link } from 'react-router-dom'

import './styles.scss'

export const mapStateToProps = ({ fuckOff }: Types.StoreState) => {
  return { searchString: fuckOff.searchString }
}

export const mapDispatchToProps = (dispatch: Types.Dispatch) => ({})

const importantImage = require('images/klaus.jpg')

// This is a hack to extract types
// Compiler will run the code as it will interprit false as true
// but when actually running the code mapStateToProps and mapDispatchToProps
// are not called with wrong params
const StatePropsWitness = (false as true) && mapStateToProps({} as any)
type StateProps = typeof StatePropsWitness

const DispatchPropsWitness = (false as true) && mapDispatchToProps({} as any)
type DispatchProps = typeof DispatchPropsWitness

export type Props = {}

type Type = Props & StateProps & DispatchProps

const enhance = connect(
  mapStateToProps,
  mapDispatchToProps
)

export const HomeView: React.ComponentClass<Props> = enhance(
  class HomeViewComponent extends React.PureComponent<Type, {}> {
    render() {
      return (
        <div className="home-view-component">
          <div>Welcome to React Training!</div>
          <img src={importantImage} />
          <Link to="/fuck-off">Click me</Link>
        </div>
      )
    }
  }
)

export default HomeView
