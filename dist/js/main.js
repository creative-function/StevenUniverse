"use strict";console.log("Hello World from main.js! \nChange this message, and make sure it changes in the browser \nto verify that you're working in the right files.");var garnetButton=document.querySelector(".garnetIMG"),pearlButton=document.querySelector(".pearlIMG"),stevenButton=document.querySelector(".stevenIMG"),ameButton=document.querySelector(".ameIMG"),showLogo=document.querySelector(".showLogo"),showDescription=document.querySelector(".show-description"),garnetTab=document.querySelector(".garnet-tab"),pearlGemTab=document.querySelector(".pearl-tab"),stevenGemTab=document.querySelector(".steven-tab"),ameGemTab=document.querySelector(".ame-tab"),garnetInfoPopout=document.querySelector(".garnet-info"),pearlInfoPopout=document.querySelector(".pearl-info"),stevenInfoPopout=document.querySelector(".steven-info"),ameInfoPopout=document.querySelector(".ame-info"),onloadGems=document.querySelectorAll(".popout-styling"),garnetPopoutOpen=!1,toggleGarnetPopout=function(e){e.stopPropagation(),console.log("Garnet toggle activated"),garnetPopoutOpen?(TweenMax.to(".popout-styling:nth-child(1)",1,{x:"0%",ease:Back.easeIn},.5),garnetPopoutOpen=!1):(TweenMax.to(".popout-styling:nth-child(1)",1,{x:"-100%",ease:Back.easeOut},.5),garnetPopoutOpen=!0)};garnetButton.addEventListener("click",toggleGarnetPopout),garnetTab.addEventListener("click",toggleGarnetPopout),garnetInfoPopout.addEventListener("click",toggleGarnetPopout);var pearlPopoutOpen=!1,togglePearlPopout=function(e){e.stopPropagation(),console.log("Pearl toggle activated"),pearlPopoutOpen?(TweenMax.to(".popout-styling:nth-child(2)",1,{x:"0%",ease:Back.easeIn},.5),pearlPopoutOpen=!1):(TweenMax.to(".popout-styling:nth-child(2)",1,{x:"-100%",ease:Back.easeOut},.5),pearlPopoutOpen=!0)};pearlButton.addEventListener("click",togglePearlPopout),pearlGemTab.addEventListener("click",togglePearlPopout),pearlInfoPopout.addEventListener("click",togglePearlPopout);var stevenPopoutOpen=!1,toggleStevenPopout=function(e){e.stopPropagation(),console.log("Steven toggle activated"),stevenPopoutOpen?(TweenMax.to(".popout-styling:nth-child(3)",1,{x:"0%",ease:Back.easeIn},.5),stevenPopoutOpen=!1):(TweenMax.to(".popout-styling:nth-child(3)",1,{x:"-100%",ease:Back.easeOut},.5),stevenPopoutOpen=!0)};stevenButton.addEventListener("click",toggleStevenPopout),stevenGemTab.addEventListener("click",toggleStevenPopout),stevenInfoPopout.addEventListener("click",toggleStevenPopout);var amePopoutOpen=!1,toggleAmePopout=function(e){e.stopPropagation(),console.log("toggle activated"),amePopoutOpen?(TweenMax.to(".popout-styling:nth-child(4)",1,{x:"0%",ease:Back.easeIn},.5),amePopoutOpen=!1):(TweenMax.to(".popout-styling:nth-child(4)",1,{x:"-100%",ease:Back.easeOut},.5),amePopoutOpen=!0)};ameButton.addEventListener("click",toggleAmePopout),ameGemTab.addEventListener("click",toggleAmePopout),ameInfoPopout.addEventListener("click",toggleAmePopout);var tl=new TimelineLite;window.onload=function(){TweenMax.staggerTo(onloadGems,.5,{x:0},.25),console.log("gems have loaded"),tl.from(garnetButton,1,{x:-100}).from(pearlButton,1,{opacity:0}).from(stevenButton,.25,{scale:.5}).from(ameButton,1,{x:100}).from(showLogo,1,{y:-100}).from(showDescription,1,{opacity:0,y:-100})};
//# sourceMappingURL=main.js.map