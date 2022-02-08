import {Component} from 'react'
import HistoryItem from '../HistoryItem'
import './index.css'

class HistoryCard extends Component {
  state = {searchInput: ''}

  searching = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {initialHistory} = this.props
    const {searchInput} = this.state
    // const {timeAccessed, logoUrl, title, domainUrl} = historyItem
    // const {searchInput} = this.state

    const filteredList = initialHistory.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    let DelfilteredList = filteredList

    const deleteHistory = id => {
      DelfilteredList = filteredList.filter(each => id !== each.id)
      return DelfilteredList
    }

    return (
      <div className="app-cont">
        <nav className="nav-bar">
          <img
            className="history"
            alt="app logo"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
          />

          <div className="search-cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-icon"
            />
            <hr />
            <input
              type="search"
              className="input-bar"
              placeholder="Search history"
              onChange={this.searching}
            />
          </div>
        </nav>
        <div className="below-navbar">
          <div className="history-cont">
            <ul className="history-list">
              {DelfilteredList.map(each => (
                <HistoryItem
                  key={each.id}
                  historyItem={each}
                  onDeleteHis={deleteHistory}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default HistoryCard
