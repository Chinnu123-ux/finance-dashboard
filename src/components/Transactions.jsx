import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function Transactions({
  transactions,
  setTransactions,
  role
}) {

  const [search, setSearch] = useState("");

  const [form, setForm] = useState({
    amount: "",
    category: "",
    date: "",
    type: "expense"
  });

  const [editId, setEditId] = useState(null);


  const filteredTransactions = transactions.filter(t => {

    if (!t.category) return false;

    return t.category
      .toLowerCase()
      .includes(search.toLowerCase());

  });


  const handleSubmit = () => {

    if (!form.amount || !form.category || !form.date) {
      alert("Fill all fields");
      return;
    }

    if (editId) {

      const updated = transactions.map(t =>

        t.id === editId
          ? {
              ...form,
              id: editId,
              amount: Number(form.amount)
            }
          : t

      );

      setTransactions(updated);
      setEditId(null);

    } else {

      const newTransaction = {

        id: uuid(),
        ...form,
        amount: Number(form.amount)

      };

      setTransactions([
        ...transactions,
        newTransaction
      ]);

    }

    setForm({
      amount: "",
      category: "",
      date: "",
      type: "expense"
    });

  };


  const deleteTransaction = id => {

    const filtered =
      transactions.filter(t => t.id !== id);

    setTransactions(filtered);

  };


  const editTransaction = tx => {

    setForm(tx);
    setEditId(tx.id);

  };


  return (

    <div className="section">

      <h2>
        Transactions
      </h2>


      <input

        className="search"

        placeholder="Search category..."

        value={search}

        onChange={e =>
          setSearch(e.target.value)
        }

      />


      {role === "admin" && (

        <div className="formCard">

          <input
            placeholder="Amount"
            value={form.amount}
            onChange={e =>
              setForm({
                ...form,
                amount: e.target.value
              })
            }
          />

          <input
            placeholder="Category"
            value={form.category}
            onChange={e =>
              setForm({
                ...form,
                category: e.target.value
              })
            }
          />

          <input
            type="date"
            value={form.date}
            onChange={e =>
              setForm({
                ...form,
                date: e.target.value
              })
            }
          />

          <select
            value={form.type}
            onChange={e =>
              setForm({
                ...form,
                type: e.target.value
              })
            }
          >

            <option value="expense">
              Expense
            </option>

            <option value="income">
              Income
            </option>

          </select>


          <button onClick={handleSubmit}>

            {editId
              ? "Update"
              : "Add"}

          </button>

        </div>

      )}


      <div className="tableCard">

        <table>

          <thead>

            <tr>

              <th>Date</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Type</th>

              {role === "admin" && (
                <th>Actions</th>
              )}

            </tr>

          </thead>


          <tbody>

            {filteredTransactions.length === 0 ? (

              <tr>

                <td colSpan="5">

                  No transactions

                </td>

              </tr>

            ) : (

              filteredTransactions.map(t => (

                <tr key={t.id}>

                  <td>{t.date}</td>

                  <td>{t.category}</td>

                  <td>

                    ₹ {t.amount}

                  </td>

                  <td>

                    <span className={t.type}>

                      {t.type}

                    </span>

                  </td>


                  {role === "admin" && (

                    <td>

                      <button
                        className="editBtn"
                        onClick={() =>
                          editTransaction(t)
                        }
                      >
                        Edit
                      </button>


                      <button
                        className="deleteBtn"
                        onClick={() =>
                          deleteTransaction(t.id)
                        }
                      >
                        Delete
                      </button>

                    </td>

                  )}

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>

  );

}