"use strict"

// Memory Variablen
// Memory.countHarvesterExist;  wie viele creeps vom Typ  Harvester sind vorhandene
// Memory.countBuilderExist;  wie viele creeps vom Typ  Builder sind vorhanden
// Memory.countUpgraderExist;  wie viele creeps vom Typ  Upgrader sind vorhanden
// Memory.countRepairerExist;  wie viele creeps vom Typ  Repairer sind vorhanden
// Memory.summeWorkerExist  wie viele Worker sind vorhanden (also Harvester, Builder, Upgrader, Healer)
// 1. Spawn point : LEH1
// Flagge: GuardFlag1
// Flagge: WorkerFlag

//console.log('Define Memory Variablen');
Memory.SetMinWorker = 2; //Anzahl Minimaler Worker
Memory.SetMinUpgrader = 3; //Anzahl Minimaler Worker
Memory.SetMinAtacker = 1; //Anzahl Minimaler Atacker
Memory.SetMinRangeAtacker = 1; //Anzahl Minimaler Range Atacker
Memory.SetMinHealer = 1; //Anzahl Minimaler Atacker


// Module anmelden
//console.log('Bind Modules in main start');
//console.log('module spanFirstCreep bind');
var spanFirstCreep = require('span.FirstCreep');
//console.log('module EraseDeadCreepsInMemory bind');
var EraseDeadCreepsInMemory = require('Erase.DeadCreepsInMemory');
//console.log('module autocreateCreep bind');
var autocreateCreep = require('autocreate.creep');
//console.log('module autofindRole bind');
var autofindRole = require('autofind.role');
//console.log('module executeRole bind');
var executeRole = require('execute.role');



module.exports.loop = function () 
{
	//console.log('Modul main executed');
	
	// Creep Spawnen wenn och keiner vorhanden
	//console.log('Execute Modul spanFirstCreep in main');
	spanFirstCreep.run();
	
	// Löschen der Creeps im Memory die nicht mehr existieren
	//console.log('Execute Modul EraseDeadCreepsInMemory in main');
	EraseDeadCreepsInMemory.run();
	
	//Creeps Spawnwn wenn erforderlich
	//console.log('Execute Modul autocreateCreep in main');
	autocreateCreep.run();
	
	// Rollen dynamisch zuweisen
	//console.log('Execute Modul autofindRole in main');
	autofindRole.run();
	
	// Rollen ausführen
	//console.log('Execute Modul executeRole in main');
	executeRole.run();
};
