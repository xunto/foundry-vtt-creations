/*
* Toggles the effect on or off, based on success or failure
* of curse saving throw.
*
* Intended to be used as Midi-QOL On Use macro.
*
* @author xunto <xunto.orlov@gmail.com>
*/

// Change to the name of the effect you want to toggle
const EFFECT_NAME = "EFFECT_NAME";

// Check if actor failed the saving throw
let isFailed = args[0]["failedSaves"].length > 0;

let curse = actor.effects.find(i => i.data.label === EFFECT_NAME);

if (curse) {
    await actor.updateEmbeddedDocuments("ActiveEffect", [{"_id": curse.id, "disabled": !isFailed}]);
} else {
    ui.notifications.error(`Effect \"${EFFECT_NAME}\" not found.`);
}
