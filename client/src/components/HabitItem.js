import React from 'react';
import Card from './Card';
import CardContent from './CardContent';
import CardTitle from './CardTitle';
import { Link } from 'react-router-dom';

const HabitItem = ({ habit }) => {
    return (
        <Card>
            <CardContent>
                <h3>Name: {habit.name}</h3>
                <CardTitle><Link to={`/habit_objects/${habit.id}`}>HABIT</Link></CardTitle>

            </CardContent>
        </Card>
    );
}

export default HabitItem;