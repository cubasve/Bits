import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { HabitContext } from "../../context/HabitContext";
import { Button, TextField, Typography } from "@material-ui/core";
import { Card } from "@material-ui/core";
import {
	Battery20,
	Battery50,
	BatteryFull,
	EmojiEvents,
	EmojiObjects,
	WatchLater,
} from "@material-ui/icons";
import "./EditHabit.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
			width: "18ch",
		},
	},
	button: {
		margin: theme.spacing(2),
	},
}));

export default function EditHabit({ history, location }) {
	const classes = useStyles();

	const [habitData, setHabitData] = useState(location.state.habit);
	const { handleHabitUpdate } = useContext(HabitContext);

	const handleChange = (e) => {
		const formData = { ...habitData, [e.target.name]: e.target.value };
		setHabitData(formData);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		handleHabitUpdate(habitData);
		history.push("/habitgenerator");
	};

	return (
		<>
			<Typography variant="h5">EDIT A HABIT</Typography>

			<form className={classes.root} onSubmit={handleSubmit}>
				<div className="EditHabitInfo">
					{/* CUE */}
					<div className="edit-infoBorder">
						<Card variant="outlined" style={{ backgroundColor: "beige" }}>
							<div className="habit-edit-icons">
								<WatchLater style={{ fontSize: 40, color: "maroon" }} />
							</div>
							<p className="habit-edit-steps">1. Cue</p>
							<p className="habit-edit-description">
								<span className="edit-text">I WILL </span>
								<TextField
									id="outlined-basic"
									label="Behavior"
									variant="outlined"
									name="cueBehavior"
									value={habitData.cueBehavior}
									onChange={handleChange}
									required
									pattern=".{2,}"
									size="small"
								/>
								<span className="edit-text"> AT </span>
								<TextField
									id="time"
									label="Time"
									type="time"
									variant="outlined"
									name="cueTime"
									value={habitData.cueTime}
									onChange={handleChange}
									required
									pattern=".{2,}"
									InputLabelProps={{
										shrink: true,
									}}
									inputProps={{
										step: 300, // 5 min
									}}
									size="small"
								/>
								<span className="edit-text"> IN </span>
								<TextField
									id="outlined-basic"
									label="Location"
									variant="outlined"
									name="cueLocation"
									value={habitData.cueLocation}
									onChange={handleChange}
									required
									pattern=".{2,}"
									size="small"
								/>
							</p>
						</Card>
					</div>

					{/* CRAVING */}
					<div className="edit-infoBorder">
						<Card variant="outlined" style={{ backgroundColor: "beige" }}>
							<div className="habit-edit-icons">
								<EmojiObjects style={{ fontSize: 40, color: "maroon" }} />
							</div>
							<p className="habit-edit-steps">2. Craving</p>
							<p className="habit-edit-description">
								<span className="edit-text">AFTER </span>
								<TextField
									id="outlined-basic"
									label="Current Habit"
									variant="outlined"
									name="currentHabit"
									value={habitData.currentHabit}
									onChange={handleChange}
									required
									pattern=".{2,}"
									size="small"
								/>
								<span className="edit-text"> ,</span>
								<br />
								<span className="edit-text"> I WILL </span>
								<TextField
									id="outlined-basic"
									label="Habit I Need"
									variant="outlined"
									name="cueBehavior"
									value={habitData.cueBehavior}
									onChange={handleChange}
									required
									pattern=".{2,}"
									size="small"
								/>
							</p>
						</Card>
					</div>

					{/* REWARD BRONZE */}
					<div className="edit-infoBorder">
						<Card variant="outlined" style={{ backgroundColor: "beige" }}>
							<div className="habit-edit-icons">
								<Battery20 style={{ fontSize: 40, color: "maroon" }} />
							</div>
							<p className="habit-edit-steps">3A. Response - Bronze</p>
							<p className="habit-edit-description">
								<TextField
									id="outlined-basic"
									label="Bronze"
									variant="outlined"
									name="responseBronze"
									value={habitData.responseBronze}
									onChange={handleChange}
									required
									pattern=".{2,}"
									size="small"
								/>
							</p>
						</Card>
					</div>

					{/* REWARD SILVER */}
					<div className="edit-infoBorder">
						<Card variant="outlined" style={{ backgroundColor: "beige" }}>
							<div className="habit-edit-icons">
								<Battery50 style={{ fontSize: 40, color: "maroon" }} />
							</div>
							<p className="habit-edit-steps">3B. Response - Silver</p>
							<p className="habit-edit-description">
								<TextField
									id="outlined-basic"
									label="Silver"
									variant="outlined"
									name="responseSilver"
									value={habitData.responseSilver}
									onChange={handleChange}
									required
									pattern=".{2,}"
									size="small"
								/>
							</p>
						</Card>
					</div>

					{/* REWARD GOLD */}
					<div className="edit-infoBorder">
						<Card variant="outlined" style={{ backgroundColor: "beige" }}>
							<div className="habit-edit-icons">
								<BatteryFull style={{ fontSize: 40, color: "maroon" }} />
							</div>
							<p className="habit-edit-steps">3C. Response - Gold</p>
							<p className="habit-edit-description">
								<TextField
									id="outlined-basic"
									label="Gold"
									variant="outlined"
									name="responseGold"
									value={habitData.responseGold}
									onChange={handleChange}
									required
									pattern=".{2,}"
									size="small"
								/>
							</p>
						</Card>
					</div>

					{/* REWARD */}
					<div className="edit-infoBorder">
						<Card variant="outlined" style={{ backgroundColor: "beige" }}>
							<div className="habit-edit-icons">
								<EmojiEvents style={{ fontSize: 40, color: "maroon" }} />
							</div>
							<p className="habit-edit-steps">4. Reward</p>
							<p className="habit-edit-description">
								<span className="edit-text">AFTER </span>
								<TextField
									id="outlined-basic"
									label="Habit I Need"
									variant="outlined"
									name="cueBehavior"
									value={habitData.cueBehavior}
									onChange={handleChange}
									required
									pattern=".{2,}"
									size="small"
								/>
								<span className="edit-text"> ,</span>
								<br />
								<span className="edit-text"> I WILL </span>
								<TextField
									id="outlined-basic"
									label="Habit I Want"
									variant="outlined"
									name="wantedHabit"
									value={habitData.wantedHabit}
									onChange={handleChange}
									required
									pattern=".{2,}"
									size="small"
								/>
							</p>
						</Card>
					</div>
				</div>

				<Button
					onClick={handleSubmit}
					// component={Link}
					// to={{
					//     pathname: `/habitgenerator/${habitData._id}`,
					//     state: { habitData },
					// }}
					variant="contained"
					style={{ backgroundColor: "maroon", color: "white" }}
					className={classes.button}
				>
					Save Updated Habit
				</Button>
				<Button
					component={Link}
					to="/habitgenerator"
					variant="contained"
					className={classes.button}
				>
					Cancel
				</Button>
			</form>
		</>
	);
}
