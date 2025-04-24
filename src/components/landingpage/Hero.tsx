import { Box, Container, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { theme } from '../../Context/theme';

const Hero: React.FC = () => {
  const theme = useTheme();

  return (
    <Box id="hero" sx={{ 
      backgroundImage: `url('/imagens/bghero.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#213547'
      
    }}>
      <Container>
        <Box sx={{ 
          textAlign: 'center',
         
        }}>
          <Typography 
            variant="h1" 
            sx={{ 
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}
          >
            Bem-vindo ao Gabinete Político
          </Typography>
          <Typography 
            variant="h2" 
            sx={{ 
              marginBottom: '1rem'
            }}
          >
            Projetos
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              lineHeight: '1.6'
            }}
          >
            Conheça os projetos em andamento no gabinete.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export { Hero };