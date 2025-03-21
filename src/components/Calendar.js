import React, { useState, useEffect, useRef } from 'react';
import "../Styling/calendar.css";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";


const Calendar = () => {
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());
    const [selectedDate, setSelectedDate] = useState(today);
    const [showCalendar, setShowCalendar] = useState(false);
    const calendarRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (calendarRef.current && !calendarRef.current.contains(event.target)) {
                setShowCalendar(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const goToPrevMonth = () => {
        setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
        if (currentMonth === 0) setCurrentYear((prevYear) => prevYear - 1);
    };

    const goToNextMonth = () => {
        setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
        if (currentMonth === 11) setCurrentYear((prevYear) => prevYear + 1);
    };

    const handleDateSelect = (day) => {
        setSelectedDate(new Date(currentYear, currentMonth, day));
        setShowCalendar(false);
    };

    const formatDate = (date) => {
        return date ? date.toISOString().split("T")[0] : "";
    };

    const generateCalendarDays = () => {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        const weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

        return {
            monthDisplay: `${monthNames[currentMonth]} ${currentYear}`,
            weekdays,
            days: Array.from({ length: firstDayOfMonth }, (_, i) => null).concat(
                Array.from({ length: daysInMonth }, (_, day) => day + 1)
            ),
        };
    };

    const { monthDisplay, weekdays, days } = generateCalendarDays();

    return (
        <div className="calendar-container" ref={calendarRef}>
            <input
                type="text"
                className="calendar-input"
                readOnly
                value={formatDate(selectedDate)}
                onClick={() => setShowCalendar(!showCalendar)}
            />

            {showCalendar && (
                <div className="calendar-popup">
                    <div className="calendar-header">
                        <button className="calendar-nav-button" onClick={goToPrevMonth}><IoMdArrowDropleftCircle style={{ paddingTop: "5px", fontSize: "25px" }} /></button>
                        <div>{monthDisplay}</div>
                        <button className="calendar-nav-button" onClick={goToNextMonth}><IoMdArrowDroprightCircle style={{ paddingTop: "5px", fontSize: "25px" }} /></button>
                    </div>

                    {/* Weekdays */}
                    <div className="calendar-weekdays">
                        {weekdays.map((day) => (
                            <div key={day}>{day}</div>
                        ))}
                    </div>

                    {/* Calendar Days */}
                    <div className="calendar-days">
                        {days.map((day, index) =>
                            day ? (
                                <div
                                    key={index}
                                    className={`calendar-day ${selectedDate.getDate() === day &&
                                        selectedDate.getMonth() === currentMonth &&
                                        selectedDate.getFullYear() === currentYear
                                        ? "selected-day"
                                        : ""
                                        } ${day === 21 ? "highlighted-day" : ""}`}
                                    onClick={() => handleDateSelect(day)}
                                >
                                    {day}
                                </div>
                            ) : (
                                <div key={index} className="empty-day"></div>
                            )
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Calendar;
