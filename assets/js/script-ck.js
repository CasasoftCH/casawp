jQuery.noConflict();jQuery(document).ready(function(e){function n(t){var n=e("#"+t);e("html,body").animate({scrollTop:n.offset().top},"slow")}e(".casasync-map").length&&google&&e(".casasync-map").each(function(){var t=e(this);if(t.data("address")){geocoder=new google.maps.Geocoder;geocoder.geocode({address:t.data("address")},function(e,n){if(n==google.maps.GeocoderStatus.OK){var r;function i(){if(e[0])var n=e[0].geometry.location,i=e[0].geometry.bounds;else var n=null,i=null;var s={zoom:12,mapTypeId:google.maps.MapTypeId.ROADMAP,center:n};t.show();r=new google.maps.Map(document.getElementById("map-canvas"),s);i&&r.fitBounds(i);var o=new google.maps.Marker({map:r,position:n})}google.maps.event.addDomListener(window,"load",i)}})}});var t=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/);t||e(".multiselect").each(function(){var t=e(this);t.multiselect({buttonClass:"btn",buttonWidth:"auto",buttonContainer:'<div class="multiselect-item btn-group" />',maxHeight:!1,buttonText:function(n){if(n.length==0)return t.data("empty")?t.data("empty")+' <b class="caret"></b>':'Bitte auswählen <b class="caret"></b>';if(n.length>2)return n.length+' ausgewählt  <b class="caret"></b>';var r="";n.each(function(){r+=e(this).text()+", "});return r.substr(0,r.length-2)+' <b class="caret"></b>'}})});e("#casasyncCarousel").carousel({interval:!1});e("#carousel-text").html(e("#slide-content-0").html());e("[id^=carousel-selector-]").click(function(t){t.preventDefault();var n=e(this).attr("id"),r=n.substr(n.length-1),r=parseInt(r);e("#casasyncCarousel").carousel(r);e("#slider-thumbs .thumbnail-pane li").removeClass("active");e(this).parent().addClass("active")});e("#casasyncCarousel").on("slid",function(t){var n=e(".item.active").data("slide-number");e("#carousel-text").html(e("#slide-content-"+n).html());e("#slider-thumbs .thumbnail-pane li").removeClass("active");e("#carousel-selector-"+n).parent().addClass("active")});e("#casasyncKontactAnchor").click(function(t){t.preventDefault();e("html, body").animate({scrollTop:e(e.attr(this,"href")).parent().offset().top-100},500);e(".casasync-property-contact-form").parent().addClass("casasync-highlight");e(".casasync-property-contact-form").delay(500).find(' input[name="firstname"]').focus();return!1});e.fancybox&&e(".casasync-fancybox").fancybox();e(".casasync-basic-box").equalHeightColumns({speed:500})});