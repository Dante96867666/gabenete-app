import { Box, Container, Typography } from "@mui/material";

const Contato: React.FC = () => {
    return (
      <Box id="contato" sx={{color: '#ffffff', padding:4}}>
        <Container sx={{}}>
            <Box sx={{}}>
                <Typography variant="h2">Contato</Typography>
                <Typography>Entre em contato com o gabinete político através dos seguintes canais...</Typography>
            </Box>
            <hr />
        </Container>
      </Box>
    );
  };
  
  export { Contato };

