"use client";

import { tw } from "@/lib/utils/tw";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon, ChevronRightIcon, DotIcon } from "lucide-react";

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuGroup = DropdownMenuPrimitive.Group;
export const DropdownMenuPortal = DropdownMenuPrimitive.Portal;
export const DropdownMenuSub = DropdownMenuPrimitive.Sub;
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

type DropdownMenuSubTriggerProps = {
  inset?: boolean;
} & React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger>;

export const DropdownMenuSubTrigger = (props: DropdownMenuSubTriggerProps) => {
  const { className, children, inset, ...rest } = props;

  return (
    <DropdownMenuPrimitive.SubTrigger
      className={tw(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
        "focus:bg-accent focus:text-accent-foreground",
        "data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        inset && "pl-8",
        className
      )}
      {...rest}
    >
      {children}
      <ChevronRightIcon className="ml-auto size-4" />
    </DropdownMenuPrimitive.SubTrigger>
  );
};

type DropdownMenuSubContentProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.SubContent
>;

export const DropdownMenuSubContent = (props: DropdownMenuSubContentProps) => {
  const { className, ...rest } = props;

  return (
    <DropdownMenuPrimitive.SubContent
      className={tw(
        "bg-popover text-popover-foreground z-50 min-w-32 overflow-hidden rounded-md border p-1 shadow-lg",
        "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
        "data-[side=top]:slide-in-from-bottom-2",
        "data-[side=right]:slide-in-from-left-2",
        "data-[side=bottom]:slide-in-from-top-2",
        "data-[side=left]:slide-in-from-right-2",
        className
      )}
      {...rest}
    />
  );
};

type DropdownMenuContentProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.Content
>;

export const DropdownMenuContent = (props: DropdownMenuContentProps) => {
  const { className, sideOffset = 4, ...rest } = props;

  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        sideOffset={sideOffset}
        className={tw(
          "bg-popover text-popover-foreground z-50 min-w-32 overflow-hidden rounded-md border p-1 shadow-md",
          "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          "data-[side=top]:slide-in-from-bottom-2",
          "data-[side=right]:slide-in-from-left-2",
          "data-[side=bottom]:slide-in-from-top-2",
          "data-[side=left]:slide-in-from-right-2",
          className
        )}
        {...rest}
      />
    </DropdownMenuPrimitive.Portal>
  );
};

type DropdownMenuItemProps = {
  inset?: boolean;
} & React.ComponentProps<typeof DropdownMenuPrimitive.Item>;

export const DropdownMenuItem = (props: DropdownMenuItemProps) => {
  const { className, inset, ...rest } = props;

  return (
    <DropdownMenuPrimitive.Item
      className={tw(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors",
        "focus:bg-accent focus:text-accent-foreground",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        inset && "pl-8",
        className
      )}
      {...rest}
    />
  );
};

type DropdownMenuCheckboxItemProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.CheckboxItem
>;

export const DropdownMenuCheckboxItem = (
  props: DropdownMenuCheckboxItemProps
) => {
  const { className, children, checked, ...rest } = props;

  return (
    <DropdownMenuPrimitive.CheckboxItem
      className={tw(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors",
        "focus:bg-accent focus:text-accent-foreground",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      checked={checked}
      {...rest}
    >
      <span className="absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
};

type DropdownMenuRadioItemProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.RadioItem
>;

export const DropdownMenuRadioItem = (props: DropdownMenuRadioItemProps) => {
  const { className, children, ...rest } = props;

  return (
    <DropdownMenuPrimitive.RadioItem
      className={tw(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors",
        "focus:bg-accent focus:text-accent-foreground",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...rest}
    >
      <span className="absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <DotIcon className="size-9" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
};

type DropdownMenuLabelProps = {
  inset?: boolean;
} & React.ComponentProps<typeof DropdownMenuPrimitive.Label>;

export const DropdownMenuLabel = (props: DropdownMenuLabelProps) => {
  const { className, inset, ...rest } = props;

  return (
    <DropdownMenuPrimitive.Label
      className={tw(
        "text-foreground px-2 py-1.5 text-sm font-semibold",
        inset && "pl-8",
        className
      )}
      {...rest}
    />
  );
};

type DropdownMenuSeparatorProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.Separator
>;

export const DropdownMenuSeparator = (props: DropdownMenuSeparatorProps) => {
  const { className, ...rest } = props;

  return (
    <DropdownMenuPrimitive.Separator
      className={tw("bg-border -mx-1 my-1 h-px", className)}
      {...rest}
    />
  );
};

type DropdownMenuShortcutProps = React.ComponentProps<"span">;

export const DropdownMenuShortcut = (props: DropdownMenuShortcutProps) => {
  const { className, ...rest } = props;

  return (
    <span
      className={tw(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )}
      {...rest}
    />
  );
};
