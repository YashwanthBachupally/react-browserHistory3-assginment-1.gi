import './index.css'

const HistoryItem = props => {
  const {historyItem, onDeleteHis} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem
  // const {searchInput} = this.state

  //  const updateSearch = () => {}

  const DeleteThis = () => {
    onDeleteHis(id)
  }

  return (
    <li className="history-li">
      <p className="time">{timeAccessed}</p>
      <div className="logo-site-delete-cont">
        <img className="site-img" src={logoUrl} alt="domain logo" />
        <div className="site-info-cont">
          <p className="site-name">{title}</p>
          <p className="domainUrl">{domainUrl}</p>
        </div>
        <button type="button" onClick={DeleteThis}>
          <img
            className="delete-icon"
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
