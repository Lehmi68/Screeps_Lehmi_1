/* Modul: ControllerUpgrade
 By Anton Nonym
 Paramteruebergabe: creep
 Rueckgabe: keine
 Ausfuehren der jeweiligen Rolle
*/

var roleUpgrader = 
{
	/** @param {Creep} creep **/
	run: function(creep)
	{
		//console.log('Modul ControllerUpgrade Start');
        	if(creep.memory.upgrading && creep.carry.energy == 0) 
		{
			creep.memory.upgrading = false;
			creep.say('harvesting');
	    	}
		if(!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity)
		{
	        	creep.memory.upgrading = true;
	        	creep.say('upgrading');
	    	}
		if(creep.memory.upgrading)
		{
			if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE)
			{
				creep.moveTo(creep.room.controller);
			}
		}
		else
		{
			var sources = creep.room.find(FIND_SOURCES);
			if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE)
			{
				//if(creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
				creep.moveTo(sources[0]);
				//creep.moveTo(sources[1]);
			}
		}
	}
};
module.exports = roleUpgrader;
