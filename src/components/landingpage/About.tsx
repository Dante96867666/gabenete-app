import { Box, Container, Typography } from "@mui/material";

const About: React.FC = () => {
    return (
      <Box id="about" sx={{color: '#ffffff', padding:4}}>
        <Container>
            <Box sx={{ mb: 4 }}>
                <Typography variant="h2">Pontos Turisticos de Parnaíba</Typography>  
                <Box padding={2}>
                  <Box 
                    component="img"
                    src="../../../public/imagens/porto_Das_Barcas.jpg"
                    alt="Parnaíba"
                    width={300}
                    height={300}
                    sx={{
                        borderRadius: 2,
                        objectFit: 'cover',
                        padding: 2
                    }}
                  />
                  <Box 
                    component="img"
                    src="../../../public/imagens/praia_php.jpg"
                    alt="Parnaíba"
                    width={300}
                    height={300}
                    sx={{
                      borderRadius: 2,
                      objectFit: 'cover',
                      padding: 2
                    }}
                  />
                </Box>
                <Typography variant="h3">História</Typography>
                <Typography>
                Parnaíba, localizada no litoral do Piauí, destaca-se por suas belezas naturais e patrimônios históricos. O Delta do Parnaíba é uma das principais atrações, sendo o único delta em mar aberto das Américas, formado por mais de 70 ilhas que proporcionam passeios inesquecíveis. 
                </Typography>
                <hr />
            </Box>
        </Container>
      </Box>
    );
};

export { About };