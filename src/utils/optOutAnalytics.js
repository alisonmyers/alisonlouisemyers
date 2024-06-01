// src/utils/optOutAnalytics.js
export function optOutAnalytics() {
    document.cookie = "ga-disable-G-N6RY3BCFL9=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/";
    window[`ga-disable-G-N6RY3BCFL9`] = true;
  }