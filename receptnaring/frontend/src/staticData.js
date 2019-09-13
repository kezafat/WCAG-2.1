const sliderInputsData = [
  {
    title: 'Personer',
    name: 'people',
    min: '2',
    max: '12',
    defaultValue: '2',
    id: 1
  },
  {
    title: 'Timmar',
    name: 'hours',
    min: '0',
    max: '24',
    defaultValue: '0',
    id: 2
  },
  {
    title: 'Minuter',
    name: 'minutes',
    min: '0',
    max: '60',
    defaultValue: '0',
    id: 3
  },
];

const units = ['kg', 'g', 'st', 'liter', 'dl', 'msk', 'tsk'];

export {
  sliderInputsData,
  units
}