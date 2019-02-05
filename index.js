const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

client.login(process.env.BOT_TOKEN);

var bbtag = ["bbtag", "bbctb", "bbtag.", "bbctb.", "bbtag?", "bbctb?", "bbtag!", "bbctb!"];
var bbtagR = ["How are you enjoying your DLC?", "Come on, you can play a game with more than two buttons.", "There's more to fighters than picking Gordeau and Ruby.", "Nobody plays that dead game anymore.", "I'd rather play BlazBlue RR than that trash.", "A->A->B->B->jump->A->A->B->B->C", "First you have to disable your HUD to get above 30FPS.", "Don't worry, you can escape astral finishes.", "How are those sprites looking for you?", "Hey, can I invite you to my lobby? What do you mean by 'no'?", "Known for the best game mode variety: VS Mode, Infinite VS Mode, Weeb Fanfiction VS Mode, Learning VS Mode, and Online VS Mode.", "Even the opening cutscene doesn't want you to play it because it literally crashes the game.", "Apparently they thought Es was more important than even BBCT characters.", "How's Fanfiction.net? I mean, Story Mode. I meant to say Story Mode.", "How's them physics? https://www.youtube.com/watch?v=WMdHkD0fDJo", "I play BBTAG because I enjoy braindead loops.", "lol auto combos", "Don't even lie, you play this game for the waifus.", "I don't play BlazBlue Price Tag Battle.", "It's so bad, you have to download a rehaul mod to play it.", "Literally everyone in that game plays the exact same.", "Only Arc System Works shills defend that game.", "Only Arc System Works shills buy that game."];
var bb = ["blazblue", "blazeblue", "bb", "bbct", "bbcs", "bbcs2", "bbcse", "bbcsex", "bbcp", "bbcpe", "bbcpex", "bbcf", "bbcf2", "ct", "cs", "cs2", "cse", "csex", "cp", "cpex" , "cf", "cf2", "blazblue.", "blazeblue.", "bb.", "bbct.", "bbcs.", "bbcs2.", "bbcse.", "bbcsex.", "bbcp.", "bbcpe.", "bbcpex.", "bbcf.", "bbcf2.", "ct.", "cs.", "cs2.", "cse.", "csex.", "cp.", "cpex.", "cf.", "cf2.", "blazblue!", "blazeblue!", "bb!", "bbct!", "bbcs!", "bbcs2!", "bbcse!", "bbcsex!", "bbcp!", "bbcpe!", "bbcpex!", "bbcf!", "bbcf2!", "ct!", "cs!", "cs2!", "cse!", "csex!", "cp!", "cpex!" , "cf!", "cf2!", "blazblue.", "blazeblue?", "bb?", "bbct?", "bbcs?", "bbcs2?", "bbcse?", "bbcsex?", "bbcp?", "bbcpe?", "bbcpex?", "bbcf?", "bbcf2?", "ct?", "cs?", "cs2?", "cse?", "csex?", "cp?", "cpex?" , "cf?", "cf2?"];
var bbR = ["How are you enjoying your DLC?", "Ready for the new EXTEND version?", "How many times do you DP? Let me guess, you're going to say 'How many breads have you eaten in your life'?", "Netplay with any randoms lately? No? Okay, then.", "How does it feel to have BBTAG replace BB at tournaments?", "I main Pre-Patch Nine the Phantom.", "I main Carl Clover.", "I main Noel's drive button.", "I main BBCP Kokonoe.", "I main BBCPE Celica.", "I main BBCT Hakumen.", "I main BBCT Arakune.", "I main BBCSE Ragna.", "I main BBCS Hazama.", "Don't even lie, you play this game for the waifus.", "It's so bad, you have to download a rehaul mod to play it.", "Hold on, lemee just wipe off the dust on this game.", "Only Arc System Works shills defend that game."];
var gg = ["xrd", "ggx2", "rev2", "xxacpr", "xxac+r", "xrd.", "ggx2.", "rev2.", "xxacpr.", "xxac+r.", "xrd?", "ggx2?", "rev2?", "xxacpr?", "xxac+r?", "xrd!", "ggx2!", "rev2!", "xxacpr!", "xxac+r!"];
var ggR = ["How are you enjoying your DLC?", "Play FighterZ lately?", "How's DP->YRC treating you?", "How many button layouts does it take to get to the center of Guilty Gear's controls?", "I main Raven.", "I main Chipp.", "I main Venom... From MVC:I", "Why don't we just play the original Guilty Gear for nostalgia's sake?", "Danger Time is the best mechanic in any fighting game.", "Personally, I prefer Guilty Gear Xrd -Revelator- 2nd #Reload Accent Core Plus R (Steam Edition).", "Don't even lie, you play this game for the waifus.", "Hold on, lemee just wipe off the dust on this game.", "Only Arc System Works shills defend that game."];
var dbfz = ["fighterz", "fighterz.", "fighterz?", "fighterz!", "dbfz", "dbfz?", "dbfz!", "dbfz."];
var dbfzR = ["How are you enjoying your DLC?", "Look at all of those Cooler mains.", "a.5A->a.5B->jump->a.5A->a.5B->special->super", "DBfZ feels like it's still in an open beta.", "A network error occurred. Could not connect to the lobby.", "Failed to initialize network.", "The UE4-RED Game has crashed. Fatal error!", "EAC: Peer Untrusted Error", "How's Denuvo treating you?", "I main Goku Black's 2H.", "I main Yamcha's Assist.", "I main Cell.", "Ready for the new Guilty Gear to replace this game?", "lol auto combos", "Don't even lie, you play this game for the waifus.", "Literally everyone in that game plays the exact same.", "Only Arc System Works shills defend that game."];
var mvc = ["mvc", "mvc1", "mvc2", "mvc3", "umvc3", "mvci", "mvc:1", "mvc:2", "mvc:3", "umvc:3", "u:mvc:3", "mvc:i", "marvel", "mahvel", "mahvell", "mvc!", "mvc1!", "mvc2!", "mvc3!", "umvc3!", "mvci!", "mvc:1!", "mvc:2!", "mvc:3!", "umvc:3!", "u:mvc:3!", "mvc:i!", "marvel!", "mahvel!", "mahvell!", "mvc.", "mvc1.", "mvc2.", "mvc3.", "umvc3.", "mvci.", "mvc:1.", "mvc:2.", "mvc:3.", "umvc:3.", "u:mvc:3.", "mvc:i.", "marvel.", "mahvel.", "mahvell.", "mvc?", "mvc1?", "mvc2?", "mvc3?", "umvc3?", "mvci?", "mvc:1?", "mvc:2?", "mvc:3?", "umvc:3?", "u:mvc:3?", "mvc:i?", "marvel?", "mahvel?", "mahvell?"];
var mvcR = ["How are you enjoying your DLC?", "Enjoying Marvel VS Capcom: Infinite?", "Let's play some Dragon Ball FighterZ.", "Let's play BlazBlue Cross Tag Battle.", "Enjoying EVO 2018?", "Let's play an Arc System Works game.", "Morrigan? More like Touhou.", "Ultimate Function VS Function: Infinite", "Even Capcom realizes this game is dead.", "How are you enjoying your DLC?", "Ready for the 'Ultimate' edition to that one?", "Do people even play that anymore?", "Hey look, it's Divekick's older brother!", "How's that netcode?", "Ug-Li", "Dante now smokes 200% more crack.", "Where did all of the roster go?", "If you get hit once, put down the controller.", "Isn't this the game made by Netherrealm Studios?", "Only Capcom shills defend that game."];
var persona = ["p4a", "p4au", "p4au2", "p4au2.0", "ultimax", "p4a!", "p4au!", "p4au2!", "p4au2.0!", "ultimax!", "p4a.", "p4au.", "p4au2.", "p4au2.0.", "ultimax.", "p4a?", "p4au?", "p4au2?", "p4au2.0?", "ultimax?"];
var personaR = ["How many Persona 4 things have you even bought?", "lol auto combos", "Don't even lie, you play this game for the waifus.", "How's the PC release?", "lmao dust has block frames", "Like a bootlegged Jojo's HFTF.", "I think everyone left to play BlazBlue Cross Tag Battle.", "You can win easily by pressing one button.", "Only Persona 4 shills buy that game.", "Only Arc System Works shills defend that game."];
var tfh = ["tfh", "tfh.", "tfh!", "tfh?"];
var tfhR = ["Isn't that just some brony fanfiction game?", "Like BlazBlue but for babies.", "How long has Early Access been?", "Is the game actually complete yet?", "It's like BlazBlue, but with an almost non-existent community.", "The game with a community that firmly believes any game is Street Fighter 1 if more than one character can do something.", "I guess Fighting really isn't Magic.", "Did someone say Cease and Desist?", "How many settings do I need to scroll through to change anything?", "I love the lip syncing on intro animations.", "TFH has the smallest roster in the existence of fighting games since Street Fighter 1.", "Only My Little Pony shills defend that game."];
var sg = ["skullgirls", "sg", "skullgirls?", "sg?", "skullgirls.", "sg.", "skullgirls!", "sg!"];
var sgR = ["How are you enjoying your DLC?", "Don't even lie, you play this game for the waifus.", "Does this game have enough buttons?", "How many settings do I need to scroll through to change anything?", "Hey look, it's a bootleg Marvel VS Capcom game!", "It'll never get a spot at EVO's main stage.", "Literally everyone has this game and next to nobody plays it.", "Skullgirls is my favorite card game.", "Hold on, lemee just wipe off the dust on this game.", "Only Marvel VS Capcom shills defend that game."];
var smash = ["sm4sh", "melee", "brawl", "sm4sh.", "melee.", "brawl.", "sm4sh!", "melee!", "brawl!", "sm4sh?", "melee?", "brawl?"];
var smashR = ["How are you enjoying your DLC?", "Smash Bros. is a decision between a 15+ year old game or a bad game.", "That isn't a fighting game.", "Time Mode. Items only. Stage Hazards On.", "C'mon, you know that's just a port of Smash 4.", "Smash is the least balanced fighting game ever.", "What even are hitboxes?", "Random tripping is fun!", "I main Bayonetta.", "Entry to Grand Finals: $5.99", "Smash being at EVO is proof God has left us. Two Smash games being at EVO is proof humanity is doomed.", "https://www.google.com/search?q=how+to+take+a+shower", "https://www.google.com/search?q=how+to+put+on+deodorant", "Proper Hygiene is very important. It keeps close interactions pleasant, and it keeps long-lasting relationships between significant others. It also helps keeping things smelling fine in a crowded place... A crowded place like tournaments.", "I main Cloud.", "Isn't Smash that button mashing party game or something?", "Mario Party is a better party game.", "I prefer Mario Party.", "Only Nintendo shills defend that game.", "Only Nintendrones defend that game."];
var unib = ["unist", "uniel", "unib", "unist.", "uniel?", "unib!", "unist?", "uniel!", "unib.", "unist!", "uniel.", "unib?"];
var unibR = ["lol auto combo", "I main Seth.", "I main Gordeau.", "GURIM REEPAA", "Like BlazBlue but for hipsters.", "Don't even lie, you play this game for the waifus.", "Like Melty Blood, but inferior.", "How's that netcode?", "When your game developers can't decide on one localization.", "Under Night In-Birth is when you want to pretend you can't afford BlazBlue.", "Under Night In-Birth has a community of, uh... 10 players, right?", "Only Arc System Works shills defend that game."];
var ccodeR = ["Like King of Fighters for weeaboos.", "Don't even lie, you play this game for the waifus.", "Literally nobody plays this game.", "How's that netcode?", "Like BlazBlue for slow paced minds.", "You're better off playing MVC:I tbh.", "Hold on, lemee just wipe off the dust on this game.", "Only Arc System Works shills defend that game."];
var melty = ["mb", "mbaa", "mbaacc", "mbcc", "mb!", "mbaa!", "mbaacc!", "mbcc!", "mb.", "mbaa.", "mbaacc.", "mbcc.", "mb?", "mbaa?", "mbaacc?", "mbcc?", "cccaster", "ccaster", "cccaster!", "ccaster!", "cccaster.", "ccaster.", "cccaster?", "ccaster?"];
var meltyR = ["You thought this was hentai like the source material, didn't you?", "Don't even lie, you play this game for the waifus.", "Like Smash Bros. but for hipsters.", "How's that netcode?", "It's so bad, you have to download a rehaul mod to play it.", "Like Under Night In-Birth but inferior and old.", "Hold on, lemee just wipe off the dust on this game.", "Only Nasuverse shills defend that game.", "Only French Bread shills defend that game.", "Only Arc System Works shills defend that game."];
var roa = ["roa", "roa.", "roa!", "roa?"];
var roaR = ["How are you enjoying your DLC?", "Like Smash Bros. but for hipsters.", "When you can't afford a ledge mechanic.", "When you're more poor than even Smash Bros. players.", "That ain't Falco.", "Like Smash Bros. but generic and off-brand.", "That's not a fighting game.", "Only Smash shills defend that game."];
var fstrikeR = ["When you're too scrubby to play Street Fighter.", "Like Street Fighter but for babies.", "Ew, Unity Engine.", "Like a box of regular Cheerios but a fighting game.", "How long has Early Access been?", "Is the game actually complete yet?", "It's like Street Fighter, but with an almost non-existent community.", "Only Street Fighter shills defend that game."];
var ki = ["ki", "ki?", "ki.", "ki!"];
var kiR = ["How are you enjoying your DLC?", "Like Marvel VS Capcom but even less people play it.", "This game couldn't even escape the Xbox One. And by that I mean nobody even bought the Steam Edition that released later.", "The game everyone forgot about?", "Only Microsoft shills defend that game."];
var tekken = ["t1", "t2", "t3", "t4", "t5", "t6", "t7", "ttt", "ttt2", "t1!", "t2!", "t3!", "t4!", "t5!", "t6!", "t7!", "ttt!", "ttt2!", "t1.", "t2.", "t3.", "t4.", "t5.", "t6.", "t7.", "ttt.", "ttt2.", "t1?", "t2?", "t3?", "t4?", "t5?", "t6?", "t7?", "ttt?", "ttt2?"];
var tekkenR = ["How are you enjoying your DLC?", "Isn't Tekken like that one Naruto Ninja Storm game or something?", "You must love Korean Backdashing.", "Wasn't this supposed to be the biggest fighting game this generation?", "Just play Soul Calibur 6, already!", "Only shills defend that game."];
var arcana = ["ah1", "ah2", "ah3", "ah3lm", "ah3lmss", "ah3ss"];
var arcanaR = ["Like Skullgirls but for weeaboos", "This game is almost as dead as Chaos Code.", "Wasn't Arcana Heart 4 supposed to happen?", "There's nothing better than a large company holding a small patch hostage on Kickstarter, and then expecting people to still pay $60 for the update!", "Like BlazBlue but made for the 'progressive crowd' that wants 'equal female representation' in fighting games, but whines about Dead or Alive and Skullgirls 'oversexualizing' constantly.", "Rare footage of someone actually talking about Arcana Heart.", "Don't even lie, you play this game for the waifus.", "Only Arc System Works shills defend that game."];
var snk = ["kof", "kof94", "kof'94", "kof95", "kof'95", "kof96", "kof'96", "kof97", "kof'97", "kof98", "kof'98", "kof99", "kof'99", "kof00", "kof'00", "kof01", "kof'01", "kof02", "kof'02", "kof03", "kof'03", "kofxi", "kof11", "kofxii", "kof12", "kofxiii", "kof13", "kofxiv", "kof14", "kofmi", "kofmi2", "kof.", "kof94.", "kof'94.", "kof95.", "kof'95.", "kof96.", "kof'96.", "kof97.", "kof'97.", "kof98.", "kof'98.", "kof99.", "kof'99.", "kof00.", "kof'00.", "kof01.", "kof'01.", "kof02.", "kof'02.", "kof03.", "kof'03.", "kofxi.", "kof11.", "kofxii.", "kof12.", "kofxiii.", "kof13.", "kofxiv.", "kof14.", "kofmi.", "kofmi2.", "kof!", "kof94!", "kof'94!", "kof95!", "kof'95!", "kof96!", "kof'96!", "kof97!", "kof'97!", "kof98!", "kof'98!", "kof99!", "kof'99!", "kof00!", "kof'00!", "kof01!", "kof'01!", "kof02!", "kof'02!", "kof03!", "kof'03!", "kofxi!", "kof11!", "kofxii!", "kof12!", "kofxiii!", "kof13!", "kofxiv!", "kof14!", "kofmi!", "kofmi2!", "kof?", "kof94?", "kof'94?", "kof95?", "kof'95?", "kof96?", "kof'96?", "kof97?", "kof'97?", "kof98?", "kof'98?", "kof99?", "kof'99?", "kof00?", "kof'00?", "kof01?", "kof'01?", "kof02?", "kof'02?", "kof03?", "kof'03?", "kofxi?", "kof11?", "kofxii?", "kof12?", "kofxiii?", "kof13?", "kofxiv?", "kof14?", "kofmi?", "kofmi2?", "garou", "garou!", "garou.", "garou?", "snk", "snk.", "snk!", "snk?"];
var snkR = ["How are you enjoying your DLC?", "Legends claim that SNK is still on the verge of bankruptcy to this day. They're not wrong.", "There's a community for that game?", "How's the outdated graphics?", "The middle-ground between Street Fighter and Marvel VS Capcom.", "When you're too poor to buy Street Fighter.", "Literally the second most dated fighting game mechanics-wise.", "How's that netcode?", "Literally the second worst fighting game regarding single player content.", "Anyone want to play Street Fighter instead?", "I swear this game is the Final Fantasy of fighting games. And by that I mean there's way too many damn sequels.", "What's the difference between each King of Fighters game? The year on the logo.", "Wait, isn't this just M.U.G.E.N. with less content?", "Don't even lie, you play this game for the waifus.", "Only SNK shills defend that game."];
var jojo = ["hftf", "asb", "eoh", "hftf!", "asb!", "eoh!", "hftf.", "asb.", "eoh.", "hftf?", "asb?", "eoh?"];
var jojoR = ["Like Dragon Ball games but for hipsters.", "Literally everyone in that game plays the exact same.", "Remember when CC2 tried to make these games competitive at 30FPS?", "Don't even lie, you play this game for memes.", "Don't even lie, you play this game for the husbandos.", "People still play that broken game?", "Only Jojo shills defend that game."];
var doa = ["doa", "doa++", "doa2", "doa2m", "doa2h", "doa3", "doa4", "doao", "doa5", "doa5+", "doa5p", "doa5u", "doa5lr", "doa6", "doa!", "doa++!", "doa2!", "doa2m!", "doa2h!", "doa3!", "doa4!", "doao!", "doa5!", "doa5+!", "doa5p!", "doa5u!", "doa5lr!", "doa6!", "doa.", "doa++.", "doa2.", "doa2m.", "doa2h.", "doa3.", "doa4.", "doao.", "doa5.", "doa5+.", "doa5p.", "doa5u.", "doa5lr.", "doa6.", "doa?", "doa++?", "doa2?", "doa2m?", "doa2h?", "doa3?", "doa4?", "doao?", "doa5?", "doa5+?", "doa5p?", "doa5u?", "doa5lr?", "doa6?"];
var doaR = ["How are you enjoying your DLC?", "Literally everyone in that game plays the exact same.", "Don't even lie, you play this game for the waifus.", "A true button masher, just like that Naruto Ninja Storm game.", "The inferior version of Tekken.", "Soul Calibur, but without the main appeal of a Soul Calibur game.", "Literally the worst PC port, not even the fans can fix it, let alone launch the game to begin with.", "If you want a buggy game, at least SFxT is functional.", "How's that netcode?", "Only shills defend that game."];
var scalibur = ["sc", "sc1", "sc2", "sc3", "sc4", "sc5", "sc6", "sc!", "sc1!", "sc2!", "sc3!", "sc4!", "sc5!", "sc6!", "sc.", "sc1.", "sc2.", "sc3.", "sc4.", "sc5.", "sc6.", "sc?", "sc1?", "sc2?", "sc3?", "sc4?", "sc5?", "sc6?"];
var scaliburR = ["I main Darth Vader.", "I main Yoda.", "Isn't that the one with Zelda in it?", "Isn't that the one with Link in it?", "I main Zelda.", "I main Link.", "The developers probably get off to anime sword fighters like the Smash Bros. director does.", "Adding Yun-seong was a mistake.", "Removing Yun-seong was a mistake.", "Soul Calibur 3 and onward was a mistake.", "Every Soul Calibur before 3 was a mistake.", "There's nothing better than holding your fighting game's sequels hostage when all the fans want is a good one.", "What even are the controls to this game?", "It's like they wanted a 2P2K, but then opted for an ABCD, and then settled on literally Guilty Gear but worse.", "Like Guilty Gear but more in-line with that Naruto Ninja Storm game.", "Only shills defend that game."];
var mk = ["mk", "mk1", "mk2", "mk3", "umk3", "mk4", "mkda", "mka", "mkvdc", "mk9", "mkx", "mk10", "mk!", "mk1!", "mk2!", "mk3!", "umk3!", "mk4!", "mkda!", "mka!", "mkvdc!", "mk9!", "mkx!", "mk10!", "mk.", "mk1.", "mk2.", "mk3.", "umk3.", "mk4.", "mkda.", "mka.", "mkvdc.", "mk9.", "mkx.", "mk10.", "mk?", "mk1?", "mk2?", "mk3?", "umk3?", "mk4?", "mkda?", "mka?", "mkvdc?", "mk9?", "mkx?", "mk10?", "mkxl", "mkxl!", "mkxl.", "mkxl?", "mk10l", "mk10l!", "mk10l.", "mk10l?"];
var mkR = ["Ew, a block button.", "Arcade stick layout made by literally Satan.", "Not even Satan himself would touch that arcade stick layout.", "Mortal Kombat literally only exists because of 90s shock value.", "Like Duke Nukem but with a worse plot.", "Literally the only fighting game where stage hazards are the norm.", "Mortal Kombat X was a mistake.", "Mortal Kombat 9 was a mistake.", "Who still plays this game anymore?", "Hey guys, let's play Injustice 2!", "Only Mortal Kombat shills defend that game."];
var injustice = ["injustice", "injustice!", "injustice.", "injustice?", "injustices", "injustices!", "injustices.", "injustices?"];
var injusticeR = ["Enjoying your Red Shell spyware?", "Hey guys, let's play Mortal Kombat XL!", "Only Netherrealm shills defend that game.", "Like Mortal Kombat but with worse animations.", "This was at EVO mainstage for the same reason as BB Cross Tag Battle. Literally only so they could fill in space to keep out MVC:I.", "Since when did Mortal Kombat look this awful?", "Like Mortal Kombat but without the appeal of fatalities."];
var sf = ["sf", "sf1", "sf2", "sf3", "sf3s", "sf4", "ssf4", "usf4", "sfv", "sfvae", "sfxt", "sf!", "sf1!", "sf2!", "sf3!", "sf3s!", "sf4!", "ssf4!", "usf4!", "sfv!", "sfvae!", "sfxt!", "sf.", "sf1.", "sf2.", "sf3.", "sf3s.", "sf4.", "ssf4.", "usf4.", "sfv.", "sfvae.", "sfxt.", "sf?", "sf1?", "sf2?", "sf3?", "sf3s?", "sf4?", "ssf4?", "usf4?", "sfv?", "sfvae?", "sfxt?"];
var sfR = ["That game is so boring, it's literally just turtling!", "Like King of Fighters but as bland as cardboard.", "Playing with a carboard box offers the same gameplay as Street Fighter.", "Street Fighter is the most dated fighting game mechanics-wise.", "Enjoying your 16f of input lag?", "The literal only reason people remember Street Fighter is because it's old.", "Street Fighter is literally an elder on life support.", "How's that netcode?", "Hey guys, let's play BlazBlue!", "Hey guys, let's play Guilty Gear!", "Hey guys, let's play Skullgirls!", "Hey guys, let's play Dragon Ball FighterZ!", "Hey guys, let's play BlazBlue Cross Tag Battle!", "Hey guys, let's play Mortal Kombat!", "Hey guys, let's play Injustice 2!", "Hey guys, let's play Smash Bros.!", "Hey guys, let's play King of Fighters!", "Only Capcom shills defend that game."];
var arena = ["nsuns", "nsuns2", "nsuns3", "nsuns4", "nsunsg", "nsunsr", "uns", "uns1", "uns2", "uns3", "uns4", "unsg", "unsr", "nuns", "nuns1", "nuns2", "nuns3", "nuns4", "nunsg", "nunsr", "opbb", "ssss", "mhaoj", "zbmb", "zbmf", "nsuns!", "nsuns2!", "nsuns3!", "nsuns4!", "nsunsg!", "nsunsr!", "uns!", "uns1!", "uns2!", "uns3!", "uns4!", "unsg!", "unsr!", "nuns!", "nuns1!", "nuns2!", "nuns3!", "nuns4!", "nunsg!", "nunsr!", "opbb!", "ssss!", "mhaoj!", "zbmb!", "zbmf!", "nsuns.", "nsuns2.", "nsuns3.", "nsuns4.", "nsunsg.", "nsunsr.", "uns.", "uns1.", "uns2.", "uns3.", "uns4.", "unsg.", "unsr.", "nuns.", "nuns1.", "nuns2.", "nuns3.", "nuns4.", "nunsg.", "nunsr.", "opbb.", "ssss.", "mhaoj.", "zbmb.", "zbmf.", "nsuns?", "nsuns2?", "nsuns3?", "nsuns4?", "nsunsg?", "nsunsr?", "uns?", "uns1?", "uns2?", "uns3?", "uns4?", "unsg?", "unsr?", "nuns?", "nuns1?", "nuns2?", "nuns3?", "nuns4?", "nunsg?", "nunsr?", "opbb?", "ssss?", "mhaoj?", "zbmb?", "zbmf?", "skev", "sksv", "skev!", "sksv!", "skev.", "sksv.", "skev?", "sksv?"];
var arenaR = ["Literally everyone in that game plays the exact same.", "Don't even lie, you play this game for the waifus.", "That isn't a fighting game.", "You literally only press one button in that game.", "Only scrubs play that game.", "Only filthy casuals play that game.", "That game isn't worth anyone's time, it's not even competitive.", "Mario Party is more competitive than that game.", "Literally nobody plays that game.", "That game has the worst mechanics ever made.", "That's the most jank game ever, why would anyone play that?", "Oh yeah, that open-world beat em up game!", "God, that game has the most toxic fanbase of weeaboos out there.", "Only shills and fanboys buy these shitty, overly mediocre anime games.", "Only shills and fanboys defend these shitty, overly mediocre anime games."];
var pokken = ["pokken", "pokken!", "pokken.", "pokken?"];
var pokkenR = ["Literally everyone in that game plays the exact same.","Pokken is so unknown, even my creator forgot to put it in until someone mentioned it!", "Isn't it like that Ninja Storm game or something?", "Isn't this just a Tekken clone with weird fetish animals?", "The developers couldn't even decide whether they wanted a casual beat 'em up or an even more casual beat 'em up, so they put both in the game.", "You have to be really into Pokemon to even touch Pokken.", "How's the community of 8 people?", "I think everyone jumped off the Pokken ship when MattPatt was selected to go to a tournament over actual Pokken players.", "At least my Pokken pad is great for playing everything except Pokken!", "Only furries play this game.", "Only Nintendrones play this game.", "They thought the reason it sold poorly was because it was on Wii U. How funny, it sold poorly on Switch as well.", "That isn't a fighting game.", "You literally only press one button in that game.", "Only scrubs play that game.", "Only filthy casuals play that game.", "That game isn't worth anyone's time, it's not even competitive.", "Mario Party is more competitive than that game.", "Literally nobody plays that game.", "That game has the worst mechanics ever made.", "That's the most jank game ever, why would anyone play that?", "Oh yeah, that open-world beat em up game!"];
var dmc4 = ["dmc4", "dmc4!", "dmc4.", "dmc4?"];
var dmc4R = ["Devil May Cry 4 is the best fighting game in existence.", "Only truly cultured men can understand the depth and complexity of Devil May Cry 4.", "Devil May Cry 4 has the best netcode ever made, even better than GGPO.", "Devil May Cry 4 is literally the magnum opus of fighting games.", "Devil May Cry 4 is better than Half Life 3 because it's a fighting game.", "Devil May Cry 4 is FGOTY every year.", "EVO is too afraid to put Devil May Cry 4 on the mainstage because there aren't enough seats to fill in the large playerbase.", "Devil May Cry 4 is the literal only fighting game to strike the perfect balance between weeaboo and Street Fighter."];

client.on('message', message => {
    if(message.author.id == 516344023628120206) return;
    var msg = message.content.toLowerCase();

    var parsed = msg.split(" ");
    var length = parsed.length;
    for(var i = 0; i < length; i++) {

        if(parsed[i] === "!newdissed") {
            client.users.get("98484620286246912").send(message.author.username + " requested " + message.content);
        }
        
        if(parsed[i] === "!testDM") {
            DMme(message.guild);
        }

        if(parsed[i] === "cross" && length >= i + 1) {
            if(parsed[i + 1] === "tag" || parsed[i + 1] === "tag!" || parsed[i + 1] === "tag." || parsed[i + 1] === "tag?") {
                bbtagdiss(message.channel);
                return;
            }
        }
        for(var j = 0; j < bbtag.length; j++) {
            if(parsed[i] == bbtag[j]) {
                bbtagdiss(message.channel);
                return;
            }
        }

        for(var j = 0; j < bb.length; j++) {
            if(parsed[i] == bb[j] && parsed[i + 1] != "cross" && parsed[i + 2] != "tag") {
                bbdiss(message.channel);
                return;
            }
        }

        if(parsed[i] === "guilty" && length >= i + 1) {
            if(parsed[i + 1] === "gear" || parsed[i + 1] === "gear." || parsed[i + 1] === "gear!" || parsed[i + 1] === "gear?") {
                ggdiss(message.channel);
                return;
            }
        }
        for(var j = 0; j < gg.length; j++) {
            if(parsed[i] == gg[j]) {
                ggdiss(message.channel);
                return;
            }
        }
        
        for(var j = 0; j < dbfz.length; j++) {
            if(parsed[i] == dbfz[j]) {
                dbdiss(message.channel);
                return;
            }
        }
        
        for(var j = 0; j < mvc.length; j++) {
            if(parsed[i] == mvc[j]) {
                mvcdiss(message.channel);
                return;
            }
        }

        if(parsed[i] === "persona" && length >= i + 1) {
            if(parsed[i + 1] === "4" && length >= i + 2) {
                if(parsed[i + 2] === "arena" || parsed[i + 2] === "arena." || parsed[i + 2] === "arena!" || parsed[i + 1] === "arena?") {
                    p4diss(message.channel);
                    return;
                }
                if(parsed[i + 2] === "ultra" || parsed[i + 2] === "ultra." || parsed[i + 2] === "ultra!" || parsed[i + 1] === "ultra?") {
                    p4diss(message.channel);
                    return;
                }
            }
            if(parsed[i + 1] === "arena" || parsed[i + 1] === "arena." || parsed[i + 1] === "arena!" || parsed[i + 1] === "arena?") {
                p4diss(message.channel);
                return;
            }
        }
        for(var j = 0; j < persona.length; j++) {
            if(parsed[i] == persona[j]) {
                p4diss(message.channel);
                return;
            }
        }

        if((parsed[i] === "them's" || parsed[i] === "thems" || parsed[i] === "them") && length >= i + 2) {
            if(parsed[i + 1] === "fightin'" || parsed[i + 1] === "fightin" || parsed[i + 1] === "fighting") {
                if(parsed[i + 2] === "herds" || parsed[i + 2] === "herds." || parsed[i + 2] === "herds!" || parsed[i + 2] === "herds?") {
                    tfhdiss(message.channel);
                    return;
                }
            }
        }
        for(var j = 0; j < tfh.length; j++) {
            if(parsed[i] == tfh[j]) {
                tfhdiss(message.channel);
                return;
            }
        }

        if(parsed[i] === "skull" && length >= i + 1) {
            if(parsed[i + 1] === "girls" || parsed[i + 1] === "girls." || parsed[i + 1] === "girls!" || parsed[i + 1] === "girls?") {
                sgdiss(message.channel);
                return;
            }
        }
        for(var j = 0; j < sg.length; j++) {
            if(parsed[i] == sg[j]) {
                sgdiss(message.channel);
                return;
            }
        }

        if(parsed[i] === "smash" && length >= i + 1) {
            if(parsed[i + 1] === "bros" || parsed[i + 1] === "bros." || parsed[i + 1] === "bros!" || parsed[i + 1] === "bros?") {
                smashdiss(message.channel);
                return;
            }
            if(parsed[i + 1] === "4" || parsed[i + 1] === "4." || parsed[i + 1] === "4!" || parsed[i + 1] === "4?") {
                smashdiss(message.channel);
                return;
            }
        }
        if(parsed[i] === "super" && length >= i + 1) {
            if(parsed[i + 1] === "smash" || parsed[i + 1] === "smash." || parsed[i + 1] === "smash!" || parsed[i + 1] === "smash?") {
                smashdiss(message.channel);
                return;
            }
        }
        for(var j = 0; j < smash.length; j++) {
            if(parsed[i] == smash[j]) {
                smashdiss(message.channel);
                return;
            }
        }

        if(parsed[i] === "under" && length >= i + 1) {
            if(parsed[i + 1] === "night" || parsed[i + 1] === "night." || parsed[i + 1] === "night!" || parsed[i + 1] === "night?") {
                unibdiss(message.channel);
                return;
            }
        }
        for(var j = 0; j < unib.length; j++) {
            if(parsed[i] == unib[j]) {
                unibdiss(message.channel);
                return;
            }
        }

        if(parsed[i] === "chaos" && length >= i + 1) {
            if(parsed[i + 1] === "code" || parsed[i + 1] === "code." || parsed[i + 1] === "code!" || parsed[i + 1] === "code?") {
                ccodediss(message.channel);
                return;
            }
        }

        if(parsed[i] === "melty" && length >= i + 1) {
            if(parsed[i + 1] === "blood" || parsed[i + 1] === "blood." || parsed[i + 1] === "blood!" || parsed[i + 1] === "blood?") {
                meltydiss(message.channel);
                return;
            }
        }
        for(var j = 0; j < melty.length; j++) {
            if(parsed[i] == melty[j]) {
                meltydiss(message.channel);
                return;
            }
        }

        if(parsed[i] === "rivals" && length >= i + 2) {
            if(parsed[i + 2] === "aether" || parsed[i + 2] === "aether." || parsed[i + 2] === "aether!" || parsed[i + 2] === "aether?") {
                roadiss(message.channel);
                return;
            }
        }
        for(var j = 0; j < roa.length; j++) {
            if(parsed[i] == roa[j]) {
                roadiss(message.channel);
                return;
            }
        }

        if(parsed[i] === "fantasy" && length >= i + 1) {
            if(parsed[i + 1] === "strike" || parsed[i + 1] === "strike." || parsed[i + 1] === "strike!" || parsed[i + 1] === "strike?") {
                fstrikediss(message.channel);
                return;
            }
        }

        if(parsed[i] === "killer" && length >= i + 1) {
            if(parsed[i + 1] === "instinct" || parsed[i + 1] === "instinct." || parsed[i + 1] === "instinct!" || parsed[i + 1] === "instinct?") {
                kidiss(message.channel);
                return;
            }
        }
        for(var j = 0; j < ki.length; j++) {
            if(parsed[i] == ki[j]) {
                kidiss(message.channel);
                return;
            }
        }

        if(parsed[i] === "tekken") {
            tekkendiss(message.channel);
            return;
        }
        for(var j = 0; j < tekken.length; j++) {
            if(parsed[i] == tekken[j]) {
                tekkendiss(message.channel);
                return;
            }
        }

        if(parsed[i] === "arcana" && length >= i + 1) {
            if(parsed[i + 1] === "heart" || parsed[i + 1] === "heart." || parsed[i + 1] === "heart!" || parsed[i + 1] === "heart?") {
                arcanadiss(message.channel);
                return;
            }
        }
        for(var j = 0; j < arcana.length; j++) {
            if(parsed[i] == arcana[j]) {
                arcanadiss(message.channel);
                return;
            }
        }

        if(parsed[i] === "king" && length >= i + 2) {
            if(parsed[i + 2] === "fighters" || parsed[i + 2] === "fighters." || parsed[i + 2] === "fighters!" || parsed[i + 2] === "fighters?") {
                snkdiss(message.channel);
                return;
            }
        }
        for(var j = 0; j < snk.length; j++) {
            if(parsed[i] == snk[j]) {
                snkdiss(message.channel);
                return;
            }
        }
        
        if(parsed[i] === "all" && length >= i + 2) {
            if(parsed[i + 1] === "star" && parsed[i + 2] === "battle") {
                jojodiss(message.channel);
                return;
            }
        }
        if(parsed[i] === "eyes" && length >= i + 2) {
            if(parsed[i + 1] === "of" && parsed[i + 2] === "heaven") {
                jojodiss(message.channel);
                return;
            }
        }
        for(var j = 0; j < jojo.length; j++) {
            if(parsed[i] == jojo[j]) {
                jojodiss(message.channel);
                return;
            }
        }

        if(parsed[i] === "dead" && length >= i + 2) {
            if(parsed[i + 2] === "alive" || parsed[i + 2] === "alive." || parsed[i + 2] === "alive!" || parsed[i + 2] === "alive?") {
                doadiss(message.channel);
                return;
            }
        }
        for(var j = 0; j < doa.length; j++) {
            if(parsed[i] == doa[j]) {
                doadiss(message.channel);
                return;
            }
        }

        if(parsed[i] === "soul" && length >= i + 1) {
            if(parsed[i + 1] === "calibur" || parsed[i + 1] === "calibur." || parsed[i + 1] === "calibur!" || parsed[i + 1] === "calibur?") {
                scaliburdiss(message.channel);
                return;
            }
        }
        for(var j = 0; j < scalibur.length; j++) {
            if(parsed[i] == scalibur[j]) {
                scaliburdiss(message.channel);
                return;
            }
        }

        if(parsed[i] === "mortal" && length >= i + 1) {
            if(parsed[i + 1] === "kombat" || parsed[i + 1] === "kombat." || parsed[i + 1] === "kombat!" || parsed[i + 1] === "kombat?") {
                mkdiss(message.channel);
                return;
            }
        }
        for(var j = 0; j < mk.length; j++) {
            if(parsed[i] == mk[j]) {
                mkdiss(message.channel);
                return;
            }
        }

        for(var j = 0; j < injustice.length; j++) {
            if(parsed[i] == injustice[j]) {
                injusticediss(message.channel);
                return;
            }
        }

        if(parsed[i] === "street" && length >= i + 1) {
            if(parsed[i + 1] === "fighter" || parsed[i + 1] === "fighter." || parsed[i + 1] === "fighter!" || parsed[i + 1] === "fighter?") {
                sfdiss(message.channel);
                return;
            }
        }
        for(var j = 0; j < sf.length; j++) {
            if(parsed[i] == sf[j]) {
                sfdiss(message.channel);
                return;
            }
        }

        if(parsed[i] === "naruto" && length >= i + 1) {
            if(parsed[i + 1] === "storm" || parsed[i + 1] === "storm." || parsed[i + 1] === "storm!" || parsed[i + 1] === "storm?") {
                arenadiss(message.channel);
                return;
            }
            if(parsed[i + 2] === "storm" || parsed[i + 2] === "storm." || parsed[i + 2] === "storm!" || parsed[i + 2] === "storm?") {
                arenadiss(message.channel);
                return;
            }
            if(parsed[i + 3] === "storm" || parsed[i + 3] === "storm." || parsed[i + 3] === "storm!" || parsed[i + 3] === "storm?") {
                arenadiss(message.channel);
                return;
            }
            if(parsed[i + 4] === "storm" || parsed[i + 4] === "storm." || parsed[i + 4] === "storm!" || parsed[i + 4] === "storm?") {
                arenadiss(message.channel);
                return;
            }
        }
        if(parsed[i] === "burning" && length >= i + 1) {
            if(parsed[i + 1] === "blood" || parsed[i + 1] === "blood." || parsed[i + 1] === "blood!" || parsed[i + 1] === "blood?") {
                arenadiss(message.channel);
                return;
            }
        }
        if(parsed[i] === "seiya" && length >= i + 1) {
            if(parsed[i + 1] === "soldiers" || parsed[i + 1] === "soldiers'") {
                arenadiss(message.channel);
                return;
            }
        }
        if((parsed[i] === "one's" || parsed[i] === "ones" || parsed[i] === "one") && length >= i + 1) {
            if(parsed[i + 1] === "justice" || parsed[i + 1] === "justice." || parsed[i + 1] === "justice!" || parsed[i + 1] === "justice?") {
                arenadiss(message.channel);
                return;
            }
        }
        if(parsed[i] === "mamodo" && length >= i + 1) {
            if(parsed[i + 1] === "battles" || parsed[i + 1] === "battles." || parsed[i + 1] === "battles!" || parsed[i + 1] === "battles?") {
                arenadiss(message.channel);
                return;
            }
            if(parsed[i + 1] === "fury" || parsed[i + 1] === "fury." || parsed[i + 1] === "fury!" || parsed[i + 1] === "fury?") {
                arenadiss(message.channel);
                return;
            }
        }
        if(parsed[i] === "kobuto" || parsed[i] === "budokai" || parsed[i] === "tenkaichi" || parsed[i] === "xenoverse" || parsed[i] === "xv" || parsed[i] === "dbxv" || 
           parsed[i] === "ytb" || parsed[i] === "j-stars" || parsed[i] === "jstars" || parsed[i] === "estival" || parsed[i] === "shinovi") {
            arenadiss(message.channel);
            return;
        }
        for(var j = 0; j < arena.length; j++) {
            if(parsed[i] == arena[j]) {
                arenadiss(message.channel);
                return;
            }
        }
        
        for(var j = 0; j < pokken.length; j++) {
            if(parsed[i] == pokken[j]) {
                pokkendiss(message.channel);
                return;
            }
        }

        if(parsed[i] === "devil" && length >= i + 3) {
            if(parsed[i + 1] === "may") {
                if(parsed[i + 2] === "cry") {
                    if(parsed[i + 3] === "4" || parsed[i + 3] === "four") {
                        dmc4diss(message.channel);
                        return;
                    }
                }
            }
        }
        for(var j = 0; j < dmc4.length; j++) {
            if(parsed[i] == dmc4[j]) {
                dmc4diss(message.channel);
                return;
            }
        }

    }
});

function dmc4diss(channel) {
    var rand = getRndInteger(0, dmc4R.length);
    channel.send(dmc4R[rand]);
}

function pokkendiss(channel) {
    var rand = getRndInteger(0, pokkenR.length);
    channel.send(pokkenR[rand]);
}

function arenadiss(channel) {
    var rand = getRndInteger(0, arenaR.length);
    channel.send(arenaR[rand]);
}

function sfdiss(channel) {
    var rand = getRndInteger(0, sfR.length);
    channel.send(sfR[rand]);
}

function injusticediss(channel) {
    var rand = getRndInteger(0, injusticeR.length);
    channel.send(injusticeR[rand]);
}

function mkdiss(channel) {
    var rand = getRndInteger(0, mkR.length);
    channel.send(mkR[rand]);
}

function scaliburdiss(channel) {
    var rand = getRndInteger(0, scaliburR.length);
    channel.send(scaliburR[rand]);
}

function doadiss(channel) {
    var rand = getRndInteger(0, doaR.length);
    channel.send(doaR[rand]);
}

function jojodiss(channel) {
    var rand = getRndInteger(0, jojoR.length);
    channel.send(jojoR[rand]);
}

function snkdiss(channel) {
    var rand = getRndInteger(0, snkR.length);
    channel.send(snkR[rand]);
}

function arcanadiss(channel) {
    var rand = getRndInteger(0, arcanaR.length);
    channel.send(arcanaR[rand]);
}

function tekkendiss(channel) {
    var rand = getRndInteger(0, tekkenR.length);
    channel.send(tekkenR[rand]);
}

function kidiss(channel) {
    var rand = getRndInteger(0, kiR.length);
    channel.send(kiR[rand]);
}

function fstrikediss(channel) {
    var rand = getRndInteger(0, fstrikeR.length);
    channel.send(fstrikeR[rand]);
}

function roadiss(channel) {
    var rand = getRndInteger(0, roaR.length);
    channel.send(roaR[rand]);
}

function meltydiss(channel) {
    var rand = getRndInteger(0, meltyR.length);
    channel.send(meltyR[rand]);
}

function ccodediss(channel) {
    var rand = getRndInteger(0, ccodeR.length);
    channel.send(ccodeR[rand]);
}

function unibdiss(channel) {
    var rand = getRndInteger(0, unibR.length);
    channel.send(unibR[rand]);
}

function tfhdiss(channel) {
    var rand = getRndInteger(0, tfhR.length);
    channel.send(tfhR[rand]);
}

function sgdiss(channel) {
    var rand = getRndInteger(0, sgR.length);
    channel.send(sgR[rand]);
}

function smashdiss(channel) {
    var rand = getRndInteger(0, smashR.length);
    channel.send(smashR[rand]);
}

function p4diss(channel) {
    var rand = getRndInteger(0, personaR.length);
    channel.send(personaR[rand]);
}

function mvcdiss(channel) {
    var rand = getRndInteger(0, mvcR.length);
    channel.send(mvcR[rand]);
}

function dbdiss(channel) {
    var rand = getRndInteger(0, dbfzR.length);
    channel.send(dbfzR[rand]);
}

function ggdiss(channel) {
    var rand = getRndInteger(0, ggR.length);
    channel.send(ggR[rand]);
}

function bbdiss(channel) {
    var rand = getRndInteger(0, bbR.length);
    channel.send(bbR[rand]);
}

function bbtagdiss(channel) {
    var rand = getRndInteger(0, bbtagR.length);
    channel.send(bbtagR[rand]);
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function resetBot(channel) {
    client.destroy();
}

function DMme(server) {
     client.users.get("98484620286246912").send(server);
}
