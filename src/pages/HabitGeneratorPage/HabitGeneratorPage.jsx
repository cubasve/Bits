import React from 'react';
import HabitList from '../../components/HabitList/HabitList';
import HabitInfo from '../../components/HabitInfo/HabitInfo';
// import HabitForm from '../../components/HabitForm/HabitForm';
import './HabitGenerator.css';

// import { Link, Route, Switch, } from 'react-router-dom';
//import habitGeneratorService from '../../utils/habitGeneratorService';

export default function HabitGeneratorPage({ location }) {
    return (
        <div className='HabitGeneratorPage'>
            <div className='habit-list-section'>
                <HabitList />
            </div>
            <div className='habit-info-section'>
                <HabitInfo location={location} />
            </div>
        </div>
    );
}