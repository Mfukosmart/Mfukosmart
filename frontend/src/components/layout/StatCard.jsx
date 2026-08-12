export default function StatCard({ title, value, color }) {
  return (
    <div className={`${color} text-white rounded-xl p-6 shadow-lg`}>
      <p className="text-sm opacity-90">{title}</p>

      <h2 className="text-3xl font-bold mt-2">
        {value}
      </h2>
    </div>
  );
}