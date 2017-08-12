/*
 * Modul roleFreeWorker
 * Freie Worker sollen sich bei der Flag FreeWorkerFlag sammeln
 * um nicht im Wege herum zu stehen.
 * By Anton Nonym
 * You can import it from another modules like this:
 * var mod = require('role.FreeWorker');
 * mod.thing == 'a thing'; // true
 */

 
 var roleFreeWorker =
{
	/** @param {Creep} creep **/
    run: function(creep)
	{
		//console.log('Modul rolefreeWorker Start');
		creep.moveTo(Game.flags.WorkerFlag); // Freie Worker an WorkerFlag sammeln
	}
};
module.exports = roleFreeWorker;
