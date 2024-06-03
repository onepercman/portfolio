import { CheckboxVariantProps, checkbox } from "@/libs/ui/theme"
import * as Ark from "@ark-ui/react"
import React from "react"
import { LuCheck, LuMinus } from "react-icons/lu"

export interface CheckboxProps extends Ark.CheckboxRootProps, CheckboxVariantProps {
  indeterminate?: boolean
}

export const Checkbox = React.forwardRef<HTMLLabelElement, CheckboxProps>(function (
  { className, size, children, placement, indeterminate, ...props },
  ref,
) {
  const classes = checkbox({ size, placement, indeterminate, className })

  return (
    <Ark.Checkbox.Root ref={ref} {...props} className={classes.base()}>
      <Ark.Checkbox.Label className={classes.label()}>{children}</Ark.Checkbox.Label>
      <Ark.Checkbox.Control className={classes.control()}>
        <Ark.Checkbox.Indicator className="data-[state=checked]:animate-in data-[state=checked]:zoom-in data-[state=unchecked]:animate-out data-[state=unchecked]:zoom-out m-auto duration-300">
          {indeterminate ? <LuMinus strokeWidth={6} /> : <LuCheck strokeWidth={4} />}
        </Ark.Checkbox.Indicator>
      </Ark.Checkbox.Control>
      <Ark.Checkbox.HiddenInput />
    </Ark.Checkbox.Root>
  )
})

Checkbox.displayName = "Checkbox"
