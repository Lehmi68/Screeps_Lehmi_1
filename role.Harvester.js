/* Modul: roleHarvester
 By Anton Nonym
 Paramteruebergabe: creep
 Rueckgabe: keine
 Ausfuehren der jeweiligen Rolle Harvester
*/

module.exports = 
{
    run(creep) 
	{
		//console.log('Modul roleHarvester Start');
	    if(creep.carry.energy < creep.carryCapacity) 
		{
			var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) 
			{
                creep.moveTo(sources[0]);
            }
        }
        else 
		{
            //Suche nach Spawn Point ohne Energie
			var targets = creep.room.find(FIND_STRUCTURES,{filter: (structure) => {return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN || structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;}});
			//var targets = creep.room.find(FIND_STRUCTURES,{filter: (structure) => {return (structure.structureType == STRUCTURE_SPAWN) && structure.energy < structure.energyCapacity;}});
            //console.log('targets in modul roleHarvester: ' + targets);
			//console.log('targets.lenght in modul roleHarvester: ' + targets.length);
			if(targets.length > 0) // Energie kann abgeliefert werden da Target nicht voll
			{
				if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) 
				{
                    creep.moveTo(targets[0]);
                }
            }
			else // Energie Target voll. Creep freisetzen als freeWorker
			{
				creep.memory.role = 'freeWorker'
				creep.say('freeWorker');
				console.log('Energy Full. Set Harvester to freeWorker');
			}
        }
	}
};
//module.exports = roleHarvester;