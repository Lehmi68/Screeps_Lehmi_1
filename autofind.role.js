/* Modul: autofindRole
 By Anton Nonym
 Paramteruebergabe: creep
 Rueckgabe: keine
 Free Worker finden und einer Rolle vom Typ Harvester oder Builder zuweisen,
 wenn Arbeit vorhanden.
*/

module.exports = 
{
	run(creep)
	{
		//console.log('Modul autofindRole Start');
		for(var name in Game.creeps) 
		{
			var creep = Game.creeps[name];
			
			if(creep.memory.role == 'freeWorker')
			{
				//Abfrage ob eine Structur Energie benoetigt.
				//console.log('Found Creep: ' + name + ' is freeWorker in modul autofindRole');
				var targets = creep.room.find(FIND_STRUCTURES,{filter: (structure) => 
				{return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN || structure.structureType == STRUCTURE_TOWER)
				&& structure.energy < structure.energyCapacity;}});
				//console.log('Find Targets ohne Energie in Modul autofindRole: ' + targets);
				//console.log('Find Targets length in Modul autofindRole: ' + targets.length);
				if(targets.length > 0) //Eine Struktur die nicht voll mit energie ist wurde gefunden
				{
					//console.log('Find Targe ohne Enrgie: ' + targets);
					//console.log('Creep: ' + name + ' is freeWorker, set to Harvester');
					creep.memory.role = 'Harvester';
					creep.say('Now Harvester');
				}
				
				var creep = Game.creeps[name]; //Memory erneut lladen
				if(creep.memory.role == 'freeWorker') //Abfrage ob es was zu Builden gibt und gibt es einen freeWorker
				{
					var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
					if(targets.length > 0) //Construction Object gefunden
					{
						//console.log('Find Target for Construct' + targets);
						//console.log('Creep: ' + name + ' is freeWorker, set to Builder');
						creep.memory.role = 'Builder';
						creep.say('Now Building');
					}
				}
				var creep = Game.creeps[name]; //Memory erneut lladen
				if(creep.memory.role == 'freeWorker') 
				{
			        //var targets = creep.room.find(FIND_STRUCTURES, {filter: object => object.hits < (object.hitsMax*0.95)}); //Abfrage ob es was zu Builden gibt und gibt es einen freeWorker
			        var targets = creep.room.find(FIND_STRUCTURES, {filter: object => object.hits < (object.hitsMax-50)});
				    if(targets.length > 0) //Repair Objekt gefunden
					{
						console.log('Find Target for Construct' + targets);
						console.log('Creep: ' + name + ' is freeWorker, set to Builder');
						creep.memory.role = 'Repairer';
						creep.say('Now Reapiring');
					} 
				}
				
			} 
			
			/*		
			if((creep.memory.role == 'freeWorker') && (Memory.countUpgraderExist < countMinUpgrader))
			{
				//console.log('Creep: ' + name + ' is freeWorker, set to Upgrader');
				creep.memory.role = 'Upgrader';
			}
			
			
			if((creep.memory.role == 'freeWorker') &&(Memory.countRepairerExist < countMinRepairer))
			{
				//console.log('Creep: ' + name + ' is freeWorker, set to Repairer');
				creep.memory.role = 'Repairer';
			}	
		
			if((creep.memory.role == 'freeWorker') &&(Memory.countHealerExist < countMinHealer))
			{
				//console.log('Creep: ' + name + ' is freeWorker, set to Healer');
				creep.memory.role = 'Healer';
			}*/
			
		}
		
	}
};
//module.exports = autofindRole;