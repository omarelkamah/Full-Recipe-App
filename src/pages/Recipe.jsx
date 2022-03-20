import axios from 'axios'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Recipe = () => {
  const [recipe, setRecipe] = useState({})
  const [active, setActive] = useState('instructions')
  const param = useParams()
  const url = `https://api.spoonacular.com/recipes/${param.name}/information?apiKey=b57efb62940e4fdfbdeb2e2a7e00ad8f`

  useEffect(() => {
    axios
      .get(url)
      .then(e => {
        setRecipe(e.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [url])
  console.log(recipe)

  return (
    <Wrapper>
      <Container>
        <h4>{recipe.title}</h4>
        <img src={recipe.image} alt={recipe.title} />
      </Container>
      <Info>
        <Buttons>
          <button
            className={active === 'instructions' ? 'active' : null}
            onClick={() => setActive('instructions')}
          >
            Instructions
          </button>
          <button
            className={active === 'ingredients' ? 'active' : null}
            onClick={() => setActive('ingredients')}
          >
            Ingredients
          </button>
        </Buttons>
        {active === 'instructions' && (
          <div>
            <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
            <p dangerouslySetInnerHTML={{ __html: recipe.instructions }}></p>
          </div>
        )}
        {active === 'ingredients' && (
          <ul>
            {recipe.extendedIngredients.map(ingredient => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  gap: 2%;
  margin: 2rem 0;

  @media (max-width: 1300px) {
    flex-direction: column;
  }

  h4 {
    font-size: 25px;
    margin-bottom: 1rem;
    text-transform: uppercase;
    text-align: center;
    font-weight: 900;
    letter-spacing: 1px;
  }
`

const Container = styled.div`
  flex: 2;
  img {
    width: 100%;
  }
`
const Info = styled.div`
  flex: 1;
  margin-top: 1rem;
  p {
    margin-top: 1rem;
    line-height: 1.5;
    font-size: 16px;
    font-weight: 500;
    color: #777;
    letter-spacing: 0.5px;
    font-size: 15px;

    a {
      text-decoration: underline;
      color: #333;
    }
  }

  ul {
    list-style: none;
    line-height: 1.7;
    margin-top: 1rem;
    letter-spacing: 1px;
    font-weight: bold;
    text-transform: capitalize;
  }
`
const Buttons = styled.div`
  button {
    cursor: pointer;
    outline: none;
    border: 2px solid #333333;
    background: white;
    padding: 10px 20px;
    border-radius: 5px;
    margin-right: 1rem;
    font-weight: bold;
    letter-spacing: 1px;

    &.active {
      background: #333;
      color: white;
    }
  }
`
export default Recipe
