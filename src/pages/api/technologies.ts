import { v4 as uuid } from 'uuid';
import dayjs from 'dayjs';

function backToDate({ months, years }: any): Date {
  let responseDate = dayjs().toDate();

  if (months) {
    responseDate = dayjs(responseDate)
      .add(months * -1, 'months')
      .toDate();
  }

  if (years) {
    responseDate = dayjs(responseDate)
      .add(years * -1, 'years')
      .toDate();
  }

  return responseDate;
}

function hasSameYear(first_date: Date, second_date: Date): boolean {
  const isSame = dayjs(first_date).diff(second_date, 'years') === 0;

  return isSame;
}

function hasSameMonth(first_date: Date, second_date: Date): boolean {
  const isSame = dayjs(first_date).diff(second_date, 'months') === 0;

  return isSame;
}

function dateNow(): Date {
  const dateNow = dayjs().toDate();

  return dateNow;
}

function countTime({ end_date, start_date, type = 'years' }: any): number {
  const distance = dayjs(end_date).diff(start_date, type);

  return distance;
}

function addFromNow({ quantity, type = 'days' }: any): Date {
  const response = dayjs().add(quantity, type).toDate();

  return response;
}

function formatDate(date: Date) {
  const _dateNow = dateNow();

  const distanceYears = countTime({
    end_date: _dateNow,
    start_date: date,
  });

  const distanceMonths =
    countTime({
      end_date: _dateNow,
      start_date: date,
      type: 'months',
    }) -
    distanceYears * 12;

  const formattedYears =
    distanceYears === 0
      ? undefined
      : distanceYears === 1
      ? '1 ano'
      : `${distanceYears} anos`;

  const formattedMonths =
    distanceMonths === 0
      ? undefined
      : distanceMonths === 1
      ? '1 mês'
      : `${distanceMonths} meses`;

  if (!!formattedMonths && !!formattedYears) {
    return `${formattedYears} e ${formattedMonths}`;
  } else {
    if (formattedYears) {
      return `${formattedYears}`;
    } else {
      return `${formattedMonths}`;
    }
  }
}

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json([
      {
        id: uuid(),
        name: 'HTML',
        start_date: new Date('2018-12-01'),
        type: 'web',
        formatted_start_date: formatDate(new Date('2018-12-01')),
      },
      {
        id: uuid(),
        name: 'CSS',
        start_date: new Date('2018-12-01'),
        type: 'web',
        formatted_start_date: formatDate(new Date('2018-12-01')),
      },
      {
        id: uuid(),
        name: 'JavaScript',
        start_date: new Date('2018-12-01'),
        type: 'web',
        formatted_start_date: formatDate(new Date('2018-12-01')),
      },
      {
        id: uuid(),
        name: 'ReactJS',
        start_date: new Date('2020-02-01'),
        type: 'web',
        formatted_start_date: formatDate(new Date('2020-02-01')),
      },
      {
        id: uuid(),
        name: 'TypeScript',
        start_date: new Date('2020-12-01'),
        type: 'web',
        formatted_start_date: formatDate(new Date('2020-12-01')),
      },
      {
        id: uuid(),
        name: 'Sass',
        start_date: new Date('2022-01-01'),
        type: 'web',
        formatted_start_date: formatDate(new Date('2022-01-01')),
      },
      {
        id: uuid(),
        name: 'Styled Components',
        start_date: new Date('2022-01-01'),
        type: 'web',
        formatted_start_date: formatDate(new Date('2022-01-01')),
      },
      {
        id: uuid(),
        name: 'Git',
        start_date: new Date('2022-01-01'),
        type: 'web',
        formatted_start_date: formatDate(new Date('2022-01-01')),
      },
      {
        id: uuid(),
        name: 'GitHub',
        start_date: new Date('2022-01-01'),
        type: 'web',
        formatted_start_date: formatDate(new Date('2022-01-01')),
      },
      {
        id: uuid(),
        name: 'NextJS',
        start_date: new Date('2022-01-01'),
        type: 'web',
        formatted_start_date: formatDate(new Date('2022-01-01')),
      },
      {
        id: uuid(),
        name: 'Chakra UI',
        start_date: new Date('2022-01-01'),
        type: 'web',
        formatted_start_date: formatDate(new Date('2022-01-01')),
      },
      {
        id: uuid(),
        name: 'Tailwind CSS',
        start_date: new Date('2022-01-01'),
        type: 'web',
        formatted_start_date: formatDate(new Date('2022-01-01')),
      },
      {
        id: uuid(),
        name: 'JavaScript',
        start_date: new Date('2018-12-01'),
        type: 'mobile',
        formatted_start_date: formatDate(new Date('2018-12-01')),
      },
      {
        id: uuid(),
        name: 'TypeScript',
        start_date: new Date('2020-12-01'),
        type: 'mobile',
        formatted_start_date: formatDate(new Date('2020-12-01')),
      },
      {
        id: uuid(),
        name: 'Styled Components',
        start_date: new Date('2020-12-01'),
        type: 'mobile',
        formatted_start_date: formatDate(new Date('2020-12-01')),
      },
      {
        id: uuid(),
        name: 'React Native',
        start_date: new Date('2020-12-01'),
        type: 'mobile',
        formatted_start_date: formatDate(new Date('2020-12-01')),
      },
      {
        id: uuid(),
        name: 'Expo',
        start_date: new Date('2021-04-01'),
        type: 'mobile',
        formatted_start_date: formatDate(new Date('2021-04-01')),
      },
      {
        id: uuid(),
        name: 'JavaScript',
        start_date: new Date('2018-12-01'),
        type: 'backend',
        formatted_start_date: formatDate(new Date('2018-12-01')),
      },
      {
        id: uuid(),
        name: 'MySQL',
        start_date: new Date('2019-12-01'),
        type: 'backend',
        formatted_start_date: formatDate(new Date('2019-12-01')),
      },
      {
        id: uuid(),
        name: 'TypeScript',
        start_date: new Date('2020-12-01'),
        type: 'backend',
        formatted_start_date: formatDate(new Date('2020-12-01')),
      },
      {
        id: uuid(),
        name: 'NodeJS',
        start_date: new Date('2020-12-01'),
        type: 'backend',
        formatted_start_date: formatDate(new Date('2020-12-01')),
      },
      {
        id: uuid(),
        name: 'TypeORM',
        start_date: new Date('2020-12-01'),
        type: 'backend',
        formatted_start_date: formatDate(new Date('2020-12-01')),
      },
      {
        id: uuid(),
        name: 'Express',
        start_date: new Date('2022-01-01'),
        type: 'backend',
        formatted_start_date: formatDate(new Date('2022-01-01')),
      },
      {
        id: uuid(),
        name: 'PostgreSQL',
        start_date: new Date('2022-01-01'),
        type: 'backend',
        formatted_start_date: formatDate(new Date('2022-01-01')),
      },
      {
        id: uuid(),
        name: 'Jest/SuperTest',
        start_date: new Date('2022-01-01'),
        type: 'backend',
        formatted_start_date: formatDate(new Date('2022-01-01')),
      },
      {
        id: uuid(),
        name: 'Rest/Restful',
        start_date: new Date('2022-01-01'),
        type: 'backend',
        formatted_start_date: formatDate(new Date('2022-01-01')),
      },
      {
        id: uuid(),
        name: 'Redis',
        start_date: new Date('2022-01-01'),
        type: 'backend',
        formatted_start_date: formatDate(new Date('2022-01-01')),
      },
      {
        id: uuid(),
        name: 'AWS',
        start_date: new Date('2022-01-01'),
        type: 'backend',
        formatted_start_date: formatDate(new Date('2022-01-01')),
      },
      {
        id: uuid(),
        name: 'MongoDB',
        start_date: new Date('2022-01-01'),
        type: 'backend',
        formatted_start_date: formatDate(new Date('2022-01-01')),
      },
      {
        id: uuid(),
        name: 'PHP',
        start_date: new Date('2022-01-01'),
        type: 'backend',
        formatted_start_date: formatDate(new Date('2022-01-01')),
      },
      {
        id: uuid(),
        name: 'Java',
        start_date: new Date('2022-01-01'),
        type: 'backend',
        formatted_start_date: formatDate(new Date('2022-01-01')),
      },
      {
        id: uuid(),
        name: 'Laravel',
        start_date: new Date('2022-01-01'),
        type: 'backend',
        formatted_start_date: formatDate(new Date('2022-01-01')),
      },
      {
        id: uuid(),
        name: 'Spring Boot',
        start_date: new Date('2022-01-01'),
        type: 'backend',
        formatted_start_date: formatDate(new Date('2022-01-01')),
      },
    ]);
  }
}
