import React from 'react';
import HabitList from '../../components/HabitList/HabitList';
import HabitInfo from '../../components/HabitInfo/HabitInfo';
import './HabitListPage.css';

export default function HabitListPage({ location }) {
    return (
        <div className='HabitGeneratorPage'>
            <div>
                <HabitList />
            </div>
            <div>
                <HabitInfo location={location} />
            </div>
        </div>
    );
}