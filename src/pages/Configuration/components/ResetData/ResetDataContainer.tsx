import { BrowserManager } from 'browserManager';
import { ResetDataMessages, ResetDataMessageTypes } from 'messages';
import * as React from 'react';
import { ResetData } from './ResetData';

export function ResetDataContainer() {
  React.useEffect(() => {
    BrowserManager.addMessageEventListener((message: ResetDataMessageTypes) => {
      switch (message.type) {
        case ResetDataMessages.RESET_DATA_SET_RESPONSE:
          BrowserManager.reloadCurrentTab();
          break;
        default:
          break;
      }
    });
  });

  const handleOnResetDataClick = () => BrowserManager.sendMessageToPopUp({ type: ResetDataMessages.RESET_DATA_SET_REQUEST });;

  return <ResetData handleOnResetDataClick={handleOnResetDataClick}/>;
}