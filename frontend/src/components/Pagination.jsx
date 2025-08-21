export default function Pagination({ page, totalPages, onPageChange }) {
  return (
    <div className="flex justify-center mt-6 gap-2">
      <button
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
        className="px-4 py-2 border rounded"
      >
        Prev
      </button>
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => onPageChange(i + 1)}
          className={`px-4 py-2 border rounded ${page === i + 1 ? "bg-blue-500 text-white" : ""}`}
        >
          {i + 1}
        </button>
      ))}
      <button
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
        className="px-4 py-2 border rounded"
      >
        Next
      </button>
    </div>
  );
}
