export interface Theme {
    id: string;
    text: string;
    example: string;
    example2: string;
  }
export const themeDirectory: Theme[] = [
    {
        id: 'image1',
        text: 'Сервис для вызова эвакуатора по всей России',
        example: 'более 7 тысяч эвакуаторов',
        example2: '367 городов',
    },
    {
        id: 'image2',
        text: 'Комплексное обслуживание автопарков, приложение для управления автопарком',
        example: '15 тысяч автомобилистов используют ежедневно',
        example2: '700 компаний-партнеров',
    },
    {
        id: 'image3',
        text: 'Система автоматизации питания ресторанного уровня',
        example: '150 локаций в России',
        example2: '56 позиций меню',
    },
    {
        id: 'image4',
        text: 'Разработка инженерного программного обеспечения',
        example: '',
        example2: '',
    },
    {
        id: 'image5',
        text: 'ERP-система для таксопарков',
        example: '',
        example2: '',
    },
    {
        id: 'image6',
        text: 'Сервис партнерских продаж в страховании',
        example: '',
        example2: '',
    },
    {
        id: 'image7',
        text: 'Автосервис без собственных сотрудников и инфраструктуры',
        example: '',
        example2: '',
    },
]