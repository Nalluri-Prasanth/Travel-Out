import React from 'react'

export default function BudgetCalculator() {
  return (
    <div>
      <h1>hello</h1>
    </div>
  )
}


















// import React from 'react'
// import ReactDOM from "react-dom";
// import uuid from "uuid/v4";
// import ExpenseList from "../components/waste/ExpenseList";
// import ExpenseForm from "../components/waste/ExpenseForm";
// import "./styles.css";
// import Alert from "../components/Alert";

// const initialExpences = localStorage.getItem("expenses")
//   ? JSON.parse(localStorage.getItem("expenses"))
//   : [];
// export default function BudgetCalculator() {
//   const [expenses, setExpenses] = React.useState(initialExpences);
//   const [charge, setCharge] = React.useState("");
//   const [amount, setAmount] = React.useState("");
//   const [alert, setAlert] = React.useState({ show: false });
//   const [edit, setEdit] = React.useState(false);
//   const [id, setId] = React.useState(0);

//   React.useEffect(() => {
//     localStorage.setItem("expenses", JSON.stringify(expenses));
//   }, [expenses]);

//   const handleCharge = e => {
//     setCharge(e.target.value);
//   };

//   const handleAmount = e => {
//     setAmount(e.target.value);
//   };

//   const handleAlert = ({ type, text }) => {
//     setAlert({ show: true, type, text });
//     setTimeout(() => {
//       setAlert({ show: false });
//     }, 4000);
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (charge !== "" && amount > 0) {
//       if (edit) {
//         let tempExpenses = expenses.map(i => {
//           return i.id === id ? { ...i, charge, amount } : i;
//         });
//         setExpenses(tempExpenses);
//         setEdit(false);
//         handleAlert({ type: "success", text: "item edited" });
//       } else {
//         const singleExpense = {
//           id: uuid(),
//           charge,
//           amount
//         };
//         setExpenses([...expenses, singleExpense]);
//         handleAlert({ type: "success", text: "item added" });
//       }
//       setCharge("");
//       setAmount("");
//     } else {
//       handleAlert({
//         type: "danger",
//         text: `charge can't be empty value and amount value has to be bigger than zero`
//       });
//     }
//   };

//   // Clear all items
//   const clearItems = () => {
//     setExpenses([]);
//     handleAlert({ type: "danger", text: "all items deleted" });
//   };

//   // Handle delete
//   const handleDelete = id => {
//     let tempExpenses = expenses.filter(i => i.id !== id);
//     setExpenses(tempExpenses);
//     handleAlert({ type: "danger", text: "item deleted" });
//   };

//   // Handle edit
//   const handleEdit = id => {
//     let expense = expenses.find(i => i.id === id);
//     let { charge, amount } = expense;
//     setCharge(charge);
//     setAmount(amount);
//     setEdit(true);
//     setId(id);
//   };

//   return (
//     <>
     
//      {alert.show && <Alert type={alert.type} text={alert.text} />}

//       <h1>budget calculator</h1>
//       <main className="App">
//         <ExpenseForm
//           charge={charge}
//           amount={amount}
//           handleAmount={handleAmount}
//           handleCharge={handleCharge}
//           handleSubmit={handleSubmit}
//           edit={edit}
//         />
//         <ExpenseList
//           expenses={expenses}
//           handleDelete={handleDelete}
//           handleEdit={handleEdit}
//           clearItems={clearItems}
//         />
//       </main>
//       <h1>
//         total spending:{" "}
//         <span className="total">
//           ${" "}
//           {expenses.reduce((acc, curr) => {
//             return (acc += Number(curr.amount));
//           }, 0)}
//         </span>
//       </h1>
//     </>
//   )
// }


