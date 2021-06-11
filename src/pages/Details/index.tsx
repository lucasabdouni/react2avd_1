import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import api from '../../services/api';
import { Container, Disciplinas } from './styles';

interface ProfessoresParametros {
  professor: string;
}

interface Cadastro {
  disciplina: string;
  professor: string;
  diasemana: string;
  periodo: string;
  horario: string;
  id: string;
}

const Details: React.FC = () => {
  let detalhesProfessor;
  const { params } = useRouteMatch<ProfessoresParametros>();
  const [professores, setProfessores] = useState<Cadastro[]>();

  useEffect(() => {
    api.get(`/teachers`).then((response) => {
      setProfessores(response.data);
    });
  }, []);

  if (professores) {
    detalhesProfessor = [];
    detalhesProfessor = professores.filter(
      (prof) => prof.professor === params.professor,
    );
  }

  return (
    <Container>
      <Disciplinas>
        <ul>
          {detalhesProfessor
            ? detalhesProfessor.map((prof, index) => (
                <li key={index}>
                  <span>Professor: {prof.professor}</span>
                  <span>Disciplina: {prof.disciplina}</span>
                  <span>Dia Semana: {prof.diasemana}</span>
                  <span>Periodo: {prof.periodo}</span>
                  <span>Horário: {prof.horario}</span>
                  <Link to={`/alterar/${prof.id}`}>Alterar</Link>
                </li>
              ))
            : ''}
        </ul>
      </Disciplinas>
    </Container>
  );
};

export default Details;

// CRUD - CREATE / READ - UPDATE / DELETE
