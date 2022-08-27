import React, {useState} from "react";

import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../Button/Button";

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault(); //The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur. For example, this can be useful when: Clicking on a "Submit" button, prevent it from submitting a form.
        
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }
        //+ is used to convert any string to number...
        if (+enteredAge < 1) {
            return;
        }

        console.log(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };

   const onChangeUsernameHandler = (event) => {
    setEnteredUsername(event.target.value);
   };

   const onChangeAgeHandler = (event) => {
    setEnteredAge(event.target.value);
   }
    
   return (
    <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" value={enteredUsername} onChange={onChangeUsernameHandler} />
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number" value={enteredAge} onChange={onChangeAgeHandler}/>
            <Button type="submit">Add User</Button>
        </form>
    </Card>
   );
};

export default AddUser;