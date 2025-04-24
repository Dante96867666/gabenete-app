import { Box, Container, Typography, Card, CardContent } from "@mui/material";

const Cidade: React.FC = () => {
    return (
      <Box id="cidade" sx={{color: '#ffffff', padding:4}}>
        <Container sx={{}}>
            <Box sx={{}}>
                <Typography variant="h2">Parnaíba</Typography>
                <Typography variant="h3">História</Typography>
                <Typography>
                Fundada em 1835, Parnaíba tem uma história que remonta ao período colonial.
                 A cidade nasceu como um importante ponto comercial devido à sua proximidade com o mar, o que favoreceu a instalação de portos e a circulação de mercadorias.
                 O nome "Parnaíba" tem origem no Tupi-Guarani e significa "rio de águas brancas", uma referência ao rio Parnaíba, 
                 que atravessa a cidade e é uma das principais
                 características geográficas da região.
                </Typography>
                 <Card sx={{ 
                        width: '100%', 
                        backgroundColor: 'transparent',
                        color: '#ffffff',
                        padding: 4,
                        boxShadow: 'none'
                      }}>
                        <CardContent>
                          <Container>
                            <Box>
                               <Typography variant="h3">Geografia</Typography>
                               
                               A cidade de Parnaíba se caracteriza por sua localização no litoral do Piauí, próxima à fronteira com o estado de Ceará. 
                               A região é formada por um delta do rio Parnaíba, que desemboca no Maraná, um dos principais rios do estado de Ceará.
                            </Box>
                          </Container>
                        </CardContent>
                      </Card>
         <hr />        
            </Box>
        </Container>
      </Box>
    );
  };
  
  export { Cidade };
  