/* Modul: TowerRoleDefender
 By Anton Nonym
 Paramteruebergabe: roomName (Raumname)
 Rueckgabe: keine
 Dieses Modul soll die Tower im Raum als Defender steuern
 Funktioniert noch nicht da .find nicht geht
 */

var TowerRoleDefender =
{
	run: function(roomName)
	{	
        console.log('Modul TowerRoleDefender Start');
		console.log('roomName in Modul TowerRoleDefender is: ' + roomName);
			
		//var hostiles = Game.rooms[roomName].find(FIND_HOSTILE_CREEPS);
		//var hostiles = Game.room.roomName.find(FIND_HOSTILE_CREEPS);
		//var hostiles = roomName.room.find(FIND_HOSTILE_CREEPS);
		var hostiles = roomName.pos.find(Game.HOSTILE_CREEPS);
		console.log('Found Number of Hostiles: ' + hostiles.length);
		console.log('Found Hostiles: ' + hostiles);
    
		if(hostiles.length > 0) 
		{
			var username = hostiles[0].owner.username;
			console.log('Found Hostle User Name: ' + username);
			Game.notify(`User ${username} spotted in room ${roomName}`);
			var towers = Game.rooms[roomName].find(FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_TOWER}});
			towers.forEach(tower => tower.attack(hostiles[0]));
		}
	}
};
module.exports = TowerRoleDefender;
