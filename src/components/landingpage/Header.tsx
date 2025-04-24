import { Box, Button, Container } from '@mui/material'
import LoginModal from '../login/LoginModal'
import React from 'react'

const Header: React.FC = () => {
  const [openLogin, setOpenLogin] = React.useState(false)
const handleOpenLogin = () => setOpenLogin(true)
const handleCloseLogin = () => setOpenLogin(false)

  return (
    <Box sx={{ backgroundColor: '#4c8bf8', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, height: '50px' }}>
      <Container>
        <Box>
          <Box sx={{ color: '#ffffff', display: 'flex', justifyContent: 'center', gap: 2, marginTop: 1, padding: 1, alignItems: 'center' }}>
            <Button component="a" href="#hero" sx={{ color: '#ffffff', display: 'flex', justifyContent: 'center' }}>
              Início
            </Button>
            <Button component="a" href="#about" sx={{ color: '#ffffff', display: 'flex', justifyContent: 'center' }}>
              Sobre
            </Button>
            <Button component="a" href="#equipe" sx={{ color: '#ffffff', display: 'flex', justifyContent: 'center' }}>
              Equipe
            </Button>
            <Button component="a" href="#cidade" sx={{ color: '#ffffff', display: 'flex', justifyContent: 'center' }}>
              Cidade
            </Button>
            <Button component="a" href="#ouvidoria" sx={{ color: '#ffffff', display: 'flex', justifyContent: 'center' }}>
              Ouvidoria
            </Button>
            <Button component="a" href="#contato" sx={{ color: '#ffffff', display: 'flex', justifyContent: 'center' }}>
              Contato
            </Button>
            <Button
              onClick={handleOpenLogin}
              sx={{
                color: '#000',
                bgcolor: '#ffffff',
                display: 'flex',
                height: '25px',
                width: '25px',
                borderRadius: '10%',
                position: 'fixed',
                right: 10,
                top: 10,
              }}
            >
              Login
            </Button>

            <LoginModal open={openLogin} onClose={handleCloseLogin} />
          </Box>
        </Box>
        <Box
          component="img"
          src="../../../public/imagens/icone_da_prefeitura.png"
          alt="Prefeitura"
          width={40}
          height={40}
          sx={{
            objectFit: 'cover',
            position: 'fixed',
            left: 10,
            top: 10,
          }}
        />
      </Container>
    </Box>
  )
}
export { Header }