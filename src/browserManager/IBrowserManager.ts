export interface Message {
  type: string;
  payload?: any
}

export interface IBrowserManager {
  sendMessageToPopUp(message: Message): void;
  sendMessageToTabs(message: Message): void;
  sendMessage(message: Message): void;
  addMessageEventListener(callback: (message: any) => void): void;
  onInstall(callback: (details: any) => void): void;
  getFromLocalStorage(key: string): any;
  setInLocalStorage(key: string, value: any): void;
  getCurrentUrl(): string;
  reloadCurrentTab(): void;
  getAssetUrl(asset: string): string;
  openOptionsPage(): void;
}
