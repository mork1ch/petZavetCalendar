import React from "react";
import "./style/calendar.scss";

export default function Calendar() {
	let date = new Date();

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

	var dateObj = {
		yearNow: date.getFullYear(),
		month: date.getMonth(),
		dayNowNumber: date.getDate(),
	};

	// Дата сегодня
	// const yearNow = date.getFullYear(),
	// 	monthNow = shortMonths[date.getMonth()],
	// 	monthNowFull = months[date.getMonth()],
	// 	dayNowNumber = date.getDate(),
	// 	dayNowText = days[date.getDay()];

	const yearNow = dateObj.yearNow,
		monthNow = shortMonths[dateObj.month],
		monthNowFull = months[dateObj.month],
		dayNowNumber = dateObj.dayNowNumber,
		dayNowText = days[dateObj.dayNowNumber];

	let daysOnMonth = new Date(yearNow, date.getMonth(), 0).getDate(); // Дней в месяце
	var DaysOnMonth = []; // все дни в числах от 1 до окончания месяца
	for (let i = 0; daysOnMonth > i; i++) {
		DaysOnMonth.push(i + 1);
	}

	function monthNext() {
		// date.monthNow = ;
		// date.monthNowFull = ;
	}
	function monthPrev() {}

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
					<button className="arrLeft"></button>
					<p className="month">
						{monthNowFull} {yearNow}
					</p>
					<button className="arrRight"></button>
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
						<p>{item}</p>
					))}
				</div>
			</div>
		</div>
	);
}
