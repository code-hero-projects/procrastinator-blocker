import { BrowserManager } from 'browserManager';
import { Timer } from 'entities';
import { ProcrastinateMessages, TimerMessages } from 'messages';
import { RepositoryFacade } from 'repositories';
import { ISimpleRepository } from 'repositories/IDatabase';
import { IMessageHandler } from '../IMessageHandler';

export class TimerMessageHandler implements IMessageHandler {
  private timerRepository: ISimpleRepository<Timer>;

  constructor() {
    this.timerRepository = RepositoryFacade.getTimerRepository();
  }

  setup(): void {
    BrowserManager.addMessageEventListener((message: any) => {
      const timer = message.payload;
      switch (message.type) {
        case TimerMessages.SET_REQUEST:
          this.timerRepository.set(timer).then(() => {
            const messageToSend = { type: TimerMessages.SET_RESPONSE, payload: timer};
            BrowserManager.sendMessage(messageToSend);
          });
          break;
        case TimerMessages.START_REQUEST:
          this.timerRepository.set(timer)
            .then(() => {
              const messageToSend = { type: TimerMessages.SET_RESPONSE, payload: timer};
              BrowserManager.sendMessage(messageToSend);
            })
            .then(() => {
              const timeDifference = timer.endDate! - Date.now();
              setTimeout(() => {
                console.log('set timeout called');
                BrowserManager.sendMessage({ type: TimerMessages.START_RESPONSE });
              }, timeDifference)
            });
          break;
        case TimerMessages.READ_REQUEST_POPUP:
          this.timerRepository.get().then(entity => {
            const messageToSend = { type: TimerMessages.READ_RESPONSE_POPUP, payload: entity};
            BrowserManager.sendMessageToPopUp(messageToSend)
          });
          break;
        case TimerMessages.READ_REQUEST_ACTIVE_TAB:
          this.timerRepository.get().then(entity => {
            const messageToSend = { type: TimerMessages.READ_RESPONSE_ACTIVE_TAB, payload: entity};
            BrowserManager.sendMessageToTabs(messageToSend);
          });
          break;
        default:
          break;
      }
    });
  }
}