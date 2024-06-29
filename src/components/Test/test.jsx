import * as React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';

function WeddingInvitation() {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 500,
        margin: 'auto',
        textAlign: 'center',
        padding: 2,
        backgroundColor: '#fff',
        boxShadow: 2,
      }}
    >
      <Card sx={{ p: 3 }}>
        <CardContent>
          <Typography variant="h4" sx={{ color: '#d32f2f', mb: 2 }}>
            Mary & Lucho se casan!
          </Typography>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Sábado 28 de septiembre de 2024
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            La Casona Eventos a partir de las 21 hs
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Nos casamos en la iglesia Cristo Obrero a las 19:30 hs
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            No te lo pierdas, ¡será una noche inolvidable!
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default WeddingInvination;