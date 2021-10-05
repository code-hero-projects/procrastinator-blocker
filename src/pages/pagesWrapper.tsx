import { StopProcrastinationWrapper } from 'components';
import * as React from 'react';
import { LordOfTheRings } from './LordOfTheRings';
import { LORD_OF_THE_RINGS, PULP_FICTION, STAR_WARS } from './pages';
import { PulpFiction } from './PulpFiction';
import { StarWars } from './StarWars';

const LordOfTheRingsWrapper = <StopProcrastinationWrapper StopProcrastinationComponent={LordOfTheRings} />;
const PulpFictionWrapper = <StopProcrastinationWrapper StopProcrastinationComponent={PulpFiction} />;
const StarWarsWrapper = <StopProcrastinationWrapper StopProcrastinationComponent={StarWars} />;

const pagesMap = {
  [LORD_OF_THE_RINGS]: LordOfTheRingsWrapper,
  [PULP_FICTION]: PulpFictionWrapper,
  [STAR_WARS]: StarWarsWrapper,
};

export const stopProcrastinationPages = [
  LordOfTheRingsWrapper,
  PulpFictionWrapper,
  StarWarsWrapper
];

export const mapPage = (key: string) => pagesMap[key];
