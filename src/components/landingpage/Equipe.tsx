
import { Box, Container, Typography } from "@mui/material";
const Equipe: React.FC = () => {
    return (
        <Box id="equipe" sx={{color: '#ffffff', padding:4 }}>
          <Container sx={{}}>
            <Box sx={{}}>
                <Typography variant="h2" sx={{ marginBottom: 2 }}>Equipe de Governo</Typography>
                <Typography variant="h3">Conheça a equipe que faz o governo acontecer!</Typography>
                <Typography>Chefe de Gabinete: Dante Candeira Pires</Typography>
                <Typography>Assessor de Comunicação: Santos de Andrade</Typography>
                <Typography>Assessor Jurídico: jakson de souza </Typography>
                <Typography>Coordenadora de Projetos: maria aubuquerque </Typography>
                <Typography>Analista de Políticas Públicas: marcos enzo </Typography>
                
                <hr />
            </Box>
          </Container>
      </Box>
    );
  };
  
  export { Equipe };
  
  
  