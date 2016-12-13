import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session'
import './main.html';
PlayersList = new Mongo.Collection('players');
UsersText = new Mongo.Collection('Text');
AnimeText = new Mongo.Collection('Anime');
CartoonText = new Mongo.Collection('Cartoons');
FPSText = new Mongo.Collection('FPS');
RTSText = new Mongo.Collection('RTS');
BGText = new Mongo.Collection('Board Games');
GDText = new Mongo.Collection('Game Dev');
MOBAText = new Mongo.Collection('MOBA');
FightText = new Mongo.Collection('Fighting Games');
DrawText = new Mongo.Collection('Drawing');
LitText = new Mongo.Collection('Literature');
SportsText = new Mongo.Collection('Sports');
HikeText = new Mongo.Collection('Hiking');
Session.set('m','LitText');
var i = 0;


if(Meteor.isClient){

 Template.database.helpers({
tasks: function(){
return UsersText.find({}, {sort: {createdAt: -1}});
}
});

Template.Chats.helpers({
//Tried to Create a session to change a variable that would specify a database so I wouldn't have to create the same function for every data however I couldn't update the client javascript how I wanted to so I chose to use css instead
LitTasks: function(){
return LitText.find({}, {sort: {createdAt: -1}});
},
AnimeTasks: function(){
return AnimeText.find({}, {sort: {createdAt: -1}});
},
CartoonTasks: function(){
return CartoonText.find({}, {sort: {createdAt: -1}});
},
FPSTasks: function(){
return FPSText.find({}, {sort: {createdAt: -1}});
},
RTSTasks: function(){
return RTSText.find({}, {sort: {createdAt: -1}});
},
BGTasks: function(){
return BGText.find({}, {sort: {createdAt: -1}});
},
GDTasks: function(){
return GDText.find({}, {sort: {createdAt: -1}});
},
MOBATasks: function(){
return MOBAText.find({}, {sort: {createdAt: -1}});
},
FightTasks: function(){
return FightText.find({}, {sort: {createdAt: -1}});
},
SportsTasks: function(){
return SportsText.find({}, {sort: {createdAt: -1}});
},
HikeTasks: function(){
return HikeText.find({}, {sort: {createdAt: -1}});
},
DrawTasks: function(){
return DrawText.find({}, {sort: {createdAt: -1}});
}
});
Template.Chats.events({

 'click submit': function(){	
Meteor.call('HW');
}
});
}//Dynamic Templates from http://stackoverflow.com/questions/25618125/meteor-show-and-hide-templates
    Session.setDefault('page', 'home');

    Template.body.helpers({
        currentPage: function(page){
            return Session.get('page')
        }
    })

    Template.body.events({
        'click .clickChangesPage': function(event, template){
            Session.set('page', event.currentTarget.getAttribute('data-page'))
        }
    });


	



