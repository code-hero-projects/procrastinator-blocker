import { BrowserManager } from 'browserManager';
import { Link } from 'entities';
import { LinkMessages, LinkMessageTypes, ProcrastinateMessages } from 'messages';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { LinkTable } from './LinkTable';

export function LinkTableContainer() {
  const [links, setLinks] = useState<Array<Link>>([]);
  
  const sendReadAllConfigurationRequest = () => BrowserManager.sendMessageToPopUp({ type: LinkMessages.READ_ALL_CONFIGURATION_REQUEST });
  const sendReadProcrastinateActiveTabRequest = () => BrowserManager.sendMessageToPopUp({ type: ProcrastinateMessages.READ_REQUEST_ACTIVE_TAB });

  useEffect(() => {
    sendReadAllConfigurationRequest();

    BrowserManager.addMessageEventListener((message: LinkMessageTypes) => {
      switch (message.type) {
        case LinkMessages.READ_ALL_CONFIGURATION_RESPONSE:
          setLinks(message.payload);
          break;
        case LinkMessages.INSERT_RESPONSE:
          sendReadAllConfigurationRequest();
          sendReadProcrastinateActiveTabRequest();
          break;
        case LinkMessages.DELETE_RESPONSE:
          sendReadAllConfigurationRequest();
          sendReadProcrastinateActiveTabRequest();
          break;
        default:
          break;
      }
    })
  }, []);

  const onDelete = (id: number) => {
    BrowserManager.sendMessageToPopUp({ type: LinkMessages.DELETE_REQUEST, payload: id })
  };

  const onAdd = (url: string) => {
    const newLink: Link = { url };
    BrowserManager.sendMessageToPopUp({ type: LinkMessages.INSERT_REQUEST, payload: newLink });
  }

  return <LinkTable links={links} onDelete={onDelete} onAdd={onAdd} />;
}
