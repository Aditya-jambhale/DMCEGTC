import { useState } from "react";
import { Calendar, FileText, Bell, UserCheck, Send, Presentation } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  status: "completed" | "upcoming" | "current";
}

const timelineEvents: TimelineEvent[] = [
  {
    id: "1",
    date: "1st February 2026",
    title: "Paper Submission Opens",
    description: "Start submitting your research papers through our online submission portal.",
    icon: <FileText className="h-5 w-5" />,
    status: "upcoming",
  },
  {
    id: "2",
    date: "27th March 2026",
    title: "Submission Deadline",
    description: "Last date to submit your research papers for review.",
    icon: <Send className="h-5 w-5" />,
    status: "upcoming",
  },
  {
    id: "3",
    date: "9th April 2026",
    title: "Acceptance Notification",
    description: "Authors will be notified about the acceptance of their papers.",
    icon: <Bell className="h-5 w-5" />,
    status: "upcoming",
  },
  {
    id: "4",
    date: "10th - 17th April 2026",
    title: "Author Registration",
    description: "Registration and camera-ready paper submission period for accepted papers.",
    icon: <UserCheck className="h-5 w-5" />,
    status: "upcoming",
  },
  {
    id: "5",
    date: "28th - 29th April 2026",
    title: "DMCE-GTC 2026 Conference",
    description: "Two days of presentations, networking, and knowledge exchange.",
    icon: <Presentation className="h-5 w-5" />,
    status: "upcoming",
  },
];

export const InteractiveTimeline = () => {
  const [activeEvent, setActiveEvent] = useState<string | null>(null);

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

      <div className="space-y-8 md:space-y-12">
        {timelineEvents.map((event, index) => (
          <div
            key={event.id}
            className={cn(
              "relative flex flex-col md:flex-row gap-4 md:gap-8",
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            )}
          >
            {/* Content */}
            <div
              className={cn(
                "ml-12 md:ml-0 md:w-[calc(50%-2rem)]",
                index % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"
              )}
            >
              <div
                onClick={() =>
                  setActiveEvent(activeEvent === event.id ? null : event.id)
                }
                className={cn(
                  "p-4 sm:p-6 rounded-lg border cursor-pointer transition-all duration-300",
                  activeEvent === event.id
                    ? "bg-primary text-primary-foreground border-primary shadow-elegant"
                    : "bg-card border-border hover:border-primary/50 hover:shadow-md"
                )}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Calendar
                    className={cn(
                      "h-4 w-4",
                      activeEvent === event.id
                        ? "text-gold"
                        : "text-secondary"
                    )}
                  />
                  <span
                    className={cn(
                      "text-sm font-medium",
                      activeEvent === event.id
                        ? "text-gold"
                        : "text-secondary"
                    )}
                  >
                    {event.date}
                  </span>
                </div>
                <h3
                  className={cn(
                    "font-heading text-lg font-semibold mb-2",
                    activeEvent === event.id
                      ? "text-primary-foreground"
                      : "text-foreground"
                  )}
                >
                  {event.title}
                </h3>
                <p
                  className={cn(
                    "text-sm leading-relaxed",
                    activeEvent === event.id
                      ? "text-primary-foreground/90"
                      : "text-muted-foreground"
                  )}
                >
                  {event.description}
                </p>
              </div>
            </div>

            {/* Icon circle */}
            <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                  activeEvent === event.id
                    ? "bg-primary border-primary text-primary-foreground"
                    : "bg-card border-secondary text-secondary"
                )}
              >
                {event.icon}
              </div>
            </div>

            {/* Empty space for alternating layout */}
            <div className="hidden md:block md:w-[calc(50%-2rem)]" />
          </div>
        ))}
      </div>
    </div>
  );
};
