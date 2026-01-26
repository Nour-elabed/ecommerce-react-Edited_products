"use client"

import * as React from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface DropdownProps {
  trigger: React.ReactNode
  isOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

export function DropDown({ trigger, isOpen, onOpenChange }: DropdownProps) {
  const [selected, setSelected] = React.useState("cart")

  return (
    <DropdownMenu open={isOpen} onOpenChange={onOpenChange}>
      <DropdownMenuTrigger asChild>
        {trigger}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Check here...</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuRadioGroup value={selected} onValueChange={setSelected}>
          
          <DropdownMenuRadioItem
            value="cart"
            className="flex items-center gap-6 px-3 py-2 cursor-pointer hover:bg-gray-100"
          >
            <img
              src="/assets/icons/cart.svg"
              alt="cart"
              className="h-8 w-8 translate-x-4 flex-shrink-0 "
            />
            <span className="flex-1 text-left">Your cart</span>
          </DropdownMenuRadioItem>

        
          <DropdownMenuRadioItem
            value="user"
            className="flex items-center gap-7 px-3 py-2 cursor-pointer hover:bg-gray-100"
          >
            <img
              src="/assets/icons/user-btn.svg"
              alt="user"
              className="h-6 w-6 translate-x-4 flex-shrink-0"
            />
            <span className="flex-1 text-left">Your account</span>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropDown
