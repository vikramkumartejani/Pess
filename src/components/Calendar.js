import React, { useState, useEffect } from 'react';

const Calendar = () => {
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());
    const [selectedDate, setSelectedDate] = useState(today);
    const [showCalendar, setShowCalendar] = useState(false);

    // Enhanced CSS styles
    const styles = {
        container: {
            position: 'relative',
            width: '280px',
            fontFamily: 'Arial, sans-serif',
        },
        input: {
            width: '100%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        },
        calendar: {
            position: 'absolute',
            top: '45px',
            left: '0',
            width: '100%',
            backgroundColor: 'white',
            border: '1px solid #ddd',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            zIndex: '10',
            overflow: 'hidden',
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '12px',
            backgroundColor: '#f8f9fa',
            borderBottom: '1px solid #eee',
        },
        monthDisplay: {
            fontWeight: 'bold',
            fontSize: '16px',
            color: '#333',
        },
        navButton: {
            backgroundColor: '#4a90e2',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '28px',
            height: '28px',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0',
            fontSize: '14px',
            transition: 'background-color 0.2s',
        },
        weekdaysGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            borderBottom: '1px solid #eee',
            backgroundColor: '#f8f9fa',
        },
        weekday: {
            padding: '8px',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '12px',
            color: '#555',
        },
        daysGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            padding: '5px',
        },
        day: {
            padding: '8px',
            textAlign: 'center',
            cursor: 'pointer',
            fontSize: '13px',
            margin: '2px',
            borderRadius: '4px',
            transition: 'background-color 0.2s, color 0.2s',
        },
        today: {
            border: '1px solid #4a90e2',
            color: '#4a90e2',
        },
        selectedDay: {
            backgroundColor: '#4a90e2',
            color: 'white',
            fontWeight: 'bold',
        },
        emptyDay: {
            padding: '8px',
            textAlign: 'center',
            color: '#ddd',
        },
        hoveredDay: {
            backgroundColor: '#eaf2fd',
        }
    };

    // Navigate to previous month
    const goToPrevMonth = (e) => {
        e.stopPropagation(); // Prevent event bubbling
        setCurrentMonth(prevMonth => {
            if (prevMonth === 0) {
                setCurrentYear(prevYear => prevYear - 1);
                return 11;
            }
            return prevMonth - 1;
        });
    };

    // Navigate to next month
    const goToNextMonth = (e) => {
        e.stopPropagation(); // Prevent event bubbling
        setCurrentMonth(prevMonth => {
            if (prevMonth === 11) {
                setCurrentYear(prevYear => prevYear + 1);
                return 0;
            }
            return prevMonth + 1;
        });
    };

    // Select a date - modified to keep calendar open
    const handleDateSelect = (day) => {
        setSelectedDate(new Date(currentYear, currentMonth, day));
        // We're NOT closing the calendar here
    };

    // Format date as mm/dd/yyyy
    const formatDate = (date) => {
        if (!date) return '';
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();
        return `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`;
    };

    // Close calendar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            const calendarContainer = document.getElementById('calendar-container');
            if (calendarContainer && !calendarContainer.contains(event.target)) {
                setShowCalendar(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Generate calendar days for current month only
    const generateCalendarDays = () => {
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        const monthDisplay = `${monthNames[currentMonth]} ${currentYear}`;

        // Create weekday headers
        const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
            <div key={day} style={styles.weekday}>{day}</div>
        ));

        // Create array for all cells
        const days = [];

        // Add empty cells for days before the first day of month
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<div key={`empty-${i}`} style={styles.emptyDay}></div>);
        }

        const currentDate = new Date();
        const isCurrentMonth = currentDate.getMonth() === currentMonth && currentDate.getFullYear() === currentYear;

        // Add days of current month
        for (let day = 1; day <= daysInMonth; day++) {
            const isSelected = selectedDate &&
                selectedDate.getDate() === day &&
                selectedDate.getMonth() === currentMonth &&
                selectedDate.getFullYear() === currentYear;

            const isToday = isCurrentMonth && currentDate.getDate() === day;

            const dayStyle = {
                ...styles.day,
                ...(isSelected ? styles.selectedDay : {}),
                ...(isToday && !isSelected ? styles.today : {})
            };

            days.push(
                <div
                    key={day}
                    style={dayStyle}
                    onClick={() => handleDateSelect(day)}
                    onMouseOver={(e) => {
                        if (!isSelected) {
                            e.target.style.backgroundColor = styles.hoveredDay.backgroundColor;
                        }
                    }}
                    onMouseOut={(e) => {
                        if (!isSelected) {
                            e.target.style.backgroundColor = '';
                        }
                    }}
                >
                    {day}
                </div>
            );
        }

        return { monthDisplay, weekdays, days };
    };

    const { monthDisplay, weekdays, days } = generateCalendarDays();

    return (
        <div id="calendar-container" style={styles.container}>
            <input
                type="text"
                style={styles.input}
                placeholder="mm/dd/yyyy"
                readOnly
                value={formatDate(selectedDate)}
                onClick={() => setShowCalendar(!showCalendar)}
            />

            {/* Calendar Popup */}
            {showCalendar && (
                <div style={styles.calendar}>
                    <div style={styles.header}>
                        <button
                            style={styles.navButton}
                            onClick={goToPrevMonth}
                            onMouseOver={(e) => {
                                e.target.style.backgroundColor = '#3a7bc8';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.backgroundColor = styles.navButton.backgroundColor;
                            }}
                        >
                            &#9664;
                        </button>
                        <div style={styles.monthDisplay}>{monthDisplay}</div>
                        <button
                            style={styles.navButton}
                            onClick={goToNextMonth}
                            onMouseOver={(e) => {
                                e.target.style.backgroundColor = '#3a7bc8';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.backgroundColor = styles.navButton.backgroundColor;
                            }}
                        >
                            &#9654;
                        </button>
                    </div>

                    <div style={styles.weekdaysGrid}>
                        {weekdays}
                    </div>

                    <div style={styles.daysGrid}>
                        {days}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Calendar;