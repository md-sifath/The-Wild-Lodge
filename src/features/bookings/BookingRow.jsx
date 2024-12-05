import styled from "styled-components";
import { format, isToday } from "date-fns";

import Tag from "../../ui/Tag";
import Table from "../../ui/Table";
import Button from "../../ui/Button";

import { formatCurrency } from "../../utils/helpers";
import { formatDistanceFromNow } from "../../utils/helpers";
import { useDeleteBooking } from "./useDeleteBooking";
import { useNavigate } from "react-router-dom";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useState } from "react";

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";

  /* resposive design  */
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const ToggleDiv = styled.div`
  width: 10rem;
  display: flex;
  flex-direction: column;
  column-gap: 0.6rem;
  position: absolute;
  left: 90%;
  top: 10rem;
  z-index: 999;
  background-color: var(--color-green-300);

  /* responsive design  */
  @media (max-width: 768px) {
    left: auto;
    right: 1rem;
    top: auto;
    bottom: 1rem;
    width: 8rem;
  }
`;

const StyledList = styled.ul`
  position: fixed;

  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  left: ${(props) => props.position.x}px;
  top: ${(props) => props.position.y}px;

  /* responsive design  */
  @media (max-width: 768px) {
    left: auto;
    right: 1rem;
    top: auto;
    bottom: 1rem;
  }
`;

const StyledButton = styled.button`
  outline: none;
  width: 90px;
  background-color: var(--color-grey-0);
  border: none;
  padding: 5px 10px;

  /* responsive desing  */

  @media (max-width: 768px) {
    width: 70px;
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    width: 60px;
    font-size: 1rem;
  }
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }

  /* responsive design  */
  @media (max-width: 768px) {
    gap: 0.4rem;

    & span:last-child {
      font-size: 1rem;
    }
  }
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;

  /* responsive design  */
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

function BookingRow({
  booking: {
    id: bookingId,
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    totalPrice,
    status,
    isPaid,
    guest: { fullName: guestName, email },
    cabins: { name: cabinName },
  },
}) {
  const navigate = useNavigate();
  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  const { bookingDelete, isDeleting } = useDeleteBooking();
  const [btnToggle, setBtnToggle] = useState(false);
  const [listPosition, setListPosition] = useState({});

  function handleToggle(e) {
    console.log(e.clientX, e.clientY);
    setListPosition({ x: e.clientX - 20, y: e.clientY + 10 });

    setBtnToggle((toggle) => !toggle);
  }
  return (
    <Table.Row>
      <Cabin>{cabinName}</Cabin>

      <Stacked>
        <span>{guestName}</span>
        <span>{email}</span>
      </Stacked>

      <Stacked>
        <span>
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}{" "}
          &rarr; {numNights} night stay
        </span>
        <span>
          {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
          {format(new Date(endDate), "MMM dd yyyy")}
        </span>
      </Stacked>

      <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>

      <Amount>{formatCurrency(totalPrice)}</Amount>
      <button
        style={{ outline: "none", backgroundColor: "white", border: "none" }}
        onClick={handleToggle}
      >
        <HiOutlineDotsVertical />
      </button>

      {btnToggle ? (
        <ToggleDiv>
          <StyledList position={listPosition}>
            <li>
              <StyledButton onClick={() => navigate(`/booking/${bookingId}`)}>
                Details
              </StyledButton>
            </li>

            {status === "unconfirmed" && (
              <li>
                <StyledButton onClick={() => navigate(`/checkin/${bookingId}`)}>
                  Check in
                </StyledButton>
              </li>
            )}
            <li>
              <StyledButton
                onClick={() => bookingDelete(bookingId)}
                disabled={isDeleting}
              >
                Delete
              </StyledButton>
            </li>
          </StyledList>
        </ToggleDiv>
      ) : (
        ""
      )}
    </Table.Row>
  );
}

export default BookingRow;
