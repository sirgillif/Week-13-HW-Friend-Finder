var path = require('path');
var friends= require(path.join(__dirname, '..','/data/friends.js'));
//var friends= new Friends;
module.exports=function (app) {

	app.get('/api/friends', function (req, res) {
		//doesnt happen
	});
	app.post('/api/friends', function (req, res) {
		//put the person in the list then check the list for the person who mates the bes with them (loop that saves
		// position)
		var newFriend = req.body;
		console.log(newFriend);
		console.log(path.join(__dirname, '..','data/friends.js'));
		console.log(friends);
		//var friendList = friends.FriendsList;
		var maxCompat = 0;
		var friendNum = 0;
		for(var i = 0;i < friends.length - 1; i++){
			var sum = 0;
			for(var j = 0;j < friends[i].scores.length; j++){
				sum+= Math.abs(newFriend.scores[j]-friends[i].scores[j]);
			}
			if(sum>maxCompat)
			{
				maxCompat=sum;
				friendNum=i;
			}
		}
		friends.push(newFriend);
		res.send({ "name":friends[i].name,"photo":friends[i].photo });
	});
}