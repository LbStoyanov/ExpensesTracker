import ExpenseItem from "./Components/ExpenseItem";

function App() {
 

  const expense = [
    {title: "Kaima", amount: 304.16, date: new Date(2022, 6, 2) },
    { title: "Koto ima", amount: 304.16, date: new Date(2022, 6, 2) },
    { title: "Krastavici", amount: 454.16, date: new Date(2022, 6, 2) },
    { title: "Sirenie", amount: 954.16, date: new Date(2022, 6, 2) },
  ];

  return (
    <div>
      <h2>Let's get started,Badjo!</h2>
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[3].title}
        amount={expense[3].amount}
        date={expense[3].date}
      ></ExpenseItem>
      
    </div>
  );
}

export default App;
