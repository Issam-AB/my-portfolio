"use client";

import { tw } from "@/lib/utils/tw";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;
export const DialogPortal = DialogPrimitive.Portal;

type propsProps = React.ComponentProps<typeof DialogPrimitive.Overlay>;

export const DialogOverlay = (props: propsProps) => {
  const { className, ...rest } = props;

  return (
    <DialogPrimitive.Overlay
      className={tw(
        "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm",
        "data-[state=open]:animate-in data-[state=open]:fade-in-0",
        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
        className
      )}
      {...rest}
    />
  );
};

type DialogContentProps = React.ComponentProps<typeof DialogPrimitive.Content>;

export const DialogContent = (props: DialogContentProps) => {
  const { className, children, ...rest } = props;

  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        className={tw(
          "bg-background fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border p-6 shadow-lg sm:rounded-lg",
          "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]",
          className
        )}
        {...rest}
      >
        {children}
        <DialogPrimitive.Close
          className={tw(
            "ring-offset-background absolute right-4 top-4 rounded-sm opacity-70 transition-opacity",
            "hover:opacity-100",
            "focus:ring-ring focus:outline-none focus:ring-2 focus:ring-offset-2",
            "disabled:pointer-events-none",
            "data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          )}
        >
          <span className="sr-only">Close</span>
          <XIcon className="size-4" />
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  );
};

type DialogHeaderProps = React.ComponentProps<"div">;

export const DialogHeader = (props: DialogHeaderProps) => {
  const { className, ...rest } = props;

  return (
    <div
      className={tw(
        "flex flex-col gap-1.5 text-center sm:text-left",
        className
      )}
      {...rest}
    />
  );
};

type DialogFooterProps = React.ComponentProps<"div">;

export const DialogFooter = (props: DialogFooterProps) => {
  const { className, ...rest } = props;

  return (
    <div
      className={tw(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-2",
        className
      )}
      {...rest}
    />
  );
};

type DialogTitleProps = React.ComponentProps<typeof DialogPrimitive.Title>;

export const DialogTitle = (props: DialogTitleProps) => {
  const { className, ...rest } = props;

  return (
    <DialogPrimitive.Title
      className={tw(
        "text-lg font-semibold leading-none tracking-tight",
        className
      )}
      {...rest}
    />
  );
};

type DialogDescriptionProps = React.ComponentProps<
  typeof DialogPrimitive.Description
>;

export const DialogDescription = (props: DialogDescriptionProps) => {
  const { className, ...rest } = props;

  return (
    <DialogPrimitive.Description
      className={tw("text-muted-foreground text-sm", className)}
      {...rest}
    />
  );
};
