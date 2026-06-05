import { Aside } from "./components/Aside";
import { Container } from "./components/Container";
import { Main } from "./components/Main";
import { SearchInput } from "./components/SearchInput";
import { Typography } from "./components/Typography";
import { DailyBudget } from "./components/DailyBudget";
import { SavingsStatus } from "./components/SavingsStatus";
import { Transactions } from "./components/Transactions";
import { Accounts } from "./components/Accounts";
import Card from "./components/Card";
import style from "./app.module.css";

function App() {
  return (
    <Container>
      <Aside />
      <Main>
        <div className={style.container}>
          <SearchInput placeholder="Procure seu dinheiro..." />
          <div>
            <Typography variant="h1">Olá Arthur!</Typography>
            <Typography variant="body">
              Veja como estão suas finanças hoje
            </Typography>
          </div>
          <section className={style.grid}>
            <Card>
              <Card.Header>Orçamento diário disponível:</Card.Header>
              <Card.Body>
                <DailyBudget value={250} />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Progresso da meta financeira</Card.Header>
              <Card.Body>
                <SavingsStatus percent={50} />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Movimentação financeira</Card.Header>
              <Card.Body>
                <Transactions />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Minhas Contas</Card.Header>
              <Card.Body>
                <Accounts />
              </Card.Body>
            </Card>
          </section>
        </div>
      </Main>
    </Container>
  );
}

export default App;
