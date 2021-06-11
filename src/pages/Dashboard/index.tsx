import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';
import { Container } from './styles';

import { GrFormTrash } from 'react-icons/gr';

interface Cadastro {
  disciplina: string;
  professor: string;
  diasemana: string;
  periodo: string;
  horario: string;
  id: string;
}

const Dashboard: React.FC = () => {
  const history = useHistory();
  const [professores, setProfessores] = useState<Cadastro[]>();

  useEffect(() => {
    api.get(`/teachers`).then((response) => {
      setProfessores(response.data);
    });
  }, []);

  async function deleteProf(id: string) {
    await api.delete(`/teachers/${id}`);
    document.location.reload(true);
    history.push('/');
  }

  return (
    <Container>
      <ul>
        {professores
          ? professores.map((professor) => (
              <li key={professor.disciplina}>
                <Link to={`/details/${professor.professor}`}>
                  {professor.professor}
                </Link>
                <button
                  onClick={() => {
                    deleteProf(professor.id);
                  }}
                >
                  <GrFormTrash />
                </button>
              </li>
            ))
          : ''}
      </ul>
    </Container>
  );
};

export default Dashboard;
