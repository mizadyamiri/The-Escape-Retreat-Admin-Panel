import styled from "styled-components";
import Logo from "../components/Logo";
import MainNav from "../components/MainNav";
import { APP_CONFIG } from "../configs/app";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 3.2rem;
`;

const VersionText = styled.span`
  color: var(--color-grey-400);
  text-align: center;
  font-size: 1.25rem;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <div>
        <Logo />
        <MainNav />
      </div>

      <VersionText>v{APP_CONFIG.version}</VersionText>
    </StyledSidebar>
  );
}

export default Sidebar;
