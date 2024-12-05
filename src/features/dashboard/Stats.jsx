import {
  HiOutlineBriefcase,
  HiOutlineBanknotes,
  HiOutlineCalendarDays,
  HiOutlineChartPie,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";
import styled from "styled-components";

function Stats({ bookings, confirmedStays }) {
  const numBooking = bookings?.length;

  const checkins = confirmedStays?.length;

  const salesMoney = bookings?.reduce((pre, cur) => (pre += cur.totalPrice), 0);

  return (
    <>
      <Stat
        title="Bookings"
        icon={<HiOutlineBriefcase />}
        color="blue"
        value={numBooking}
      />
      <Stat
        title="sales"
        icon={<HiOutlineBanknotes />}
        color="green"
        value={formatCurrency(salesMoney)}
      />
      <Stat
        title="Check Ins"
        icon={<HiOutlineCalendarDays />}
        color="indigo"
        value={checkins}
      />
      <Stat
        title="occupancy rate"
        icon={<HiOutlineChartPie />}
        color="yellow"
      />
    </>
  );
}

export default Stats;
