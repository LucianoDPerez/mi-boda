import { parentVariants, transition } from "@/animation/transition";
import useDB from "@/hooks/useDB";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import { Box, Button, Container, Divider, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import TextMask from "../TextMask";
import KeluargaBesar from "./KeluargaBesar";

import { useLocation } from 'react-router-dom';

import Swal from 'sweetalert2';

/**
 * Text variant
 */
const textVariants = {
  hidden: {
    opacity: 0,
    y: "80%",
    skewY: 10,
  },
  show: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition,
  },
  exit: {
    opacity: 0,
  },
};

/**
 * Divider variant
 */
const dividerVariants = {
  hidden: {
    scaleX: 0,
    originX: 0.5,
  },
  show: {
    scaleX: 1,
    originX: 0.5,
    transition,
  },
  exit: {
    opacity: 0,
  },
};

/**
 * Footer komponen
 */
const Footer = () => {
  const { pria, wanita } = useDB((db) => db.wedding.mempelai);
  const doaRestu =
      "Que compartas tu tiempo con nosotros no tiene precio. Nosotros te lo vamos a agradecer siendo felices.";
  const berbahagia = "Estamos muy contentos de verte en nuestro día especial.";

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const phone = params.get('phone');

  const handleConfirm = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/guests`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone: phone }), // Enviar solo el número de teléfono en el cuerpo
      });

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: '¡Confirmación exitosa!',
          text: '¡Gracias por confirmar tu asistencia! Te esparamos para pasarla super!',
          confirmButtonText: 'Gracias'
        });
      } else {
        console.error('Error en la solicitud:', response.statusText);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Hubo un problema al confirmar tu asistencia. Inténtalo de nuevo más tarde.',
          confirmButtonText: 'Entendido'
        });
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo un problema al confirmar tu asistencia. Inténtalo de nuevo más tarde.',
        confirmButtonText: 'Entendido'
      });
    }
  };



  const bankAccounts = [
    { bankName: "Banco A", accountNumber: "1234567890" },
    { bankName: "Banco B", accountNumber: "9876543210" },
  ];

  return (
    <Box
      component={motion.div}
      variants={parentVariants}
      initial="hidden"
      whileInView="show"
      exit="exit"
      viewport={{ once: true }}
      py={18}
    >
        <Container>
          <Grid
              container
              spacing={5}
              display="flex"
              justifyContent="center"
              alignItems="center"
          >
            <Grid item xs={12}>
              <Typography
                  variant="h4"
                  sx={{ textAlign: "center", fontFamily: "Arizonia" }}
              >
                {doaRestu.split(" ").map((text, key) => (
                    <TextMask key={key} variants={textVariants}>
                      {text}
                    </TextMask>
                ))}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Divider
                  sx={{ my: 5 }}
                  component={motion.div}
                  variants={dividerVariants}
              >
                <FavoriteTwoToneIcon sx={{ fontSize: 50 }} />
              </Divider>

              <Typography
                  variant="h2"
                  sx={{ textAlign: "center", fontFamily: "Arizonia" }}
              >
                {berbahagia.split(" ").map((text, key) => (
                    <TextMask key={key} variants={textVariants}>
                      {text}
                    </TextMask>
                ))}
              </Typography>
            </Grid>

            {/* Mempelai pria */}
            <Grid item md={6} xs={12}>
              <KeluargaBesar
                  title="Mary"
                  orangTuaPria={pria.orangTua.pria}
                  orangTuaWanita={pria.orangTua.wanita}
              />
            </Grid>

            {/* Mempelai wanita */}
            <Grid item md={6} xs={12} sx={{ mt: { md: 0, xs: 5 } }}>
              <KeluargaBesar
                  title="Lucho"
                  orangTuaPria={wanita.orangTua.pria}
                  orangTuaWanita={wanita.orangTua.wanita}
              />
            </Grid>
          </Grid>
        </Container>

        <div style={{ textAlign: 'center', fontFamily: 'Roboto' }} >
        <Divider sx={{ my: 5 }} />
          <Typography variant="h3"  sx={{ mt: 8, mb: 2 }} style={{ fontFamily: 'Roboto' }} >
            Confirmo Asistencia?
          </Typography>

          <Typography variant="h5" sx={{ mt: 3, mb: 2 }}>
          Para aquellos que deseen hacernos un regalo, pueden hacerlo a través de estas cuentas bancarias:
        </Typography>
        <ul>
          {bankAccounts.map((account, index) => (
            <li key={index}>
              <Typography variant="body1">
                {account.bankName}: {account.accountNumber}
              </Typography>
            </li>
          ))}
        </ul>
          <Button
              variant="contained"
              onClick={handleConfirm}
              sx={{
                marginTop: '36px',
                marginBottom: '30px',
                fontFamily: 'Arizonia',
                fontSize: '24px',
                padding: '10px 20px',
                backgroundColor: '#FF6347',  // Tomate
                color: '#FFFFFF',  // Blanco
                fontWeight: 'bold',
                transition: 'all 0.3s ease-in-out',  // Transición suave
                ':hover': {
                  backgroundColor: '#FF4500', // Rojo intenso al pasar el ratón,
                  transform: 'scale(1.05)',  // Incremento de tamaño al pasar el ratón
                  boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)',  // Sombra más pronunciada
                },
                animation: 'pulse 2s infinite',  // Animación de parpadeo
              }}
          >
            Obvio que si...
          </Button>



        </div>
      </Box>
  );
};

export default Footer;
