import React, {useState} from 'react';
import ExpenseDate  from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
  //function clickHandler(){}
  const [title,setTitle] = useState(props.title);

  //let title = props.title;
  const clicklHandler = () =>{
    //title = 'Updated!'
    setTitle('Updated!');
    console.log(title);
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>EUR:{props.amount}</div>
      </div>
      <button onClick={clicklHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
