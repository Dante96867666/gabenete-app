import { Box, Typography, Container, Grid, Paper, Avatar, Button, Divider, Tooltip } from '@mui/material';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import GroupIcon from '@mui/icons-material/Group';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';

export default function DashboardAdmin() {
  return (
    <Container maxWidth="lg" sx={{ mt: 8, mb: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <Avatar sx={{ bgcolor: 'primary.main', mr: 2, width: 56, height: 56, boxShadow: 2 }}>
          <AdminPanelSettingsIcon fontSize="large" />
        </Avatar>
        <Box>
          <Typography variant="h3" component="h1" fontWeight={700} color="primary.main" sx={{ letterSpacing: 1 }}>
            Painel do Administrador
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 0.5 }}>
            Gerencie o sistema com facilidade e segurança
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Paper elevation={4} sx={{ p: 4, textAlign: 'center', borderRadius: 3, transition: 'box-shadow 0.2s', '&:hover': { boxShadow: 10, transform: 'translateY(-4px)' } }}>
            <Tooltip title="Acesse o gerenciamento de usuários" arrow>
              <Avatar sx={{ bgcolor: 'secondary.main', mx: 'auto', width: 56, height: 56, mb: 2 }}>
                <GroupIcon fontSize="large" />
              </Avatar>
            </Tooltip>
            <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>
              Gerenciar Usuários
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Adicione, edite ou remova usuários do sistema.
            </Typography>
            <Button variant="contained" color="secondary" fullWidth sx={{ fontWeight: 600 }}>
              Ir para Usuários
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={4} sx={{ p: 4, textAlign: 'center', borderRadius: 3, transition: 'box-shadow 0.2s', '&:hover': { boxShadow: 10, transform: 'translateY(-4px)' } }}>
            <Tooltip title="Veja estatísticas e gráficos" arrow>
              <Avatar sx={{ bgcolor: 'success.main', mx: 'auto', width: 56, height: 56, mb: 2 }}>
                <BarChartIcon fontSize="large" />
              </Avatar>
            </Tooltip>
            <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>
              Estatísticas
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Visualize gráficos e relatórios do sistema.
            </Typography>
            <Button variant="contained" color="success" fullWidth sx={{ fontWeight: 600 }}>
              Ver Estatísticas
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={4} sx={{ p: 4, textAlign: 'center', borderRadius: 3, transition: 'box-shadow 0.2s', '&:hover': { boxShadow: 10, transform: 'translateY(-4px)' } }}>
            <Tooltip title="Configure preferências e permissões" arrow>
              <Avatar sx={{ bgcolor: 'info.main', mx: 'auto', width: 56, height: 56, mb: 2 }}>
                <SettingsIcon fontSize="large" />
              </Avatar>
            </Tooltip>
            <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>
              Configurações
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Ajuste preferências e permissões administrativas.
            </Typography>
            <Button variant="contained" color="info" fullWidth sx={{ fontWeight: 600 }}>
              Configurar
            </Button>
          </Paper>
        </Grid>
      </Grid>
      <Divider sx={{ my: 6 }} />
      <Typography variant="caption" color="text.secondary" display="block" align="center" sx={{ fontSize: 14 }}>
        {new Date().getFullYear()} Painel Administrativo — Todos os direitos reservados
      </Typography>
    </Container>
  );
}