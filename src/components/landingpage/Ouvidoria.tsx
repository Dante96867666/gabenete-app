
import { Box, Container, Typography } from "@mui/material";

const Ouvidoria: React.FC = () => {
    return (
      <Box id="ouvidoria" sx={{color: '#ffffff'}}>
        <Container sx={{}}>
            <Box sx={{}}>
                <Typography variant="h2">Ouvidoria</Typography>
                <Typography>Envie sugestões, reclamações ou dúvidas para o gabinete atraves deste numero para contato:</Typography>
                <Typography>86 1234-1234</Typography>
            </Box>
        </Container>
      </Box>
    );
  };
  
  export { Ouvidoria };
  