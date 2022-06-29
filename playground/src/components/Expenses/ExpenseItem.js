import ExpenseDate  from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
  //function clickHandler(){}
  const clicklHandler = () =>{
    console.log('Clicked!!!');
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>EUR:{props.amount}</div>
      </div>
      <button onClick={clicklHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
