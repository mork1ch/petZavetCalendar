import React from "react";
import "./style/calendar.scss";

export default function Calendar() {
	let date = new Date();
	// console.log(date);

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
	const yearNow = date.getFullYear(),
		monthNow = shortMonths[date.getMonth()],
		monthNowFull = months[date.getMonth()],
		dayNowNumber = date.getDate(),
		dayNowText = days[date.getDay()];

	var daysOnMonth = new Date(yearNow, date.getMonth(), 0).getDate();
	console.log(daysOnMonth);

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
				<div className="days"></div>
			</div>
		</div>
	);
}
