import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
}

export const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex justify-center gap-3 sm:gap-6">
      {timeUnits.map((unit) => (
        <div
          key={unit.label}
          className="flex flex-col items-center p-2 sm:p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 min-w-[65px] sm:min-w-[90px] transition-transform hover:scale-105"
        >
          <span className="text-xl sm:text-3xl font-extrabold text-secondary font-heading tabular-nums">
            {unit.value.toString().padStart(2, "0")}
          </span>
          <span className="text-[10px] sm:text-xs font-bold text-white/40 uppercase tracking-tighter">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};
