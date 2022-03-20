import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import '@splidejs/splide/dist/css/splide.min.css'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Popular = () => {
  const [popular, setPopular] = useState([])

  useEffect(() => {
    const check = localStorage.getItem('popular')
    const url = `https://api.spoonacular.com/recipes/random?apiKey=b57efb62940e4fdfbdeb2e2a7e00ad8f&number=10`

    if (check) {
      setPopular(JSON.parse(check))
    } else {
      axios
        .get(url)
        .then(e => {
          setPopular(e.data.recipes)
          localStorage.setItem('popular', JSON.stringify(e.data.recipes))
        })
        .catch(error => console.log(error))
    }
  }, [])

  return (
    <Container>
      <h2>Popular Recipes</h2>
      <Splide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '2rem',
          rewind: true
        }}
      >
        {popular.map(recipe => (
          <SplideSlide key={recipe.id}>
            <Card>
              <Link to={`/recipe/${recipe.id}`}>
                <h4>{recipe.title}</h4>
                <img src={recipe.image} alt={recipe.title} />
                <Gradient />
              </Link>
            </Card>
          </SplideSlide>
        ))}
      </Splide>
    </Container>
  )
}
const Container = styled.div`
  margin: 4rem 0;

  @media (max-width: 992px) {
    .splide__slide {
      width: calc(((100% + 2rem) / 2.5) - 2rem) !important;
    }
  }

  @media (max-width: 786px) {
    .splide__slide {
      width: calc(((100% + 2rem) / 1.5) - 1rem) !important;
    }
  }
`
const Card = styled.div`
  position: relative;
  min-height: 25rem;
  overflow: hidden;
  margin: 2rem 0;

  h4 {
    position: absolute;
    text-align: center;
    bottom: 20px;
    font-size: 16px;
    color: white;
    width: 100%;
    z-index: 9;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 2rem;
    position: absolute;
    top: 0;
    bottom: 0;
    object-fit: cover;
  }
`

const Gradient = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  width: 100%;
  height: 100%;
  z-index: 8;
  position: absolute;
  border-radius: 2rem;
`
export default Popular
