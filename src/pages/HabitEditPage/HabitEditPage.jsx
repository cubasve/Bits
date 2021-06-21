import React from "react";
import EditHabit from "../../components/EditHabit/EditHabit";
import HabitList from "../../components/HabitList/HabitList";
import "./HabitEditPage.css";

export default function HabitEditPage(props) {
	return (
		<div className="HabitEditPage">
			<div>
				<HabitList />
			</div>
			<div>
				<EditHabit {...props} />
			</div>
		</div>
	);
}
