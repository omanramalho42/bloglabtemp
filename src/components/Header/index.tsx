import React, { FC, useEffect, useState } from 'react';

import { 
  Header as HeaderDiv, 
  Container,
  Categorie
} from './styled';

interface CardCategories {
  color: string;
  title: string;
}

const CardsCateogories:React.FC = () => {
  const [categories, setCategories] = useState<CardCategories[] | null>(null);
  useEffect(() => {
    if(categories === null) {
      setCategories([
        {
          title: 'Funk',
          color: '#1313ff',
        },
        {
          title: 'Trap',
          color: '#da2222',
        },
        {
          title: 'Rap',
          color: '#24b524f9',
        },
        {
          title: 'Sertanejo',
          color: '#ccac09',
        }
      ]);
    }
  },[]);

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      { categories?.map(({ title, color }, idx) => (
        <Categorie key={idx} color={color}>
          {/* { title } */}
        </Categorie>
      )) }
    </div>
  );
};

interface HeaderMenuProps {
  title: string;
  icon: string;
  categorie: string;
}

const HeaderMenu:React.FC = () => {
  const menusItems: HeaderMenuProps[] = [
    { title: 'LabT', icon: '', categorie: '' },
    { title: 'Set', icon: '', categorie: '' },
    { title: 'Star', icon: '', categorie: '' },
    { title: 'Salvador', icon: '', categorie: '' },
    { title: 'Bahia', icon: '', categorie: '' },
    { title: 'Banca', icon: '', categorie: '' },
  ];
  
  return (
    <div style={{ marginTop: '60px' }}>
      <nav>
        <ul 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            listStyle: 'none'  
          }}
        >
        { menusItems.map(({ categorie, icon, title }, idx) => (
          <>
            <li key={idx}>
              <a href="" style={{ textDecoration: 'none', margin: '0 5px', color: '#000', fontWeight: '600' }}>{ title }</a>
              {/* <i>{icon}</i> */}
            </li>
            { idx !== 5 && (
              <hr />
            )}
          </>
        ))}
        </ul>
      </nav>
    </div>
  )
}

const Header:React.FC = () => {
  return (
    <HeaderDiv>
      <Container>
        <CardsCateogories />
        <HeaderMenu />
      </Container>
    </HeaderDiv>
  )
}

export default Header;