import { IBtn } from '../components/Button/Button.types';

export const buttonLabels: IBtn[] = [
  { id: 1, label: 'blog' },
  { id: 2, label: 'events' },
  { id: 3, label: 'deals' },
  { id: 4, label: 'support' },
];

export const textDescrObj: { [key: string]: string } = {
  blog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet non curabitur gravida arcu ac tortor. Porttitor lacus luctus accumsan tortor posuere ac ut. ',
  events:
    'Enim lobortis scelerisque fermentum dui faucibus in. Aliquet sagittis id consectetur purus ut faucibus. Pellentesque id nibh tortor id aliquet.',
  deals:
    'Pharetra sit amet aliquam id diam. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Pellentesque sit amet porttitor eget. ',
  support:
    'Id diam maecenas ultricies mi eget mauris pharetra et ultrices. Lectus mauris ultrices eros in cursus turpis massa tincidunt.',
};
