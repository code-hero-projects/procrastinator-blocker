import { BrowserManager } from 'browserManager';
import { ProcrastinateMessages, ProcrastinateMessageTypes } from 'messages';
import * as React from 'react';
import { useEffect } from 'react';
import { PopupOptions } from './PopupOptions';

export function PopupOptionsContainer() {
  const [loading, setLoading] = React.useState(true);
  const [procrastinate, setProcrastinate] = React.useState(true);

  useEffect(() => {
    BrowserManager.sendMessageToPopUp({ type: ProcrastinateMessages.READ_REQUEST_POPUP });

    BrowserManager.addMessageEventListener((message: ProcrastinateMessageTypes) => {
      switch (message.type) {
        case ProcrastinateMessages.READ_RESPONSE_POPUP:
          setProcrastinate(message.payload);
          setLoading(false);
          break;
        case ProcrastinateMessages.SET_RESPONSE:
          setProcrastinate(message.payload);
          break;
        default:
          break;
      }
    });
  }, []);
  
  if (loading) {
    return <></>;
  }

  return <PopupOptions procrastinate={procrastinate} />;
}