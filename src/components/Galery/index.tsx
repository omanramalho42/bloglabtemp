import React, { useEffect, useState } from 'react'
import { Card, Container } from './styled'

const Galery:React.FC = () => {
  const [images, setImages] = useState<any[] | null>(null);
  useEffect(() => {
    if(images === null) {
      setImages([
        { title: '', price: ''},
        { title: '', price: ''},
        { title: '', price: ''},
      ])
    }
  },[]);

  return (
    <>
      <h1>Banca</h1>
      <Container>
        {images?.map((i, idx) => (
          <Card key={idx}>
            item
          </Card>
        ))}
</Container>
    </>
  )
}

export default Galery