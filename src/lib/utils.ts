import { TaskType } from "@/types"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getChunkedTasks(tasks: TaskType[]) {
  const chunkSize = 7
  const result: TaskType[][] = []

  for (let i = 0; i < tasks.length; i += chunkSize) {
    result.push(tasks.slice(i, i + chunkSize));
  }
  return result;
}