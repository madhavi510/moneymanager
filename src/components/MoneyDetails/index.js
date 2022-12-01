// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {income, balance, expenses} = props

  return (
    <li className="app-container">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="money-img"
        />
        <div className="moneyDetails-container">
          <p className="title">Your Balance</p>
          <p className="money" testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </div>
      <div className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
          alt="income"
          className="money-img"
        />
        <div className="moneyDetails-container">
          <p className="title">Your Income</p>
          <p className="money" testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="expense-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
          alt="expenses"
          className="money-img"
        />
        <div className="moneyDetails-container">
          <p className="title">Your Expenses</p>
          <p className="money" testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </div>
    </li>
  )
}
export default MoneyDetails
