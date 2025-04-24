import { Box } from '@mui/material'
import { Hero } from '../components/landingpage/Hero'
import { About } from '../components/landingpage/About'
import { Equipe } from '../components/landingpage/Equipe'
import { Cidade } from '../components/landingpage/Cidade'
import { Ouvidoria } from '../components/landingpage/Ouvidoria'
import { Contato } from '../components/landingpage/Contato'
import Footer from '../components/landingpage/Footer'
import { Header } from '../components/landingpage/Header'
import LoginModal from '../components/login/LoginModal'
import React from 'react';

const Home: React.FC = () => {
  const [openLogin, setOpenLogin] = React.useState(false);

  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);

  return (
    <Box sx={{ 
      height: '100vh', 
      width: '100vw',
      overflowX: 'hidden',
      overflowY: 'auto'
    }}>
      <Header />
      <Box sx={{ 
        width: '100%',
        maxWidth: '100vw',
        boxSizing: 'border-box'
      }}>
        <Hero />
        <About />
        <Equipe />
        <Cidade />
        <Ouvidoria />
        <Contato />
      </Box>
      <Footer />
      <LoginModal open={openLogin} onClose={handleCloseLogin} />
    </Box>
  );
};

export { Home };
