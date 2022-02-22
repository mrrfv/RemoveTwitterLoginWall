// ==UserScript==
// @name        RemoveTwitterLoginWall
// @namespace   Violentmonkey Scripts
// @match       https://*.twitter.com/*
// @grant       none
// @version     1.0
// @author      mrrfv
// @description Userscript that lets you view tweets without logging in/creating an account
// ==/UserScript==

setInterval(() => {
    document.querySelector(`#layers > div.css-1dbjc4n.r-aqfbo4.r-1d2f490.r-12vffkv.r-1xcajam.r-zchlnj.r-ipm5af > div > div > div > div > div > div.css-1dbjc4n.r-1awozwy.r-1kihuf0.r-18u37iz.r-1pi2tsx.r-1777fci.r-1pjcn9w.r-xr3zp9.r-1xcajam.r-ipm5af.r-g6jmlv`).style.display = 'none';
    document.getElementsByTagName('html')[0].style.overflow = 'auto';
}, 1000);
