
// This file was generated by [tauri-specta](https://github.com/oscartbeaumont/tauri-specta). Do not edit this file manually.

/** user-defined commands **/


export const commands = {
async networkConfig() : Promise<Result<NetworkConfig, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("network_config") };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async setDiscoverPeers(discoverPeers: boolean) : Promise<Result<null, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("set_discover_peers", { discoverPeers }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async setTargetPeers(targetPeers: number) : Promise<Result<null, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("set_target_peers", { targetPeers }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async setNetworkId(networkId: string) : Promise<Result<null, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("set_network_id", { networkId }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async walletConfig(fingerprint: number) : Promise<Result<WalletConfig, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("wallet_config", { fingerprint }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async setDeriveAutomatically(fingerprint: number, deriveAutomatically: boolean) : Promise<Result<null, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("set_derive_automatically", { fingerprint, deriveAutomatically }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async setDerivationBatchSize(fingerprint: number, derivationBatchSize: number) : Promise<Result<null, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("set_derivation_batch_size", { fingerprint, derivationBatchSize }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async networkList() : Promise<Result<{ [key in string]: NetworkInfo }, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("network_list") };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async activeWallet() : Promise<Result<WalletInfo | null, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("active_wallet") };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async getWalletSecrets(fingerprint: number) : Promise<Result<WalletSecrets | null, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("get_wallet_secrets", { fingerprint }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async walletList() : Promise<Result<WalletInfo[], Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("wallet_list") };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async loginWallet(fingerprint: number) : Promise<Result<null, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("login_wallet", { fingerprint }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async logoutWallet() : Promise<Result<null, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("logout_wallet") };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async generateMnemonic(use24Words: boolean) : Promise<Result<string, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("generate_mnemonic", { use24Words }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async createWallet(name: string, mnemonic: string, saveMnemonic: boolean) : Promise<Result<null, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("create_wallet", { name, mnemonic, saveMnemonic }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async importWallet(name: string, key: string) : Promise<Result<null, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("import_wallet", { name, key }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async deleteWallet(fingerprint: number) : Promise<Result<null, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("delete_wallet", { fingerprint }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async renameWallet(fingerprint: number, name: string) : Promise<Result<null, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("rename_wallet", { fingerprint, name }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async initialize() : Promise<Result<null, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("initialize") };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async getSyncStatus() : Promise<Result<SyncStatus, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("get_sync_status") };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async getCoins() : Promise<Result<CoinRecord[], Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("get_coins") };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async getDids() : Promise<Result<DidRecord[], Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("get_dids") };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async getNfts() : Promise<Result<NftRecord[], Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("get_nfts") };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async validateAddress(address: string) : Promise<Result<boolean, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("validate_address", { address }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async peerList() : Promise<Result<PeerInfo[], Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("peer_list") };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async removePeer(ipAddr: string, ban: boolean) : Promise<Result<null, Error>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("remove_peer", { ipAddr, ban }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
}
}

/** user-defined events **/


export const events = __makeEvents__<{
syncEvent: SyncEvent
}>({
syncEvent: "sync-event"
})

/** user-defined constants **/



/** user-defined types **/

export type Amount = string
export type CoinRecord = { coin_id: string; address: string; amount: Amount; created_height: number | null; spent_height: number | null }
export type DidRecord = { encoded_id: string; launcher_id: string; coin_id: string; address: string }
export type Error = { kind: ErrorKind; reason: string }
export type ErrorKind = "Io" | "Database" | "Client" | "Keychain" | "Logging" | "Serialization" | "InvalidAddress" | "InvalidMnemonic" | "InvalidKey" | "UnknownNetwork" | "UnknownFingerprint" | "NotLoggedIn"
export type NetworkConfig = { network_id?: string; target_peers?: number; discover_peers?: boolean }
export type NetworkInfo = { default_port: number; genesis_challenge: string; agg_sig_me: string | null; dns_introducers: string[] }
export type NftRecord = { encoded_id: string; launcher_id: string; coin_id: string; address: string; royalty_address: string; royalty_percent: string }
export type PeerInfo = { ip_addr: string; port: number; trusted: boolean }
export type SyncEvent = { type: "start"; ip: string } | { type: "stop" } | { type: "subscribed" } | { type: "coin_update" } | { type: "puzzle_update" }
export type SyncStatus = { balance: Amount; unit: Unit; synced_coins: number; total_coins: number; receive_address: string }
export type Unit = { ticker: string; decimals: number }
export type WalletConfig = { name?: string; derive_automatically?: boolean; derivation_batch_size?: number }
export type WalletInfo = { name: string; fingerprint: number; public_key: string; kind: WalletKind }
export type WalletKind = "cold" | "hot"
export type WalletSecrets = { mnemonic: string | null; secret_key: string }

/** tauri-specta globals **/

import {
	invoke as TAURI_INVOKE,
	Channel as TAURI_CHANNEL,
} from "@tauri-apps/api/core";
import * as TAURI_API_EVENT from "@tauri-apps/api/event";
import { type WebviewWindow as __WebviewWindow__ } from "@tauri-apps/api/webviewWindow";

type __EventObj__<T> = {
	listen: (
		cb: TAURI_API_EVENT.EventCallback<T>,
	) => ReturnType<typeof TAURI_API_EVENT.listen<T>>;
	once: (
		cb: TAURI_API_EVENT.EventCallback<T>,
	) => ReturnType<typeof TAURI_API_EVENT.once<T>>;
	emit: T extends null
		? (payload?: T) => ReturnType<typeof TAURI_API_EVENT.emit>
		: (payload: T) => ReturnType<typeof TAURI_API_EVENT.emit>;
};

export type Result<T, E> =
	| { status: "ok"; data: T }
	| { status: "error"; error: E };

function __makeEvents__<T extends Record<string, any>>(
	mappings: Record<keyof T, string>,
) {
	return new Proxy(
		{} as unknown as {
			[K in keyof T]: __EventObj__<T[K]> & {
				(handle: __WebviewWindow__): __EventObj__<T[K]>;
			};
		},
		{
			get: (_, event) => {
				const name = mappings[event as keyof T];

				return new Proxy((() => {}) as any, {
					apply: (_, __, [window]: [__WebviewWindow__]) => ({
						listen: (arg: any) => window.listen(name, arg),
						once: (arg: any) => window.once(name, arg),
						emit: (arg: any) => window.emit(name, arg),
					}),
					get: (_, command: keyof __EventObj__<any>) => {
						switch (command) {
							case "listen":
								return (arg: any) => TAURI_API_EVENT.listen(name, arg);
							case "once":
								return (arg: any) => TAURI_API_EVENT.once(name, arg);
							case "emit":
								return (arg: any) => TAURI_API_EVENT.emit(name, arg);
						}
					},
				});
			},
		},
	);
}
