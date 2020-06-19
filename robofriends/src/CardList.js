import React from 'react';
import Card from './Card.js';

//const CardList = (props) => { //figure how to use props instead of destructuring
const CardList = ({ robots }) => { // destructuring is being used here to reference robots
    const eachCardComponent = robots.map((user, i) => {
        return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
    })
    return (
        <div>
            {eachCardComponent}
        </div>
    );
}
export default CardList;