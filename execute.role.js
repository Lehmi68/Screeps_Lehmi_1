/* Modul: executeRole
 By Anton Nonym
 Paramteruebergabe: keine
 Rueckgabe: keine
 Ausfuehren der jeweiligen Rolle
*/

var executeRole =
{
	run: function()
	{	
		//console.log('Modul executeRole Start');
		
		//console.log('Bind Modules in Modul executeRole');
		//console.log('Bind Module roleHarvester in Modul executeRole');
		var roleHarvester = require('role.Harvester');
		//console.log('Bind Module roleBuilder in Modul executeRole');
		var roleBuilder = require('role.Builder');
		//console.log('Bind Module ControllerUpgrade in Modul executeRole');
		var ControllerUpgrade = require('role.ControllerUpgrade');
		//console.log('Bind Module roleRepairer in Modul executeRole');
		var roleRepairer = require('role.Repairer');
		//console.log('Bind Module roleHealer in Modul executeRole');
		var roleHealer = require('role.Healer');
		//console.log('Bind Module roleGuard in Modul executeRole');
		var roleGuard = require('role.Guard');
		//console.log('Bind Module roleFreeWorker in Modul executeRole');
		var roleFreeWorker = require('role.FreeWorker');
		
		//console.log('Bind Module executeRoleTower in Modul executeRole');
		//var executeRoleTower = require('execute.role.tower');
				
		//console.log('Modul executeRole fuer Creeps nach moduleinbindung');
		for(var name in Game.creeps)
		{
			var creep = Game.creeps[name];
		        
			if (creep.memory.role == 'Harvester') 
			{
				roleHarvester.run(creep);
			}
			
			if(creep.memory.role == 'Builder') 
			{
				roleBuilder.run(creep);
			}
			
			//freeWorker werden auch zum Upgraden genutzt wenn nichts zu Worken ist.
			if((creep.memory.role == 'Upgrader') || (creep.memory.role == 'freeWorker'))
			{
				ControllerUpgrade.run(creep);
			}
			
			if(creep.memory.role == 'Repairer') 
			{
				roleRepairer.run(creep);
			}
		
			if((creep.memory.role == 'Atacker') || (creep.memory.role == 'RangeAtacker')) 
			{
				roleGuard.run(creep);
			}
			
			if(creep.memory.role == 'Healer') 
			{
				roleHealer.run(creep);
			}
			
			/* Free worker rolle aktuell fuer Upgrader verwendet, daher auskommentier.
			if(creep.memory.role == 'freeWorker') 
			{
				roleFreeWorker.run(creep);
			}*/
		}
		
		// Rollen füer Tower ausfuehren
		// 28.08.2016 Vorerst abgeschaltet, da Tower noch nicht funktioniert
		/*
		for(var name in Game.rooms) 
		{
			console.log('name of Rooms length = ' + name.length);
			var myRoom = Game.rooms[name];
			
			console.log('Modul executeRoleTower.run');
			console.log('myRoom = ' + myRoom);
			executeRoleTower.run(myRoom);
		}
		*/
		
		
		
	}
    
};
module.exports = executeRole;