/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.Healer');
 * mod.thing == 'a thing'; // true
 */

var roleHealer = 
 {

    /** @param {Creep} creep **/
    run: function(creep) 
	{
		//console.log('Modul roleHealer Start');
		//var targets = creep.room.find(FIND_HOSTILE_CREEPS); // Funktioniert
		var damagedCreep = creep.pos.findClosestByRange(FIND_MY_CREEPS, {filter: function(object) {return object.hits < (object.hitsMax - 5);}});
		//console.log('damagedCreep = ' + damagedCreep);
		
		if (damagedCreep) //Ein vrletzter Creep wurde gefunden
		{
			if(damagedCreep && creep.hits <= creep.hitsMax) // Heal bis volle Gesundheit
			{
				console.log('Healing : ' + damagedCreep);
			    creep.moveTo(damagedCreep);
    	        creep.heal(damagedCreep);	
			}
		}
		else // kein Ziel fuer Angriff gefungen Move to Flag GuardFlag1
		{
			//creep.moveTo(Game.spawns.Spawn1);
			creep.moveTo(Game.flags.GuardFlag1); // Kein 
		}
		
	}
};
module.exports = roleHealer;
    
/*

var roleHealer = 
{
    // @param {Creep} creep
    run: function(creep)
	{
		console.log('Modul roleHealer Start');
		//var damagedCreep = creep.pos.findClosestByRange(Game.MY_CREEPS,{filter: function(object){return object !== creep && object.hits < object.hitsMax;}});
		//var damagedCreep = creep.pos.findClosestByRange(Game.MY_CREEPS,{filter: function(object){return object.hits < object.hitsMax;}});
		//var damagedCreep = creep.pos.findClosestByRange(FIND_MY_CREEPS, {filter: function(object) {return object.hits < object.hitsMax;}});
		//var damagedCreep = creep.pos.findClosestByRange(FIND_MY_CREEPS, {filter: function(object) {return object.hits < (object.hitsMax * 0.9);}}); // Funktioniert fuellt aber nicht ganz auf
		var damagedCreep = creep.pos.findClosestByRange(FIND_MY_CREEPS, {filter: function(object) {return object.hits < (object.hitsMax - 5);}});
		//console.log('damagedCreep.length' + damagedCreep.length);
		console.log('damagedCreep = ' + damagedCreep);
		//if ((creep.hits < creep.hitsMax) - 100) //no more heal
		//if (creep.hits < creep.hitsMax)
		if (creep.hits < creep.hitsMax)
		{
		    console.log('creep.hits < creep.hitsMax');
    	    creep.moveTo(Game.spawns.Spawn1);
    	    creep.heal(damagedCreep);
    	    return;
		}
    
		if(damagedCreep) 
		{
    	console.log('Found Damaged Creep = ' + damagedCreep);
    	creep.moveTo(damagedCreep);
    	creep.heal(damagedCreep);
    	return;
		}
    
		var guard = creep.pos.findClosestByRange(Game.MY_CREEPS,{filter: function(creep) {return creep.memory.role === 'RangeAtacker';}});
		if (guard) 
		{
			creep.moveTo(guard);
		} 
		else 
		{
			creep.moveTo(Game.spawns.Spawn1);
			creep.heal(damagedCreep);
		}
	}
};
module.exports = roleHealer;*/