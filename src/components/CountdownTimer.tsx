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
          className="flex flex-col items-center p-3 sm:p-6 bg-card rounded-lg shadow-elegant border border-border min-w-[70px] sm:min-w-[100px]"
        >
          <span className="text-2xl sm:text-4xl font-bold text-primary font-heading">
            {unit.value.toString().padStart(2, "0")}
          </span>
          <span className="text-xs sm:text-sm text-muted-foreground mt-1">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};
