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
			en: 'https://www.slotsventura.com/',
			de: 'https://www.slotsventura.com/',
			fr: 'https://www.slotsventura.com/',
			it: 'https://www.slotsventura.com/',
			es: 'https://www.slotsventura.com/',
			ru: 'https://www.slotsventura.com/',
			da: 'https://www.slotsventura.com/',
			fi: 'https://www.slotsventura.com/',
			nb: 'https://www.slotsventura.com/',
			sv: 'https://www.slotsventura.com/'
		};

		lpConfig.ext.license = {
			en: 'SlotsVentura (www.slotsventura.com) is owned and operated by Equinox Dynamic N.V., of E-Commerce Park, Vredenberg, Curacao and its wholly owned subsidiary, Domiseda & Partners s.r.o Zamocka 30, 811 01 Bratislava, Slovak Republic. SlotsVentura operates under Master License No.365/JAZ Sub-License GLH-OCCHKTW0708082016, granted by the Government of Curaçao.',
			de: 'Eigentümerin und Betreiberin von SlotsVentura (www.slotsventura.com) ist Equinox Dynamic N.V., von E-Commerce Park, Vredenberg, Curacao und ihre hunderprozentige Tochtergesellschaft Domiseda & Partners s.r.o Zamocka 30, 811 01 Bratislava, Slovak Republic. SlotsVentura wird unter der Master-Lizenz No.365/JAZ Sub-License GLH-OCCHKTW0708082016 betrieben, gewährt von der Regierung von Curaçao',
			fr: 'SlotsVentura (www.slotsventura.com) appartient et est exploité par Equinox Dynamic NV, du E-Commerce Park, Vredenberg, Curacao et de son subsididiare en propriété exclusive, Domiseda & Partners s.r.o Zamocka 30, 811 01 Bratislava, Slovak Republic. SlotsVentura opère sous Maître License No. No.365/JAZ Sub-License GLH-OCCHKTW0708082016, accordée par le gouvernement de Curaçao.',
			it: 'SlotsVentura (www.slotsventura.com) è di proprietà e operato da Equinox Dynamic N.V., di E-Commerce Park, Vredenberg, Curacao e la sua interamente controllata, Domiseda & Partners s.r.o Zamocka 30, 811 01 Bratislava, Slovak Republic. SlotsVentura opera in conformità alla licenza master numero No.365/JAZ Sub-License GLH-OCCHKTW0708082016, fornita dal Governo di Curaçao.',
			es: 'SlotsVentura (www.slotsventura.com) es propiedad y está operado por Equinox Dynamic N.V., del E-Commerce Park, Vredenberg, Curacao y es totalmente subsidiaria de esta propiedad, Domiseda & Partners s.r.o of Zamocka 30, 811 01 Bratislava, Slovak Republic. SlotsVentura opera bajo la Licencia Maestra No.365/JAZ Sub-License GLH-OCCHKTW0708082016, otorgada por el Gobierno de Curazao.',
			ru: 'SlotsVentura (www.slotsventura.com) принадлежит и управляется компанией Equinox Dynamic N.V., расположенная на E-Commerce Park, Vredenberg, Curacao u ее дочерней компанией Domiseda & Partners s.r.o Zamocka 30, 811 01 Bratislava, Slovak Republic. SlotsVentura работает под Мастер Лицензии № No.365/JAZ Sub-License GLH-OCCHKTW0708082016, выданная правительством Curaçao.',
			da: '',
			fi: 'SlotsVentura (www.slotsventura.com) sivuston omistaa ja tarjoaa Equinox Dynamic N.V., E-Commerce Park, Vredenberg, Curacao ja täysin sen omistuksessa oleva tytäryhtiö, Domiseda & Partners s.r.o Zamocka 30, 811 01 Bratislava, Slovak Republic. SlotsVentura toimii päätoimiluvalla Nro. No.365/JAZ Sub-License GLH-OCCHKTW0708082016, jonka on myöntänyt Curaçao.',
			nb: 'SlotsVentura (www.slotsventura.com) eies og drives av Equinox Dynamic N.V., på E-Commerce Park, Vredenberg, Curacao med sitt heleide datterselskap, Domiseda & Partners s.r.o Zamocka 30, 811 01 Bratislava, Slovak Republic. SlotsVentura drives under mesterlisens nr. No.365/JAZ Sub-License GLH-OCCHKTW0708082016, innvilget av myndighetene i Curaçao.',
			sv: 'SlotsVentura (www.slotsventura.com) ägs och drivs av Equinox Dynamic N.V., i E-Commerce Park, Vredenberg, Curacao och är ett helägt dotterbolag, Domiseda & Partners s.r.o Zamocka 30, 811 01 Bratislava, Slovak Republic. SlotsVentura drivs under licensnummer No.365/JAZ Sub-License GLH-OCCHKTW0708082016, utfärdad av Curaçaos regering.'
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
