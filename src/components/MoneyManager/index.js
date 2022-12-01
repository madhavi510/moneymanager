import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    income: 0,
    expenses: 0,
    balance: 0,
    transactionList: [],
    activeOptionType: transactionTypeOptions[0].displayText,
  }

  onChangeOption = event => {
    this.setState({activeOptionType: event.target.value})
  }

  onChangeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onFormSubmit = event => {
    event.preventDefault()
    const {titleInput, amountInput, activeOptionType} = this.state
    const updatedList = {
      id: uuidv4(),
      titleInput,
      amountInput,
      activeOptionType,
    }
    if (activeOptionType === 'INCOME') {
      this.setState(prevState => ({
        transactionList: [...prevState.transactionList, updatedList],
        titleInput: '',
        amountInput: '',
        activeOptionType: transactionTypeOptions[0].displayText,
        income: prevState.income + parseInt(amountInput),
        balance: prevState.balance + parseInt(amountInput),
      }))
    } else {
      this.setState(prevState => ({
        transactionList: [...prevState.transactionList, updatedList],
        titleInput: '',
        amountInput: '',
        activeOptionType: transactionTypeOptions[0].displayText,
        expenses: prevState.expenses + parseInt(amountInput),
        balance: prevState.balance - parseInt(amountInput),
      }))
    }
  }

  deleteTransaction = Id => {
    const {transactionList} = this.state
    const deleteItem = transactionList.filter(
      eachTransaction => Id === eachTransaction.id,
    )

    if (deleteItem[0].type === 'INCOME') {
      this.setState(prevState => ({
        transactionList: transactionList.filter(
          eachTransaction => Id !== eachTransaction.id,
        ),
        income: prevState.income - parseInt(deleteItem[0].amountInput),
        balance: prevState.balance - parseInt(deleteItem[0].amountInput),
      }))
    } else {
      this.setState(prevState => ({
        transactionList: transactionList.filter(
          eachTransaction => Id !== eachTransaction.id,
        ),
        expenses: prevState.expenses - parseInt(deleteItem[0].amountInput),
        balance: prevState.balance + parseInt(deleteItem[0].amountInput),
      }))
    }
  }

  render() {
    const {
      activeOptionType,
      transactionList,
      income,
      titleInput,
      amountInput,
      balance,
      expenses,
    } = this.state
    return (
      <div className="main-app-container">
        <div className="profile-container">
          <h1 className="title">HI, Richard</h1>
          <p className="note">
            Welcome back to your
            <span className="style-note"> Money Manager</span>
          </p>
        </div>
        <MoneyDetails income={income} balance={balance} expenses={expenses} />
        <div className="transaction-container">
          <form className="add-transaction-form" onSubmit={this.onFormSubmit}>
            <h1 className="title">Add Transaction</h1>
            <div className="input-container">
              <label className="input-label" htmlFor="title">
                TITLE
              </label>
              <input
                type="text"
                className="input-box"
                id="title"
                placeholder="title"
                value={titleInput}
                onChange={this.onChangeTitle}
              />
            </div>
            <div className="input-container">
              <label className="input-label" htmlFor="amount">
                AMOUNT
              </label>
              <input
                type="tel"
                className="input-box"
                id="amount"
                placeholder="amount"
                value={amountInput}
                onChange={this.onChangeAmount}
              />
            </div>
            <div className="input-container">
              <label className="input-label" htmlFor="type">
                TYPE
              </label>
              <select
                className="money-type"
                onChange={this.onChangeOption}
                value={activeOptionType}
                id="type"
              >
                {transactionTypeOptions.map(eachOption => (
                  <option
                    key={eachOption.optionId}
                    value={eachOption.optionId}
                    className="option"
                  >
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
            </div>
            <button className="btn" type="submit">
              Add
            </button>
          </form>
          <div className="transaction-item-details">
            <h1 className="title">History</h1>
            <div className="transaction-item-container">
              <p className="text">Title</p>
              <p className="text">Amount</p>
              <p className="text">Type</p>
            </div>
            <ul className="transactionList">
              {transactionList.map(eachTransaction => (
                <TransactionItem
                  key={eachTransaction.id}
                  TransactionListDetails={eachTransaction}
                  deleteTransaction={this.deleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
