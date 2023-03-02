// Write your code here
import {Component} from 'react'
import './index.css'

const headsImg = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsImg = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
class CoinToss extends Component {
  state = {total: 0, heads: 0, tails: 0, imageId: headsImg}

  tossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({heads: prevState.heads + 1}))
      this.setState(prevState => ({total: prevState.total + 1}))
      this.setState({imageId: headsImg})
    } else if (tossResult === 1) {
      this.setState(prevState => ({tails: prevState.tails + 1}))
      this.setState(prevState => ({total: prevState.total + 1}))
      this.setState({imageId: tailsImg})
    }
  }

  render() {
    const {total, heads, tails, imageId} = this.state
    return (
      <div className="app-container">
        <div className="inner">
          <h1 className="heading"> Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img className="img" src={imageId} alt="toss result" />
          <br />
          <button type="button" className="button" onClick={this.tossCoin}>
            Toss Coin
          </button>
          <div className="counts">
            <p>Total:{total}</p>
            <p>Heads:{heads}</p>
            <p>Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
