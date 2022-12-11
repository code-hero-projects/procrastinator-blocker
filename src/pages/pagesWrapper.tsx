import { StopProcrastinationWrapper } from 'components';
import * as React from 'react';
import { Gladiator } from './Gladiator';
import { HarryPotter } from './HarryPotter';
import { LordOfTheRings } from './LordOfTheRings';
import { GLADIATOR, LORD_OF_THE_RINGS, PULP_FICTION, STAR_WARS, HARRY_POTTER } from './pages';
import { PulpFiction } from './PulpFiction';
import { StarWars } from './StarWars';

const LordOfTheRingsWrapper = <StopProcrastinationWrapper StopProcrastinationComponent={LordOfTheRings} />;
const PulpFictionWrapper = <StopProcrastinationWrapper StopProcrastinationComponent={PulpFiction} />;
const StarWarsWrapper = <StopProcrastinationWrapper StopProcrastinationComponent={StarWars} />;
const GladiatorWrapper = <StopProcrastinationWrapper StopProcrastinationComponent={Gladiator} />;
const HarryPotterWrapper = <StopProcrastinationWrapper StopProcrastinationComponent={HarryPotter} />;

const pagesMap = {
  [LORD_OF_THE_RINGS]: LordOfTheRingsWrapper,
  [PULP_FICTION]: PulpFictionWrapper,
  [STAR_WARS]: StarWarsWrapper,
  [GLADIATOR]: GladiatorWrapper,
  [HARRY_POTTER]: HarryPotterWrapper
};

export const stopProcrastinationPages = [
  LordOfTheRingsWrapper,
  PulpFictionWrapper,
  StarWarsWrapper,
  GladiatorWrapper,
  HarryPotterWrapper
];

export const mapPage = (key: string) => pagesMap[key];
