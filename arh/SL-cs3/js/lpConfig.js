// JavaScript Document
/*eslint-disable no-console*/
/*global window*/

var lpConfig = window.localStorage && localStorage.getItem('lpConfig') ? JSON.parse( localStorage.getItem('lpConfig') ) : null;

(function(){
	
	var isLpConfig = lpConfig ? location.pathname.replace(/\//g, '') === lpConfig.tpl.path.replace(/\//g, '') : false;
	
	if(isLpConfig){

		var tmpLang = /lang=(..)/.exec(location.search);
		lpConfig.lang = tmpLang ? tmpLang[1] : lpConfig.content.langs[0] || 'en';

		lpConfig.ext.platform = 'cs3';

		lpConfig.ext.domain = {
			en: 'https://www.casinosuperlines.com/',
			de: 'https://www.casinosuperlines.com/',
			fr: 'https://www.casinosuperlines.com/',
			it: 'https://www.superlinescasino.org/',
			es: 'https://www.casinosuperlines.com/',
			ru: 'https://www.casinosuperlines.com/',
			da: 'https://www.casinosuperlines.com/',
			fi: 'https://www.casinosuperlines.com/',
			nb: 'https://www.casinosuperlines.com/',
			sv: 'https://www.casinosuperlines.com/'
		};

		lpConfig.ext.license = {
			en: 'Superlines (www.casinosuperlines.com) is owned and operated by Equinox Dynamic N.V., of E-Commerce Park, Vredenberg, Curacao and its wholly owned subsidiary, Domiseda & Partners s.r.o Zamocka 30, 811 01 Bratislava, Slovak Republic. Superlines operates under Master License No.365/JAZ Sub-License GLH-OCCHKTW0708082016, granted by the Government of Curaçao.',
			de: 'Eigentümerin und Betreiberin von Superlines (www.casinosuperlines.com) ist Equinox Dynamic N.V., von E-Commerce Park, Vredenberg, Curacao und ihre hunderprozentige Tochtergesellschaft Domiseda & Partners s.r.o Zamocka 30, 811 01 Bratislava, Slovak Republic. Superlines wird unter der Master-Lizenz No.365/JAZ Sub-License GLH-OCCHKTW0708082016 betrieben, gewährt von der Regierung von Curaçao',
			fr: 'Superlines (www.casinosuperlines.com) appartient et est exploité par Equinox Dynamic NV, du E-Commerce Park, Vredenberg, Curacao et de son subsididiare en propriété exclusive, Domiseda & Partners s.r.o Zamocka 30, 811 01 Bratislava, Slovak Republic. Superlines opère sous Maître License No. No.365/JAZ Sub-License GLH-OCCHKTW0708082016, accordée par le gouvernement de Curaçao.',
			it: 'Superlines (www.casinosuperlines.com) è di proprietà e operato da Equinox Dynamic N.V., di E-Commerce Park, Vredenberg, Curacao e la sua interamente controllata, Domiseda & Partners s.r.o Zamocka 30, 811 01 Bratislava, Slovak Republic. Superlines opera in conformità alla licenza master numero No.365/JAZ Sub-License GLH-OCCHKTW0708082016, fornita dal Governo di Curaçao.',
			es: 'Superlines (www.casinosuperlines.com) es propiedad y está operado por Equinox Dynamic N.V., del E-Commerce Park, Vredenberg, Curacao y es totalmente subsidiaria de esta propiedad, Domiseda & Partners s.r.o of Zamocka 30, 811 01 Bratislava, Slovak Republic. Superlines opera bajo la Licencia Maestra No.365/JAZ Sub-License GLH-OCCHKTW0708082016, otorgada por el Gobierno de Curazao.',
			ru: 'Superlines (www.casinosuperlines.com) принадлежит и управляется компанией Equinox Dynamic N.V., расположенная на E-Commerce Park, Vredenberg, Curacao u ее дочерней компанией Domiseda & Partners s.r.o Zamocka 30, 811 01 Bratislava, Slovak Republic. Superlines работает под Мастер Лицензии № No.365/JAZ Sub-License GLH-OCCHKTW0708082016, выданная правительством Curaçao.',
			da: '',
			fi: 'Superlines (www.casinosuperlines.com) sivuston omistaa ja tarjoaa Equinox Dynamic N.V., E-Commerce Park, Vredenberg, Curacao ja täysin sen omistuksessa oleva tytäryhtiö, Domiseda & Partners s.r.o Zamocka 30, 811 01 Bratislava, Slovak Republic. Superlines toimii päätoimiluvalla Nro. No.365/JAZ Sub-License GLH-OCCHKTW0708082016, jonka on myöntänyt Curaçao.',
			nb: 'Superlines (www.casinosuperlines.com) eies og drives av Equinox Dynamic N.V., på E-Commerce Park, Vredenberg, Curacao med sitt heleide datterselskap, Domiseda & Partners s.r.o Zamocka 30, 811 01 Bratislava, Slovak Republic. Superlines drives under mesterlisens nr. No.365/JAZ Sub-License GLH-OCCHKTW0708082016, innvilget av myndighetene i Curaçao.',
			sv: 'Superlines (www.casinosuperlines.com) ägs och drivs av Equinox Dynamic N.V., i E-Commerce Park, Vredenberg, Curacao och är ett helägt dotterbolag, Domiseda & Partners s.r.o Zamocka 30, 811 01 Bratislava, Slovak Republic. Superlines drivs under licensnummer No.365/JAZ Sub-License GLH-OCCHKTW0708082016, utfärdad av Curaçaos regering.'
		};

		console.log(lpConfig);
		
		// localStorage
        if( window.localStorage ) {
            // save config
            localStorage.setItem( 'lpConfig', JSON.stringify( window.lpConfig ) );
        }

	}else{
		console.log('Missing lpConfig!');
		// redirect to the default config
		window.location = 'aff/' + location.search;
	}

})();
