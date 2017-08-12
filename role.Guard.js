/* Modul: roleGuard
 By Anton Nonym
 Paramteruebergabe: keine
 Rueckgabe: keine
 Angriff des nächsten Zieles
*/

 var roleGuard = 
 {

    /** @param {Creep} creep **/
    run: function(creep) 
	{
		//console.log('Modul roleGuard Start');
		var targets = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS); // Findet das naheste Ziel und greift an
		
		if (targets) //Ziele wurden gefunden 
		{
			console.log('Attack Target: ' + targets);
			if(targets && creep.hits > (creep.hitsMax * 0.01)) // Atack bis nur noch 50% Hitpoints übrig
			{
		
				creep.moveTo(targets);
				if (creep.memory.role == 'Atacker')
				{
					creep.attack(targets);
				}
				if (creep.memory.role == 'RangeAtacker')
				{
					creep.rangedAttack(targets);	
				}
			}
		}
		else // kein Ziel fuer Angriff gefungen Move to Flag GuardFlag1
		{
			creep.moveTo(Game.flags.GuardFlag1); // Kein 
		}
		
	}
};
module.exports = roleGuard;