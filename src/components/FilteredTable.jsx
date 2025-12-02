import { useState, useMemo } from 'react';


const FilteredTable = ({fakeUsers}) => {
  const [filterText, setFilterText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const filteredItems = fakeUsers.filter(item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()));
  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText('');
      }
    };
    return <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />;
  }, [filterText, resetPaginationToggle]);

  return <DataTable
    title="Contact List"
    columns={columns}
    data={filteredItems}
    pagination paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
    subHeader subHeaderComponent={subHeaderComponentMemo} selectableRows persistTableHead />;
}
