export default function Insights({

  transactions

}) {

  const expenses =
    transactions.filter(
      t => t.type === "expense"
    );


  const totals = {};


  expenses.forEach(t => {

    if (!t.category) return;

    totals[t.category] =

      (totals[t.category] || 0)

      + (t.amount || 0);

  });


  const highestCategory =
    Object.keys(totals).length > 0

      ? Object.keys(totals)
          .reduce((a, b) =>

            totals[a] > totals[b]

              ? a

              : b

          )

      : "No data";


  return (

    <div className="insights">

      <h2>
        Insights
      </h2>


      <p>

        Highest spending category:

        <strong>

          {" "}
          {highestCategory}

        </strong>

      </p>


      <p>

        Total Transactions:

        <strong>

          {" "}
          {transactions.length}

        </strong>

      </p>

    </div>

  );

}