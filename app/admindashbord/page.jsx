// app/dashboard/page.jsx

import Dashboard from "./Dashboard";

export default function DashboardPage() {
  return (
    <Dashboard>
      <div className="p-6 bg-white rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">Welcome to your dashboard</h2>
        <p>Here you can manage your tasks, orders, and profile.</p>
      </div>
    </Dashboard>
  );
}
