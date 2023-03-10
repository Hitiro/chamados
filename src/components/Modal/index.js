
import './modal.css';

import { FiX } from 'react-icons/fi';

export default function Modal({ conteudo, close }) {

  console.log('Conteudo', conteudo);

  return (
    <div className="modal">
      <div className="container">
        <button className="close" onClick={close}>
          <FiX size={23} color="#fff" />
          Voltar
        </button>

        <div>
          <h2>Detalhes do chamado.</h2>

          <div className="row">
            <span>
              Cliente: <a>{conteudo.cliente}</a>
            </span>
          </div>

          <div className="row">
            <span>
              Assunto: <a>{conteudo.assunto}</a>
            </span>
            <span>
              Cadastrado em: <a>{conteudo.createdFormated}</a>
            </span>
          </div>

          <div className="row">
            <span>
              Status: <a style={{ color: '#fff', backgroundColor: conteudo.status === 'Aberto' ? '#5cb85c' : '#999' }}>{conteudo.status}</a>
            </span>
          </div>

          {conteudo.complemento !== '' && (
            <>
              <div className="row">
                <span>
                  <h3>Complemento: </h3>

                  <p>{conteudo.complemento}</p>
                </span>
              </div>
            </>
          )}


        </div>
      </div>
    </div>
  )
}