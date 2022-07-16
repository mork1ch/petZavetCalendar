import moment from "moment";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { monthSetNext, monthSetPrev } from "../../store/dateReducer";
import "./style/calendar.scss";

export default function Calendar() {
	const dispatch = useDispatch();

	const date = useSelector((state) => state.date);

	var months = [
			"Январь",
			"Февраль",
			"Март",
			"Апрель",
			"Май",
			"Июнь",
			"Июль",
			"Август",
			"Сентябрь",
			"Октябрь",
			"Ноябрь",
			"Декабрь",
		],
		shortMonths = [
			"Янв",
			"Февр",
			"Март",
			"Апр",
			"Май",
			"Июнь",
			"Июль",
			"Авг",
			"Сент",
			"Окт",
			"Нояб",
			"Дек",
		],
		days = [
			"Воскресенье",
			"Понедельник",
			"Вторник",
			"Среда",
			"Четверг",
			"Пятница",
			"Суббота",
		];

	// Дата сегодня
	const yearNow = date.yearNow,
		monthNow = shortMonths[date.month],
		monthNowFull = months[date.month],
		dayNowNumber = date.day,
		dayNowText = days[date.weekDay];

	var daysOnMonth = new Date(date.year, date.month + 1, 0).getDate(); // Дней в месяце
	var weekDayFirst = new Date(date.year, date.month + 1, 0).getDay(); // День недели первого дня
	var DaysOnMonth = []; // все дни в числах от 1 до окончания месяца
	DaysOnMonth[weekDayFirst] = 1;
	for (let i = 1; daysOnMonth > i; i++) {
		DaysOnMonth.push(i + 1);
	}

	console.log(date);

	function monthNext() {
		dispatch(monthSetNext());
	}
	function monthPrev() {
		dispatch(monthSetPrev());
	}

	return (
		<div className="calendar">
			<div className="title">
				<p className="yearNow">{yearNow}</p>
				<h2 className="datePicked">
					{dayNowText}, {monthNow} {dayNowNumber}
				</h2>
			</div>
			<div className="bottom">
				<div className="setMonth">
					<button
						className="arrLeft"
						onClick={() => monthPrev()}
					></button>
					<p className="month">
						{monthNowFull} {yearNow}
					</p>
					<button
						className="arrRight"
						onClick={() => monthNext()}
					></button>
				</div>
				<div className="dayOfWeek">
					<p>п</p>
					<p>в</p>
					<p>с</p>
					<p>ч</p>
					<p>п</p>
					<p>с</p>
					<p>в</p>
				</div>
				<div className="days">
					{DaysOnMonth.map((item) => (
						<p key={"day" + item} className={"day" + item}>
							{item}
						</p>
					))}
				</div>
				<div className="days"></div>
			</div>
		</div>
	);
}
