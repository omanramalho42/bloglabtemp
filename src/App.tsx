import React from "react";
import Content from "./components/Content";
import Galery from "./components/Galery";
import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import InitArticle from "./components/InitArticle";
import Layout from "./components/Layout";


const App:React.FC = () => {
  return (
    <Layout 
      title="Home" 
      description="Página inicial"
    >
      <Header />
      <InitArticle />
      <HeroSlider />
      <Content />
      <Galery />
    </Layout>
  )
}

export default App
