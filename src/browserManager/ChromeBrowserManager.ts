import { IBrowserManager, Message } from './IBrowserManager';

export class ChromeBrowserManager implements IBrowserManager {
  sendMessageToPopUp(message: Message): void {
    chrome.runtime.sendMessage(message);
  }
  
  sendMessageToTabs(message: Message): void {
    this.sendMessageToPopUp(message);
    
    // send message to every active tab
    chrome.tabs.query({}, (tabs: any) => {
      tabs.forEach((tab: any) => {
        if (tab.id) {
          chrome.tabs.sendMessage(tab.id, message);
        }
      });
    });
  }

  sendMessage(message: Message): void {
    this.sendMessageToPopUp(message);
    this.sendMessageToTabs(message);
  }

  addMessageEventListener(callback: (message: Message) => void): void {
    chrome.runtime.onMessage.addListener(callback)
  }

  onInstall(callback: (details: any) => void): void {
    chrome.runtime.onInstalled.addListener(callback);
  }

  getFromLocalStorage(key: string): any {
    return localStorage.getItem(key);
  }

  setInLocalStorage(key: string, value: any): void {
    localStorage.setItem(key, value);
  }

  getCurrentUrl(): string {
    return location.hostname;
  }

  reloadCurrentTab(): void {
    location.reload();
  }

  getAssetUrl(asset: string): string {
    return chrome.runtime.getURL(asset);
  }

  openOptionsPage(): void {
    chrome.runtime.openOptionsPage();
  }
}
