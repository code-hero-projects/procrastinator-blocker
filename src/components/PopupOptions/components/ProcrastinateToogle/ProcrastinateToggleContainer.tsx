import { BrowserManager } from 'browserManager';
import { ProcrastinateMessages, ProcrastinateMessageTypes } from 'messages';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { ProcrastinateToggle } from './ProcrastinateToogle';

export function ProcrastinateToggleContainer() {
  const [procrastinate, setProcrastinate] = useState(true);

  useEffect(() => {
    BrowserManager.sendMessageToPopUp({ type: ProcrastinateMessages.READ_REQUEST_POPUP });

    BrowserManager.addMessageEventListener((message: ProcrastinateMessageTypes) => {
      switch (message.type) {
        case ProcrastinateMessages.READ_RESPONSE_POPUP:
          setProcrastinate(message.payload);
          break;
        case ProcrastinateMessages.SET_RESPONSE:
          setProcrastinate(message.payload);
        default:
          break;
      }
    });
  }, []);

  const onProcrastinateClick = () => BrowserManager.sendMessageToPopUp({ type: ProcrastinateMessages.SET_REQUEST, payload: !procrastinate });

  return <ProcrastinateToggle procrastinate={procrastinate} onProcrastinateClick={onProcrastinateClick} />;
}
