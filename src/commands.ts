import { invoke } from '@tauri-apps/api/core';

export async function generateMnemonic(use24Words: boolean): Promise<string> {
  return await invoke('generate_mnemonic', { use24Words });
}

export type WalletKind = 'cold' | 'hot';

export interface WalletInfo {
  name: string;
  fingerprint: number;
  kind: WalletKind;
}

export async function walletList(): Promise<WalletInfo[]> {
  return await invoke('wallet_list');
}

export async function createWallet(
  name: string,
  mnemonic: string,
  saveMnemonic: boolean,
): Promise<void> {
  await invoke('create_wallet', { name, mnemonic, saveMnemonic });
}

export async function importWallet(name: string, key: string): Promise<void> {
  await invoke('import_wallet', { name, key });
}

export async function deleteWallet(fingerprint: number): Promise<void> {
  await invoke('delete_wallet', { fingerprint });
}

export async function renameWallet(
  fingerprint: number,
  name: string,
): Promise<void> {
  await invoke('rename_wallet', { fingerprint, name });
}
