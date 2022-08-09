import React from 'react';
import ContextProvider1 from './user-context/UserState'


import { combineComponents } from './combineComponents';

const providers = [
  ContextProvider1,

]

export const AppContextProvider = combineComponents(...providers);