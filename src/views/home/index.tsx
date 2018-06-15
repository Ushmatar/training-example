import * as React from 'react'
import { connect } from 'react-redux'
import * as Types from 'types'
import * as FuckOffActions from 'actions/fuckOff'

import './styles.scss'

export const mapStateToProps = ({ fuckOff }: Types.StoreState) => {
  return { searchString: fuckOff.searchString }
}

export const mapDispatchToProps = (dispatch: Types.Dispatch) => ({
  setSearchString: (search: string) =>
    dispatch(FuckOffActions.setSearchString(search)),
  onGreedClick: () => dispatch(FuckOffActions.greedRequest('PHZ', 'LAURI'))
})

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
          <div
            style={{ cursor: 'pointer' }}
            key={1}
            onClick={() => {
              this.props.setSearchString(this.props.searchString + 'more')
              this.props.onGreedClick()
            }}
          >
            ClickMe
          </div>
          <div key={2}>{this.props.searchString}</div>
        </div>
      )
    }
  }
)

export default HomeView
