import { Outlet } from "react-router-dom";
import Sidebar from "../ui/Sidebar";
import Header from "../ui/Header";
import styled from "styled-components";

const AppLayoutStyle = styled.div`
  display: grid;
  grid-template-columns: 21rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }
`;

const StyleMain = styled.main`
  background-color: var(--color-grey-100);
  padding: 4rem 5rem 3.8rem;

  overflow-y: auto;
  @media (max-width: 640px) {
    padding: 2rem 2rem;
  }
`;
const OutletStyle = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (max-width: 640px) {
    gap: 2rem;
  }
`;
function AppLayout() {
  return (
    <AppLayoutStyle>
      <Header />
      <Sidebar />
      <StyleMain>
        <OutletStyle>
          <Outlet />
        </OutletStyle>
      </StyleMain>
    </AppLayoutStyle>
  );
}

export default AppLayout;
