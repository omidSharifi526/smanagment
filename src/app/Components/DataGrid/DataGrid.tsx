'use client'
import React, { useState } from 'react';
import { FaPencilAlt } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import './style/Style.css';

const DataGrid = ({ columns: exColumns = [], rows = [], handleModuleState, rowHeight = 10 }: any) => {
  const [columns] = useState<any>([
    {
      field: 'rowNumber',
      headerName: 'ردیف',
      width: '50px',
      renderCell: (_: any, index: number) => index + 1, // شماره ردیف
    },
    ...exColumns,
    {
      field: 'op',
      headerName: 'عملیات',
      width: '120px',
      renderCell: (row: any, index: number) => (
        <div className="flex p-2 justify-between">
          <button className="btn btn-circle btn-sm" onClick={() => initialEdit(row)}>
            <FaPencilAlt className="text-green-500" />
          </button>
          <button className="btn btn-circle btn-sm">
            <FaTrash className="text-red-500" />
          </button>
        </div>
      ),
    },
  ]);

  const initialEdit = (row: any) => {
    handleModuleState((prev: any) => ({ ...prev, modal: true, mode: 'edit', selectedRow: row }));
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            {columns.map((column: any, index: number) => (
              <th key={index} style={{ textAlign: 'center', width: column.width }}>
                {column.headerName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
  {rows.map((row: any, rowIndex: number) => (
    <tr key={rowIndex} style={{ textAlign: 'center', height: `${rowHeight}px` }}>
      {columns.map((column: any, colIndex: number) => (
        <td 
          key={colIndex} 
          className="text-center" 
          style={{ height: `${rowHeight}px`, lineHeight: `${rowHeight}px`, padding: "2px 5px" }}
        >
          {column.renderCell ? column.renderCell(row, rowIndex) : row[column.field]}
        </td>
      ))}
    </tr>
  ))}
</tbody>

      </table>
    </div>
  );
};

export default DataGrid;
