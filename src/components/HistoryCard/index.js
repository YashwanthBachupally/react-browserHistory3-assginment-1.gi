import {Component} from 'react'
import HistoryItem from '../HistoryItem'
import './index.css'

class HistoryCard extends Component {
  state = {searchInput: '', filteredListItems: []}

  searching = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteHistory = id => {
    const {initialHistory} = this.props
    const DelfilteredList = initialHistory.filter(each => id !== each.id)
    this.setState({filteredListItems: DelfilteredList})
  }

  filteredList = () => {
    const {initialHistory} = this.props
    const {searchInput, filteredListItems} = this.state
    const f = initialHistory.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    this.setState({filteredListItems: f})
  }
  /// /----->> this.setState({filteredListItems: initialHistory})

  // updateList = ary => {
  //  this.setState({filteredListItems: ary})
  // }

  render() {
    const {initialHistory} = this.props
    const {searchInput, filteredListItems} = this.state

    // const {searchInput} = this.state
    // this.updateList(initialHistory)
    // -------->> this.setState({filteredListItems: initialHistory})

    // let DelfilteredList = filteredList
    // this.filteredList()
    const fl = initialHistory.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

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
              {fl.map(each => (
                <HistoryItem
                  key={each.id}
                  historyItem={each}
                  onDeleteHis={this.deleteHistory}
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
