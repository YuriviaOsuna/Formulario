import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio, { RadioProps } from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function Formulario() {
  const [text, setText] = useState('');
  return (
    <div className='contenedor-formulario'>

      <div className='logo'></div>
      <div className='contenedor-encabezado'>
      </div>

      <div className='contenedor-datos'>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '55ch' },
          }}
          noValidate
          autoComplete="off"
        >

          <TextField
            required
            limit="3"
            id="nombreCompleto"
            label="Nombre Completo"
          />

          <TextField
            required
            id=""
            label="Apellido Paterno"
          />
          <TextField
            required
            id="outlined-required"
            label="Apellido Materno"
          />

          <TextField
            required
            id="outlined-required"
            label="Telefono"
          />
          <br></br>
          <TextField
          required
            value={text}
            onChange={event => setText( event.target.value )}
            error={text === ""}
            helperText={text === "" ? 'Empty!' : ' '}
            label="Correo Electronico"
          />

          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Genero</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="masculino" control={<Radio />} label="Masculino" />
              <FormControlLabel value="femenino" control={<Radio />} label="Femenino" />
              <FormControlLabel value="otro" control={<Radio />} label="Prefiero No Decirlo" />
            </RadioGroup>
          </FormControl>

          <br></br>

          <Button variant="contained">Enviar Datos</Button>

        </Box>

      </div>

    </div>
  );
}

export default Formulario;