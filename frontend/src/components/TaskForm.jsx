import { useState, useEffect } from "react";
import API from "../services/api";

const TaskForm = ({ fetchTasks, editingTask, setEditingTask }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    if (editingTask) {
      setForm({
        title: editingTask.title,
        description: editingTask.description,
      });
    }
  }, [editingTask]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingTask) {
      // UPDATE
      await API.put(`/tasks/${editingTask._id}`, form);
      setEditingTask(null);
    } else {
      // CREATE
      await API.post("/tasks", form);
    }

    setForm({ title: "", description: "" });
    fetchTasks();
  };

  const handleCancel = () => {
    setEditingTask(null);
    setForm({ title: "", description: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 bg-white p-4 shadow rounded"
    >
      <h3 className="text-lg font-bold mb-3">
        {editingTask ? "Update Task" : "Add New Task"}
      </h3>

      <input
        type="text"
        placeholder="Task Title"
        className="w-full p-2 border mb-3 rounded"
        value={form.title}
        onChange={(e) =>
          setForm({ ...form, title: e.target.value })
        }
        required
      />

      <textarea
        placeholder="Description"
        className="w-full p-2 border mb-3 rounded"
        value={form.description}
        onChange={(e) =>
          setForm({ ...form, description: e.target.value })
        }
      />

      <div className="flex gap-3">
        <button className="bg-blue-500 text-white px-4 py-2 rounded transition cursor-pointer">
          {editingTask ? "Update Task" : "Add Task"}
        </button>

        {editingTask && (
          <button
            type="button"
            onClick={handleCancel}
            className="bg-gray-400 text-white px-4 py-2 rounded transition cursor-pointer"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default TaskForm;
