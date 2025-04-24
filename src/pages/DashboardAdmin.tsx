import { Box, Typography, Container } from '@mui/material';

export default function DashboardAdmin() {
  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Box sx={{ bgcolor: '#fff', p: 4, borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h4" gutterBottom>
          Painel do Administrador
        </Typography>
        <Typography variant="body1">
          Bem-vindo ao dashboard de administrador. Aqui você pode gerenciar usuários, visualizar estatísticas e acessar funcionalidades administrativas.
        </Typography>
      </Box>
    </Container>
  );
}