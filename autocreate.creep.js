/* Modul: autocreateCreep
 By Anton Nonym
 Paramteruebergabe: keine
 Rueckgabe: keine
 Spanen von creeps wenn dies nötig ist.
 Dabei soll die maximal vorhandene Energie beruecksichtigt werden je hoeher die vorhandene energie 
 umso groesser koennen die creeps werden.

 Die min anzahl der erforderliche creeps wird im main modul mit den memory variablen: 
 Memory.SetMinWorker = 0; //Anzahl Minimaler Worker
 Memory.SetMinAtacker = 0; //Anzahl Minimaler Atacker
 Memory.SetMinRangeAtacker = 0; //Anzahl Minimaler Range Atacker
 Memory.SetMinHealer = 0; //Anzahl Minimaler Atacker
 definiert.
 
 Die Reihenfolge beim spawnen ist worker, guard, Healer
 */
 
 /* Benoetigte Energie fuer Worker
// Worker 1 WORK,CARRY,MOVE = 100+50+50=200 (für Notfälle)
// Worker 2 WORK,WORK,CARRY,MOVE =100+100+50+50=300 (normaler Spawn Point zu Spielbeginn)
// Worker 3 WORK,WORK,CARRY,CARRY,MOVE =100+100+50+50+50=350 (Spawn Point +1 Extension)
// Worker 4 WORK,WORK,WORK,CARRY,MOVE =100+100+100+50+50=400 (Spawn Point +2 Extension)
// Worker 5 WORK,WORK,WORK,CARRY,CARRY,MOVE =100+100+100+50+50+50=450 (Spawn Point +3 Extension)
// Worker 6 WORK,WORK,WORK,WORK,CARRY,MOVE =100+100+100+100+50+50=500 (Spawn Point +4 Extension)
// Worker 5 WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE =100+100+100+100+50+50+50=550 (Spawn Point +5 Extension)
*/

var autocrateCreep = 
{
	run: function()
	{
		//console.log('Modul autocreateCreep Start');
		//Module definieren
		var countType = require('count.Type');
		
		countType.run(); // Durchzaehlen wie viele typen es jeweils gibt.
				
		if(Memory.summeWorkerExist < Memory.SetMinWorker) //Worker Spawnen wenn zu wenig
		{
			var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,CARRY,MOVE], undefined, {role: 'freeWorker'}); // Span mit 300 Energie
			console.log('Spawning new Creep role freeWorker: ' + newName);
		} 
		else if(Memory.countAtackerExist < Memory.SetMinAtacker) // Atacker Spawnen wenn zu wenig
		{
			var newName = Game.spawns['Spawn1'].createCreep([ATTACK,ATTACK,ATTACK,MOVE], undefined, {role: 'Atacker'}); // Span mit 300 Energie
			console.log('Spawning new Creep role Atacker: ' + newName);
		}
		else if(Memory.countRangeAtackerExist < Memory.SetMinRangeAtacker) // Range Atacker Spawnen wenn zu wenig
		{
			var newName = Game.spawns['Spawn1'].createCreep([RANGED_ATTACK,MOVE,MOVE,MOVE], undefined, {role: 'RangeAtacker'}); // Span mit 300 Energie
			console.log('Spawning new Creep role RangeAtacker: ' + newName);
		}
		else if(Memory.countHealerExist < Memory.countMinHealer) // Healer Spawnen wenn zu wenig
		{
			var newName = Game.spawns['Spawn1'].createCreep([HEAL,MOVE], undefined, {role: 'Healer'}); // Span mit 300 Energie
			console.log('Spawning new Creep role Healer: ' + newName);
		} 
		else if(Memory.countUpgraderExist < Memory.SetMinUpgrader) //Upgrader Spawnen wenn zu wenig
		{
			var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,CARRY,MOVE], undefined, {role: 'Upgrader'}); // Span mit 300 Energie
			console.log('Spawning new Creep role freeWorker: ' + newName);
		}
	}
};
module.exports = autocrateCreep;