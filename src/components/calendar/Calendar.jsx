import React from "react";
import "./style/calendar.scss";

export default function Calendar() {
	let date = new Date();
	console.log(date);

	const year = date.getFullYear(),
		month = "Apr",
		monthFull = "April",
		dayN = date.getDate(),
		dayW = "Fri";

	return (
		<div className="calendar">
			<div className="title">
				<p className="year">{year}</p>
				<h2 className="datePicked">
					{dayW}, {month} {dayN}
				</h2>
			</div>
			<div className="bottom">
				<div className="setMonth">
					<button className="arrLeft"></button>
					<p className="month">
						{monthFull} {year}
					</p>
					<button className="arrRight"></button>
				</div>
				<div className="dayOfWeek">
					<p>s</p>
					<p>m</p>
					<p>t</p>
					<p>w</p>
					<p>t</p>
					<p>f</p>
					<p>s</p>
				</div>
			</div>
		</div>
	);
}
