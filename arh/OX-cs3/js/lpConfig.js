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
			en: 'https://www.orientxpresscasino.com/',
			de: 'https://www.orientxpresscasino.com/',
			fr: 'https://www.orientexpresscasino.info/',
			it: 'https://www.orientexpresscasino.info/',
			es: 'https://www.orientxpresscasino.com/',
			ru: 'https://www.orientexpresscasino.com/',
			da: 'https://www.orientxpresscasino.com/',
			fi: 'https://www.orientxpresscasino.com/',
			nb: 'https://www.orientxpresscasino.com/',
			sv: 'https://www.orientxpresscasino.com/'
		};

		lpConfig.ext.license = {
			en: 'OrientXpress (www.orientxpresscasino.com) is owned and operated by Equinox Dynamic N.V., of E-Commerce Park, Vredenberg, Curacao and its wholly owned subsidiary, Domiseda & Partners s.r.o Zamocka 30, 811 01 Bratislava, Slovak Republic. OrientXpress operates under Master License No.365/JAZ Sub-License GLH-OCCHKTW0708082016, granted by the Government of Curaçao.',
			de: 'Eigentümerin und Betreiberin von OrientXpress (www.orientxpresscasino.com) ist Equinox Dynamic N.V., von E-Commerce Park, Vredenberg, Curacao und ihre hunderprozentige Tochtergesellschaft Domiseda & Partners s.r.o Zamocka 30, 811 01 Bratislava, Slovak Republic. OrientXpress wird unter der Master-Lizenz No.365/JAZ Sub-License GLH-OCCHKTW0708082016 betrieben, gewährt von der Regierung von Curaçao',
			fr: 'OrientXpress (www.orientxpresscasino.com) appartient et est exploité par Equinox Dynamic NV, du E-Commerce Park, Vredenberg, Curacao et de son subsididiare en propriété exclusive, Domiseda & Partners s.r.o Zamocka 30, 811 01 Bratislava, Slovak Republic. OrientXpress opère sous Maître License No. No.365/JAZ Sub-License GLH-OCCHKTW0708082016, accordée par le gouvernement de Curaçao.',
			it: 'OrientXpress (www.orientxpresscasino.com) è di proprietà e operato da Equinox Dynamic N.V., di E-Commerce Park, Vredenberg, Curacao e la sua interamente controllata, Domiseda & Partners s.r.o Zamocka 30, 811 01 Bratislava, Slovak Republic. OrientXpress opera in conformità alla licenza master numero No.365/JAZ Sub-License GLH-OCCHKTW0708082016, fornita dal Governo di Curaçao.',
			es: 'OrientXpress (www.orientxpresscasino.com) es propiedad y está operado por Equinox Dynamic N.V., del E-Commerce Park, Vredenberg, Curacao y es totalmente subsidiaria de esta propiedad, Domiseda & Partners s.r.o of Zamocka 30, 811 01 Bratislava, Slovak Republic. OrientXpress opera bajo la Licencia Maestra No.365/JAZ Sub-License GLH-OCCHKTW0708082016, otorgada por el Gobierno de Curazao.',
			ru: 'OrientXpress (www.orientxpresscasino.com) принадлежит и управляется компанией Equinox Dynamic N.V., расположенная на E-Commerce Park, Vredenberg, Curacao u ее дочерней компанией Domiseda & Partners s.r.o Zamocka 30, 811 01 Bratislava, Slovak Republic. OrientXpress работает под Мастер Лицензии № No.365/JAZ Sub-License GLH-OCCHKTW0708082016, выданная правительством Curaçao.',
			da: '',
			fi: 'OrientXpress (www.orientxpresscasino.com) sivuston omistaa ja tarjoaa Equinox Dynamic N.V., E-Commerce Park, Vredenberg, Curacao ja täysin sen omistuksessa oleva tytäryhtiö, Domiseda & Partners s.r.o Zamocka 30, 811 01 Bratislava, Slovak Republic. OrientXpress toimii päätoimiluvalla Nro. No.365/JAZ Sub-License GLH-OCCHKTW0708082016, jonka on myöntänyt Curaçao.',
			nb: 'OrientXpress (www.orientxpresscasino.com) eies og drives av Equinox Dynamic N.V., på E-Commerce Park, Vredenberg, Curacao med sitt heleide datterselskap, Domiseda & Partners s.r.o Zamocka 30, 811 01 Bratislava, Slovak Republic. OrientXpress drives under mesterlisens nr. No.365/JAZ Sub-License GLH-OCCHKTW0708082016, innvilget av myndighetene i Curaçao.',
			sv: 'OrientXpress (www.orientxpresscasino.com) ägs och drivs av Equinox Dynamic N.V., i E-Commerce Park, Vredenberg, Curacao och är ett helägt dotterbolag, Domiseda & Partners s.r.o Zamocka 30, 811 01 Bratislava, Slovak Republic. OrientXpress drivs under licensnummer No.365/JAZ Sub-License GLH-OCCHKTW0708082016, utfärdad av Curaçaos regering.'
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
