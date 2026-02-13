import { useEffect, useState, useContext } from "react";
import API from "../services/api";
import { AuthContext } from "../context/AuthContext";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const { logout, user } = useContext(AuthContext);

  const fetchTasks = async () => {
    const { data } = await API.get("/tasks");
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-50 to-white pt-24 pb-12 px-4">
  <div className="max-w-6xl mx-auto">

    {/* ================= HEADER SECTION ================= */}
    <div className="bg-white shadow-lg rounded-2xl p-6 mb-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
      
      {/* Welcome Text */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Welcome back,{" "}
          <span className="text-blue-600">{user?.name}</span> 👋
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          Manage your tasks efficiently from your dashboard.
        </p>
      </div>

      {/* Stats + Logout */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        
        {/* Stats Box */}
        <div className="bg-blue-50 px-6 py-3 rounded-xl text-center min-w-20">
          <p className="text-xs text-gray-500">Total Tasks</p>
          <p className="text-xl font-bold text-blue-600">
            {tasks.length}
          </p>
        </div>
        </div>
    
    </div>

    {/* ================= TASK FORM ================= */}
    <div className="bg-white shadow-md rounded-2xl p-6 mb-8">
      <h3 className="text-lg font-semibold mb-4 text-gray-700">
        {editingTask ? "Update Task" : "Add New Task"}
      </h3>

      <TaskForm
        fetchTasks={fetchTasks}
        editingTask={editingTask}
        setEditingTask={setEditingTask}
      />
    </div>

    {/* ================= SEARCH SECTION ================= */}
    <div className="mb-6">
      <div className="relative">
        <input
          type="text"
          placeholder="Search your tasks..."
          className="w-full p-3 pl-11 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200"
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="absolute left-3 top-3.5 text-gray-400 text-lg">
          🔍
        </span>
      </div>
    </div>

    {/* ================= TASK LIST ================= */}
    <div className="bg-white shadow-md rounded-2xl p-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-700">
        Your Tasks
      </h3>

      {filteredTasks.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-400 text-sm">
            No tasks found. Start by adding one above 🚀
          </p>
        </div>
      ) : (
        <TaskList
          tasks={filteredTasks}
          fetchTasks={fetchTasks}
          setEditingTask={setEditingTask}
        />
      )}
    </div>

  </div>
</div>

  );
};

export default Dashboard;
