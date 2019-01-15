var generatorApp = angular.module('generatorApp', []);

generatorApp.controller('pageCtrl', function ($scope) {
  
	// $scope.faicons = ["fa-glass","fa-music","fa-search","fa-envelope-o","fa-heart","fa-star","fa-star-o","fa-user","fa-film","fa-th-large","fa-th","fa-th-list","fa-check","fa-remove","fa-close","fa-times","fa-search-plus","fa-search-minus","fa-power-off","fa-signal","fa-gear","fa-cog","fa-trash-o","fa-home","fa-file-o","fa-clock-o","fa-road","fa-download","fa-arrow-circle-o-down","fa-arrow-circle-o-up","fa-inbox","fa-play-circle-o","fa-rotate-right","fa-repeat","fa-refresh","fa-list-alt","fa-lock","fa-flag","fa-headphones","fa-volume-off","fa-volume-down","fa-volume-up","fa-qrcode","fa-barcode","fa-tag","fa-tags","fa-book","fa-bookmark","fa-print","fa-camera","fa-font","fa-bold","fa-italic","fa-text-height","fa-text-width","fa-align-left","fa-align-center","fa-align-right","fa-align-justify","fa-list","fa-dedent","fa-outdent","fa-indent","fa-video-camera","fa-photo","fa-image","fa-picture-o","fa-pencil","fa-map-marker","fa-adjust","fa-tint","fa-edit","fa-pencil-square-o","fa-share-square-o","fa-check-square-o","fa-arrows","fa-step-backward","fa-fast-backward","fa-backward","fa-play","fa-pause","fa-stop","fa-forward","fa-fast-forward","fa-step-forward","fa-eject","fa-chevron-left","fa-chevron-right","fa-plus-circle","fa-minus-circle","fa-times-circle","fa-check-circle","fa-question-circle","fa-info-circle","fa-crosshairs","fa-times-circle-o","fa-check-circle-o","fa-ban","fa-arrow-left","fa-arrow-right","fa-arrow-up","fa-arrow-down","fa-mail-forward","fa-share","fa-expand","fa-compress","fa-plus","fa-minus","fa-asterisk","fa-exclamation-circle","fa-gift","fa-leaf","fa-fire","fa-eye","fa-eye-slash","fa-warning","fa-exclamation-triangle","fa-plane","fa-calendar","fa-random","fa-comment","fa-magnet","fa-chevron-up","fa-chevron-down","fa-retweet","fa-shopping-cart","fa-folder","fa-folder-open","fa-arrows-v","fa-arrows-h","fa-bar-chart-o","fa-bar-chart","fa-twitter-square","fa-facebook-square","fa-camera-retro","fa-key","fa-gears","fa-cogs","fa-comments","fa-thumbs-o-up","fa-thumbs-o-down","fa-star-half","fa-heart-o","fa-sign-out","fa-linkedin-square","fa-thumb-tack","fa-external-link","fa-sign-in","fa-trophy","fa-github-square","fa-upload","fa-lemon-o","fa-phone","fa-square-o","fa-bookmark-o","fa-phone-square","fa-twitter","fa-facebook","fa-github","fa-unlock","fa-credit-card","fa-rss","fa-hdd-o","fa-bullhorn","fa-bell","fa-certificate","fa-hand-o-right","fa-hand-o-left","fa-hand-o-up","fa-hand-o-down","fa-arrow-circle-left","fa-arrow-circle-right","fa-arrow-circle-up","fa-arrow-circle-down","fa-globe","fa-wrench","fa-tasks","fa-filter","fa-briefcase","fa-arrows-alt","fa-group","fa-users","fa-chain","fa-link","fa-cloud","fa-flask","fa-cut","fa-scissors","fa-copy","fa-files-o","fa-paperclip","fa-save","fa-floppy-o","fa-square","fa-navicon","fa-reorder","fa-bars","fa-list-ul","fa-list-ol","fa-strikethrough","fa-underline","fa-table","fa-magic","fa-truck","fa-pinterest","fa-pinterest-square","fa-google-plus-square","fa-google-plus","fa-money","fa-caret-down","fa-caret-up","fa-caret-left","fa-caret-right","fa-columns","fa-unsorted","fa-sort","fa-sort-down","fa-sort-desc","fa-sort-up","fa-sort-asc","fa-envelope","fa-linkedin","fa-rotate-left","fa-undo","fa-legal","fa-gavel","fa-dashboard","fa-tachometer","fa-comment-o","fa-comments-o","fa-flash","fa-bolt","fa-sitemap","fa-umbrella","fa-paste","fa-clipboard","fa-lightbulb-o","fa-exchange","fa-cloud-download","fa-cloud-upload","fa-user-md","fa-stethoscope","fa-suitcase","fa-bell-o","fa-coffee","fa-cutlery","fa-file-text-o","fa-building-o","fa-hospital-o","fa-ambulance","fa-medkit","\f0","fa-fighter-jet","fa-beer","fa-h-square","fa-plus-square","fa-angle-double-left","fa-angle-double-right","fa-angle-double-up","fa-angle-double-down","fa-angle-left","fa-angle-right","fa-angle-up","fa-angle-down","fa-desktop","fa-laptop","fa-tablet","fa-mobile-phone","fa-mobile","fa-circle-o","fa-quote-left","fa-quote-right","fa-spinner","fa-circle","fa-mail-reply","fa-reply","fa-github-alt","fa-folder-o","fa-folder-open-o","fa-smile-o","fa-frown-o","fa-meh-o","fa-gamepad","fa-keyboard-o","fa-flag-o","fa-flag-checkered","fa-terminal","fa-code","fa-mail-reply-all","fa-reply-all","fa-star-half-empty","fa-star-half-full","fa-star-half-o","fa-location-arrow","fa-crop","fa-code-fork","fa-unlink","fa-chain-broken","fa-question","fa-info","fa-exclamation","fa-superscript","fa-subscript","fa-eraser","fa-puzzle-piece","fa-microphone","fa-microphone-slash","fa-shield","fa-calendar-o","fa-fire-extinguisher","fa-rocket","fa-maxcdn","fa-chevron-circle-left","fa-chevron-circle-right","fa-chevron-circle-up","fa-chevron-circle-down","fa-html5","fa-css3","fa-anchor","fa-unlock-alt","fa-bullseye","fa-ellipsis-h","fa-ellipsis-v","fa-rss-square","fa-play-circle","fa-ticket","fa-minus-square","fa-minus-square-o","fa-level-up","fa-level-down","fa-check-square","fa-pencil-square","fa-external-link-square","fa-share-square","fa-compass","fa-toggle-down","fa-caret-square-o-down","fa-toggle-up","fa-caret-square-o-up","fa-toggle-right","fa-caret-square-o-right","fa-euro","fa-eur","fa-gbp","fa-dollar","fa-usd","fa-rupee","fa-inr","fa-cny","fa-rmb","fa-yen","fa-jpy","fa-ruble","fa-rouble","fa-rub","fa-won","fa-krw","fa-bitcoin","fa-btc","fa-file","fa-file-text","fa-sort-alpha-asc","fa-sort-alpha-desc","fa-sort-amount-asc","fa-sort-amount-desc","fa-sort-numeric-asc","fa-sort-numeric-desc","fa-thumbs-up","fa-thumbs-down","fa-youtube-square","fa-youtube","fa-xing","fa-xing-square","fa-youtube-play","fa-dropbox","fa-stack-overflow","fa-instagram","fa-flickr","fa-adn","fa-bitbucket","fa-bitbucket-square","fa-tumblr","fa-tumblr-square","fa-long-arrow-down","fa-long-arrow-up","fa-long-arrow-left","fa-long-arrow-right","fa-apple","fa-windows","fa-android","fa-linux","fa-dribbble","fa-skype","fa-foursquare","fa-trello","fa-female","fa-male","fa-gittip","fa-sun-o","fa-moon-o","fa-archive","fa-bug","fa-vk","fa-weibo","fa-renren","fa-pagelines","fa-stack-exchange","fa-arrow-circle-o-right","fa-arrow-circle-o-left","fa-toggle-left","fa-caret-square-o-left","fa-dot-circle-o","fa-wheelchair","fa-vimeo-square","fa-turkish-lira","fa-try","fa-plus-square-o","fa-space-shuttle","fa-slack","fa-envelope-square","fa-wordpress","fa-openid","fa-institution","fa-bank","fa-university","fa-mortar-board","fa-graduation-cap","fa-yahoo","fa-google","fa-reddit","fa-reddit-square","fa-stumbleupon-circle","fa-stumbleupon","fa-delicious","fa-digg","fa-pied-piper","fa-pied-piper-alt","fa-drupal","fa-joomla","fa-language","fa-fax","fa-building","fa-child","fa-paw","fa-spoon","fa-cube","fa-cubes","fa-behance","fa-behance-square","fa-steam","fa-steam-square","fa-recycle","fa-automobile","fa-car","fa-cab","fa-taxi","fa-tree","fa-spotify","fa-deviantart","fa-soundcloud","fa-database","fa-file-pdf-o","fa-file-word-o","fa-file-excel-o","fa-file-powerpoint-o","fa-file-photo-o","fa-file-picture-o","fa-file-image-o","fa-file-zip-o","fa-file-archive-o","fa-file-sound-o","fa-file-audio-o","fa-file-movie-o","fa-file-video-o","fa-file-code-o","fa-vine","fa-codepen","fa-jsfiddle","fa-life-bouy","fa-life-buoy","fa-life-saver","fa-support","fa-life-ring","fa-circle-o-notch","fa-ra","fa-rebel","fa-ge","fa-empire","fa-git-square","fa-git","fa-hacker-news","fa-tencent-weibo","fa-qq","fa-wechat","fa-weixin","fa-send","fa-paper-plane","fa-send-o","fa-paper-plane-o","fa-history","fa-circle-thin","fa-header","fa-paragraph","fa-sliders","fa-share-alt","fa-share-alt-square","fa-bomb","fa-soccer-ball-o","fa-futbol-o","fa-tty","fa-binoculars","fa-plug","fa-slideshare","fa-twitch","fa-yelp","fa-newspaper-o","fa-wifi","fa-calculator","fa-paypal","fa-google-wallet","fa-cc-visa","fa-cc-mastercard","fa-cc-discover","fa-cc-amex","fa-cc-paypal","fa-cc-stripe","fa-bell-slash","fa-bell-slash-o","fa-trash","fa-copyright","fa-at","fa-eyedropper","fa-paint-brush","fa-birthday-cake","fa-area-chart","fa-pie-chart","fa-line-chart","fa-lastfm","fa-lastfm-square","fa-toggle-off","fa-toggle-on","fa-bicycle","fa-bus","fa-ioxhost","fa-angellist","fa-cc","fa-shekel","fa-sheqel","fa-ils","fa-meanpath"]
	$scope.faicons   = ["fa-glass","fa-music","fa-search","fa-envelope-o","fa-heart"];
	$scope.faloading = ["fa-crosshairs","fa-circle-o-notch","fa-gear","fa-refresh","fa-spinner", "fa-support", "fa-certificate","fa-asterisk","fa-futbol-o","fa-yelp"];

	setTimeout(function() {

		$scope.top    = "";
		$scope.bottom = "";
		$scope.left   = "";
		$scope.right  = "";

		$scope.width  = "";
		$scope.height = "";

		$scope.title    = "Some title"; 
		$scope.content  = "Some random content";

		$scope.faicon            = "x";
		$scope.backcolor         = "000000";
		$scope.position          = "center";
		$scope.animation         = "fade";
		$scope.animationout      = "fade";
		$scope.intime            = "0.6";
		$scope.indelay           = "0";
		$scope.showbuttons       = "true";
		$scope.red               = "true";
		$scope.yellow            = "true";
		$scope.green             = "true";
		$scope.faicon            = "x";
		$scope.img               = "false";
		$scope.imgrounded        = "false";
		$scope.theme             = "white";
		$scope.imgrounded        = "false";
		$scope.theme             = "white";
		$scope.backscreen        = "true";
		$scope.backcolor         = "000000";
		$scope.bgopacity         = "0.5";
		$scope.iframe            = "";
		$scope.iframecache       = "true";
		$scope.loadingmessage    = "";
		$scope.loadingicon       = "fa-gear";
		$scope.timeout           = "0";
		$scope.closeonclick      = "false";
		$scope.youtubeurl        = "";
		$scope.youtube           = "";
		$scope.youtubecontrols   = "false";
		$scope.youtubeinfo       = "false";
		$scope.divwithclass      = "";
		$scope.mobilehidebuttons = "false";
		$scope.callback          = "false";

		$scope.$apply();
	}, 200);
	
  
	$scope.fnCut = function(icon){
		return icon.substring(3);
	};

	$scope.fnCutVideo = function(){

		var VideoID = $scope.youtubeurl.substring( $scope.youtubeurl.indexOf("?v=")+3 );
		$scope.youtube = VideoID;
		$scope.content = "";
		$scope.iframe  = "";
		$scope.divwithclass = "";
	};


	$scope.CloseAll = function(){
		$.yosemodalclose();
	}

	$scope.fnCheckTopBottom = function(){

		$("#txttop").removeAttr("disabled");
		$("#txtbottom").removeAttr("disabled");

		if( $scope.top.length > 0)
			$("#txtbottom").attr("disabled","disabled");
		else
			$("#txtbottom").removeAttr("disabled");	

		if( $scope.bottom.length > 0)
			$("#txttop").attr("disabled","disabled");
		else
			$("#txttop").removeAttr("disabled");	

	}

	$scope.fnCheckLeftRight = function(){

		if( $scope.left.length >0 )
			$("#txtright").attr("disabled","disabled");
		else
			$("#txtright").removeAttr("disabled");


		if( $scope.right.length >0 )
			$("#txtleft").attr("disabled","disabled");
		else
			$("#txtleft").removeAttr("disabled");

	}

	$scope.msg = function(msg){
		$.yosemodal({
			position: "fixed",
			top: "10px",
			title: "error",
			content: msg,
			right: "10px",
			theme: "red",
			timeout: 3
		});
	}

	$scope.Validations = function(){

		// Top Bottom positions
		if( $scope.position != "center"){

			if( $scope.top.length > 0){

				$scope.top = $scope.top.toLowerCase();

				if( $scope.top.indexOf("px")>0 ){

				}else{
					if($scope.top.indexOf("%")<0)
						$scope.top = $scope.top.replace("PX","") + "px";
				}

			}else{

				if( $scope.bottom.length <=0 ){
					$scope.msg("Please fill the top or bottom property");
					return false;
				}else{
					if( $scope.bottom.indexOf("px")>0 ){

					}else{
						if($scope.bottom.indexOf("%")<0)
							$scope.bottom = $scope.bottom.replace("PX","") + "px";
					}
				}


			}


			// Left right position
			if( $scope.left.length>0){

				$scope.left = $scope.left.toLowerCase();

				if($scope.left.indexOf("px")>0){

				}else{
					if($scope.left.indexOf("%")<0)
						$scope.left = $scope.left + "px";
				}

			}else{
				$scope.right = $scope.right.toLowerCase();

				if($scope.right.length >0){
					if($scope.right.indexOf("px")>0){

					}else{
						if($scope.right.indexOf("%")<0)
							$scope.right = $scope.right + "px";
					}
				}else{
					$scope.msg("Please, fill the left or right position");
					return false;
				}
			}
		} // End Center position

		$scope.height = $scope.height.toLowerCase();
		$scope.width  = $scope.width.toLowerCase();

		//Height and width
		if($scope.height.length >0){
			
			if( $scope.height.indexOf("%")>0){
				
			}else{
				if( $scope.height.indexOf("px")<0 ){
					$scope.height = $scope.height +"px";
				}
			}

		}

		if($scope.width.length >0){
			if( $scope.width.indexOf("%")>0){
				
			}else{

				if( $scope.width.indexOf("px")<0 ){
					$scope.width = $scope.width +"px";
				}

			}
		}




		return true;
	}

	$scope.TestCode = function(){

		$scope.GetCode();

		var YoseModal = $scope.codeneeded;

		eval( YoseModal );

	}


	$scope.GetCode = function(){

		$scope.codeneeded = "";

		if( $scope.Validations() === false )
			return false;


		var CodeNeeded = "$.yosemodal({\n";


		// ================================================
		//	 			Title & Content & iFrame
		// ================================================
		if( $scope.title.length > 0 )
			CodeNeeded += "title: \""+ $scope.title +"\", \n";

		if( $scope.content.length > 0 & $scope.iframe.length == 0 & $scope.youtube.length == 0){
			
			var find = '\n';
			var re = new RegExp(find, 'g');

			var NewContent = $scope.content.replace(re, '</br>');

			CodeNeeded += "content: \""+ NewContent +"\", \n";
		}else{

			if( $scope.iframe.length > 0 ){
				// Normal iFrame
				if( $scope.iframe != "fade")
					CodeNeeded += "iframe: \""+ $scope.iframe +"\",\n";


				if( $scope.iframecache == "false" )
					CodeNeeded += "iframecache: false,\n";

				if( $scope.loadingmessage.length >0 )
					CodeNeeded += "loadingmessage: \""+ $scope.loadingmessage +"\",\n";
				
				if( $scope.loadingicon.length != "fa-gear" )
					CodeNeeded += "loadingicon: \""+ $scope.loadingicon +"\",\n";

			}else{

				// ================================================
				//	 		   Youtube properties
				// ================================================
				CodeNeeded += "youtube: \""+ $scope.youtube +"\",\n";

				if( $scope.youtubecontrols == "true" )
					CodeNeeded += "youtubecontrols: true,\n";

				if( $scope.youtubeinfo == "true" )
					CodeNeeded += "youtubeinfo: true,\n";

			}


		}

		// ================================================
		//	 				Positioning
		// ================================================
		if( $scope.position == "center" ){

		}else{

			CodeNeeded += "position: \"fixed\",\n";

			if( $scope.top.length > 0 ){
				CodeNeeded += "top: \""+ $scope.top +"\",\n";
			}else{
				CodeNeeded += "bottom: \""+ $scope.bottom +"\",\n";
			}

			if( $scope.left.length > 0 ){
				CodeNeeded += "left: \""+ $scope.left +"\",\n";
			}else{
				CodeNeeded += "right: \""+ $scope.right +"\",\n";
			}

		}


		// ================================================
		//	 				Animation
		// ================================================
		if( $scope.animation != "fade")
			CodeNeeded += "animation: \""+ $scope.animation +"\",\n";


		if( $scope.animationout != "fade" )
			CodeNeeded += "animationout: \""+ $scope.animationout +"\",\n";


		if( $scope.intime != "0.6" )
			CodeNeeded += "intime: "+ $scope.intime +",\n";

		if( $scope.indelay != "0" )
			CodeNeeded += "indelay: "+ $scope.indelay +",\n";



		// ================================================
		//	 				Width & Height
		// ================================================
		if( $scope.width.length != 0 )
			CodeNeeded += "width: \""+ $scope.width +"\",\n";

		if( $scope.height.length != 0 )
			CodeNeeded += "height: \""+ $scope.height +"\",\n";


		// ================================================
		//	 		   Appearance & Behaviour
		// ================================================
		if( $scope.closeonclick == "true" ){
			CodeNeeded += "closeonclick: true,\n";
		}

		if( $scope.showbuttons == "false" ){
			CodeNeeded += "showbuttons: false,\n";
		}

		if( $scope.red == "false" ){
			CodeNeeded += "red: false,\n";
		}

		if( $scope.yellow == "false" ){
			CodeNeeded += "yellow: false,\n";
		}

		if( $scope.green == "false" ){
			CodeNeeded += "green: false,\n";
		}

		if( $scope.faicon != "x" ){
			CodeNeeded += "faicon: \""+$scope.faicon+"\",\n";
		}	

		if( $scope.img == "true" ){
			CodeNeeded += "img: \"static/img/pic1.jpg\",\n";
		}

		if( $scope.imgrounded == "true" ){
			CodeNeeded += "imgrounded: true,\n";
		}

		if( $scope.theme != "white" ){
			CodeNeeded += "theme: \""+ $scope.theme +"\",\n";
		}

		if( $scope.backscreen == "false" ){
			CodeNeeded += "backscreen: false,\n";
		}

		if( $scope.backcolor != "000000" ){
			CodeNeeded += "backcolor: \"#"+ $scope.backcolor +"\",\n";
		}

		if( $scope.bgopacity != "0.5" ){
			CodeNeeded += "bgopacity: "+ $scope.bgopacity +",\n";
		}

		if( $scope.timeout != "0" ){
			CodeNeeded += "timeout: "+ $scope.timeout +",\n";
		}

		// ================================================
		//	 		   Special properties
		// ================================================
		if( $scope.mobilehidebuttons == "true" ){
			CodeNeeded += "mobilehidebuttons: true,\n";
		}

		if( $scope.callback == "true" ){
			CodeNeeded += "},function(){\n";
			CodeNeeded += "//Perform any custom after closing\n";
			CodeNeeded += "alert('closed'); \n";
		}	



		CodeNeeded += "});"

		$scope.codeneeded = CodeNeeded;

	}





});