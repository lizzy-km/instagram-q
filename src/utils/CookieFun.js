import Cookies from "js-cookie";
//
export const tokenToArr = (text, token) => (token ? token?.split(text) : []);
export const joinArr = (text, arr) => (arr ? arr?.join(text) : "");
//
export const setLocalStorage = (name, data) => {
  const dataInString = JSON.stringify(data);

  return localStorage.setItem(name, dataInString);
};
//
export const deleteLocalStorage = (name = "") => {
  return localStorage.removeItem(name || null);
};
//
export const getLocalStorage = (name) => {
  const data = name ? localStorage.getItem(name) : "";
  const dataInJson = data ? JSON.parse(data) : "";

  return dataInJson;
};
//

export const setTokenToCookie = (name, data, expiredDay = false) => {
  const firstTokenToArr = tokenToArr("c", data);
  const firstArrToToken = joinArr("င", firstTokenToArr);

  const secondTokenToArr = tokenToArr("o", firstArrToToken);
  const secondArrToToken = joinArr("ဝ", secondTokenToArr);

  const thirdTokenToArr = tokenToArr(".", secondArrToToken);
  const thirdArrToToken = joinArr("#", thirdTokenToArr);

  return Cookies.set(name, thirdArrToToken, { expires: expiredDay });
};
//
export const getTokenToCookie = (name = false) => {
  const data = Cookies.getJSON(name || false);

  const firstTokenToArr = tokenToArr("ဝ", data);
  const firstArrToToken = joinArr("o", firstTokenToArr);

  const secondTokenToArr = tokenToArr("င", firstArrToToken);
  const secondArrToToken = joinArr("c", secondTokenToArr);

  const thirdTokenToArr = tokenToArr("#", secondArrToToken);
  const thirdArrToToken = joinArr(".", thirdTokenToArr);

  return thirdArrToToken;
};
//

export const setCookie = (name, data, expiredDay = false) => {
  return Cookies.set(name, data, { expires: expiredDay });
};
//
export function getCookie(name = "") {
  const cookieData = Cookies.getJSON(name || null);

  return cookieData || null;
}
//
export function deleteCookie(name, path = "/") {
  Cookies.remove(name, { path: path }); // removed!
}
//
export function removeAllCookies() {
  const allCookies = Cookies.get();

  for (const cookieName in allCookies) {
    const cookieAttributes = {}; // default is fine for most cases.
    if (Cookies.get(cookieName) !== undefined) {
      Cookies.remove(cookieName, cookieAttributes);
    }
  }
}
