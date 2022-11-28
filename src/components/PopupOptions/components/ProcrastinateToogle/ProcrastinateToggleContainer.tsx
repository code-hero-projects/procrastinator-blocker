import * as React from 'react';
import { useEffect, useState } from 'react';
import { BrowserManager } from 'browserManager';
import { ProcrastinateMessages, ProcrastinateMessageTypes } from 'messages';
import { ProcrastinateToggle } from './ProcrastinateToogle';

export function ProcrastinateToggleContainer() {
  const [procrastinate, setProcrastinate] = useState(false);

  useEffect(() => {
    BrowserManager.addMessageEventListener((message: ProcrastinateMessageTypes) => {
      switch (message.type) {
        case ProcrastinateMessages.READ_RESPONSE_POPUP:
        case ProcrastinateMessages.SET_RESPONSE:
          setProcrastinate(message.payload);
        default:
          break;
      }
    });
  }, []);

  const onProcrastinateClick = () => {
    BrowserManager.sendMessageToPopUp({ type: ProcrastinateMessages.SET_REQUEST, payload: !procrastinate });
  };

  return <ProcrastinateToggle procrastinate={procrastinate} onProcrastinateClick={onProcrastinateClick} />;
}
