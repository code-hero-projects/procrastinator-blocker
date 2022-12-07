import * as React from 'react';
import { useEffect, useState } from 'react';
import { BrowserManager } from 'browserManager';
import { ProcrastinateMessages, TimerMessages, TimerMessagesTypes } from 'messages';
import { ProcrastinateToggle } from './ProcrastinateToogle';
import { Timer } from 'entities';

export function ProcrastinateToggleContainer() {
  const [timer, setTimer] = useState<Timer>({ hours: 1, minutes: 0, endDate: Date.now() });

  useEffect(() => {
    BrowserManager.sendMessageToPopUp({ type: TimerMessages.READ_REQUEST_POPUP });
    
    BrowserManager.addMessageEventListener((message: TimerMessagesTypes) => {
      switch (message.type) {
        case TimerMessages.READ_RESPONSE_POPUP:
          setTimer(message.payload);
          console.log('read request in procrastinate');
          console.log(message.payload);
          break;
        default:
          break;
      }
    });
  }, []);

  const onProcrastinateClick = () => { 
    const newEndDate = new Date();
    
    console.log(`current date: ${newEndDate}`);
    console.log(`timer hours: ${timer.hours}`);
    console.log(`timer minutes: ${timer.minutes}`);

    newEndDate.setUTCHours(newEndDate.getUTCHours() + timer.hours);
    newEndDate.setUTCMinutes(newEndDate.getUTCMinutes() + timer.minutes);

    console.log(`date after update date: ${newEndDate}, ${newEndDate.getTime()}, ${newEndDate.getUTCMilliseconds()}`);
    BrowserManager.sendMessageToPopUp({ type: TimerMessages.START_REQUEST, payload: { ...timer, endDate: newEndDate.getTime() } });
    BrowserManager.sendMessageToPopUp({ type: ProcrastinateMessages.SET_REQUEST, payload: false });
  }

  return <ProcrastinateToggle onProcrastinateClick={onProcrastinateClick} />;
}
