import React, { useEffect, useState } from 'react';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import api from '../../services/api';
import { Container, Disciplinas, Form } from './styles';

interface ProfessorID {
  id: string;
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
  const { params } = useRouteMatch<ProfessorID>();
  const history = useHistory();
  const [professores, setProfessores] = useState<Cadastro>({} as Cadastro);

  useEffect(() => {
    api.get(`/teachers/${params.id}`).then((response) => {
      setProfessores(response.data);
    });
  }, []);

  async function handleAddProfessores(event: any) {
    event.preventDefault();

    const { target: form } = event;

    const novoCadastro = {
      disciplina: form.disciplina.value,
      professor: form.professor.value,
      diasemana: form.diasemana.value,
      periodo: form.periodo.value,
      horario: form.horario.value,
    };

    await api.put(`/teachers/${params.id}`, novoCadastro);
    history.push('/');

    form.reset();
  }

  return (
    <Container>
      <Disciplinas>
        {professores ? (
          <Form onSubmit={handleAddProfessores}>
            <input
              defaultValue={professores.disciplina}
              name="disciplina"
              type="text"
              placeholder={`${professores.disciplina}`}
            />
            <input
              defaultValue={professores.professor}
              name="professor"
              type="text"
              placeholder={`${professores.professor}`}
            />
            <input
              defaultValue={professores.diasemana}
              name="diasemana"
              type="text"
              placeholder={`${professores.diasemana}`}
            />
            <input
              defaultValue={professores.periodo}
              name="periodo"
              type="text"
              placeholder={`${professores.periodo}`}
            />
            <input
              defaultValue={professores.horario}
              name="horario"
              type="text"
              placeholder={`${professores.horario}`}
            />
            <button type="submit">Enviar</button>
          </Form>
        ) : (
          ''
        )}
      </Disciplinas>
    </Container>
  );
};

export default Details;

// CRUD - CREATE / READ - UPDATE / DELETE
