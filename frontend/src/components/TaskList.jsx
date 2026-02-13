import API from "../services/api";

const TaskList = ({ tasks, fetchTasks, setEditingTask }) => {
  const handleDelete = async (id) => {
    await API.delete(`/tasks/${id}`);
    fetchTasks();
  };

  return (
    <div className="space-y-3">
      {tasks.length === 0 && (
        <p className="text-center text-gray-500">
          No tasks found
        </p>
      )}

      {tasks.map((task) => (
        <div
          key={task._id}
          className="border p-4 rounded flex justify-between items-center bg-white shadow"
        >
          <div>
            <h3 className="font-bold text-lg">
              {task.title}
            </h3>
            <p className="text-gray-600">
              {task.description}
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setEditingTask(task)}
              className="bg-yellow-500 text-white px-3 py-1 rounded"
            >
              Edit
            </button>

            <button
              onClick={() => handleDelete(task._id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
