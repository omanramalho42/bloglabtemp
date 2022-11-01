import React from 'react'
import { ArrowIcon, Container } from './styled'

const HeroSlider:React.FC = () => {
  return (
    <Container>
      <ArrowIcon />
        <img src="https://www.viagenscinematograficas.com.br/wp-content/uploads/2015/01/Bahia-O-que-Fazer-Roteiros-Capa.jpg" alt="" />
      <ArrowIcon />
    </Container>
  )
}

export default HeroSlider