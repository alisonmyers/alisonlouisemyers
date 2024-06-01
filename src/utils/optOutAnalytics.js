// src/utils/optOutAnalytics.js
export function optOutAnalytics() {
    document.cookie = "ga-disable-G-WY6465L6MK=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/";
    window[`ga-disable-G-WY6465L6MK`] = true;
  }