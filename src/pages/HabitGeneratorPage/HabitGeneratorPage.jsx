import React, { Component } from 'react';
import HabitList from '../../components/HabitList/HabitList';
import HabitInfo from '../../components/HabitInfo/HabitInfo';

export default class HabitGeneratorPage extends Component {
    render() {
        return (
            <div>
                <HabitList />
                <HabitInfo />
            </div>
        )
    }
}