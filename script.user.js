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
    document.querySelector(`div[tabindex="0"][role="group"]`).style.display = "none";
    document.getElementsByTagName('html')[0].style.overflow = 'auto';
}, 1000);
