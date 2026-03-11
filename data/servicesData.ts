import { 
  FileCheck2, TreePine, Map, ClipboardList, TrendingUp, ShieldCheck, 
  Bird, Trees, Sprout, Recycle, Volume2, Leaf, 
  FileDigit, BookOpen, Globe2, Pickaxe 
} from 'lucide-react';

export const servicesData = [
  {
    id: "licenciamento-ambiental",
    slug: "licenciamento-ambiental",
    title: "Licenciamento Ambiental (LP LI LO)",
    icon: FileCheck2,
    shortDescription: "Obtenha licenças Prévia, de Instalação e de Operação com segurança jurídica e agilidade em Santa Catarina.",
    content: {
      whatIs: "O <strong>Licenciamento Ambiental</strong> é o instrumento da Política Nacional de Meio Ambiente que regula a instalação, ampliação e operação de empreendimentos potencialmente poluidores. Na Sáuria, conduzimos todo o rito trifásico estabelecido pela CONAMA 237/97 (Licença Prévia, de Instalação e de Operação), garantindo que as exigências do IMA/SC ou órgãos de atuação local sejam plenamente atendidas por meio de memoriais técnicos e estudos balizados e validados com responsabilidade técnica cruzada.",
      whenNeeded: "É indispensável desde a fase de planejamento estrutural do projeto até sua plena operação. A supressão das etapas licitatórias constitui crime ambiental, gerando embargos sumários e paralisação iminente do canteiro. A Licença Prévia atesta a viabilidade; a de Instalação autoriza o início das obras baseadas no PBA (Plano Básico Ambiental); e a de Operação consolida o início das atividades após verificação do cumprimento de condicionantes.",
      steps: [
        { title: "Parametrização do Termo de Referência", desc: "Varredura oficial de todas as condicionantes exigidas no formulário do órgão licenciador (SINFAT/SINAFLOR)." },
        { title: "Elaboração de Estudos Anexos", desc: "Produção de PGRS, projetos hidrossanitários e planta planialtimétrica para fundamentação tática." },
        { title: "Protocolo e Gestão Processual", desc: "Instrução no diretório estadual com defesas de corpo técnico para não incidência de retrabalho ou paralização." }
      ]
    }
  },
  {
    id: "eas",
    slug: "estudo-ambiental-simplificado-eas",
    title: "Estudo Ambiental Simplificado (EAS)",
    icon: ClipboardList,
    shortDescription: "Estudos simplificados para empreendimentos de baixo impacto ambiental.",
    content: {
      whatIs: "O <strong>EAS (Estudo Ambiental Simplificado)</strong> foi desenhado para empreendimentos cujo potencial de degradação é considerado baixo a médio, suprimindo a necessidade complexa de um EIA/RIMA, porém requerendo um diagnóstico preciso da área de implantação. A Sáuria emprega cartografia de ponta e biólogos de campo para consolidar o relatório, determinando fragilidades do ecossistema e propondo métodos de mitigação viáveis.",
      whenNeeded: "Geralmente instado durante o processo de Licença Prévia (LP) para operações como loteamentos de menor porte, postos de combustíveis ou galpões logísticos. O órgão ambiental municipal ou o IMA/SC, ao observar uma possível supressão de vegetação no estágio inicial sustentará a solicitação do EAS como condição sine qua non para o prosseguimento da anuência urbanística.",
      steps: [
        { title: "Levantamento Tático Primário", desc: "Cruzamento rápido das características do empreendimento com os mapas de restrição ecológica municipal e estadual." },
        { title: "Matriz de Impactos (Avaliação Qualitativa)", desc: "Construção de fluxogramas de impacto indicando vetores reversíveis versus irreversíveis e suas devidas tratativas." },
        { title: "Programas Ambientais de Baixa Complexidade", desc: "Plano objetivo focado na contenção de poluição sonora, atmosférica e resíduos de construção civil (RCC)." }
      ]
    }
  },
  {
    id: "eiv",
    slug: "estudo-impacto-vizinhanca-eiv",
    title: "Estudo de Impacto de Vizinhança (EIV)",
    icon: Map,
    shortDescription: "Análise dos impactos urbanísticos e ambientais de empreendimentos no entorno local.",
    content: {
      whatIs: "O <strong>EIV (Estudo de Impacto de Vizinhança)</strong> tem enfoque profundamente sócio-espacial. É a peça técnica (Estatuto da Cidade / Lei 10.257) que audita a sobrecarga no sistema viário, alteração de microclima, sombreamento e impactos mercadológicos sobre a área vizinha à construção. A equipe de engenheiros e arquitetos da Sáuria modela o raio de influência direta para comprovar os reflexos demográficos.",
      whenNeeded: "Vital para aprovação de Alvarás de Construção de shopping centers, complexos logísticos, grandes igrejas, estádios, supermercados, ou edifícios de alta densidade populacional inseridos na malha urbana. O Plano Diretor do Município é quem rege o crivo do EIV. A omissão impede o habite-se e, em alguns casos, pode incitar Ação Civil Pública (ACP).",
      steps: [
        { title: "Zoneamento e Demografia", desc: "Entendimento da capacidade de suporte viário e do uso e ocupação do solo nos perímetros limitantes." },
        { title: "Projeção Tridimensional", desc: "Modelagem paramétrica avaliando índices de insolação, ventos térmicos e sombreamento em terrenos confrontantes." },
        { title: "Audiência Pública Sustentável", desc: "Fornecemos toda a oratória técnica para apresentação e ratificação do projeto frente às associações de bairro." }
      ]
    }
  },
  {
    id: "rap",
    slug: "relatorio-ambiental-previo-rap",
    title: "Relatório Ambiental Prévio (RAP)",
    icon: FileDigit,
    shortDescription: "Avaliação inicial para atividades potencialmente poluidoras em fase de planejamento.",
    content: {
      whatIs: "O <strong>Relatório Ambiental Prévio (RAP)</strong> age como uma avaliação inicial cautelar para instruir as agências sobre o nível de impacto geológico, hídrico e atmosférico do local antes mesmo do delineamento da fábrica ou pavimentação. É menos invasivo que o EIA, focando majoritariamente no zoneamento restritivo (existência de APPs, corpos hídricos outorgáveis ou cavernas).",
      whenNeeded: "Utilizado como peça-chave no requerimento de Licença Prévia (LP) para tipologias que fogem do rito simplificado (EAS), mas que as normativas do estado não as enquadram como obrigatoriedade de RIMA. Obras viárias estaduais de conexões locais, extração mineral em leitos restritos e expansões parciais das atividades em perímetro agroindustrial necessitam do RAP.",
      steps: [
        { title: "Reconhecimento Geotécnico", desc: "Determinação das bacias que abastecem a região, lençol freático e grau de erodibilidade dos solos locais." },
        { title: "Aferição de APP (Área de Preservação)", desc: "Fixação métrica definitiva atestando as margens protetoras por via de topografia de precisão." },
        { title: "Relatório de Exigibilidade", desc: "Elaboração de manual demonstrando que o baixo potencial da obra dispensa o rigor estendido do EIA/RIMA." }
      ]
    }
  },
  {
    id: "eva",
    slug: "estudo-viabilidade-ambiental-eva",
    title: "Estudo de Viabilidade Ambiental (EVA)",
    icon: TrendingUp,
    shortDescription: "Análise técnica para garantir a viabilidade ambiental de novos projetos.",
    content: {
      whatIs: "O <strong>EVA (Estudo de Viabilidade Ambiental)</strong> é a due diligence preferida do construtor e investidor. Antes mesmo da aquisição de uma gleba, a Sáuria varre o passivo do terreno, descobrindo contaminantes enterrados, resquícios de espécies endêmicas intocáveis e a real percentagem de aproveitamento de área útil que a legislação do IMA/SC vai permitir faturar.",
      whenNeeded: "No exato instante decisivo entre 'comprar ou não comprar' um lote para incorporação ou expansão do parque logístico/fabril. Apresentar fundos viciados ou terrenos repletos de floresta atlântica em estágio clímax pode afundar o investimento antes mesmo do seu nascimento operativo.",
      steps: [
        { title: "Varredura de Passivos (Phase I e II)", desc: "Sondagens expeditas objetivando afastar históricos industriais mortos e solo repletamente contaminado por metais." },
        { title: "Análise de Restrição de Uso (ARU)", desc: "Mapeamento percentual mostrando matematicamente qual é área edificável líquida livre de embargos." },
        { title: "Orçamento de Mitigação", desc: "Calculo prévio das despesas com compensação ambiental para embutir na viabilidade de fluxo de caixa." }
      ]
    }
  },
  {
    id: "eca",
    slug: "estudo-conformidade-ambiental-eca",
    title: "Estudo de Conformidade Ambiental (ECA)",
    icon: ShieldCheck,
    shortDescription: "Regularização de empresas operando sem o devido licenciamento ambiental prévio.",
    content: {
      whatIs: "O <strong>ECA (Estudo de Conformidade Ambiental)</strong> atua como um 'resgate do passado'. Trata-se do instrumento para instrução da Licença Ambiental de Operação Corretiva (LOC), que formaliza um diagnóstico exato dos impactos que a usina/fábrica já causou enquanto esteve operando à margem da lei ou com portarias antigas vencidas.",
      whenNeeded: "É o escudo jurídico em cenários que uma indústria é multada por estar funcionando sem Licença de Operação, ou quando é solicitada a regularização após assinaturas de um Termo de Ajustamento de Conduta (TAC) expedido pelo Ministério Público. Impede o fechamento definitivo da planta produtiva validando ajustes de efluentes, ar e ruído.",
      steps: [
        { title: "Auditoria Forense Ambiental", desc: "Mapeamento do atual sistema de efluentes sanitários / industriais da operação e da eficiência das barreiras de ruído." },
        { title: "Plano de Recuperação Integrado", desc: "Termo de compromisso em níveis de reabilitação e implantação de tratamentos como Filtros de Manga, Caixas Separadoras etc." },
        { title: "Instrução Plena pro Órgão Controlador", desc: "Depósito probatório comprovando que, mesmo sem licença original, as adaptações atuais estão em plena conformidade perante os índices VMP." }
      ]
    }
  },
  {
    id: "inventario-fauna",
    slug: "inventario-de-fauna",
    title: "Inventário de Fauna",
    icon: Bird,
    shortDescription: "Levantamento detalhado da biodiversidade animal em áreas de interesse.",
    content: {
      whatIs: "O <strong>Inventário e Monitoramento de Fauna</strong> quantifica e classifica espécies silvestres no ecossistema impactado. Equipes especializadas de biólogos da Sáuria realizam avaliações taxonômicas com uso de redes de neblina (avifauna), armadilhas pitfall (herpetofauna), parcelas de rastro (mastofauna) garantindo representatividade em laudo científico puro.",
      whenNeeded: "Requisito obrigatório do SINAFLOR para supressão de Mata Atlântica e cerrado envolvendo a instalação de gasodutos, parques eólicos, ferrovias e loteamentos próximos a bolsões verdes. Requer Autorização Prévia para Captura, Coleta e Transporte (ABIO) para translocação animal, impedindo agravos à Lei de Crimes Ambientais contra a biodiversidade.",
      steps: [
        { title: "Campanhas Sazonais (Seca e Chuva)", desc: "Alocação de analistas em campo por múltiplos ciclos para registrar comportamento e nidificação da avifauna e mastofauna." },
        { title: "Avaliação de Risco (Listas Vermelhas)", desc: "Aferição de espécies enquadradas como Ameaçadas de Extinção no portal IUCN e normativas do MMA/IBAMA." },
        { title: "Programa de Subir / Translocação (Resgate)", desc: "Planejamento físico do afugentamento durante a batida florestal para desvio seguro dos espécimes abrigados na supressão vegetal." }
      ]
    }
  },
  {
    id: "inventario-florestal",
    slug: "inventario-florestal",
    title: "Inventário Florestal",
    icon: Trees,
    shortDescription: "Análise quali-quantitativa da vegetação para supressão ou conservação florestal.",
    content: {
      whatIs: "O <strong>Inventário Florestal Qualitativo e Quantitativo</strong> estabelece o censo arbóreo de um maciço vegetal. Apoiados por Engenheiros Florestais, medimos o Diâmetro à Altura do Peito (DAP), a fitossociologia, o estágio sucessional do dossel e quantificamos a volumetria cúbica legal (estere) disponível em biomas, predominantemente em Mata Atlântica.",
      whenNeeded: "Toda supressão de vegetação nativa em Santa Catarina, por menor que seja o lote, requer a solicitação de uma Autorização de Supressão de Vegetação (AuSV). O IMA ou Defesa Civil se apoiarão exclusivamente nos laudos do nosso Inventário para emitirem portarias, isentando multas posteriores na averbação da obra.",
      steps: [
        { title: "Levantamento por Amostragem ou Censo 100%", desc: "Mapeamento contendo as famílias, as geocoordenadas exatas das árvores ameaçadas e avaliação visual da sanidade dos lenhos." },
        { title: "Cálculo Fitossociológico e de Volumetria", desc: "Processamento por equações algométricas do dossel garantindo estimativa rigorosa da madeira em metros cúbicos para destinação (DOF)." },
        { title: "Plano de Compensação Financeiro e Físico", desc: "Elaboração da métrica de proporção (1 para 3 ou correlatas) e a negociação para pagamento por serviços ecossistêmicos compensatórios." }
      ]
    }
  },
  {
    id: "prad",
    slug: "projeto-recuperacao-area-degradada-prad",
    title: "Projeto de Recuperação de Área Degradada (PRAD)",
    icon: Sprout,
    shortDescription: "Técnicas especializadas para restaurar e recuperar áreas degradadas.",
    content: {
      whatIs: "O <strong>PRAD (Projeto de Recuperação de Área Degradada)</strong> é o instrumento de reparação física em locais cuja resiliência biológica foi destruída por aterros indevidos, taludes de risco, derramamentos químicos ou garimpos sem mitigação. Envolve engenharia e técnica agronômica corretiva de alta especificidade (hidrossemeadura, bioengenharia de solos e transplante foliar).",
      whenNeeded: "É injungido em duas vertentes severas: ao encerramento programado de minerações e usinas industriais atestando compromisso de retorno do solo ao seu ciclo produtivo; ou ativamente, após um Ministério Público (ou TAC) constatar desmatamentos ilegais na área construída, ordenando a recomposição na exata metragem dos danos gerados.",
      steps: [
        { title: "Levantamento Físico-Químico Retroativo", desc: "Decodificação de como o ecossistema funcionava via mapas históricos da área pré-impacto." },
        { title: "Elaboração de Manejo de Solo (Terraplanagem Verde)", desc: "Estabilização estrutural em talude utilizando mantas orgânicas, gabiões, telas para erradicação da lixiviação." },
        { title: "Monitoramento Constante In-Loco", desc: "Afastamento progressivo após campanhas semestrais até estabilização natural plena (Self-healing Ecológico)." }
      ]
    }
  },
  {
    id: "gestao-residuos",
    slug: "gestao-de-residuos",
    title: "Gestão de Resíduos (PGRS / PGRCC)",
    icon: Recycle,
    shortDescription: "PGRS e soluções inteligentes para correta destinação de resíduos industriais e urbanos.",
    content: {
      whatIs: "A <strong>Gestão Avançada de Resíduos (PGRS / PGRCC / PGRSS)</strong> documenta categoricamente o fluxo físico do subproduto da sua atividade. A equipe da Sáuria mapeia da origem ao destino (Aterro industrial, co-processamento ou reuso) todas as classes (Classe I e II, perigosos industriais) auditando manifestos MTR e laudos dos tratadores finais.",
      whenNeeded: "O PGRS é basilar para todas as operações industriais e centros de distribuição. O PGRCC foca na triagem dos detritos gerados pela Construção Civil (Esmagamento de concretos x madeiras contendo tintas). Os órgãos repudiam e multam construtoras cujo MTR online de Santa Catarina apresente déficits de volumetria de saída versus a nota fiscal de entrada de matérias primas.",
      steps: [
        { title: "Quantificação Per Capta (Geração)", desc: "Cálculo vetorial dos pesos de resíduos Classe I, IIA e IIB projetado da taxa de produção média fabril e de ocupação dos postos de trabalho." },
        { title: "Operação da Plataforma MTR do Estado", desc: "Lançamentos e emissões automáticas assegurando ao Ministério do Meio Ambiente a idoneidade da cadeia de custódia do descarte." },
        { title: "Engenharia de Adequação da Área de Depósito", desc: "Criação de platôs alvenarizados, coberto com escoamento de chorume contidos, evitando penalizações nas Blitzes surpresas da PMA/SC." }
      ]
    }
  },
  {
    id: "pmr",
    slug: "plano-monitoramento-ruidos-pmr",
    title: "Plano de Monitoramento de Ruídos (PMR)",
    icon: Volume2,
    shortDescription: "Avaliação e adequação de emissões sonoras industriais e urbanas.",
    content: {
      whatIs: "O <strong>PMR (Plano de Monitoramento de Ruídos Ambientais)</strong> assegura a conformidade da acústica propagada. Profissionais da Sáuria equipados com medidores calibrados à RBC (Rede Brasileira de Calibração) efetuam metodologias fundamentadas nas balizas da NBR 10.151, extraindo decibéis exatos gerados por chillers industriais, bate-estacas ou movimentação siderúrgica nos curvos e limites da propriedade.",
      whenNeeded: "Crucial no Licenciamento de galpões e indústrias que possuam geradores termelétricos ruidosos e frotas de logística pesada, em zonas vizinhas à área ocupada dominantemente por unidades residenciais. Relatórios negativos neste âmbito podem compelir à redução imediata dos horários de carga da usina com decretação de silêncio liminar judicial.",
      steps: [
        { title: "Auditoria Acústica Forense (Diurno e Noturno)", desc: "Aferições ao redor do lote utilizando Sonômetros Classe 1 eliminando frequências parasitas de vento e chuva perante as balizas NBR." },
        { title: "Mapeamento em Isolinhas (HeatMap Acústico)", desc: "Desenho georreferenciado para evidenciar quais faces dos moradores sentem níveis maiores, ajudando construtoras no foco isolante." },
        { title: "Adequação Isolante Ativa", desc: "Elaboração do planejamento com absorciômetros, enclausuramento das cabines motrizes e biombos acústicos lineares dimensionados a laser." }
      ]
    }
  },
  {
    id: "sinaflor",
    slug: "sinaflor",
    title: "SINAFLOR",
    icon: Leaf,
    shortDescription: "Gestão e controle florestal integrados ao Sistema Nacional de Controle da Origem dos Produtos Florestais.",
    content: {
      whatIs: "O <strong>SINAFLOR (Sistema Nacional de Controle da Origem dos Produtos Florestais)</strong> é a infraestrutura tecnológica do Governo (IBAMA). A condução processual por dentro desta plataforma é rigorosíssima, onde nossos Engenheiros Florestais importam dados brutos das planilhas biométricas, shapefiles, cálculos de DAP de corte para autorização unificada nacional de desmate ou manejo sustentado.",
      whenNeeded: "Requerido nacionalmente, de forma irrevogável a partir de normativas recentes para se obter toda e qualquer liberação referente à ASV (Autorização de Supressão Vigente) ou emissão de notas de transporte atestando madeira idônea e lícita, protegendo a usina beneficiadora contra compra por contrabando de recursos.",
      steps: [
        { title: "Processamento de Coordenadas de Erro (GPS)", desc: "Conversão do memorial descritivo nas UTMs do projeto validando malhas e afastando problemas topológicos rejeitados no IBAMA." },
        { title: "Vinculação via Certificado Digital", desc: "Inclusão legal e técnica das procurações responsabilizando criminalmente nossa aprovação técnica do plano." },
        { title: "Sincronização entre Estoque e Exploração Legal", desc: "Batimento contábil de volumes atestando que os 500m3 suprimidos em solo possuem procedência e emissão correta de créditos." }
      ]
    }
  },
  {
    id: "dof",
    slug: "emissao-de-dof",
    title: "Emissão de DOF",
    icon: TreePine,
    shortDescription: "Documento de Origem Florestal para o transporte lícito e controle de madeira.",
    content: {
      whatIs: "O <strong>DOF (Documento de Origem Florestal)</strong> atesta a movimentação lícita de pátio em pátio após obtenção da Autorização de Supressão das florestas primárias, garantindo perante a Polícia Federal, que a madeira sendo transportada no perímetro oriunda de um projeto que passou pelas exigências legais.",
      whenNeeded: "A empresa (serrarias, construtoras, polos cimentícios ou madeireiros) deve carregar uma via do DOF para o deslocamento com destinação da biomassa do desmate. O não porte do DOF durante uma batida resulta em confisco de caminhões, tratores e da carga avaliada em milhares de reais, tipificado como furto a área de preservação nacional em trânsito.",
      steps: [
        { title: "Balanço Técnico do Saldo M³", desc: "Alinhamento no sistema DOF atrelando os volumes cortados para geração correta da licença para a frota transportadora contratada por placa." },
        { title: "Rastreio e Validade do Percurso", desc: "Preenchimento de rota controlando prazo do tráfego. Sem desvio para pátios não oficiais cadastrados, inibindo punições secundárias." },
        { title: "Baixa Operacional via Recbimento (DOF Consumo)", desc: "Encerramento formal na última perna atestando destruição construtiva, processamento terminal ou queima lícita (caldeiras e co-processamento)." }
      ]
    }
  },
  {
    id: "eia-rima",
    slug: "eia-rima",
    title: "EIA / RIMA",
    icon: BookOpen,
    shortDescription: "Estudos de Impacto Ambiental completos para empreendimentos de alto potencial poluidor.",
    content: {
      whatIs: "O auge da complexidade técnica. O <strong>EIA (Estudo de Impacto Ambiental) e RIMA (Relatório de Impacto ao Meio Ambiente)</strong> conformam minúcias profundas e determinísticas do seu empreendimento de alto poder modificador num ecossistema. Engloba centenas de laudos secundários (sócios, água e gases, ar e subsolo, antropológicos e migratórios). Custeamos a montagem do corpo científico que avaliza inquestionavelmente seu megaprojeto.",
      whenNeeded: "Aplicável constitucionalmente e pela Resol. 01/86 a hidrelétricas (UHEs, PCHs, CGHs), complexos portuários e industriais químicos complexos em SC, gasodutos, ou mega aeroportos. É a fundação probatória. Na falta da irrefutabilidade contida nestes compêndios de mil páginas as decisões governamentais em negá-los costumam ser impiedosas sob a mira da opinião pública.",
      steps: [
        { title: "Elaboração de Termos Categóricos e Linha de Base (Baseline)", desc: "Criação de matriz quantificadora evidenciando zero interferências perante às dezenas de fatores primários exigidos pelo IMA e MP." },
        { title: "Auditoria Probatória da Dinâmica Hídrica", desc: "Engenharia voltada modelagens preditivas com equações químicas (softwares MODFLOW ou CORMIX) evidenciando dissipações no leito hidrológico contíguo ou marinho do empreendimento antes de ele sequer existir na prancheta projetual." },
        { title: "Compilação Gráfica e Legível para Trâmites Públicos(RIMA)", desc: "Processamento pedagógico evidencial. Tradução do léxico dos laudos para o cidadão sem perder peso avaliativo durante os ritos em Câmaras de Vereadores locais (Audiências Oficiais) minimizando bloqueios civis ou de promotorias." }
      ]
    }
  },
  {
    id: "geoprocessamento",
    slug: "geoprocessamento",
    title: "Geoprocessamento",
    icon: Globe2,
    shortDescription: "Análise espacial, mapas temáticos e inteligência geográfica para licenciamento ambiental.",
    content: {
      whatIs: "O <strong>Geoprocessamento e Cartografia Ambiental</strong> funcionam como olho que tudo vê nos processos legais. Utilizando Sistemas de Informação Geográfica (QGIS, ArcGIS), extraímos e processamos feixes de dados orbitais ou capturados in loco com VANTs. A exatidão do que atestamos nessas matrizes é cirúrgica e impede questionamentos do satélite da polícia ambiental (MapBiomas).",
      whenNeeded: "Em 100% dos estudos onde um pilar da obra resvala nas proibições constitucionais atreladas a APP (Áreas de Preservações Permanentes, ex: 15m para corpos d'água minúsculos esguios). Também essencial para comprovar com mapas de retificação que uma mancha antes descrita como floresta nativa pelo IMA-SC era, há 20 anos, um estacionamento de asfalto sujo e sem nascentes.",
      steps: [
        { title: "Processamento e Aerofotogrametria Vetorial por Drones Autônomos", desc: "Produção técnica de MDS (Modelos Digitais de Superfície) focados em detectar com tolerância centimétrica as vertentes, cursos úmidos e restrições arbóreas nas glebas pretendidas pelas loteadoras antes das escavações." },
        { title: "Deliberação Espacial do Zoneamento Conservacionista", desc: "Geração de ShapeFiles atestacionais cruzando sua área projetada, demonstrando margens de segurança, quebra de conflito na supressão ilegal (antes ou pós desmatamento histórico por geoprocessamento da série LANDSAT orbitais)." },
        { title: "Cadastro Técnico de Polígonos Definitivos Para Uso Consolidado", desc: "Submissão nos mosaicos SICAR de Santa Catarina com assinaturas cruzadas assegurando os desmembramentos dos talhões isentos contra embargos liminares por sombreamento suspeito de infração ou denúncia criminal local." }
      ]
    }
  },
  {
    id: "arqueologia-preventiva",
    slug: "arqueologia-preventiva",
    title: "Arqueologia Preventiva",
    icon: Pickaxe,
    shortDescription: "Diagnóstico e resgate do patrimônio arqueológico em áreas de empreendimentos.",
    content: {
      whatIs: "A <strong>Arqueologia e Gestão de Patrimônio Etnológico</strong> assegura frente ao IPHAN (Instituto do Patrimônio Histórico e Artístico Nacional) que toda intervenção sobre a terra estará isenta da mutilação criminal dolosa de sambaquis litorâneos, cemitérios guaranis ou ruínas seculares escondidas sob a matriz do canteiro operacional.",
      whenNeeded: "Mandatório para canteiros localizados à adjacências marinhas de Santa Catarina (Famosa pela infinidade de concheiros aborígenes Sambaquis), eólicas instaladas ao longo de espigões ou macro cavas de argileiras rurais. Ocultar urnas indígenas achadas durante do afundamento do maquinário de fundação significa prisão imediata para a direção da empreiteira e fechamento federal.",
      steps: [
        { title: "Programa Ficha de Diagnóstico Cautelar (FCA / Nível I)", desc: "Varredura do acervo literário no CNSA/IPHAN certificando que sua propriedade construtiva não avizinha manchas arroladas de tombamento antes da assinatura contratual final minimizando choque ou perda monetária imediata aos seus investidores civis." },
        { title: "Avaliações em Malha Quadrática de Subsolo (Trado Geofísico ou Prospecções Regulares Nível II)", desc: "Equipe arqueológica in-situ elabora peneiramento investigativo e trincheiras nas projeções periciais provando categoricamente inexistência, sob camada virgem de turfa do material lítico, lúbrico em profundões não impactos em fases iniciais da pavimentação." },
        { title: "Termo Fiel de Resgate Científico Ativo (Ato Pericial do Nivel III Acionado)", desc: "Caso o empreiteiro tope fragmentos e cerâmicas e reporte legalmente: Isolamos a via. Contratamos destinação das uranas, fechamos curadoria nos museus nacionais da biodiversidade, atestamos salvamento finalizado, liberando na sequência e sem entraves burocráticos ao trator ou motoniveladora para fecharem a vala na gleba." }
      ]
    }
  }
];