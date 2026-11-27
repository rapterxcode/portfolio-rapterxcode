import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent px-2.5 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow,border-color,background-color] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "bg-destructive text-white focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40 [a&]:hover:bg-destructive/90",
        outline:
          "border-border text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        ghost: "[a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        link: "text-primary underline-offset-4 [a&]:hover:underline",
        cyan: "border-sky-200 bg-sky-50 font-mono text-sky-700 shadow-2xs hover:border-sky-400 hover:bg-sky-100/70 dark:border-cyan-500/25 dark:bg-cyan-500/10 dark:text-cyan-300 dark:hover:border-cyan-500/50 dark:hover:bg-cyan-500/15",
        emerald:
          "border-emerald-200 bg-emerald-50 font-mono text-emerald-800 shadow-2xs hover:border-emerald-400 hover:bg-emerald-100/70 dark:border-emerald-500/25 dark:bg-emerald-500/10 dark:text-emerald-300 dark:hover:border-emerald-500/50 dark:hover:bg-emerald-500/15",
        amber:
          "border-amber-200 bg-amber-50 font-mono text-amber-800 shadow-2xs hover:border-amber-400 hover:bg-amber-100/70 dark:border-amber-500/25 dark:bg-amber-500/10 dark:text-amber-300 dark:hover:border-amber-500/50 dark:hover:bg-amber-500/15",
        purple:
          "border-purple-200 bg-purple-50 font-mono text-purple-700 shadow-2xs hover:border-purple-400 hover:bg-purple-100/70 dark:border-purple-500/25 dark:bg-purple-500/10 dark:text-purple-300 dark:hover:border-purple-500/50 dark:hover:bg-purple-500/15",
        slate:
          "border-slate-200 bg-slate-100 font-mono text-slate-700 shadow-2xs hover:border-slate-400 hover:text-slate-950 dark:border-slate-700/60 dark:bg-slate-800/60 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
