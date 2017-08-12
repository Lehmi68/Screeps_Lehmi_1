/* Modul: countType
 By Anton Nonym
 Paramteruebergabe: keine
 Rueckgabe: keine
 Dieses Modul soll die Summe der vorhanden creep Typer ermitteln un in Memory Variablen ablegen
 */
  
var countType =
{
	run: function()
	{
		//console.log('Modul countType Start');
		// Summe der Worker ermitteln (Beinhaltet auch die freeWorker
		Memory.countHarvesterExist = _(Game.creeps).filter( { memory: { role: 'Harvester' } } ).size();
		Memory.countBuilderExist = _(Game.creeps).filter( { memory: { role: 'Builder' } } ).size();
		Memory.countRepairerExist = _(Game.creeps).filter( { memory: { role: 'Repairer' } } ).size();
		Memory.countFreeWorkerExist = _(Game.creeps).filter( { memory: { role: 'freeWorker' } } ).size();
		Memory.summeWorkerExist = Memory.countHarvesterExist + Memory.countBuilderExist + Memory.countRepairerExist + Memory.countFreeWorkerExist;
		
		Memory.countUpgraderExist = _(Game.creeps).filter( { memory: { role: 'Upgrader' } } ).size();
		
		// Summe Healer
		Memory.countHealerExist = _(Game.creeps).filter( { memory: { role: 'Healer' } } ).size();
	
		Memory.countAtackerExist = _(Game.creeps).filter( { memory: { role: 'Atacker' } } ).size();	//Guard mit Short Range
		Memory.countRangeAtackerExist = _(Game.creeps).filter( { memory: { role: 'RangeAtacker' } } ).size();	//Guard mit long Range
		Memory.countFreeAtackerExist = _(Game.creeps).filter( { memory: { role: 'freeFighter' } } ).size(); // Atacker ohne Ziel
		Memory.summeGuardsExist = Memory.countAtackerExist + Memory.countRangeAtackerExist + Memory.countFreeAtackerExist; //Summe aller creeps die Fighten koennen
		
		//Summe aller creeps im Spiel
		Memory.summeCreepsExist = Memory.countUpgraderExist + Memory.summeWorkerExist + Memory.countHealerExist + Memory.summeGuardsExist;
	}
}
module.exports = countType;
