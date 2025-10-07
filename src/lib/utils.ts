// Use runtime imports and lenient typing so TS doesn't fail when declaration files are missing.
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: any[]) {
  // clsx can be called directly; twMerge will merge tailwind classes.
  return twMerge(clsx(...inputs));
}

