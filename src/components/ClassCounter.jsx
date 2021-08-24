import React from 'react'

class ClassCounter extends React.Component {
constructor(props) {
    super(props)
    this.state = {
        count: 0
    }

    this.incr = this.incr.bind(this)
    this.discr = this.discr.bind(this)
}

   incr () {
this.setState +=1
    }

   discr () {
this.setState -=1
    }
  render() {
      return(
          <div>
              <h1>
                  {this.state.count}
              </h1>
              <button onClick={this.incr}>+</button>
              <button onClick={this.discr}>-</button>
          </div>
      )
  }
}

export default ClassCounter
