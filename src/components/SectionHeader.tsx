import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export const SectionHeader = ({
  title,
  subtitle,
  className,
  centered = true,
}: SectionHeaderProps) => {
  return (
    <div className={cn(centered && "text-center", "mb-8 sm:mb-12", className)}>
      <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-4 h-1 w-20 bg-secondary rounded-full",
          centered && "mx-auto"
        )}
      />
    </div>
  );
};
