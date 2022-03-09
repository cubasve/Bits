import React, { useContext, useState } from "react";
import { HabitContext } from "../../context/HabitContext";
import { Link } from "react-router-dom";
import { Field, Formik } from "formik";
import {
	Box,
	Button,
	Card,
	Paper,
	Popover,
	Step,
	StepContent,
	StepLabel,
	Stepper,
	TextField,
	Typography,
} from "@material-ui/core";
import {
	Battery20,
	Battery50,
	BatteryFull,
	EmojiEvents,
	EmojiObjects,
	WatchLater,
	InfoSharp,
} from "@material-ui/icons";
import habitGeneratorService from "../../utils/habitGeneratorService";
import "./HabitForm.css";
import { makeStyles } from "@material-ui/core/styles";
import { object, string } from "yup";

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
	typography: {
		padding: theme.spacing(2),
		width: "300px",
	},
}));

const steps = [
	{
		label: "Cue: Notice the Reward",
		description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
	},
	{
		label: "Craving: Want the Reward",
		description:
			"An ad group contains one or more ads which target a shared set of keywords.",
	},
	{
		label: "Response: Obtain the Reward",
		description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues'`,
	},
	{
		label: "Reward: Repeat the Habit",
		description:
			"xyzjkweiuew rwgwiouehgu aieghiuwehguwehg iwehgwaiueghowei irhiuewhgui",
	},
];

export default function HabitForm() {
	const { setAllHabits } = useContext(HabitContext);

	const [activeStep, setActiveStep] = useState(0);
	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	const classes = useStyles();
	const [cuePopoverEl, setCuePopoverEl] = useState(null);
	const [cravingPopoverEl, setCravingPopoverEl] = useState(null);
	const [responseBronzePopoverEl, setResponseBronzePopoverEl] = useState(null);
	const [responseSilverPopoverEl, setResponseSilverPopoverEl] = useState(null);
	const [responseGoldPopoverEl, setResponseGoldPopoverEl] = useState(null);
	const [rewardPopoverEl, setRewardPopoverEl] = useState(null);

	// CUE
	const handleCuePopoverClick = (e) => setCuePopoverEl(e.currentTarget);
	const handleCuePopoverClose = () => setCuePopoverEl(null);
	const cueOpen = Boolean(cuePopoverEl);
	const cueId = cueOpen ? "simple-popover" : undefined;

	//CRAVING
	const handleCravingPopoverClick = (e) => setCravingPopoverEl(e.currentTarget);
	const handleCravingPopoverClose = () => setCravingPopoverEl(null);
	const cravingOpen = Boolean(cravingPopoverEl);
	const cravingId = cravingOpen ? "simple-popover" : undefined;

	//RESPONSE BRONZE
	const handleResponseBronzePopoverClick = (e) =>
		setResponseBronzePopoverEl(e.currentTarget);
	const handleResponseBronzePopoverClose = () =>
		setResponseBronzePopoverEl(null);
	const responseBronzeOpen = Boolean(responseBronzePopoverEl);
	const bronzeId = responseBronzeOpen ? "simple-popover" : undefined;

	//RESPONSE SILVER
	const handleResponseSilverPopoverClick = (e) =>
		setResponseSilverPopoverEl(e.currentTarget);
	const handleResponseSilverPopoverClose = () =>
		setResponseSilverPopoverEl(null);
	const responseSilverOpen = Boolean(responseSilverPopoverEl);
	const silverId = responseSilverOpen ? "simple-popover" : undefined;

	//RESPONSE GOLD
	const handleResponseGoldPopoverClick = (e) =>
		setResponseGoldPopoverEl(e.currentTarget);
	const handleResponseGoldPopoverClose = () => setResponseGoldPopoverEl(null);
	const responseGoldOpen = Boolean(responseGoldPopoverEl);
	const goldId = responseGoldOpen ? "simple-popover" : undefined;

	//REWARD
	const handleRewardPopoverClick = (e) => setRewardPopoverEl(e.currentTarget);
	const handleRewardPopoverClose = () => {
		setRewardPopoverEl(null);
	};
	const rewardOpen = Boolean(rewardPopoverEl);
	const rewardId = rewardOpen ? "simple-popover" : undefined;

	const initialValues = {
		cueBehavior: "",
		cueTime: "",
		cueLocation: "",
		currentHabit: "",
		responseBronze: "",
		responseSilver: "",
		responseGold: "",
		wantedHabit: "",
		currentHabit: "",
	};

	const validationSchema = object().shape({
		cueBehavior: string().required("Behavior/Habit is required"),
		cueTime: string().required("Time of habit is required"),
		cueLocation: string().required("Location of habit is required"),
		responseBronze: string().required("Bronze response is required"),
		responseSilver: string().required("Silver response is required"),
		responseGold: string().required("Gold response is required"),
		wantedHabit: string().required("Wanted Habit is required"),
		currentHabit: string().required("Current Habit is required"),
	});

	return (
		<Box>
			<Typography variant="h5">ADD A NEW HABIT</Typography>
			<Stepper activeStep={activeStep} orientation="vertical">
				{steps.map(({ label, description }, index) => (
					<Step key={label}>
						<StepLabel>
							<Typography variant="h6" sx={{ textAlign: "left" }}>
								{label}
							</Typography>
						</StepLabel>
						<StepContent>
							<Formik
								initialValues={initialValues}
								onSubmit={async (values, { resetForm }) => {
									try {
										const data = await habitGeneratorService.createHabit({
											...values,
										});
										setAllHabits(data.user.userHabitGenerator);
										resetForm();
									} catch (e) {
										console.error(e);
									}
								}}
								validationSchema={validationSchema}
							>
								{({
									errors,
									handleChange,
									handleSubmit,
									isSubmitting,
									setFieldValue,
									touched,
									values,
								}) => (
									<form onSubmit={handleSubmit}>
										{activeStep === 0 && (
											<Card
												variant="outlined"
												style={{ backgroundColor: "beige" }}
											>
												<span className="habit-create-icons">
													<p className="habit-create-steps">
														<Button disabled>
															<WatchLater
																style={{
																	fontSize: 25,
																	color: "maroon",
																}}
															/>
														</Button>
														1. Cue
														<Button
															aria-describedby={cueId}
															onClick={handleCuePopoverClick}
														>
															<InfoSharp />
														</Button>
														<Popover
															id={cueId}
															open={cueOpen}
															anchorEl={cuePopoverEl}
															onClose={handleCuePopoverClose}
															anchorOrigin={{
																vertical: "bottom",
																horizontal: "center",
															}}
															transformOrigin={{
																vertical: "top",
																horizontal: "center",
															}}
														>
															<Typography className={classes.typography}>
																<strong>Notice the reward: </strong>
																The 2 most common cues are time and location.
																People who make a specific plan for when and
																where they will perform a new habit are more
																likely to follow through. Don't leave it up to
																chance and hope we will just remember to do it
																or feel motivated at the right time.
															</Typography>
														</Popover>
													</p>
												</span>
												<div className="habit-example">
													Ex: I will
													<span className="habit-inputs"> exercise </span> at
													<span className="habit-inputs"> 7.00pm </span> in
													<span className="habit-inputs">
														{" "}
														my house (living room)
													</span>
													.
												</div>
												<p className="habit-create-description">
													<span className="create-text">I WILL </span>
													<Field name="cueBehavior">
														{({ field, meta }) => (
															<TextField
																{...field}
																error={Boolean(meta.touched && meta.error)}
																helperText={meta.touched && meta.error}
																label="Behavior"
																size="small"
																variant="outlined"
															/>
														)}
													</Field>
													<span className="create-text"> AT </span>
													<Field name="cueTime">
														{({ field, meta }) => (
															<TextField
																{...field}
																error={Boolean(meta.touched && meta.error)}
																helperText={meta.touched && meta.error}
																InputLabelProps={{
																	shrink: true,
																}}
																inputProps={{
																	step: 300, // 5 min
																}}
																label="Time"
																size="small"
																type="time"
																variant="outlined"
															/>
														)}
													</Field>
													<span className="create-text"> IN </span>
													<Field name="cueLocation">
														{({ field, meta }) => (
															<TextField
																{...field}
																error={Boolean(meta.touched && meta.error)}
																helperText={meta.touched && meta.error}
																label="Location"
																size="small"
																variant="outlined"
															/>
														)}
													</Field>
												</p>
											</Card>
										)}
										{activeStep === 1 && (
											<Card
												variant="outlined"
												style={{ backgroundColor: "beige" }}
											>
												<span className="habit-create-icons">
													<p className="habit-create-steps">
														<Button disabled>
															<EmojiObjects
																style={{
																	fontSize: 28,
																	color: "maroon",
																}}
															/>
														</Button>
														2. Craving
														<Button
															aria-describedby={cravingId}
															onClick={handleCravingPopoverClick}
														>
															<InfoSharp />
														</Button>
														<Popover
															id={cravingId}
															open={cravingOpen}
															anchorEl={cravingPopoverEl}
															onClose={handleCravingPopoverClose}
															anchorOrigin={{
																vertical: "bottom",
																horizontal: "center",
															}}
															transformOrigin={{
																vertical: "top",
																horizontal: "center",
															}}
														>
															<Typography className={classes.typography}>
																<strong>Want the reward: </strong>
																Pair an action you WANT to do with an action you
																NEED to do. We often decide what to do next
																based on what we have just finished doing. No
																behavior happens in isolation. Each action
																becomes a cue that triggers the next behavior.
																Idenify a current habit you already do each day
																and then stack your new behavior on top.
															</Typography>
														</Popover>
													</p>
												</span>
												<div className="habit-example">
													Ex: After I
													<span className="habit-inputs">
														{" "}
														watch my tv show{" "}
													</span>{" "}
													, I will
													<span className="habit-inputs"> exercise </span>.
												</div>
												<p className="habit-create-description">
													<span className="create-text">AFTER </span>
													<Field name="currentHabit">
														{({ field, meta }) => (
															<TextField
																{...field}
																error={Boolean(meta.touched && meta.error)}
																helperText={meta.touched && meta.error}
																label="Current Habit"
																size="small"
																variant="outlined"
															/>
														)}
													</Field>
													<span className="create-text"> ,</span>
													<br />
													<span className="create-text"> I WILL </span>
													<Field name="cueBehavior">
														{({ field, meta }) => (
															<TextField
																{...field}
																error={Boolean(meta.touched && meta.error)}
																helperText={meta.touched && meta.error}
																label="Behavior"
																size="small"
																variant="outlined"
															/>
														)}
													</Field>
												</p>
											</Card>
										)}
										{activeStep === 2 && (
											<>
												<Card
													variant="outlined"
													style={{ backgroundColor: "beige" }}
												>
													<span className="habit-create-icons">
														<p className="habit-create-steps">
															<Button disabled>
																<Battery20
																	style={{
																		fontSize: 25,
																		color: "maroon",
																	}}
																/>
															</Button>
															3A. Response - Bronze
															<Button
																aria-describedby={bronzeId}
																onClick={handleResponseBronzePopoverClick}
															>
																<InfoSharp />
															</Button>
															<Popover
																id={bronzeId}
																open={responseBronzeOpen}
																anchorEl={responseBronzePopoverEl}
																onClose={handleResponseBronzePopoverClose}
																anchorOrigin={{
																	vertical: "bottom",
																	horizontal: "center",
																}}
																transformOrigin={{
																	vertical: "top",
																	horizontal: "center",
																}}
															>
																<Typography className={classes.typography}>
																	<strong>Use the 2-Minute Rule: </strong>
																	When starting a new habit or on unmotivating
																	days, complete your habit in less than 2
																	minutes. Your goal might be to run a marathon,
																	but your gateway habit is to put on your
																	running shoes. It's better to do less than you
																	hoped than to do nothing at all. Ex. Write 1
																	sentence, open your study notes, etc.
																</Typography>
															</Popover>
														</p>
													</span>

													<div className="habit-example">
														Ex:
														<span className="habit-inputs">
															{" "}
															30 Jumping Jacks{" "}
														</span>
													</div>

													<p className="habit-create-description">
														<Field name="responseBronze">
															{({ field, meta }) => (
																<TextField
																	{...field}
																	error={Boolean(meta.touched && meta.error)}
																	helperText={meta.touched && meta.error}
																	label="Bronze"
																	size="small"
																	variant="outlined"
																/>
															)}
														</Field>
													</p>
												</Card>
												<Card
													variant="outlined"
													style={{ backgroundColor: "beige" }}
												>
													<span className="habit-create-icons">
														<p className="habit-create-steps">
															<Button disabled>
																<Battery50
																	style={{
																		fontSize: 25,
																		color: "maroon",
																	}}
																/>
															</Button>
															3B. Response - Silver
															<Button
																aria-describedby={silverId}
																onClick={handleResponseSilverPopoverClick}
															>
																<InfoSharp />
															</Button>
															<Popover
																id={silverId}
																open={responseSilverOpen}
																anchorEl={responseSilverPopoverEl}
																onClose={handleResponseSilverPopoverClose}
																anchorOrigin={{
																	vertical: "bottom",
																	horizontal: "center",
																}}
																transformOrigin={{
																	vertical: "top",
																	horizontal: "center",
																}}
															>
																<Typography className={classes.typography}>
																	<strong>
																		Advance to intermediate steps:{" "}
																	</strong>
																	Always stay below the point where the habit
																	feels like work. Stop before it seems like a
																	hassle. Master the habit of showing up: A
																	habit must be established before it can be
																	improved. Ex. Write 1 paragraph, study for 15
																	min, etc.
																</Typography>
															</Popover>
														</p>
													</span>

													<div className="habit-example">
														Ex:
														<span className="habit-inputs">
															{" "}
															15 minute workout{" "}
														</span>
													</div>

													<p className="habit-create-description">
														<Field name="responseSilver">
															{({ field, meta }) => (
																<TextField
																	{...field}
																	error={Boolean(meta.touched && meta.error)}
																	helperText={meta.touched && meta.error}
																	label="Silver"
																	size="small"
																	variant="outlined"
																/>
															)}
														</Field>
													</p>
												</Card>
												<Card
													variant="outlined"
													style={{ backgroundColor: "beige" }}
												>
													<span className="habit-create-icons">
														<p className="habit-create-steps">
															<Button disabled>
																<BatteryFull
																	style={{
																		fontSize: 25,
																		color: "maroon",
																	}}
																/>
															</Button>
															3C. Response - Gold
															<Button
																aria-describedby={goldId}
																onClick={handleResponseGoldPopoverClick}
															>
																<InfoSharp />
															</Button>
															<Popover
																id={goldId}
																open={responseGoldOpen}
																anchorEl={responseGoldPopoverEl}
																onClose={handleResponseGoldPopoverClose}
																anchorOrigin={{
																	vertical: "bottom",
																	horizontal: "center",
																}}
																transformOrigin={{
																	vertical: "top",
																	horizontal: "center",
																}}
															>
																<Typography className={classes.typography}>
																	<strong>Keep advancing: </strong>
																	Once we've established the habit and showing
																	up each day, combine the 2-minute rule with
																	habit shaping to scale the habit back up
																	toward your ultimate goal. Nearly any larger
																	life goal can be transformed into a 2-minute
																	behavior. Ex. Write 1,000 words, study for 3
																	hours, etc.
																</Typography>
															</Popover>
														</p>
													</span>

													<div className="habit-example">
														Ex:
														<span className="habit-inputs">
															{" "}
															30 minute workout
														</span>
													</div>

													<p className="habit-create-description">
														<Field name="responseGold">
															{({ field, meta }) => (
																<TextField
																	{...field}
																	error={Boolean(meta.touched && meta.error)}
																	helperText={meta.touched && meta.error}
																	label="Gold"
																	size="small"
																	variant="outlined"
																/>
															)}
														</Field>
													</p>
												</Card>
											</>
										)}
										{activeStep === 3 && (
											<Card
												variant="outlined"
												style={{ backgroundColor: "beige" }}
											>
												<span className="habit-create-icons">
													<p className="habit-create-steps">
														<Button disabled>
															<EmojiEvents
																style={{
																	fontSize: 25,
																	color: "maroon",
																}}
															/>
														</Button>
														4. Reward
														<Button
															aria-describedby={rewardId}
															onClick={handleRewardPopoverClick}
														>
															<InfoSharp />
														</Button>
														<Popover
															id={rewardId}
															open={rewardOpen}
															anchorEl={rewardPopoverEl}
															onClose={handleRewardPopoverClose}
															anchorOrigin={{
																vertical: "bottom",
																horizontal: "center",
															}}
															transformOrigin={{
																vertical: "top",
																horizontal: "center",
															}}
														>
															<Typography className={classes.typography}>
																<strong>Repeat the habit: </strong>
																We're more likely to repeat a behavior when the
																experience is satisfying. Give yourself an
																immediate reward when you complete your habit.
																Pleasure teaches your brain that a behavior is
																worth remembering and repeating. When is reward
																is repeated. What is punished is avoided.
															</Typography>
														</Popover>
													</p>
												</span>

												<div className="habit-example">
													Ex: After I
													<span className="habit-inputs"> exercise </span> , I
													will
													<span className="habit-inputs"> shower </span>.
												</div>

												<p className="habit-create-description">
													<span className="create-text">AFTER </span>
													<Field name="cueBehavior">
														{({ field, meta }) => (
															<TextField
																{...field}
																error={Boolean(meta.touched && meta.error)}
																helperText={meta.touched && meta.error}
																label="Behavior"
																size="small"
																variant="outlined"
															/>
														)}
													</Field>
													<span className="create-text"> ,</span>
													<br />
													<span className="create-text"> I WILL </span>
													<Field name="wantedHabit">
														{({ field, meta }) => (
															<TextField
																{...field}
																error={Boolean(meta.touched && meta.error)}
																helperText={meta.touched && meta.error}
																label="Habit I Want"
																size="small"
																variant="outlined"
															/>
														)}
													</Field>
												</p>
											</Card>
										)}
										<Typography>{description}</Typography>
										<Box sx={{ mb: 2 }}>
											<div>
												{activeStep === steps.length - 1 ? (
													<Button
														disabled={isSubmitting}
														variant="contained"
														style={{
															backgroundColor: "maroon",
															color: "white",
														}}
														className={classes.button}
														type="submit"
													>
														Add A New Habit
													</Button>
												) : (
													<Button
														className={classes.button}
														variant="contained"
														onClick={handleNext}
														sx={{ mt: 1, mr: 1 }}
														style={{
															backgroundColor: "maroon",
															color: "white",
														}}
													>
														Continue
													</Button>
												)}

												<Button
													disabled={activeStep === 0}
													onClick={handleBack}
													sx={{ mt: 1, mr: 1 }}
												>
													Back
												</Button>
											</div>
										</Box>
									</form>
								)}
							</Formik>
						</StepContent>
					</Step>
				))}
			</Stepper>
			{activeStep === steps.length && (
				<Paper square elevation={0} sx={{ p: 3 }}>
					<Typography>All steps completed - you&apos;re finished</Typography>
					<Button
						className={classes.button}
						onClick={handleReset}
						sx={{ mt: 1, mr: 1 }}
					>
						Reset
					</Button>
				</Paper>
			)}
		</Box>
	);
}
