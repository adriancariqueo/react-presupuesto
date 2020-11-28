import React, { useState } from 'react';
import Header from './component/Header';
import Formulario from './component/Formulario';
import Resumen from './component/Resumen';
import Resultado from './component/Resultado';
import Spinner from './component/Spinner';
import styled from '@emotion/styled';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

function App() {

  const [ resumen, guardarResumen ] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  });

  const [ cargando, setCargando ] = useState(false);

  const { cotizacion, datos } = resumen;

  return (
    <Contenedor>
      <Header
        texto='Cotizador de seguro'
      />

      <ContenedorFormulario>
        <Formulario
          guardarResumen={guardarResumen}
          setCargando={setCargando}
        />

        { cargando ? <Spinner/> : null }

        <Resumen
          datos={datos}
        />
        { !cargando 
          ? <Resultado
          cotizacion={cotizacion}
        />
          : null
      }
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;