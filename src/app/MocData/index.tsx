const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'firstName', headerName: 'نام ' },
    { field: 'lastName', headerName: 'نام خانوادگی' },


  ];

  // تعریف سطرها
  const rows = [
    { id: 1, firstName: 'Jon', lastName: 'Snow', age: 35 },
    { id: 2, firstName: 'Cersei', lastName: 'Lannister', age: 42 },
    { id: 3, firstName: 'Jaime', lastName: 'Lannister', age: 45 },
    { id: 4, firstName: 'Arya', lastName: 'Stark', age: 16 },
    { id: 5, firstName: 'Daenerys', lastName: 'Targaryen', age: null },
  ];

  export {
    columns,
    rows
  }