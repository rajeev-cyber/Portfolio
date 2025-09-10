"use client";

import { forwardRef } from "react";
import { Input } from "./input";

export const ClientInput = forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  (props, ref) => {
    return <Input {...props} ref={ref} />;
  }
);

ClientInput.displayName = "ClientInput"; 