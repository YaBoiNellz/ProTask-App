//ProTask App Calendar
//Created by Darnell Chambers Gordon

import React from 'react';

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    // Define the months and their corresponding days
    this.months = [
      { name: 'January', days: 31 },
      { name: 'February', days: 28 }, // 2023 is not a leap year
      { name: 'March', days: 31 },
      { name: 'April', days: 30 },
      { name: 'May', days: 31 },
      { name: 'June', days: 30 },
      { name: 'July', days: 31 },
      { name: 'August', days: 31 },
      { name: 'September', days: 30 },
      { name: 'October', days: 31 },
      { name: 'November', days: 30 },
      { name: 'December', days: 31 },
    ];
  }

  render() {
    return (
      <div className="calendar">
        <h1>2023 Calendar</h1>
        {this.months.map((month) => (
          <div key={month.name} className="month">
            <h2>{month.name}</h2>
            <div className="days">
              {Array.from({ length: month.days }, (_, index) => index + 1).map(
                (day) => (
                  <div key={day} className="day">
                    {day}
                  </div>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Calendar;


