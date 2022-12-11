import { BrowserManager } from 'browserManager';
import {
  LinkMessages,
  LinkMessageTypes,
  ProcrastinateMessages,
  ProcrastinateMessageTypes,
  ResetDataMessages,
  ResetDataMessageTypes,
  SelectPageMessages,
  SelectPageMessageTypes,
  TimerMessages,
  TimerMessagesTypes
} from 'messages';
import { mapPage, RANDOM, stopProcrastinationPages } from 'pages';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

const PAGE_RELOADED = 'page-reloaded';
const COMPONENT_SHOWN = 'component-shown';
const MATCHED_URL = 'matched-url';

const TRUE = 'true';
const FALSE = 'false'

BrowserManager.setInLocalStorage(PAGE_RELOADED, TRUE);
BrowserManager.setInLocalStorage(COMPONENT_SHOWN, FALSE);

BrowserManager.sendMessageToPopUp({ type: TimerMessages.READ_REQUEST_ACTIVE_TAB });

// Listen to timeout
BrowserManager.addMessageEventListener((message: TimerMessagesTypes) => {
  switch (message.type) {
    case TimerMessages.START_RESPONSE:
      BrowserManager.sendMessage({ type: ProcrastinateMessages.SET_REQUEST, payload: true });
      break;
    case TimerMessages.READ_RESPONSE_ACTIVE_TAB:
      const timer = message.payload;
      if (timer.endDate && timer.endDate < Date.now()) {
        console.log('time has ended, resetting procrastinate');
        BrowserManager.sendMessage({ type: ProcrastinateMessages.SET_REQUEST, payload: true });
      }
      break;
    default:
      break;
  }
});

// Listen to procrastinate toggle
BrowserManager.addMessageEventListener((message: ProcrastinateMessageTypes) => {
  switch (message.type) {
    case ProcrastinateMessages.READ_RESPONSE_ACTIVE_TAB:
    case ProcrastinateMessages.SET_RESPONSE:
      console.log('procrastinate changed');
      const procrastinate = message.payload;
      procrastinateHandler(procrastinate);
    default:
      break;
  }
});

const procrastinateHandler = (procrastinate: boolean) => {
  if (procrastinate) {
    const pageReloaded = BrowserManager.getFromLocalStorage(PAGE_RELOADED);
    if (pageReloaded === FALSE) {
      BrowserManager.setInLocalStorage(PAGE_RELOADED, TRUE);
      BrowserManager.setInLocalStorage(COMPONENT_SHOWN, FALSE);
      BrowserManager.reloadCurrentTab();
    }
  } else {
    BrowserManager.sendMessageToPopUp({ type: LinkMessages.READ_ALL_REQUEST });
  }
}

// Listen to read all links
BrowserManager.addMessageEventListener((message: LinkMessageTypes) => {
  const currentURL = BrowserManager.getCurrentUrl();
  switch (message.type) {
    case LinkMessages.READ_ALL_RESPONSE:
      const links = message.payload;
      const matchedLink = links.filter(link => currentURL.toLowerCase().includes(link.url.toLowerCase()));
  
      if (matchedLink.length > 0) {
        const componentShown = BrowserManager.getFromLocalStorage(COMPONENT_SHOWN);
        if (componentShown === FALSE) {
          BrowserManager.setInLocalStorage(PAGE_RELOADED, FALSE);
          BrowserManager.setInLocalStorage(COMPONENT_SHOWN, TRUE);
          BrowserManager.setInLocalStorage(MATCHED_URL, TRUE);

          BrowserManager.sendMessageToPopUp({ type: SelectPageMessages.READ_REQUEST });
        }
      }
      break;
    default:
      break;
  }
});

// Listen to read select page
BrowserManager.addMessageEventListener((message: SelectPageMessageTypes) => {
  switch (message.type) {
    case SelectPageMessages.READ_RESPONSE:
      const macthedURL = BrowserManager.getFromLocalStorage(MATCHED_URL);

      if (macthedURL === TRUE) {
        const selectedPage = message.payload;
        const body = document.getElementsByTagName('body')[0];

        const componentToShow = selectedPage === RANDOM
          ? getRandomComponent()
          : mapPage(selectedPage);
        
        body.style.all = 'revert';
        ReactDOM.render(<>{componentToShow}</>, body);
        BrowserManager.setInLocalStorage(MATCHED_URL, FALSE);
      }
      break;
    default:
      break;
  }
});

const getRandomComponent = (): React.ReactElement => {
  const index = Math.floor(Math.random() * stopProcrastinationPages.length);
  return stopProcrastinationPages[index];
};

// Listen to reset data
BrowserManager.addMessageEventListener((message: ResetDataMessageTypes) => {
  switch (message.type) {
    case ResetDataMessages.RESET_DATA_SET_RESPONSE:
      BrowserManager.sendMessageToTabs({ type: LinkMessages.READ_ALL_REQUEST });
      break;
    default:
      break;
  }
});
