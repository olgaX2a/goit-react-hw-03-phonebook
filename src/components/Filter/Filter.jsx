const Filter = ({ onFilter, filterValue }) => {
  return (
    <>
      <label className="Filter">
        <p>Find contacts by name:</p>
        <input
          name="filter"
          type="text"
          onChange={onFilter}
          value={filterValue}
        />
      </label>
    </>
  );
};

export default Filter;
