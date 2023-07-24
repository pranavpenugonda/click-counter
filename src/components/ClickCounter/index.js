// Write your code here

import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  render() {
    return (
      <div className="bg-container">
        <h1 className="main-text">The Button has been clicked times</h1>
        <p className="desc">Click the button to increase the count</p>
        <button className="click-btn">Click Me!</button>
      </div>
    )
  }
}

export default ClickCounter
