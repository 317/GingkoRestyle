// ==UserScript==
// @name         Alternative Fullscreen
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Alternative appearance for the Gingko Fullscreen Mode
// @author       Thierno Rignoux
// @match        https://gingkoapp.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    addGlobalStyle('#fullscreen{background-color:#eeeeee!important}');
    addGlobalStyle('#fullscreen-contents{background-color:#eeeeee!important;font-family:"Segoe UI"!important;}');
    addGlobalStyle('#fullscreen-contents::-webkit-scrollbar { width: 5px;}');
    addGlobalStyle('#fullscreen-contents::-webkit-scrollbar-track{background: #efefef;}');
    addGlobalStyle('#fullscreen-contents::-webkit-scrollbar-thumb {background: #e0e0e0;}');
    addGlobalStyle('.fullscreen-container{max-width:1000px!important}');
})();

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}
