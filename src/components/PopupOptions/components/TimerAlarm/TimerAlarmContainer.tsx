import * as React from 'react';
import { useEffect, useState } from 'react';
import { Timer } from 'entities';
import { TimerSetup } from './TimerSetup'
import { BrowserManager } from 'browserManager';
import { ProcrastinateMessages, ProcrastinateMessageTypes } from 'messages';
import { Alarm } from './Alarm';

export function TimerAlarmContainer() {
  const [timer, setTimer] = useState<Timer>({ hours: 0, minutes: 0, start: new Date() });
  const [procrastinate, setProcrastinate] = useState<boolean>(false);

  useEffect(() => {
    BrowserManager.addMessageEventListener((message: ProcrastinateMessageTypes) => {
      switch (message.type) {
        case ProcrastinateMessages.READ_RESPONSE_POPUP:
        case ProcrastinateMessages.SET_RESPONSE:
          const messagePayload = message.payload as boolean;
          setProcrastinate(messagePayload);
          break;
        default:
          break;
      }
    });
  }, []);

  const onUpdateHours = (hours: number) => setTimer({ ...timer, hours });

  const onUpdateMinutes = (minutes: number) => setTimer({ ...timer, minutes});

  return (
    procrastinate 
      ? <TimerSetup hours={timer.hours} minutes={timer.minutes} onUpdateHours={onUpdateHours} onUpdateMinutes={onUpdateMinutes} />
      : <Alarm start={timer.start!}/>
  )
}