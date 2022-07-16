import { useDispatch, useSelector } from "react-redux";
import Calendar from "./components/calendar/Calendar";
import { addNewDatePills } from "./store/datesOfPillsReducer";
import "./styles/style.scss";

function App() {
	const dispatch = useDispatch();
	const datesOfPills = useSelector(
		(state) => state.datesOfPills.datesOfPills
	);

	const AddNewDatePills = () => {
		let date = new Date();

		let output =
			String(date.getDate()).padStart(2, "0") +
			"." +
			String(date.getMonth() + 1).padStart(2, "0") +
			"." +
			date.getFullYear();

		const dateToPush = {
			date: output,
		};
		dispatch(addNewDatePills(dateToPush));
	};

	return (
		<div className="App">
			<div className="content">
				<Calendar />
			</div>

			<p>Добавить сегодняшний день</p>

			<button onClick={() => AddNewDatePills()}>Добавить дату</button>

			<div className="dates">
				{datesOfPills.length > 0 ? (
					<div>
						{datesOfPills.map((date) => (
							<p>{date.date}</p>
						))}
					</div>
				) : (
					<div>Дат нет</div>
				)}
			</div>
		</div>
	);
}

export default App;
