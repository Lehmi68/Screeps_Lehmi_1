/* Modul: roleBuilder
 By Anton Nonym
 Paramteruebergabe: creep
 Rueckgabe: keine
 Creeps fuehren Funktion Builder aus
 */

var roleBuilder = 
{
    /** @param {Creep} creep **/
    run: function(creep) 
	{
		//console.log('Modul roleBuilder Start');
		var sources = creep.room.find(FIND_SOURCES);
		var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
		if (targets.length > 0) //Es gibt ein zu konstruierendes Objekt
		{
			//console.log('Target fuer ConstructionSites gefunden: ' + creep.room.find(FIND_CONSTRUCTION_SITES));
			if(creep.memory.building && creep.carry.energy == 0) 
			{
				creep.memory.building = false;
				creep.say('Harvesting');
			}
			if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) 
			{
				creep.memory.building = true;
				creep.say('Building');
			}

			if(creep.memory.building) 
			{
				if(targets.length) 
				{
					if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) 
					{
						creep.moveTo(targets[0]);
					}
				}
			}
			else 
			{
				
				if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) 
				{
					creep.moveTo(sources[0]);
				}
			}
		}
		else // Es gibt kein zu konstruierendes Objekt Creep auf freeWorker setzen
		{
			console.log('No more Building needed. Set Harvester free.');
			creep.say('freeWorker');
			creep.memory.role = 'freeWorker'
		}
	}
};
module.exports = roleBuilder;