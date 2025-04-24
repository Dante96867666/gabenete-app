import React from 'react';
import {
  Box,
  Modal,
  TextField,
  Button,
  Typography,
  Paper,
  IconButton,
  Fade,
  useTheme,
  Avatar,
  Link,
  InputAdornment,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';

// Enum para os perfis de usuário
enum UserRole {
  ADMIN = 'admin',
  CLIENT = 'client',
  USER = 'user',
}

// Simulação de um usuário autenticado
interface AuthUser {
  name: string;
  role: UserRole;
}

// Exemplo de função fake de login
function fakeLogin(email: string, password: string): AuthUser | null {
  // Senha obrigatória para todos os perfis
  const senhaCorreta = '1234';
  if (password !== senhaCorreta) return null;
  if (email === 'admin@email.com') {
    return { name: 'Administrador', role: UserRole.ADMIN };
  } else if (email === 'cliente@email.com') {
    return { name: 'Cliente', role: UserRole.CLIENT };
  } else if (email === 'user@email.com') {
    return { name: 'Usuário', role: UserRole.USER };
  }
  return null;
}

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ open, onClose }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const [authUser, setAuthUser] = React.useState<AuthUser | null>(null);

  // Redireciona automaticamente para o dashboard correto após login
  React.useEffect(() => {
    if (authUser) {
      if (authUser.role === UserRole.ADMIN) {
        navigate('/dashboard/admin');
      } else if (authUser.role === UserRole.CLIENT) {
        navigate('/dashboard/client');
      } else if (authUser.role === UserRole.USER) {
        navigate('/dashboard/user');
      }
      onClose();
    }
  }, [authUser, navigate, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const user = fakeLogin(email, password);
      if (user) {
        setAuthUser(user);
        setError('');
      } else {
        setError('E-mail ou senha inválidos');
      }
    } catch (err) {
      setError('Erro ao fazer login. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropProps={{
        timeout: 500,
      }}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: 400,
            width: '100%',
            maxHeight: '90vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Paper
            elevation={3}
            sx={{
              width: '100%',
              borderRadius: 2,
              p: 4,
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              backgroundColor: theme.palette.background.paper,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 3,
              }}
            >
              <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
                <LockOutlinedIcon />
              </Avatar>
              <IconButton onClick={onClose} sx={{ color: theme.palette.primary.main }}>
                <CloseIcon />
              </IconButton>
            </Box>

            <Typography
              component="h1"
              variant="h5"
              align="center"
              sx={{
                fontWeight: 'bold',
                color: theme.palette.primary.main,
                mb: 2,
              }}
            >
              Entrar
            </Typography>

            {error && (
              <Typography color="error" align="center" sx={{ mt: 2 }}>
                {error}
              </Typography>
            )}

            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: theme.palette.grey[400],
                    },
                    '&:hover fieldset': {
                      borderColor: theme.palette.primary.main,
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: theme.palette.primary.main,
                    },
                  },
                }}
              />
              <TextField
                fullWidth
                label="Senha"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                variant="outlined"
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: theme.palette.grey[400],
                    },
                    '&:hover fieldset': {
                      borderColor: theme.palette.primary.main,
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: theme.palette.primary.main,
                    },
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        size="large"
                        sx={{ color: theme.palette.primary.main }}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1, mb: 2 }}>
                <Link
                  component="button"
                  variant="body2"
                  onClick={() => {
                    onClose();
                    navigate('/forgot-password');
                  }}
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: 'bold',
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  Esqueceu a senha?
                </Link>
              </Box>
              <Button
                fullWidth
                variant="contained"
                type="submit"
                disabled={loading}
                sx={{
                  bgcolor: theme.palette.primary.main,
                  '&:hover': {
                    bgcolor: theme.palette.primary.dark,
                  },
                  textTransform: 'none',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  mt: 3,
                  mb: 2,
                }}
              >
                {loading ? 'Entrando...' : 'Entrar'}
              </Button>
            </form>

            <Box sx={{ mt: 2, textAlign: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                Não tem uma conta?{' '}
                <Link
                  href="/register"
                  onClick={() => {
                    onClose();
                    navigate('/register');
                  }}
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: 'bold',
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  Crie uma conta
                </Link>
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Fade>
    </Modal>
  );
};

export default LoginModal;