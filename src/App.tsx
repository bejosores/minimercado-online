import React from 'react';

function App() {
  return (
    <div>
      {/* Header */}
      <header>
        <h1>Minimercado Online</h1>
        <nav>
          <ul>
            <li><a href="#produtos">Produtos</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <section id="produtos">
          <h2>Nossos Produtos</h2>
          
          {/* Mercearia */}
          <div>
            <h3>Mercearia</h3>
            <div>
              <div>
                <img src="https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500" alt="Arroz Integral"/>
                <div>
                  <h4>Arroz Integral</h4>
                  <p>Arroz integral tipo 1, pacote 1kg</p>
                  <p>R$ 8,99</p>
                </div>
              </div>
              <div>
                <img src="https://images.unsplash.com/photo-1604671368394-2240d0b1bb6c?w=500" alt="Feijão Carioca"/>
                <div>
                  <h4>Feijão Carioca</h4>
                  <p>Feijão carioca tipo 1, pacote 1kg</p>
                  <p>R$ 7,99</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hortifruti */}
          <div>
            <h3>Hortifruti</h3>
            <div>
              <div>
                <img src="https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500" alt="Maçã Fuji"/>
                <div>
                  <h4>Maçã Fuji</h4>
                  <p>Maçã fuji fresca, kg</p>
                  <p>R$ 9,99</p>
                </div>
              </div>
              <div>
                <img src="https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=500" alt="Banana Prata"/>
                <div>
                  <h4>Banana Prata</h4>
                  <p>Banana prata orgânica, kg</p>
                  <p>R$ 5,99</p>
                </div>
              </div>
            </div>
          </div>

          {/* Laticínios */}
          <div>
            <h3>Laticínios</h3>
            <div>
              <div>
                <img src="https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500" alt="Leite Integral"/>
                <div>
                  <h4>Leite Integral</h4>
                  <p>Leite integral, 1L</p>
                  <p>R$ 4,99</p>
                </div>
              </div>
              <div>
                <img src="https://images.unsplash.com/photo-1624806992066-5ffcf7ca186b?w=500" alt="Queijo Mussarela"/>
                <div>
                  <h4>Queijo Mussarela</h4>
                  <p>Queijo mussarela fatiado, 200g</p>
                  <p>R$ 12,99</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="servicos">
          <h2>Nossos Serviços</h2>
          <div>
            <div>
              <h3>Entrega em Domicílio</h3>
              <p>Entrega em até 2 horas para toda a cidade</p>
              <p>R$ 10,00</p>
            </div>
            <div>
              <h3>Montagem de Cesta Básica</h3>
              <p>Montagem personalizada de cestas básicas</p>
              <p>R$ 15,00</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contato">
        <div>
          <div>
            <div>
              <h3>Sobre Nós</h3>
              <p>Seu minimercado de confiança, oferecendo produtos de qualidade e excelente atendimento desde 2020.</p>
            </div>
            <div>
              <h3>Contato</h3>
              <p>Endereço: Rua Example, 123</p>
              <p>Telefone: (11) 1234-5678</p>
              <p>Email: contato@minimercado.com</p>
            </div>
            <div>
              <h3>Horário de Funcionamento</h3>
              <p>Segunda a Sábado: 8h às 20h</p>
              <p>Domingo: 8h às 12h</p>
            </div>
          </div>
          <div>
            <p>&copy; 2024 Minimercado Online. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;