import { BrowserManager } from 'browserManager';
import { Timer } from 'entities';
import { TimerMessages, TimerMessagesTypes } from 'messages';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { TimerSetup } from './TimerSetup';

export function TimerSetupContainer() {
  const [timer, setTimer] = useState<Timer>({ hours: 0, minutes: 0 });

  useEffect(() => {
    BrowserManager.sendMessageToTabs({ type: TimerMessages.READ_REQUEST_ACTIVE_TAB });
    
    BrowserManager.addMessageEventListener((message: TimerMessagesTypes) => {
      switch (message.type) {
        case TimerMessages.READ_RESPONSE_ACTIVE_TAB:
          setTimer(message.payload);
          break;
        case TimerMessages.SET_RESPONSE:
          console.log(message.payload);
          setTimer(message.payload);
          break;
        default:
          break;
      }
    });
  }, []);
  
  const onUpdateHours = (hours: number) => setTimer({ ...timer, hours });

  const onUpdateMinutes = (minutes: number) => setTimer({ ...timer, minutes});

  const onSaveClick = () => BrowserManager.sendMessage({ type: TimerMessages.SET_REQUEST, payload: timer });

  return <TimerSetup 
    hours={timer.hours}
    minutes={timer.minutes}
    onUpdateHours={onUpdateHours} 
    onUpdateMinutes={onUpdateMinutes} 
    onSaveClick={onSaveClick}
  />;
}