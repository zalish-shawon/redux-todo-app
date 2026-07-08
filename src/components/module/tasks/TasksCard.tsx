const TaskCard = () => {
  return (
    <div className="flex w-full max-w-md items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <input
        type="checkbox"
        className="h-5 w-5 cursor-pointer accent-blue-600"
      />

      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800">Learn React</h3>
        <p className="text-sm text-gray-500">
          Complete basic todo app UI design
        </p>
      </div>

      <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs text-yellow-700">
        Pending
      </span>

      <button className="rounded-lg bg-red-500 px-3 py-1.5 text-sm text-white transition hover:bg-red-600">
        Delete
      </button>
    </div>
  )
}

export default TaskCard
