/* Modul: roleRepairer
 By Anton Nonym
 Paramteruebergabe: keine
 Rueckgabe: keine
 Ausfuehren der jeweiligen Rolle
 
 29.08.2016 Funktioniert fast Creep repariert,
 bleibt aber stehen wenn energie null ist.
 ausserden wird die struktur nich voll repariert.
 
*/
var roleRepairer =
{
	/** @param {Creep} creep **/
	run: function(creep)
	{
		console.log('Modul roleRepairer Start');
		//var targets = creep.room.find(FIND_STRUCTURES, {filter: object => object.hits < (object.hitsMax*0.95)});
		//if(creep.carry.energy < creep.carryCapacity) 
		if(creep.carry.energy < creep.carryCapacity) 
		{
			creep.say('Harvesting');
			creep.memory.building = false;
			var sources = creep.room.find(FIND_SOURCES);
			if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE)
			{
				creep.moveTo(sources[0]);
			}
		}
		else
		{
			//Suche nach beschäsigten Strukturen
			var targets = creep.room.find(FIND_STRUCTURES, {filter: object => object.hits < (object.hitsMax * 0.5)});
			//var targets = creep.room.find(FIND_STRUCTURES, {filter: object => object.hits < (object.hitsMax*0.95)});
			//console.log('Target fuer ConstructionSites gefunden: ' + creep.room.find(FIND_CONSTRUCTION_SITES));
			//console.log('Object.hitsmax = ' + targets.object.hitsMax);
			if (targets.length > 0) //Es gibt ein zu konstruierendes Objekt
			{
				if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) 
				{
					creep.memory.building = true;
					creep.say('Repairing');
				}
				if(creep.memory.building) 
				{
					if(targets.length) 
					{
						if(creep.repair(targets[0]) == ERR_NOT_IN_RANGE) 
						{
							creep.moveTo(targets[0]);
						}
					}
				}
			}
			else // Es gibt kein zu konstruierendes Objekt Creep auf freeWorker setzen
			{
				console.log('Creep: ' + creep.name + ' No more Repair needed. Set Harvester free.');
				creep.say('freeWorker');
				creep.memory.role = 'freeWorker'
			}	
		}
	}
};
module.exports = roleRepairer;
