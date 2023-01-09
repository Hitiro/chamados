
import Header from '../../components/Header';
import Title from '../../components/Title';

import './new.css';
import { FiPlusCircle } from 'react-icons/fi';

export default function New() {


  function handleRegister(e) {
    e.preventDefault();
    alert('handleRegister')
  }
  return (
    <div>
      <Header />
      <div className="content">
        <Title name="Novo chamado">
          <FiPlusCircle size={25} />
        </Title>
        <div className="container">

          <form className="form-profile" onSubmit={handleRegister}>
            <label>Cliente</label>
            <select>
              <option key={1} value={1}> Sujeito Dev</option>
              <option key={2} value={2}> Sujeito Programador</option>
            </select>
            <label>Assunto</label>
            <select>
              <option value="Suporte">Suporte</option>
              <option value="Visita Técnica">Visita Técnica</option>
              <option value="Financeiro">Financeiro</option>
            </select>
            <label>Status</label>
            <div className="status">
              <input
                type="radio"
                name="radio"
                value="Aberto"
              />
              <span>Em aberto</span>

              <input
                type="radio"
                name="radio"
                value="Progresso"
              />
              <span>Em progresso</span>

              <input
                type="radio"
                name="radio"
                value="Atendido"
              />
              <span>Atendido</span>
            </div>

            <label>Complemento</label>
            <textarea
              type="text"
              placeholder="Descreva seu problema (opcional)"
            />

            <button type="submit">Salvar</button>

          </form>

        </div>
      </div>
    </div>
  )
}