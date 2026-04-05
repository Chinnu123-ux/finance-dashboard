export default function SummaryCards({ transactions }) {

  // calculate totals
  const income = transactions
    .filter(t => t.type === "income")
    .reduce((total, t) => total + t.amount, 0);

  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((total, t) => total + t.amount, 0);

  const balance = income - expense;


  return (

    <div className="section">

      <h2>
        Overview
      </h2>


      <div className="cards">

        {/* Balance */}
        <div className="card">

          Total Balance

          <div className="amount">

            ₹ {balance}

          </div>

        </div>


        {/* Income */}
        <div className="card">

          Income

          <div className="amount income">

            ₹ {income}

          </div>

        </div>


        {/* Expense */}
        <div className="card">

          Expense

          <div className="amount expense">

            ₹ {expense}

          </div>

        </div>


      </div>

    </div>

  );

}