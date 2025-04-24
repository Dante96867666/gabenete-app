import { Box, Container, Typography, Link, Stack, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#181818',
        color: '#fff',
        py: 4,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center" spacing={2}>
          {/* Links úteis */}
          <Stack direction="row" spacing={3}>
            <Link href="#about" color="inherit" underline="hover" sx={{ fontWeight: 500 }}>
              Sobre
            </Link>
            <Link href="#contato" color="inherit" underline="hover" sx={{ fontWeight: 500 }}>
              Contato
            </Link>
            <Link href="#privacidade" color="inherit" underline="hover" sx={{ fontWeight: 500 }}>
              Política de Privacidade
            </Link>
          </Stack>

          {/* Redes sociais */}
          <Stack direction="row" spacing={1}>
            <IconButton aria-label="Instagram" href="https://instagram.com" target="_blank" sx={{ color: '#fff' }}>
              <InstagramIcon />
            </IconButton>
            <IconButton aria-label="Facebook" href="https://facebook.com" target="_blank" sx={{ color: '#fff' }}>
              <FacebookIcon />
            </IconButton>
            <IconButton aria-label="LinkedIn" href="https://linkedin.com" target="_blank" sx={{ color: '#fff' }}>
              <LinkedInIcon />
            </IconButton>
          </Stack>
        </Stack>

        {/* Copyright */}
        <Typography variant="body2" color="#bbb" align="center" sx={{ mt: 3 }}>
          2025 Gbinete. Todos os direitos reservados.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
