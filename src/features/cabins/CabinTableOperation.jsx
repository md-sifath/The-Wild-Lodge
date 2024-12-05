import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";
// import SortBy from "./SortBy";

function CabinTableOperation() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "with-discount", label: "With-discount" },
          { value: "no-discount", label: "No-discount" },
        ]}
      />

      {/* <SortBy
        options={[
          {
            value: "name-asc",
          },
        ]}
      /> */}
    </TableOperations>
  );
}

export default CabinTableOperation;
