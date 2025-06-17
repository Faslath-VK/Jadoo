export const PlusPattern: React.FC = () => {
  const plusPositions = [
    { row: 0, col: 0, color: 'text-orange-400', size: 'text-lg' },
    { row: 0, col: 1, color: 'text-gray-400', size: 'text-sm' },
    { row: 0, col: 2, color: 'text-gray-400', size: 'text-sm' },
    { row: 0, col: 3, color: 'text-gray-400', size: 'text-sm' },
    { row: 0, col: 4, color: 'text-gray-400', size: 'text-xs' },
    
    { row: 1, col: 0, color: 'text-gray-400', size: 'text-sm' },
    { row: 1, col: 1, color: 'text-gray-400', size: 'text-sm' },
    { row: 1, col: 2, color: 'text-gray-400', size: 'text-sm' },
    { row: 1, col: 3, color: 'text-gray-400', size: 'text-sm' },
    { row: 1, col: 4, color: 'text-gray-400', size: 'text-xs' },
    
    { row: 2, col: 0, color: 'text-gray-400', size: 'text-sm' },
    { row: 2, col: 1, color: 'text-gray-400', size: 'text-sm' },
    { row: 2, col: 2, color: 'text-blue-500', size: 'text-lg' },
    { row: 2, col: 3, color: 'text-gray-400', size: 'text-sm' },
    { row: 2, col: 4, color: 'text-gray-400', size: 'text-sm' },
    
    { row: 3, col: 1, color: 'text-gray-400', size: 'text-sm' },
    { row: 3, col: 2, color: 'text-gray-400', size: 'text-sm' },
    { row: 3, col: 3, color: 'text-gray-400', size: 'text-sm' },
    { row: 3, col: 4, color: 'text-gray-400', size: 'text-sm' },
    
    { row: 4, col: 2, color: 'text-gray-400', size: 'text-sm' },
    { row: 4, col: 3, color: 'text-gray-400', size: 'text-sm' },
    { row: 4, col: 4, color: 'text-gray-400', size: 'text-sm' },
  ];

   return (
   <div className="absolute top-0 right-0 w-40 h-40 opacity-60">
      {plusPositions.map((plus, index) => (
        <div
          key={index}
          className={`absolute ${plus.color} ${plus.size} font-light`}
          style={{
            top: `${plus.row * 32}px`,
            left: `${plus.col * 32}px`,
          }}
        >
          +
        </div>
      ))}
    </div>
  );

}