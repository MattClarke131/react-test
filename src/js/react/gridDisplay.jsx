import React from 'react'
import LifeGrid from '../models/lifeGrid'

export default class GridDisplay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lifeGrid: new LifeGrid(10,10)
    }
  }

  render() {
    return (
      <div>
        <h1> Oh yeah, It is game of life time! </h1>
      </div>
    );
  }
}
