import { BrowserManager } from 'browserManager';
import { SelectPageMessages, SelectPageMessageTypes } from 'messages';
import { GLADIATOR, HARRY_POTTER, LORD_OF_THE_RINGS, PULP_FICTION, RANDOM, STAR_WARS } from 'pages';
import * as React from 'react';
import { useState } from 'react';
import { SelectPage } from './SelectPage';
import { SelectPageValue } from './SelectPageValue';

export function SelectPageContainer() {
  const [selectedPage, setSelectedPage] = useState<string>('');
  const selectPageValues: Array<SelectPageValue> = [
    { value: RANDOM, displayName: 'Random', explanation: 'A random page will be shown.' },
    { value: LORD_OF_THE_RINGS, displayName: 'Lord Of The Rings', explanation: 'Can you pass through Gandalf?.' },
    { value: PULP_FICTION, displayName: 'Pulp Fiction', explanation: 'English, do you speak it?.' },
    { value: STAR_WARS, displayName: 'Star Wars', explanation: 'Execute order Get Back To Work.' },
    { value: GLADIATOR, displayName: 'Gladiator', explanation: 'His name is Maximus Decimus Meridius.' },
    { value: HARRY_POTTER, displayName: 'Harry Potter', explanation: 'It\'s leviosa, not leviosaaa!' },
  ];

  React.useEffect(() => {
    BrowserManager.sendMessageToPopUp({ type: SelectPageMessages.READ_REQUEST });

    BrowserManager.addMessageEventListener((message: SelectPageMessageTypes) => {
      switch (message.type) {
        case SelectPageMessages.READ_RESPONSE:
          setSelectedPage(message.payload);
          break;
        case SelectPageMessages.SET_RESPONSE:
          setSelectedPage(message.payload);
          break;
        default:
          break;
      }
    });
  }, []);

  const onSelectPageValue = (value: string) => BrowserManager.sendMessageToPopUp({ type: SelectPageMessages.SET_REQUEST, payload: value });

  return (
    <SelectPage
      selectPage={selectedPage}
      selectPageValues={selectPageValues}
      onSelectPageChange={onSelectPageValue}
    />
  );
}
