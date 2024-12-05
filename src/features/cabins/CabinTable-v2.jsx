import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import Table from "../../ui/Table";
import { useGetCabin } from "./useGetCabin";
import { useSearchParams } from "react-router-dom";

// const Table = styled.div`
//   border: 1px solid var(--color-grey-200);

//   font-size: 1.4rem;
//   background-color: var(--color-grey-0);
//   border-radius: 7px;
//   overflow: hidden;
// `;

function CabinTable() {
  const { cabins, isLoading } = useGetCabin();

  const [searchParam] = useSearchParams();

  const filterValue = searchParam.get("discount") || "all";
  console.log(filterValue);

  let filterCabin;

  if (filterValue === "all") {
    filterCabin = cabins;
  }
  if (filterValue === "with-discount") {
    filterCabin = cabins?.filter((cabin) => cabin?.discount !== 0);
  }
  if (filterValue === "no-discount") {
    filterCabin = cabins?.filter((cabin) => cabin?.discount === 0);
  }

  if (isLoading) return <Spinner />;
  return (
    <Table role="table" columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
      <Table.Header>
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </Table.Header>

      <Table.Body
        data={filterCabin}
        render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
      />

      {/* {cabins?.map((cabin) => (
        <CabinRow cabin={cabin} key={cabin.id} />
      ))} */}

      {/* {error && error.message} */}
    </Table>
  );
}

export default CabinTable;
