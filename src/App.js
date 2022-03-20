import { BrowserRouter, Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import styled from "styled-components";
import Categories from "./components/Categories";
import Search from "./components/Search";
import Pages from "./pages/Pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to="/">Delechious</Logo>
        </Nav>
        <Search />
        <Categories />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Nav = styled.nav`
  padding: 1rem 0;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 1%;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const Logo = styled(Link)``;

export default App;
