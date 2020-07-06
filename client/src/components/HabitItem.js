import React from 'react';
import Card from './Card';
import CardContent from './CardContent';
import CardTitle from './CardTitle';
import { Link } from 'react-router-dom';

const HabitItem = ({ habit }) => {
    return (
        <Card>
            <CardContent>

                <CardTitle><Link to={`/habit_objects/${habit.id}`}>{habit.name}</Link></CardTitle>

            </CardContent>
        </Card>
    );
}

export default HabitItem;