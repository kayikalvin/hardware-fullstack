// export default function Pagination({ page, totalPages, onPageChange }) {
//   return (
//     <div className="flex justify-center mt-6 gap-2">
//       <button
//         disabled={page === 1}
//         onClick={() => onPageChange(page - 1)}
//         className="px-4 py-2 border rounded"
//       >
//         Prev
//       </button>
//       {[...Array(totalPages)].map((_, i) => (
//         <button
//           key={i}
//           onClick={() => onPageChange(i + 1)}
//           className={`px-4 py-2 border rounded ${page === i + 1 ? "bg-blue-500 text-white" : ""}`}
//         >
//           {i + 1}
//         </button>
//       ))}
//       <button
//         disabled={page === totalPages}
//         onClick={() => onPageChange(page + 1)}
//         className="px-4 py-2 border rounded"
//       >
//         Next
//       </button>
//     </div>
//   );
// }
// src/components/Pagination.jsx
export default function Pagination({ current, totalPages, onChange }) {
  if (totalPages <= 1) return null;
  const pages = [];
  for (let i = 1; i <= totalPages; i++) pages.push(i);

  return (
    <div className="flex gap-2 justify-center mt-6">
      <button disabled={current === 1} onClick={()=>onChange(current-1)} className="px-3 py-1 border rounded">Prev</button>
      {pages.map(p => (
        <button key={p} onClick={()=>onChange(p)} className={`px-3 py-1 border rounded ${p===current ? "bg-blue-600 text-white" : ""}`}>{p}</button>
      ))}
      <button disabled={current === totalPages} onClick={()=>onChange(current+1)} className="px-3 py-1 border rounded">Next</button>
    </div>
  );
}
