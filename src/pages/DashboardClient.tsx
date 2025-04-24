import { Box, Typography, Container } from '@mui/material';

export default function DashboardClient() {
  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Box sx={{ bgcolor: '#fff', p: 4, borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h4" gutterBottom>
          Painel do Cliente
        </Typography>
        <Typography variant="body1">
          Bem-vindo ao dashboard do cliente. Aqui você pode acessar seus serviços, suporte e informações da sua conta.
        </Typography>
      </Box>
    </Container>
  );
}
