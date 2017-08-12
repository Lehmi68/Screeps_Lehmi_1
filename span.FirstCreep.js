/* Modul: spanFirstCreep
 By Anton Nonym
 Paramteruebergabe: keine
 Rueckgabe: keine
 Bei Spielbeginn gibt es noch keine creeps.
 Damit die weiteren Funktionen nich auf leeres Memeory zugreigen wird immer
 dann ein creep gespornt wenn keiner mehr in der map vorhanden ist
 */

var spanFirstCreep =
{
	run: function() //keie parameter Uebergeben
	{
		//console.log('Modul spanFirstCreep Start');
		var population = 0; // Variable fuer Population definieren
		for (var i in Game.creeps) { population++ }
		if (population === 0) // Gibt es noch keinen Creep dann Spawn einen freeWorker
		{
			var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,CARRY,MOVE], undefined, {role: 'freeWorker'});
			//console.log('Spawning first Creep role freeWorker: ' + newName);
		}
	}
};
module.exports = spanFirstCreep;