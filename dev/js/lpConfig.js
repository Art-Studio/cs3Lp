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
			en: 'https://www.boocasino.com/',
			de: 'https://www.boocasino.com/',
			fr: 'https://www.boocasino.com/',
			it: 'https://www.boocasino.com/',
			es: 'https://www.boocasino.com/',
			ru: 'https://www.boocasino.com/',
			da: 'https://www.boocasino.com/',
			fi: 'https://www.boocasino.com/',
			nb: 'https://www.boocasino.com/',
			sv: 'https://www.boocasino.com/'
		};

		lpConfig.ext.license = {
			en: 'Boo Casino is owned and operated by Green Feather Online Limited, a company registered under the laws of Malta with Company Number C80735, with its registered address at 97 Windsor Street, SLM 1853, Sliema, Malta and licensed to provide gaming services under License No. MGA/B2C/445/2017, issued on 16 January 2019, by the Malta Gaming Authority.',
			de: 'Eigentümer und Betreiber von Boo Casino ist die Green Feather Online Limited, ein Unternehmen, das gemäß den Gesetzen von Malta mit der Firmennummer C80735, mit Sitz in Windsor Street 97, SLM 1853, Sliema, Malta, registriert und dazu berechtigt ist, Glücksspieldienste anzubieten unter der Lizenznummer MGA/B2C/445/2017, ausgestellt von der Malta Gaming Authority am 16. Januar 2019.',
			fr: 'Boo Casino is owned and operated by Green Feather Online Limited, a company registered under the laws of Malta with Company Number C80735, with its registered address at 97 Windsor Street, SLM 1853, Sliema, Malta and licensed to provide gaming services under License No. MGA/B2C/445/2017, issued on 16 January 2019, by the Malta Gaming Authority.',
			it: 'Boo Casino is owned and operated by Green Feather Online Limited, a company registered under the laws of Malta with Company Number C80735, with its registered address at 97 Windsor Street, SLM 1853, Sliema, Malta and licensed to provide gaming services under License No. MGA/B2C/445/2017, issued on 16 January 2019, by the Malta Gaming Authority.',
			es: 'Boo Casino is owned and operated by Green Feather Online Limited, a company registered under the laws of Malta with Company Number C80735, with its registered address at 97 Windsor Street, SLM 1853, Sliema, Malta and licensed to provide gaming services under License No. MGA/B2C/445/2017, issued on 16 January 2019, by the Malta Gaming Authority.',
			ru: 'Boo Casino is owned and operated by Green Feather Online Limited, a company registered under the laws of Malta with Company Number C80735, with its registered address at 97 Windsor Street, SLM 1853, Sliema, Malta and licensed to provide gaming services under License No. MGA/B2C/445/2017, issued on 16 January 2019, by the Malta Gaming Authority.',
			da: 'Boo Casino is owned and operated by Green Feather Online Limited, a company registered under the laws of Malta with Company Number C80735, with its registered address at 97 Windsor Street, SLM 1853, Sliema, Malta and licensed to provide gaming services under License No. MGA/B2C/445/2017, issued on 16 January 2019, by the Malta Gaming Authority.',
			fi: 'Boo Casino is owned and operated by Green Feather Online Limited, a company registered under the laws of Malta with Company Number C80735, with its registered address at 97 Windsor Street, SLM 1853, Sliema, Malta and licensed to provide gaming services under License No. MGA/B2C/445/2017, issued on 16 January 2019, by the Malta Gaming Authority.',
			nb: 'Boo Casino is owned and operated by Green Feather Online Limited, a company registered under the laws of Malta with Company Number C80735, with its registered address at 97 Windsor Street, SLM 1853, Sliema, Malta and licensed to provide gaming services under License No. MGA/B2C/445/2017, issued on 16 January 2019, by the Malta Gaming Authority.',
			sv: 'Boo Casino is owned and operated by Green Feather Online Limited, a company registered under the laws of Malta with Company Number C80735, with its registered address at 97 Windsor Street, SLM 1853, Sliema, Malta and licensed to provide gaming services under License No. MGA/B2C/445/2017, issued on 16 January 2019, by the Malta Gaming Authority.'
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
