import React, { useState, useMemo } from "react";
import "../css/Calendar.css";

const DAYS_OF_WEEK = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const MONTHS = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

export default function Calendar({ events, onDayClick }) {
    const [currentDate, setCurrentDate] = useState(new Date());

    // Extrac month and year from current state
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    // Navigation handlers
    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
    };

    // Build the calendar grid
    const calendarGrid = useMemo(() => {
        // 1. Get the day of the week the month starts on (0-6)
        const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
        // 2. Get the total number of days in the month
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        const cells = [];

        // Fill empty cells for days from the previous month
        for (let i = 0; i < firstDayOfMonth; i++) {
            cells.push({ day: null, empty: true });
        }

        // Fill the actual days of the month
        for (let i = 1; i <= daysInMonth; i++) {
            // Group the events that fall precisely on this day/month/year
            const dayEvents = events.filter((ev) => {
                if (!ev.rawDate || ev.rawDate.getFullYear() > 8000) return false; // ignore default bad dates

                return (
                    ev.rawDate.getDate() === i &&
                    ev.rawDate.getMonth() === currentMonth &&
                    ev.rawDate.getFullYear() === currentYear
                );
            });

            cells.push({
                day: i,
                empty: false,
                events: dayEvents,
                isToday: i === new Date().getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear()
            });
        }

        return cells;
    }, [currentDate, events, currentMonth, currentYear]);


    return (
        <div className="calendar-wrapper">
            <div className="calendar-header">
                <button className="calendar-nav-btn" onClick={handlePrevMonth}>&laquo; Ant</button>
                <h3>{MONTHS[currentMonth]} de {currentYear}</h3>
                <button className="calendar-nav-btn" onClick={handleNextMonth}>Próx &raquo;</button>
            </div>

            <div className="calendar-grid">
                {/* Render headers */}
                {DAYS_OF_WEEK.map((day) => (
                    <div key={day} className="calendar-day-header">{day}</div>
                ))}

                {/* Render day cells */}
                {calendarGrid.map((cell, idx) => {
                    if (cell.empty) {
                        return <div key={`empty-${idx}`} className="calendar-cell calendar-cell--empty"></div>;
                    }

                    const hasEvents = cell.events && cell.events.length > 0;

                    return (
                        <div
                            key={`day-${cell.day}`}
                            className={`calendar-cell ${cell.isToday ? 'calendar-cell--today' : ''} ${hasEvents ? 'calendar-cell--has-events' : ''}`}
                            onClick={() => hasEvents && onDayClick ? onDayClick(cell.day, cell.events) : null}
                        >
                            <span>{cell.day}</span>

                            {/* Event indicators */}
                            {hasEvents && (
                                <div className="calendar-events-dots">
                                    {cell.events.slice(0, 3).map((e) => (
                                        <div key={e.id} className="calendar-event-dot" title={e.title}></div>
                                    ))}
                                    {cell.events.length > 3 && <span style={{ fontSize: '8px', color: '#B35A22' }}>+</span>}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
