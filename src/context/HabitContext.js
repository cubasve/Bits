import React, { createContext, useState } from "react";
import habitGeneratorService from "../utils/habitGeneratorService";

export const HabitContext = createContext();

export const HabitProvider = ({ children }) => {
	const [allHabits, setAllHabits] = useState([]);
	const [newHabit, setNewHabit] = useState({
		responseBronze: "",
		responseSilver: "",
		responseGold: "",

		cueBehavior: "",
		cueTime: "",
		cueLocation: "",

		currentHabit: "",
		wantedHabit: "",
	});
	// const [formValid, setFormValid] = useState(false);
	// const habitFormRef = useRef();

	//CREATE
	const handleInputChange = (e) => {
		const habit = { ...newHabit, [e.target.name]: e.target.value };
		setNewHabit(habit);
		//console.log('habitFormRef.current.checkValidity(): ', habitFormRef.current.oninvalid)
		//setFormValid(!habitFormRef.current.focus());
	};

	const handleHabitSubmit = async (e) => {
		try {
			e.preventDefault();
			const data = await habitGeneratorService.createHabit({
				responseBronze: newHabit.responseBronze,
				responseSilver: newHabit.responseSilver,
				responseGold: newHabit.responseGold,

				cueBehavior: newHabit.cueBehavior,
				cueTime: newHabit.cueTime,
				cueLocation: newHabit.cueLocation,

				currentHabit: newHabit.currentHabit,
				wantedHabit: newHabit.wantedHabit,
			});

			setAllHabits(data.user.userHabitGenerator);
			setNewHabit({
				responseBronze: "",
				responseSilver: "",
				responseGold: "",

				cueBehavior: "",
				cueTime: "",
				cueLocation: "",

				currentHabit: "",
				wantedHabit: "",
			});
		} catch (err) {
			console.error(err);
		}
	};

	//DELETE
	const handleHabitDelete = async (event) => {
		console.log("event: ", event);
		try {
			const data = await habitGeneratorService.removeHabit({ id: event });
			console.log("data: ", data);
			setAllHabits(data.user.userHabitGenerator);
			console.log("all habits: ", allHabits);
		} catch (err) {
			console.error(err);
		}
	};

	//UPDATE
	const handleHabitUpdate = async (updatedHabitData) => {
		console.log("updatedHabitData: ", updatedHabitData);
		try {
			const updatedHabit = await habitGeneratorService.updateHabit(
				updatedHabitData
			);
			//Use map to replace just the habit that was updated
			const newHabitArray = allHabits.map((habit) =>
				habit._id === updatedHabit._id ? updatedHabit : habit
			);
			setAllHabits(newHabitArray);
			// history.push("/habitgenerator/");
		} catch (err) {
			console.error(err);
		}
	};

	const context = {
		allHabits,
		setAllHabits,
		newHabit,
		setNewHabit,
		handleInputChange,
		handleHabitSubmit,
		handleHabitDelete,
		handleHabitUpdate,
	};

	return (
		<HabitContext.Provider value={context}>{children}</HabitContext.Provider>
	);
};
// const HabitContext = React.createContext({
//     newHabit: {},
//     setNewHabit: () => {},

//     allHabits: [],
//     setAllHabits: () => {},
// });

// export default HabitContext;
