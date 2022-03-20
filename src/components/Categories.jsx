import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiChopsticks } from 'react-icons/gi'
import { AiOutlineHome } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Categories = () => {
  return (
    <Wrapper>
      <TheLink to='/'>
        <AiOutlineHome />
        <h4>Home</h4>
      </TheLink>
      <TheLink to='/cuisine/Italian'>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </TheLink>
      <TheLink to='/cuisine/American'>
        <FaHamburger />
        <h4>American</h4>
      </TheLink>
      <TheLink to='/cuisine/Thai'>
        <GiNoodles />
        <h4>Thai</h4>
      </TheLink>
      <TheLink to='/cuisine/Japanese'>
        <GiChopsticks />
        <h4>Japanese</h4>
      </TheLink>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0 0;
  gap: 2%;
`

const TheLink = styled(NavLink)`
  background: #333;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  text-decoration: none;
  gap: 1%;

  h4 {
    font-size: 15px;
    font-weight: normal;
    margin-top: 5px;
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
  }
`

export default Categories
