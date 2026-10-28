// Dados do Termômetro da Qualidade. Atualizar toda semana: acrescentar a semana nova no topo de SEMANAS
// e a linha nova em SERIE. Faixas provisórias (calibradas em 20/10/2026 com a série desde 09/09).
// geral.foco = bullets "o que fazer essa semana". acao = {texto, dono, prazo} em indicador crítico
// e em agente em atenção/sem dado; sem acao, a página mostra "sem dono e sem prazo".
window.DADOS = {
  semanas: [
    {
      periodo: {inicio: "2026-10-14", fim: "2026-10-20"},
      gerado_em: "2026-10-28",
      geral: {
        status: "atencao",
        frase: "Nenhuma trilha está crítica. A Fiscalização está saudável: as ocorrências entraram e foram aplicadas em dia, e nenhum card está aberto há mais de 30 dias. Avaliações e Reclame Aqui estão em atenção, perto do limite das faixas.",
        foco: [
          "Avaliações: a nota média do Airbnb na semana ficou em 4,77, abaixo da meta de 4,80.",
          "Reclame Aqui: a nota estimada da marca está em 7,15. Faltam 0,15 para cair da faixa Bom para Regular."
        ]
      },
      trilhas: [
        {
          k: "Trilha 1", nome: "Avaliações", status: "atencao",
          frase: "A nota da semana está um pouco abaixo da meta de 4,80, e a parcela de imóveis acima de 4,80 segue estável, perto de 64%.",
          indicadores: [
            {nome: "Nota média do Airbnb na semana", valor_txt: "4,77", anterior_txt: "4,79", status: "atencao",
             explicacao: "785 avaliações de hóspedes com checkout na semana. O número ainda cresce, porque as avaliações chegam dias depois do checkout.",
             faixa: "verde ≥ 4,80 · amarelo 4,75 a 4,80 · vermelho < 4,75", fonte: "Nekt · reviews_comentarios"},
            {nome: "Avaliações do Airbnb com nota abaixo de 4", valor_txt: "4,5%", anterior_txt: "4,3%", status: "ok",
             explicacao: "De cada 100 avaliações da semana, 4 ou 5 deram nota de 1 a 3. Em setembro a média foi de 4,8%.",
             faixa: "verde ≤ 4,5% · amarelo até 5,5% · vermelho > 5,5%", fonte: "Nekt · reviews_comentarios"},
            {nome: "Imóveis do Airbnb com nota 4,80 ou mais", valor_txt: "64,6%", anterior_txt: "64,0%", status: "atencao",
             explicacao: "1.435 de 2.220 imóveis têm média de 4,80 ou mais nos últimos 90 dias (só imóveis com 3 avaliações ou mais). O número ficou entre 63% e 64,6% nas últimas seis semanas.",
             faixa: "verde ≥ 65% · amarelo 63% a 65% · vermelho < 63%", fonte: "Nekt · reviews_comentarios"},
            {nome: "Contestações aceitas", valor_txt: "59,8%", status: "info",
             explicacao: "No acumulado desde março, 226 das 378 contestações decididas foram aceitas. A taxa da semana ainda não é confiável: a data da decisão só passou a ser gravada em 15/10, e o lote da segunda tentativa foi lançado todo em 20/10.",
             fonte: "Lovable de comentários · pedidos_contestacao"}
          ]
        },
        {
          k: "Trilha 2", nome: "Reclame Aqui", status: "atencao",
          frase: "Nenhuma reclamação está sem resposta há mais de 5 dias. A nota da marca está na faixa Bom do Reclame Aqui, a 0,15 de cair para Regular.",
          indicadores: [
            {nome: "Reclamações sem resposta há mais de 5 dias", valor_txt: "0", status: "ok",
             explicacao: "Há 3 reclamações abertas. A mais antiga completou 5 dias hoje; as outras duas chegaram em 19 e 20/10. Em setembro, a resposta levou em mediana 4 dias.",
             faixa: "verde 0 · amarelo 1 · vermelho 2 ou mais", fonte: "Lovable de comentários · reclame_aqui_cards"},
            {nome: "Nota estimada da marca no Reclame Aqui", valor_txt: "7,15", status: "atencao",
             explicacao: "Nota calculada para 20/04 a 20/10, com 91 reclamações e 96,7% delas respondidas. A faixa Bom do Reclame Aqui vai de 7,0 a 7,9.",
             faixa: "verde ≥ 7,5 · amarelo 7,0 a 7,5 · vermelho < 7,0", fonte: "Planilha Controle Reclame Aqui"},
            {nome: "Reclamações novas na semana", valor_txt: "5", anterior_txt: "1", status: "info",
             explicacao: "Em setembro chegaram de 2 a 4 reclamações por semana.",
             fonte: "Lovable de comentários · reclame_aqui_cards"}
          ]
        },
        {
          k: "Trilha 3", nome: "Fiscalização", status: "ok",
          frase: "O objetivo é enviar e aplicar ocorrências. Nesta semana as fontes mandaram bem, a aplicação está em dia e nenhum card está aberto há mais de 30 dias. A sexta sem ocorrência foi reposta no domingo.",
          indicadores: [
            {nome: "Ocorrências válidas recebidas na semana", valor_txt: "79", anterior_txt: "42", status: "ok",
             explicacao: "Comentários mandaram 28, Gestor Regional 19, Treinamento 15 e Implantação 14. Desde 09/09, o normal fica entre 42 e 109 por semana.",
             faixa: "verde ≥ 60 · amarelo 40 a 59 · vermelho < 40", fonte: "Lovable de ocorrências"},
            {nome: "Ocorrências aplicadas nos últimos 14 dias", valor_txt: "61", anterior_txt: "42", status: "ok",
             explicacao: "48 aplicadas nesta semana e 13 na anterior. A aplicação acontece em lotes, por isso a conta é feita em 14 dias.",
             faixa: "verde ≥ 40 · amarelo 20 a 39 · vermelho < 20, ou 7 dias seguidos sem aplicação", fonte: "Lovable de ocorrências · histórico de etapas"},
            {nome: "Fontes principais que mandaram ocorrência", valor_txt: "3 de 3", status: "ok",
             explicacao: "Comentários, Implantação e Gestor Regional (vistoria) mandaram ocorrência na semana. Desde 09/09 nenhuma das três zerou.",
             faixa: "vermelho se alguma zerar na semana · amarelo se Comentários mandar menos de 5", fonte: "Lovable de ocorrências"},
            {nome: "Dias úteis sem nenhuma ocorrência criada", valor_txt: "1", status: "ok",
             explicacao: "Na sexta, 16/10, não entrou nenhuma ocorrência. Não foi falha: o time estava em processos prioritários e os agentes ainda estavam sendo finalizados. As ocorrências foram repostas no domingo, 18/10, com 6 cards de Comentários e de Treinamento.",
             faixa: "verde nenhum, ou dia reposto · vermelho dia sem ocorrência e sem reposição", fonte: "Lovable de ocorrências"},
            {nome: "Ocorrências decididas que viraram pontuação", valor_txt: "51%", anterior_txt: "25%", status: "ok",
             explicacao: "Das ocorrências decididas na semana, 48 pontuaram e 46 tiveram justificativa válida. No período desde agosto, a média é 40%.",
             faixa: "verde ≥ 40% · amarelo 25% a 39% · vermelho < 25%", fonte: "Lovable de ocorrências · histórico de etapas"},
            {nome: "Cards abertos há mais de 30 dias sem decisão", valor_txt: "0", status: "ok",
             explicacao: "Em 20/10, nenhum card em Nova Ocorrência, Primeiro Contato ou Segundo Contato tinha mais de 30 dias. Os 85 cards da coluna Aplicação de pontuação, de julho, não contam como abertos: essa é a etapa final da régua v1, e todos já têm a pontuação aplicada.",
             faixa: "verde nenhum · amarelo 1 a 10 · vermelho mais de 10", fonte: "Lovable de ocorrências"},
            {nome: "Franquias perto da multa e já no limite", valor_txt: "14 · 3", anterior_txt: "16 · 0", status: "info",
             explicacao: "14 franquias estão a 4 pontos ou menos do limite. Três passaram do limite nesta semana e aguardam o registro da multa.",
             fonte: "Lovable de ocorrências · v_acumulador_franquia"},
            {nome: "Franquias com ocorrência aplicada no mês", valor_txt: "31", status: "info",
             explicacao: "Em setembro foram 68 das 120 franquias ativas, e outubro ainda está pela metade. Hoje 26 franquias ativas estão há 60 dias ou mais sem nenhuma ocorrência válida, 10 delas sem nenhuma desde o início. É onde pode haver ponto cego.",
             faixa: "mensal: verde ≥ 50% das ativas · vermelho < 35%", fonte: "Lovable de ocorrências · franquias_porte"}
          ]
        },
        {
          k: "Trilha 4", nome: "Monitoramento e automações", status: "atencao",
          frase: "As automações principais rodaram nos últimos dias. Algumas fontes de ocorrência que chegam em lote estão sem card há mais de uma semana.",
          indicadores: [
            {nome: "Agentes acompanhados com registro nos últimos 3 dias", valor_txt: "6 de 8", status: "atencao",
             explicacao: "Os dois sem registro são o A8 e o A9. O A9 já foi resolvido. O A8 está em conferência. O detalhe está na tabela Saúde das automações.",
             faixa: "verde todos · amarelo 1 a 2 sem registro · vermelho 3 ou mais", fonte: "Lovables de ocorrências e de comentários"},
            {nome: "Processos da arquitetura automáticos ou mistos", valor_txt: "24 de 49", status: "info",
             explicacao: "13 processos são automáticos, 11 são mistos e 25 ainda são manuais. A IA participa de 25 dos 49. Dos 17 agentes, 12 estão no ar, 1 em validação e 4 em desenho.",
             fonte: "Arquitetura de processos v6"}
          ]
        }
      ],
      saude: [
        {id: "A2", nome: "Reclame Aqui → card", processo: "4.1", ultimo_txt: "20/10", status: "ok", nota: "5 cards criados na semana."},
        {id: "A8", nome: "Ocorrências de realocação e cancelamento", processo: "5.1", ultimo_txt: "08/10", status: "atencao", nota: "Só 3 cards desde o início. O time de Atendimento ao Hóspede já ajustou o envio.",
         acao: {texto: "Conferir pela Caça às Ocorrências se ficaram casos de realocação e cancelamento sem card.", dono: "Victoria", prazo: "2026-10-30"}},
        {id: "A9", nome: "Ocorrências de check-in", processo: "5.1", ultimo_txt: "15/10", status: "ok", nota: "Resolvido. Os casos de check-in entravam como Atendimento ao Hóspede. O time de Atendimento ao Hóspede corrigiu a falha, e as ocorrências que faltavam foram recuperadas pela Caça às Ocorrências."},
        {id: "A11", nome: "Abertura de chamado na Central de Atividades", processo: "5.4", ultimo_txt: "19/10", status: "ok", nota: "61 cards com chamado entraram em Primeiro Contato na semana."},
        {id: "A12", nome: "Bot do chat do Sapron", processo: "5.5 e 5.6", ultimo_txt: "20/10", status: "ok", nota: "81 sugestões na semana, ainda em modo sombra. 9 aguardam revisão."},
        {id: "A13", nome: "Motor de acúmulo de pontos", processo: "6.1 e 6.2", ultimo_txt: "contínuo", status: "ok", nota: "Calculando iminência e limite normalmente."},
        {id: "A14", nome: "Alerta de multas no Slack", processo: "6.3", ultimo_txt: "14/10", status: "ok", nota: "Só dispara com multa nova; a última foi registrada em 14/10."},
        {id: "—", nome: "Ocorrências de Comentários e de Gestor Regional", processo: "5.1", ultimo_txt: "20/10", status: "ok", nota: "Cards entrando todo dia útil. A sexta, 16/10, foi reposta no domingo, 18/10."}
      ],
      ressalvas: [
        "As faixas são provisórias. Foram calibradas com a série de 09/09 a 20/10, depois da troca da régua de ocorrências.",
        "Todo indicador crítico e todo agente em atenção ou sem dado precisa de uma próxima ação com dono e prazo. Quando ela não existe, o termômetro mostra o aviso \"sem dono e sem prazo definidos\".",
        "Na Fiscalização, volume alto é bom sinal. O crítico é a ocorrência deixar de entrar ou de ser aplicada, porque indica que um processo parou de enxergar a falha.",
        "As avaliações são contadas pela data de checkout. A semana mais recente sempre aparece menor e cresce nos dias seguintes.",
        "O prazo de 48 horas é da franquia para responder. Saber se ela respondeu no prazo depende do chat da Central de Atividades do Sapron, que ainda não entra no termômetro.",
        "A porcentagem de avaliações respondidas ainda não entra, porque a base de avaliações não registra a resposta ao hóspede."
      ]
    }
  ],

  // Evolução semanal (semanas de quarta a terça). status: ok | atencao | critico
  serie: {
    semanas: ["09/09–15/09", "16/09–22/09", "23/09–29/09", "30/09–06/10", "07/10–13/10", "14/10–20/10"],
    linhas: [
      {nome: "Nota média do Airbnb", valores: ["4,80","4,77","4,78","4,74","4,79","4,77"], status: ["ok","atencao","atencao","critico","atencao","atencao"]},
      {nome: "Avaliações do Airbnb abaixo de 4", valores: ["4,6%","5,2%","4,4%","5,9%","4,3%","4,5%"], status: ["atencao","atencao","ok","critico","ok","ok"]},
      {nome: "Imóveis do Airbnb com 4,80 ou mais", valores: ["64,4%","64,0%","63,7%","63,0%","64,0%","64,6%"], status: ["atencao","atencao","atencao","atencao","atencao","atencao"]},
      {nome: "Ocorrências válidas recebidas", valores: ["58","71","109","81","42","79"], status: ["atencao","ok","ok","ok","atencao","ok"]},
      {nome: "Ocorrências aplicadas em 14 dias", valores: ["65","126","81","36","42","61"], status: ["ok","ok","ok","atencao","ok","ok"]},
      {nome: "Decididas que viraram pontuação", valores: ["61%","68%","26%","34%","25%","51%"], status: ["ok","ok","atencao","atencao","atencao","ok"]}
    ]
  }
};
