import React from 'react'

import { 
  Container,
  ContentText,
  Image,
  ImageArticle,
  LeadMore,
  Paragraph,
  SubTitle,
  TagCategorie,
  Title
} from './styled'

const InitArticle:React.FC = () => {
  return (
    <Container>
      <ContentText>
        <TagCategorie color='green'>
          Estar
        </TagCategorie>
        <Title>
          Apaxes do Tororó a força dos 
          blocos de índio no Carnaval
        </Title>
        <Paragraph>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Quisquam laboriosam dignissimos in, accusamus, omnis velit 
          amet pariatur deleniti quas veritatis debitis 
          repellat perferendis quidem sapiente bofficia, 
          earum iusto et dolorum repellat perferendis quidem 
          sapiente bofficia, repellat perferendis quidem sapiente bofficia,
          repellat perferendis quidem sapiente bofficia,
          repellat perferendis quidem sapiente bofficia,?
        </Paragraph>
        <LeadMore>Read more...</LeadMore>
      </ContentText>
      <ImageArticle>
        <Image 
          src='https://www.viagenscinematograficas.com.br/wp-content/uploads/2015/01/Bahia-O-que-Fazer-Roteiros-Capa.jpg' 
          alt='imagem da bahia'
        /> 
      </ImageArticle>
    </Container>
  ) 
}

export default InitArticle