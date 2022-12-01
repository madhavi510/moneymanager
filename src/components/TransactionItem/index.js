// Write your code here

import './index.css'

const TransactionItem = props => {
  const {TransactionListDetails, deleteTransaction} = props
  const {titleInput, amountInput, activeOptionType, id} = TransactionListDetails

  const deleteItem = () => {
    deleteTransaction(id)
  }
  return (
    <li className="app-container">
      <div className="transactions">
        <p className="list-item">{titleInput}</p>
        <p className="list-item">RS {amountInput}</p>
        <p className="list-item">{activeOptionType}</p>
      </div>
      <button
        className="deleteBtn"
        type="button"
        onClick={deleteItem}
        testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="deleteBtnIcon"
        />
      </button>
    </li>
  )
}
export default TransactionItem
