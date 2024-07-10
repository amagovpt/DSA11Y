import { StatsTable } from "./index";
import { useDarkMode } from 'storybook-dark-mode';
import Documentation from './Documentation.md'

export default {
  title: "components/Molecules/StatsTable",
  component: StatsTable,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: Documentation,
      },
    },
  },
};

const data = {
  data:{
    infoak: {
      A: {
        ok: 12,
        err: 6,
        war: 1
      },
      AA: {
        ok: 5,
        err: 1,
        war: 0
      },
      AAA: {
        ok: 0,
        err: 0,
        war: 2
      },
    },
    metadata: {
      count_results: 27,
    }
  }
}

export const Alternative = () =>
  <StatsTable
    darkTheme={useDarkMode() ? "dark" : "light"}
    data={data}
    ok={"Aceitáveis"}
    warning={"Para ver manualmente"}
    error={"Não aceitáveis"}
    title={" práticas encontradas"}
    caption={"Sumário das práticas avaliadas"}
    type={"Tipo de prática"}
  />;
