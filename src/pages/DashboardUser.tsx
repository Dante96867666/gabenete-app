import { Box, Typography, Container } from '@mui/material';

export default function DashboardUser() {
  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Box sx={{ bgcolor: '#fff', p: 4, borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h4" gutterBottom>
          Painel do Usuário
        </Typography>
        <Typography variant="body1">
          Bem-vindo ao dashboard do usuário. Aqui você pode ver suas informações e acessar recursos disponíveis para seu perfil.
        </Typography>
      </Box>
    </Container>
  );
}
