/* global Given*/

import acessarSite from "../pageobjects/acessarSite";

const urlSite = new acessarSite

Given(/^que acesso o site do shopping$/, () => {
	urlSite.AbrirUrl();
});
