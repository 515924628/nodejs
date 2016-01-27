import CryptoJS from "crypto-js";

let key = CryptoJS.enc.Utf8.parse("5772a0a08d09406f");
let cfg = {
	iv: CryptoJS.enc.Latin1.parse("0102030405060708"),
	mode: CryptoJS.mode.CBC,
	padding: CryptoJS.pad.Pkcs7
};

export default {
	enc(data) {
		return CryptoJS.AES.encrypt(data, key, cfg).toString();
	},
	dec(data) {
		return CryptoJS.AES.decrypt(data, key, cfg).toString(CryptoJS.enc.Utf8);
	},
	md5(data) {
		return CryptoJS.MD5(data).toString();
	}
}