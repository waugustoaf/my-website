import { v4 as uuid } from 'uuid';

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json([
      {
        id: uuid(),
        name: 'Syber7',
        external_link: 'https://syber7.com',
        github_link: null,
        image_link: 'https://i.imgur.com/72RTuFz.png',
        description:
          'Uma plataforma de jogos esportivos online, onde os usuários podem pagar diamantes na tentativa de multiplicar a quantidade dos mesmos.',
      },
      {
        id: uuid(),
        name: 'Meu Site',
        external_link: 'https://waugustoaf.com',
        github_link: 'https://github.com/waugustoaf/my-website',
        image_link: 'https://i.imgur.com/kdOl3Sc.png',
        description:
          'Um website pessoal que criei para falar um pouco mais sobre mim, mostrar projetos e falar sobre tecnologia.',
      },
      {
        id: uuid(),
        name: 'Kidarun',
        external_link: 'https://www.kidarun.com/',
        github_link: null,
        image_link: 'https://i.imgur.com/syaKkE8.png',
        description:
          'Um website de servidor de minecraft para venda de itens in-game.',
      },
      {
        id: uuid(),
        name: 'Kidarun',
        external_link: '',
        github_link: 'https://github.com/waugustoaf/gobarber-web',
        image_link: 'https://i.imgur.com/wNcPknR.png',
        description:
          'Uma aplicação WEB onde os usuários podem realizar agendamentos e barbeiros podem prestar seus serviços.',
      },
      {
        id: uuid(),
        name: 'RentX',
        external_link: '',
        github_link: 'https://github.com/waugustoaf/rentx-mobile',
        image_link: 'https://i.imgur.com/ExRPo8X.png',
        description:
          'Um app construído com react native para aluguel de carros durante uma data, onde o usuário pode alugar e listar os seus aluguéis de carros.',
      },
      {
        id: uuid(),
        name: 'GoFinances',
        external_link: '',
        github_link: 'https://github.com/waugustoaf/gofinances',
        image_link: 'https://i.imgur.com/Vvwd4xU.jpg',
        description:
          'Um aplicativo mobile para você registrar e gerenciar suas despesas e ganhos facilmente usando sua conta do Google ou da Apple.',
      },
      {
        id: uuid(),
        name: 'Smart Money',
        external_link: '',
        github_link: 'https://github.com/waugustoaf/smart-money',
        image_link: 'https://i.imgur.com/Mj3cf4M.png',
        description:
          'Um aplicativo mobile construído com React Native para controlar seu dinheito e atender às minhas necessidades.',
      },
    ]);
  }
}
