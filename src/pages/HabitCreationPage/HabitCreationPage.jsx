import React from 'react';
import HabitList from '../../components/HabitList/HabitList';
import HabitForm from '../../components/HabitForm/HabitForm';
import './HabitCreationPage.css';

export default function HabitCreationPage() {
    return (
        <div className='HabitCreationPage'>
            <div>
                <HabitList />
            </div>
            <div>
                <HabitForm />
            </div>
        </div>
    );
}