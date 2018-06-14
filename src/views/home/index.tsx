import * as React from 'react'
import { connect } from 'react-redux'

export const mapStateToProps = ({}) => ({})

export const mapDispatchToProps = () => ({})

export type Props = {}

type Type = Props

const enhance = connect(
  mapStateToProps,
  mapDispatchToProps
)

export const HomeView: React.ComponentClass<Props> = enhance(
  class HomeViewComponent extends React.PureComponent<Type, {}> {
    render() {
      return <div className="home-view-component">HOMEVIEW</div>
    }
  }
)

export default HomeView
