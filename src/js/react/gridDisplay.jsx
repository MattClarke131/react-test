import React from 'react'
import LifeGrid from '../models/lifeGrid'

export default class GridDisplay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lifeGrid: new LifeGrid(10,10)
    }

    this.createGameCell = this.createGameCell.bind(this)
    this.iterate = this.iterate.bind(this)
  }

  createGameCell(isAlive) {
    const cellClass = isAlive ? 'alive' : 'dead'
    return (
      <div className={'cell' + ' ' + cellClass}></div>
    )
  }

  render() {
    const lifeGridRows = this.lifeGrid.map( row => {
      const cells = row.map(cell => {
        return this.createGameCell(cell.isAlive)
      })

      return (
        <div className='cellRow'>{cells}</div>
      )
    })
    return (
      <div>
        <h1> Oh yeah, It is game of life time! </h1>
        <div className='lifeGrid'>
          {lifeGridRows}
        </div>
      </div>
    );
  }
}
