import styled from 'styled-components'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const Searched = () => {
  const [searched, setSearched] = useState([])
  const param = useParams()
  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=b57efb62940e4fdfbdeb2e2a7e00ad8f&query=${param.search}`

  useEffect(() => {
    axios
      .get(url)
      .then(e => {
        setSearched(e.data.results)
        console.log(e.data.results)
      })
      .catch(error => {
        console.log(error)
      })
  }, [param.search])

  return (
    <Wrapper>
      {searched.map(item => (
        <Card key={item.id}>
          <Link to={`/recipe/${item.id}`}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
          </Link>
        </Card>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2%;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`

const Card = styled.div`
  width: calc(100% / 3.5);
  overflow: hidden;
  margin-bottom: 2%;
  border-radius: 1rem;
  text-align: center;
  color: #333;

  @media (max-width: 992px) {
    & {
      width: calc(100% / 2.5);
    }
  }

  @media (max-width: 786px) {
    & {
      width: 100%;
    }
  }

  img {
    width: 100%;
  }

  h4 {
    font-size: 1rem;
    margin-top: 5px;
  }
`

export default Searched
