/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('execute.role.tower');
 * mod.thing == 'a thing'; // true
 */

var executeRoleTower =
{
	run: function(roomName)
	{	
		console.log('Modul executeRoleTower Start');
		
		console.log('Bind Modules in Modul executeRoleTower');
		
		console.log('Bind Module TowerRoleDefender in Modul executeRoleTower');
		var TowerRoleDefender = require('TowerRoleDefender');
				
		console.log('Run TowerRoleDefender in executeRoleTower');
		TowerRoleDefender.run(roomName);
		
	}
    
};
module.exports = executeRoleTower;