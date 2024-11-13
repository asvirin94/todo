const { renderHook, act } = require("@testing-library/react");
const { useStore } = require("./useStore");
import { INITIAL_TASKS } from "@/consts/tableData";

describe("Тестирование хранилища", () => {
  beforeEach(() => {
    useStore.setState({
      tasks: INITIAL_TASKS,
      filteredTasks: INITIAL_TASKS,
      filterStatus: "all",
      filterPriority: ["low", "normal", "high"],
      newTaskPriority: "",
      newTaskTitle: "",
    });
  });

  it("должно корректно добавлять новую задачу", () => {
    const { result } = renderHook(() => useStore());
    const newTask = {
      title: "Новая задача",
      priority: "normal",
      status: "active",
    };

    act(() => {
      result.current.addTask(newTask);
    });

    expect(result.current.tasks).toHaveLength(INITIAL_TASKS.length + 1);
    expect(result.current.tasks.at(-1)).toMatchObject({
      ...newTask,
      id: INITIAL_TASKS.length + 1,
    });
  });

  it("должно переключать статус задачи", () => {
    const { result } = renderHook(() => useStore());
    const taskId = INITIAL_TASKS[1].id;

    act(() => {
      result.current.toggleTaskStatus(taskId);
    });

    expect(result.current.tasks.find((task) => task.id === taskId).status).toBe(
      "done"
    );

    act(() => {
      result.current.toggleTaskStatus(taskId);
    });

    expect(result.current.tasks.find((task) => task.id === taskId).status).toBe(
      "active"
    );
  });

  it("должно корректно устанавливать фильтр статуса", () => {
    const { result } = renderHook(() => useStore());

    act(() => {
      result.current.setFilterStatus("done");
    });

    expect(result.current.filterStatus).toBe("done");
  });

  it("должно корректно переключать приоритет фильтра", () => {
    const { result } = renderHook(() => useStore());

    act(() => {
      result.current.toggleFilterPriority("low");
    });

    expect(result.current.filterPriority).not.toContain("low");

    act(() => {
      result.current.toggleFilterPriority("low");
    });

    expect(result.current.filterPriority).toContain("low");
  });

  it("должно корректно фильтровать задачи", () => {
    const { result } = renderHook(() => useStore());

    act(() => {
      result.current.setFilterStatus("done");
      result.current.setFilteredTasks();
    });

    result.current.filteredTasks.forEach((task) =>
      expect(task.status).toBe("done")
    );
  });

  it("должно сбрасывать форму добавления задачи", () => {
    const { result } = renderHook(() => useStore());

    act(() => {
      result.current.setNewTaskPriority("high");
      result.current.setNewTaskTitle("Задача для сброса");
      result.current.resetAddTaskForm();
    });

    expect(result.current.newTaskPriority).toBe("");
    expect(result.current.newTaskTitle).toBe("");
  });
});
