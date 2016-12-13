import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
PlayersList = new Mongo.Collection('players');
UsersText = new Mongo.Collection('Text');
AnimeText = new Mongo.Collection('Anime');
AnimeText.insert({text: "Instantiate"});
CartoonText = new Mongo.Collection('Cartoons');
CartoonText.insert({text: "Instantiate"});
FPSText = new Mongo.Collection('FPS');
FPSText.insert({text: "Instantiate"});
RTSText = new Mongo.Collection('RTS');
RTSText.insert({text: "Instantiate"});
BGText = new Mongo.Collection('Board Games');
BGText.insert({text: "Instantiate"});
GDText = new Mongo.Collection('Game Dev');
GDText.insert({text: "Instantiate"});
MOBAText = new Mongo.Collection('MOBA');
MOBAText.insert({text: "Instantiate"});
FightText = new Mongo.Collection('Fighting Games');
FightText.insert({text: "Instantiate"});
DrawText = new Mongo.Collection('Drawing');
DrawText.insert({text: "Instantiate"});
LitText = new Mongo.Collection('Literature');
LitText.insert({text: "Instantiate"});
SportsText = new Mongo.Collection('Sports');
SportsText.insert({text: "Instantiate"});
HikeText = new Mongo.Collection('Hiking');
HikeText.insert({text: "Instantiate"});
Meteor.methods({
'HW': function(){
console.log("HW");
},
'deleteDocs': function(Name, filter = {}) {
	if(Name == 'Lit')
   		 return LitText.remove(filter);
	else if(Name = 'BG')
		 return BG.remove(filter);
  }
});

//courtesy of https://forums.meteor.com/t/deleting-all-documents-from-a-collection-from-the-web-console/32230/2
  // code to run on server at startup
});

