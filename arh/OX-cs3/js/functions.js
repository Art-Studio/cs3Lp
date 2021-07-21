// JavaScript Document
/*eslint-disable no-console*/
/*global window lpConfig dataLayer*/

$(function(){
	
	var html = '';
	var lang = lpConfig.lang;
	var $body = $('body');
	
	// check btag
	var utm_source = /utm_source=([^&#]+)/.exec(location.search);
	var btag = /btag=([^&#]+)/.exec(location.search);
	
	if(utm_source && !btag){ // for old config
		//history.pushState( {}, null, location.href.replace('utm_source', 'btag') );
		lpConfig.ext.urlVars = window.location.search;
		lpConfig.ext.urlVars = lpConfig.ext.urlVars.replace('utm_source', 'btag');
	}	
	
	// fill content
	$('#menuBtn a').text(lang.toUpperCase());
	
	$( lpConfig.content[lang].offer ).each(function( key, obj ){
		html += '<p style="' + (obj.css || '') + '">' + obj.txt + '</p>'
	});
	
	$('#offerBox .txt var').html( html );
	$('#offerBox .cta var').html( lpConfig.content[lang].cta );
	
	$('#step1 var').html( lpConfig.content[lang].step1 );
	$('#step2 var').html( lpConfig.content[lang].step2 );
	$('#step3 var').html( lpConfig.content[lang].step3 );
	
	$('#licenceInfo var').html( lpConfig.ext.license[lang] );

	
	// menu
	$('#menuBtn a, #closeMenu').on('click mouseover', function(){
		$body.toggleClass('menuTrue');
		return false;
	});
	
	$('#menuBox .items').on('mouseleave', function(){
		$body.toggleClass('menuTrue');
		return false;
	});
	
	
	// keep allowed languages, remove others from the menu
	var tmpLang = ['en','de','fr','it','es','ru','da','fi','nb','sv'];
	var availableLangs = lpConfig.content.langs;
	
	if( availableLangs.length > 1 ) {
		tmpLang.forEach( function (el) {
			if ( !~availableLangs.indexOf(el) ){
				$('#' + el, '#langs').remove();
			}
		});
	} else {
		$('#menuBtn').remove();
	}
	
	
	// change langs
	$('#langs a').click(function(){
		
		var url = window.location.href;
		var prefix = window.location.search ? '&' : '?';
		
		lang = $(this).parent().attr('id');
		
		if(/lang=../.test(url)){
			window.location = url.replace(/(\?||&)lang=../, '$1lang=' + lang);
		}else{
			window.location = url + prefix + 'lang=' + lang;
		}
		
		return false;
	});
	
	
	// affLogo
	if(lpConfig.content.aff.logo){
		
		html = $('<a>', {
			target: '_blank',
			href: lpConfig.content.aff.href,
			html: '<img src="' + lpConfig.content.aff.logo + '">'
		});
		
		$('<div>', {
			id: 'affLogo',
			html: html
		}).prependTo('#offerBox .offer');
	}
	
	// show content
	$body.removeClass('init');
	
	
	// functions resize
	resize();
	
	var timeoutId;
	$(window).resize(function(){
		clearTimeout(timeoutId);
		timeoutId = setTimeout(function(){
			resize();
		}, 30);
	});

	function resize(){
		var breakPoint = $(window).width();
		
		// set breakPoint
		if( breakPoint < 768 ){ breakPoint = 768 }
		else if( breakPoint <= 946 ){ breakPoint = 946 }
		else if( breakPoint <= 1920 ){ breakPoint = 1920 }
		
		if(!$body.hasClass(('w' + breakPoint))){
			// change body class, with breakPoint
			$body
				.removeClass('w768 w946 w1920')
				.addClass('w' + breakPoint);
			
			// images
			var imgSize = breakPoint === 768 ? '768' : '1920';
			
			if( !$('#bgBox img').hasClass( 'w' + imgSize ) ){
				
				$('#bgBox img')
					.hide()
					.attr( 'src', lpConfig.content.images[imgSize].bg )
					.attr( 'class', 'w' + imgSize )
					.fadeIn();
			}
		}
	}
	
	
	// launchSite
	$('#offerBox .cta a, #steps a').click(function(){
		lpConfig.launchSite();
		return false;
	});
	
	lpConfig.launchSite = function(){
		
		var prefix = '';
		var url = lpConfig.cta.url;
		var bonus = lpConfig.cta.bonusCode;
		var target = lpConfig.cta.target === '_blank' ? '_blank' : '_self';
		
		prefix = lpConfig.ext.urlVars ? '&' : '?';
		
		// add bonus code
		if(lpConfig.cta.bonusCode){
			bonus = prefix + 'bonuscode=' + bonus;
		}
		
		// create url
		if(!lpConfig.cta.url){
			if(lpConfig.ext.platform === 'cs3'){
				url = 
					lpConfig.ext.domain[lang] + '/' + lang + '/' +
					( lpConfig.cta.action || lpConfig.cta.innerPage ) + '/' +
					lpConfig.ext.urlVars.replace(/(\?||&)lang=../, '') + bonus +
					lpConfig.cta.hash;
			}else{
				var ext = bonus +
						( prefix ? '&' : '?' ) +
						'lang=' + lang +
						( lpConfig.cta.action === 'signup' ? '&r=true' : '' );
				url = 
					lpConfig.ext.domain[lang] + '/' +
					lpConfig.cta.innerPage + '/' +
					lpConfig.ext.urlVars + ext +
					lpConfig.cta.hash;
			}

			// remove double slash from url
			url = url.replace(/([^:]\/)\/+/g, '$1');
		}
		
		console.log( url, target );
		window.open( url, target );
	}
	
	// autoRedirect
	if(lpConfig.tpl.redirect){
		setTimeout( lpConfig.launchSite, lpConfig.tpl.redirect * 1000 );
	}
	
});

// GA
if( lpConfig.ga.trackingId ){
    var ga = document.createElement('script');
    ga.src = 'https://www.googletagmanager.com/gtag/js?id=' + lpConfig.ga.trackingId;
    ga.async = true;
    document.head.appendChild(ga);

    window.dataLayer = window.dataLayer || [];
    var gtag = function(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', lpConfig.ga.trackingId, {
        campaign: {
            name: lpConfig.ga.utm_campaign,
            medium: lpConfig.ga.utm_medium,
            source: lpConfig.ga.utm_source,
            content: lpConfig.ga.utm_content
        }
    });
}

