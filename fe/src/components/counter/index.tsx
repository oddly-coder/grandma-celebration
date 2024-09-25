import { useEffect, useState } from "react";

export function Counter() {

    function timeUntilEvent() {
        const targetDate = new Date('December 21, 2024 00:00:00');
        const now = new Date();
        const difference = Number(targetDate) - Number(now);
        if (difference <= 0) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            };
        }

        // Convert the difference to days, hours, minutes, and seconds
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return {
            days,
            hours,
            minutes,
            seconds
        };
    }
    const [eventCountdown, setEventCountDown] = useState(timeUntilEvent())
    useEffect(() => {
        setInterval(() => {
            setEventCountDown(timeUntilEvent())
        }, 1000)
    }, []);
    return (
        <section className="counter-section bg-gradient">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="counter-text">
                            <span>Event Date</span>
                            <h3>Count Every Second <br />Until the Event</h3>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="cd-timer" id="countdown">
                            <div className="cd-item">
                                <span>{eventCountdown.days}</span>
                                <p>Days</p>
                            </div>
                            <div className="cd-item">
                                <span>{eventCountdown.hours}</span>
                                <p>Hours</p>
                            </div>
                            <div className="cd-item">
                                <span>{eventCountdown.minutes}</span>
                                <p>Minutes</p>
                            </div>
                            <div className="cd-item">
                                <span>{eventCountdown.seconds}</span>
                                <p>Seconds</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}