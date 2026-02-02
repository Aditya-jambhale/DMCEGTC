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
      <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-navy mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className={cn("text-muted-foreground max-w-2xl text-sm sm:text-base", centered && "mx-auto")}>
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
