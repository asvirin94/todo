import { INITIAL_TASKS } from "@/consts/tableData";
import { TaskType } from "@/types";
import { create } from "zustand";

type TaskStore = {
  tasks: TaskType[];
  filteredTasks: TaskType[];
  filterStatus: string;
  filterPriority: string[];
  newTaskPriority: string;
  newTaskTitle: string;
  setFilterStatus: (status: string) => void;
  toggleFilterPriority: (priority: string) => void;
  setNewTaskPriority: (priority: string) => void;
  setNewTaskTitle: (title: string) => void;
  addTask: (task: Omit<TaskType, "id">) => void;
  toggleTaskStatus: (id: number) => void;
  setFilteredTasks: () => void;
  resetAddTaskForm: () => void;
};

export const useStore = create<TaskStore>((set, get) => ({
  tasks: INITIAL_TASKS,
  filteredTasks: INITIAL_TASKS,
  filterStatus: "all",
  filterPriority: ["low", "normal", "high"],
  newTaskPriority: "",
  newTaskTitle: "",

  setFilteredTasks: () => {
    const { tasks, filterStatus, filterPriority } = get();
    const filteredTasks = tasks.filter((task) => {
      const priorityMatch =
        filterPriority.length === 0 || filterPriority.includes(task.priority);

      const statusMatch =
        filterStatus === "all" || task.status === filterStatus;

      return statusMatch && priorityMatch;
    });

    set({ filteredTasks });
  },

  setFilterStatus: (status) => set({ filterStatus: status }),

  toggleFilterPriority: (priority) => {
    set((state) => ({
      filterPriority: state.filterPriority?.includes(priority)
        ? state.filterPriority.filter((p) => p !== priority)
        : [...state.filterPriority, priority],
    }));
  },

  addTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, { id: state.tasks.length + 1, ...task }],
    })),

  toggleTaskStatus: (id) => {
    const { tasks } = get();
    const taskToUpdate = tasks.find((t) => t.id === id);

    if (taskToUpdate) {
      const newStatus = taskToUpdate.status === "active" ? "done" : "active";
      const updatedTask = { ...taskToUpdate, status: newStatus };

      set({
        tasks: tasks.map((task) => (task.id === id ? updatedTask : task)),
      });
    }
  },

  setNewTaskPriority: (priority: string) => set({ newTaskPriority: priority }),

  setNewTaskTitle: (title: string) => set({ newTaskTitle: title }),

  resetAddTaskForm: () =>
    set(() => ({
      newTaskPriority: "",
      newTaskTitle: "",
    })),
}));
