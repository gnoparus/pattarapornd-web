import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[--color-medical-primary] text-white shadow-lg hover:bg-[--color-medical-dark] hover:shadow-xl transform hover:scale-105",
        outline:
          "bg-white text-[--color-medical-primary] border-2 border-[--color-medical-primary] hover:bg-[--color-medical-accent] shadow-lg hover:shadow-xl transform hover:scale-105",
        secondary:
          "bg-[--color-medical-secondary] text-[--color-medical-dark] hover:bg-white shadow-lg hover:shadow-xl transform hover:scale-105",
        ghost: "hover:bg-[--color-medical-accent] hover:text-[--color-medical-primary]",
      },
      size: {
        default: "px-8 py-4 text-base",
        sm: "px-4 py-2 text-sm",
        lg: "px-10 py-5 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
