import * as React from 'react';
import { useEffect, useState } from 'react';
import { Timer } from 'entities';
import { BrowserManager } from 'browserManager';
import { ProcrastinateMessages, TimerMessages, TimerMessagesTypes } from 'messages';
import { Alarm } from './TimerAlarm';

export function TimerAlarmContainer() {
  const [loading, setLoading] = useState(true);
  const [timer, setTimer] = useState<Timer>({ hours: 0, minutes: 0, endDate: Date.now() });

  useEffect(() => {
    BrowserManager.sendMessageToPopUp({ type: TimerMessages.READ_REQUEST_POPUP });
    
    BrowserManager.addMessageEventListener((message: TimerMessagesTypes) => {
      switch (message.type) {
        case TimerMessages.READ_RESPONSE_POPUP:
          setTimer(message.payload);
          setLoading(false);
          break;
        case TimerMessages.SET_RESPONSE:
          setTimer(message.payload);
          break;
        default:
          break;
      }
    });
  }, []);

  const onTimeFinish = () => BrowserManager.sendMessage({ type: ProcrastinateMessages.SET_REQUEST, payload: true });

  return loading ? <></> : <Alarm timer={timer} onTimerFinish={onTimeFinish} />;
}