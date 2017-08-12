/* Modul: EraseDeadCreepsInMemory
 By Anton Nonym
 Paramteruebergabe: keine
 Rueckgabe: keine
 Loescht Creeps im Memory die nicht mehr existieren.
 */

var EraseDeadCreepsInMemory =
{
	run: function() //Kein Parameter Uebergeben
	{
		//console.log('Modul EraseDeadCreepsInMemory Start');
		for(var name in Memory.creeps)
		{
			if(!Game.creeps[name])
			{
				delete Memory.creeps[name];
				//console.log('Clearing non-existing creep memory:', name);
			}
		}
	}
};
module.exports = EraseDeadCreepsInMemory;