// entityType needs to be passed in a an int.  this way we can use random
//numbers to control the models from the outside of this function
function spawnEntity(unit){
	var entity;

	entity = models[unit.unitType].clone();

	entity.x = entity.position.x = unit.newX;
	entity.y = entity.position.y = unit.newY;
	entity.z = entity.position.z = unit.newZ;
	
	// * 360 * Math.PI/180; to convert to degrees if we need to
	unit.facing = entity.rotation.z = unit.newFacing;

	unit.model = entity;

	unit.x = entity.x;
	unit.y = entity.y;
	unit.z = entity.z;

	unitRing(1, 10, unit);
	living.set(unit.team +":"+ unit.uid, unit);
 	scene.add(unit.model);
}