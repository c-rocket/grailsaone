"use strict";app.controller("BrowseController",function(e,t,n,r,i,s,o,u,a,f,l,c,h,p){function v(e){return e.ITEM_STATUS=="available"}function m(e){for(var t=0;t<r.offers.length;t++){if(r.offers.USER_NAME=r.currentUser){return true}}}r.searchItem="";var d=l.getCurrentUser();r.uid=d.uid;r.currentUser=d.name;r.gravatar=d.gravatar;r.signedIn=d.signedIn;r.items=a.all;r.listMode=true;if(i.itemId){r.listMode=false;o.findItem({itemId:i.itemId},function(e){a.setSelectedItem(e);r.isItemPoster=e.ITEM_POSTED_BY==r.uid;r.isSold=e.ITEM_STATUS=="sold";t.get(baseUrl+"offer/"+e.ITEM_ID).success(function(e){r.offers=e;for(var t=0;t<r.offers.length;t++){if(r.offers[t].USER_NAME==r.currentUser){r.alreadyOffered=true;return}}});c.findComments({itemId:i.itemId},function(e){r.comments=e;console.log("comments are -",r.comments)});r.selectedItem=e;r.isAvailable=e.ITEM_STATUS=="available";if(e.ITEM_POSTED_BY==r.uid){r.isItemPoster=true}})}r.makeOffer=function(e){t.post(baseUrl+"newOffer",{p1:r.selectedItem.ITEM_ID,p2:r.uid,p3:e.amount}).success(function(e){r.offer="";h.findOffers({itemId:r.selectedItem.ITEM_ID},function(e){r.offers=e})})};r.addComment=function(n){t.post(baseUrl+"newComment",{p1:r.selectedItem.ITEM_ID,p2:r.uid,p3:n}).success(function(t){console.log(t);if(t){r.commentText="";c.findComments({itemId:r.selectedItem.ITEM_ID},function(e){r.comments=e});s.pop("success","Comment created");e.path("/browse/"+r.selectedItem.ITEM_ID)}else{s.pop("error","Could not add comment")}})};r.isItemPoster=function(e){return e==r.currentUser};r.cancelItem=function(t){t.ITEM_STATUS="cancelled";var n=baseUrl+"item/"+t.ITEM_ID;var r={p1:t.ITEM_TITLE,p2:t.ITEM_DESC,p3:t.ITEM_BOUGHT_BY,p4:t.ITEM_PRICE,p5:"cancelled"};a.updateItemArray(t);a.editItem(n,r).success(function(n){s.pop("success","Item is updated.");e.path(baseUrl+"browse/"+t.ITEM_ID)})};r.acceptOffer=function(t){var n=baseUrl+"offer/"+t.OFFER_ID;var i={p1:"accepted"};var o=r.selectedItem;p.updateOffer(n,i).success(function(t){var n=baseUrl+"item/"+o.ITEM_ID;var i={p1:o.ITEM_TITLE,p2:o.ITEM_DESC,p3:o.ITEM_BOUGHT_BY,p4:o.ITEM_PRICE,p5:"sold"};o.ITEM_STATUS="sold";a.updateItemArray(o);a.editItem(n,i).success(function(t){r.isAvailable=false;s.pop("success","Offer accepted!");e.path(baseUrl+"browse/"+o.ITEM_ID)})})}})