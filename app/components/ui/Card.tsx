"use client";

import * as React from "react";
import { cn } from "../../utils/cn"; // Utilitaire pour concaténer les classNames (tu peux adapter selon ton projet)

type CardProps = React.HTMLAttributes<HTMLDivElement>;

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border border-neutral-200 bg-white shadow-sm p-4",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-2", className)} {...props} />
));
CardContent.displayName = "CardContent";

export { Card, CardContent };
