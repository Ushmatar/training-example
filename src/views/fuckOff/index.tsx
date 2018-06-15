import * as React from 'react'
import { connect } from 'react-redux'
import * as Types from 'types'
import * as FuckOffActions from 'actions/fuckOff'
import { lifecycle, pure, compose } from 'recompose'
import { Link } from 'react-router-dom'

import './styles.scss'

export const mapStateToProps = ({ fuckOff }: Types.StoreState) => {
  return {
    searchString: fuckOff.searchString
  }
}

export const mapDispatchToProps = (dispatch: Types.Dispatch) => ({
  setSearchString: (search: string) =>
    dispatch(FuckOffActions.setSearchString(search)),
  onGreedClick: () => dispatch(FuckOffActions.greedRequest('PHZ', 'LAURI'))
})

/* istanbul ignore next */
const StatePropsWitness = (false as true) && mapStateToProps({} as any)
type StateProps = typeof StatePropsWitness

/* istanbul ignore next */
const DispatchPropsWitness = (false as true) && mapDispatchToProps({} as any)
type DispatchProps = typeof DispatchPropsWitness

export type GivenProps = {
  thisIsAPassedProp: string
}

export type Props = StateProps & DispatchProps & GivenProps

export const lifecycles = lifecycle<Props, {}>({
  componentDidMount() {
    alert('Yo, company mounted :ok_hand:')
  }
})

export const onSearchStringChange = (
  props: Props,
  e: React.ChangeEvent<HTMLInputElement>
) => props.setSearchString(e.currentTarget.value)

export const FuckOffPure: React.StatelessComponent<Props> = props => {
  return (
    <div className="fuck-off-view">
      <Link to="/">Click me back to home</Link>
      <input
        type="text"
        value={props.searchString}
        onChange={e => onSearchStringChange(props, e)}
      />
    </div>
  )
}

const enhance = compose<Props, GivenProps>(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  lifecycles,
  pure
)

export const FuckOffView = enhance(FuckOffPure)
