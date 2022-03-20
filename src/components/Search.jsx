import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Search = () => {
  const [input, setInput] = useState('')
  const navigate = useNavigate()

  const handelSubmit = e => {
    e.preventDefault()
    navigate(`/searched/${input}`)
    setInput('')
  }
  return (
    <TheForm onSubmit={handelSubmit}>
      <FaSearch onClick={handelSubmit} />
      <div>
        <input
          onChange={e => setInput(e.target.value)}
          type='text'
          value={input}
          placeholder='Search'
        />
      </div>
    </TheForm>
  )
}

const TheForm = styled.form`
  min-height: 30px;
  display: flex;
  align-items: center;
  color: white;
  margin: 1rem 0;
  padding: 5px 10px;
  border-radius: 1rem;
  background: linear-gradient(35deg, #494949, #313131);

  svg {
    cursor: pointer;
  }

  div {
    width: 100%;
    height: 100%;

    input {
      width: 100%;
      height: 100%;
      outline: none;
      border: none;
      padding: 10px;
      color: white;
      background: linear-gradient(35deg, #494949, #313131);
    }
  }
`

export default Search
