import { Box, Container, Typography } from "@mui/material";

const Features: React.FC = () => {
    return (
        <Box id="features" sx={{color: '#ffffff', padding:4}}>
            <Container sx={{}}>
                <Box sx={{}}>
                    <Typography variant="h2">Funcionalidades</Typography>
                    <Typography>Não  funciona 100% (AINDA)</Typography>
                    <hr />
                </Box>
            </Container>
        </Box>
    );
};
export { Features };