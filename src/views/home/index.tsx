import * as React from 'react'
import { connect } from 'react-redux'
import * as Types from 'types'
import * as TestActions from 'actions/test'

export const mapStateToProps = ({ test }: Types.ApplicationState) => {
  return { searchString: test.searchString }
}

export const mapDispatchToProps = (dispatch: Types.Dispatch) => ({
  setSearchString: (search: string) =>
    dispatch(TestActions.setSearchString(search))
})
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
      return [
        <div
          style={{ cursor: 'pointer' }}
          key={1}
          onClick={() =>
            this.props.setSearchString(this.props.searchString + 'more')
          }
          className="home-view-component"
        >
          ClickMe
        </div>,
        <div key={2}>{this.props.searchString}</div>
      ]
    }
  }
)

export default HomeView
