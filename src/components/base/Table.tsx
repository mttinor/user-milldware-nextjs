import React from 'react';

interface TableColumn {
  key: string;
  label: string;
}

interface TableRow {
  [key: string]: string | number;
}

interface DynamicTableProps {
  columns: TableColumn[];
  data: TableRow[];
}

const DynamicTable: React.FC<DynamicTableProps> = ({ columns, data }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          {columns.map(column => (
            <th
              key={column.key}
              scope="col"
              className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map(column => (
              <td key={column.key} className="px-6 py-4 whitespace-nowrap">
                {row[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DynamicTable;