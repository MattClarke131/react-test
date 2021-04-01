const TURN_ALIVE = [3]
const STAY_ALIVE = [2,3]

export class LifeGrid {
  constructor(xSize, ySize) {
    this.xSize = xSize
    this.ySize = ySize

    const grids = this.generateGrids(xSize, ySize)
    this.lifeGrid = grids.lifeGrid
    this.tempGrid = grids.tempGrid
  }

  generateGrids(xSize, ySize) {
    const lifeGrid = []
    const tempGrid = []

    for (let x=0; x<xSize; x++) {
      lifeGrid[x] = []
      tempGrid[x] = []

      for (let y=0; y<ySize; y++) {
        lifeGrid[x][y] = new Cell()
        tempGrid[x][y] = new Cell()
      }
    }

    return {
      lifeGrid,
      tempGrid,
    }
  }

  get grid() {
    return this.lifeGrid
  }

  setCell(x, y, isAlive) {
    if (x >= 0 && x < this.xSize && y >= 0 && y < this.ySize) {
      this.lifeGrid[x][y].isAlive = isAlive
    } else {
      throw('Attempted to set a nonexistant cell')
    }
  }

  iterate() {
    for (let x=0; x<this.xSize; x++) {
      for (let y=0; y<this.Size; y++) {
        this.applyRulesToCell(x,y)
      }
    }

    this.applyTempGridToLifeGrid()
  }

  applyRulesToCell(x,y) {
    const cell = this.lifeGrid[x][y]
    const numberOfLivingNeighbors = this.getNumberOfLivingNeighbors(x, y)

    if (cell.isAlive) {
      this.tempGrid[x][y].isAlive = STAY_ALIVE.includes(numberOfLivingNeighbors)
    } else {
      this.tempGrid[x][y].isAlive = TURN_ALIVE.includes(numberOfLivingNeighbors)
    }
  }

  getNumberOfLivingNeighbors(x, y) {
    const neighborCells = [
      this.lifeGrid[x-1]?.[y-1],
        this.lifeGrid[x-1]?.[y],
        this.lifeGrid[x-1]?.[y+1],
        this.lifeGrid[x]?.  [y-1],
        this.lifeGrid[x]?.  [y+1],
        this.lifeGrid[x+1]?.[y-1],
        this.lifeGrid[x+1]?.[y],
        this.lifeGrid[x+1]?.[y+1],
    ].filter( c => c !== undefined )
    const livingNeighbors = neighborCells.filter( (c) => c.isAlive )

    return livingNeighbors.length
  }

  applyTempGridToLifeGrid() {
    for (let x=0; x<this.xSize; x++) {
      for (let y=0; y<this.ySize; y++) {
        this.lifeGrid[x][y].isAlive = this.tempGrid[x][y].isAlive
      }
    }
  }
}

class Cell {
  constructor(isAlive = false) {
    this.isAlive = isAlive
  }
}
