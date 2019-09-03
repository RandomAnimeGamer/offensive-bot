const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

client.login(process.env.BOT_TOKEN);

var sf         = ["sf", "sf!", "sf.", "sf?"];
var sfR        = ["That game is so boring, it's literally just turtling!", "Like King of Fighters but as bland as cardboard.", "Playing with a carboard box offers the same gameplay as Street Fighter.", "Street Fighter is the most dated fighting game.", "The literal only reason people remember Street Fighter is because it's old.", "Street Fighter is literally an elder on life support.", "Hey guys, let's play Mortal Kombat!", "Hey guys, let's play King of Fighters!"];
var sf1        = ["sf1", "sf1!", "sf1.", "sf1?"];
var sf1R       = ["SF1 is so bad, nobody even plays it.", "Do you find 1f Hadoukens fun?", "The sheer amount of lag SF1 has is unbearable.", "Even Capcom realizes nobody likes this game.", "SF1 is literally the only SF without netplay.", "SF1 has the literal worst art style in a fighting game."];
var sf2        = ["sf2", "sf2!", "sf2.", "sf2?", "ssf2", "ssf2!", "ssf2.", "ssf2?"];
var sf2R       = ["I love having 20fps slowdowns on hit.", "How many times will Capcom re-release 'Nostalgia Pandering -  The Game'?", "Don't lie, you play SF2 for nostalgia.", "There's literally no reason to play this when SF3 exists.", "SF2 has almost no characters to choose.", "If it weren't for SF1, this would be the worst art style in any fighting game."];
var sf3        = ["sf3", "sf3s", "sf3!", "sf3s!", "sf3.", "sf3s.", "sf3?", "sf3s?"];
var sf3R       = ["Why do any attack when they can just parry it?", "The only combo-oriented characters in SF3 use like 3 inputs per combo.", "Yeah, can we just parry SF3's existence, please?", "Despite everything, nobody plays SF3.", "Apparently they thought it was a good idea to replace a memorable cast with generic Fiverr designs."];
var sf4        = ["sf4", "ssf4", "usf4", "sf4!", "ssf4!", "usf4!", "sf4.", "ssf4.", "usf4.", "sf4?", "ssf4?", "usf4?"];
var sf4R       = ["All people do in SF4 is FADC.", "SF4 has the most jank animation style ever.", "All you need to do is Focus Punch 500 times a minute.", "SF4 is when Capcom started to go downhill.", "Trash netcode for a trash game.", "How did they manage to make the game more jank than SF4 Mobile was?", "Here, take 500 meters and no real combos!"];
var sf5        = ["sfv", "sfvae", "sfv!", "sfvae!", "sfv.", "sfvae.", "sfv?", "sfvae?"];
var sf5R       = ["How much input lag's in the game again? 30 frames now?", "How's that 'new and improved' rollback netcode?", "How long did it take Capcom to make this a finished game?", "Gotta love buggy cross-play that barely works.", "How's those A-Pose glitches treating you?", "There's literally zero neutral in SFV, it's just pure rushdown.", "I play SFV because I can't properly chain combos in a real SF game."];
var sfxt       = ["sfxt", "sfxt!", "sfxt.", "sfxt?"];
var sfxtR      = ["Gems were clearly the best idea for this game.", "Microtransactions are fun, it makes SFxT feel like a mobile game.", "I love running the timer out every match.", "SFxT died because people gave up waiting for TxSF.", "So this is the game BBTAG took its shitty mechanics from.", "I can't tell if the netcode is garbage because the game is literally dead.", "SFxT is so bad, you have to install a mod that disables online to play the game.", "Candidate for worst PC port since Dead or Alive 5 Last Round."];

var snk        = ["snk", "snk.", "snk!", "snk?"];
var snkR       = ["Legends claim that SNK is still on the verge of bankruptcy to this day. They're not wrong.", "The middle-ground between Street Fighter and Marvel VS Capcom.", "When you're too poor to buy Street Fighter.", "Literally the second most dated fighting game.", "Anyone want to play Street Fighter instead?", "Wait, isn't that just M.U.G.E.N. with less content?", "Don't even lie, you play that for waifus.", "Only SNK shills play their games."];
var kof        = ["garou", "garou!", "garou.", "garou?", "kof", "kof94", "kof'94", "kof95", "kof'95", "kof96", "kof'96", "kof97", "kof'97", "kof98", "kof'98", "kof99", "kof'99", "kof00", "kof'00", "kof01", "kof'01", "kof02", "kof'02", "kof03", "kof'03", "kofxi", "kof11", "kofxii", "kof12", "kofxiii", "kof13", "kofmi", "kofmi2", "kof.", "kof94.", "kof'94.", "kof95.", "kof'95.", "kof96.", "kof'96.", "kof97.", "kof'97.", "kof98.", "kof'98.", "kof99.", "kof'99.", "kof00.", "kof'00.", "kof01.", "kof'01.", "kof02.", "kof'02.", "kof03.", "kof'03.", "kofxi.", "kof11.", "kofxii.", "kof12.", "kofxiii.", "kof13.", "kofmi.", "kofmi2.", "kof!", "kof94!", "kof'94!", "kof95!", "kof'95!", "kof96!", "kof'96!", "kof97!", "kof'97!", "kof98!", "kof'98!", "kof99!", "kof'99!", "kof00!", "kof'00!", "kof01!", "kof'01!", "kof02!", "kof'02!", "kof03!", "kof'03!", "kofxi!", "kof11!", "kofxii!", "kof12!", "kofxiii!", "kof13!", "kofmi!", "kofmi2!", "kof?", "kof94?", "kof'94?", "kof95?", "kof'95?", "kof96?", "kof'96?", "kof97?", "kof'97?", "kof98?", "kof'98?", "kof99?", "kof'99?", "kof00?", "kof'00?", "kof01?", "kof'01?", "kof02?", "kof'02?", "kof03?", "kof'03?", "kofxi?", "kof11?", "kofxii?", "kof12?", "kofxiii?", "kof13?", "kofmi?", "kofmi2?"];
var kofR       = ["There's a community for that game?", "How's the outdated graphics?", "I swear this game is the Final Fantasy of fighting games. And by that I mean there's way too many damn sequels.", "What's the difference between each King of Fighters game? The year on the logo.", "I thought regular delay based was bad enough, but KOF takes the cake with awful netcode."];
var kof14      = ["kofxiv", "kof14", "kofxiv.", "kof14.", "kofxiv!", "kof14!", "kofxiv?", "kof14?"];
var kof14R     = ["There's a community for that game?", "PS2 graphics.", "How does it feel to play the game even SNK fans betrayed?", "How was EVO 2018? See any good KOF matches on main stage?", "Even SNK wants to forget KOF14 existed.", "Why play KOF14 when KOF13 exists?", "lol autocombos"];
var samsho     = ["shodown", "shodown.", "shodown!", "shodown?"];
var samshoR    = ["It feels like I'm playing SF1 when I play SamSho.", "Why does every move do 50% HP damage minimum?", "Even the combo system ran away from SamSho.", "Play a real fighting game.", "Why is the entire game the neutral game?", "Good graphics don't make up for terrible gameplay."];

var mvc        = ["mvc", "mvc1", "mvc2", "mvc:1", "mvc:2", "marvel", "mahvel", "mahvell", "mvc!", "mvc1!", "mvc2!", "mvc:1!", "mvc:2!", "marvel!", "mahvel!", "mahvell!", "mvc.", "mvc1.", "mvc2.", "mvc:1.", "mvc:2.", "marvel.", "mahvel.", "mahvell.", "mvc?", "mvc1?", "mvc2?", "mvc:1?", "mvc:2?", "mvc:i?", "marvel?", "mahvel?", "mahvell?"];
var mvcR       = ["Let's play some Dragon Ball FighterZ.", "Let's play BlazBlue Cross Tag Battle.", "Even Capcom realizes this game is dead.", "Do people even play MVC anymore?", "Hey look, it's Divekick's older brother!", "How's that netcode?", "Only Capcom shills defend MVC's broken ass gameplay."];
var mvc3       = ["mvc3", "umvc3", "mvc:3", "umvc:3", "u:mvc:3", "mvc3!", "umvc3!", "mvc:3!", "umvc:3!", "u:mvc:3!", "mvc3.", "umvc3.", "mvc:3.", "umvc:3.", "u:mvc:3.", "mvc3?", "umvc3?", "mvc:3?", "umvc:3?", "u:mvc:3?"];
var mvc3R      = ["Morrigan? More like Touhou.", "Ready for the next 'Ultimate' edition to that one?", "If you get hit once, put down the controller.", "MVC3 was literally the game to ruin MVC with its oversimplified layout.", "Hey look, it's no-neutral the game!", "MVC3 is so unbalanced, you have to download an overhaul mod just to play it."];
var mvci       = ["mvci", "mvc:i", "mvci!", "mvc:i!", "mvci.", "mvc:i.", "mvci?"];
var mvciR      = ["MVCI has a DLC policy that rivals BBTAG in poor practices.", "Enjoying your dead game?", "Ultimate Function VS Function: Infinite", "Isn't this the game made by Netherrealm Studios?", "Ug-Li", "Dante now smokes 200% more crack.", "Where did all of the roster go?", "How was EVO 2018 for you?"];

var gg         = ["gg1", "gg1.", "gg1?", "gg1!"];
var ggR        = ["Play FighterZ lately?", "How many button layouts does it take to get to the center of Guilty Gear's controls?", "Why don't we just play the original Guilty Gear for nostalgia's sake?", "Personally, I prefer Guilty Gear Xrd -Revelator- 2nd #Reload Accent Core Plus R (Steam Edition).", "Don't even lie, you play this game for the waifus.", "Hold on, lemee just wipe off the dust on this game.", "Only Arc shills defend how GG keeps getting scrubbier with each new release."];
var ggxx       = ["ggx2", "xxacpr", "xxac+r", "ggx2.", "xxacpr.", "xxac+r.", "ggx2?", "xxacpr?", "xxac+r?", "ggx2!", "xxacpr!", "xxac+r!"];
var ggxxR      = ["How's DP->YRC treating you?", "I main Venom... From MVC:I", "Don't even lie, you play this game only for Bridget.", "Why even play this game, it's not like it's going to EVO.", "I'd rather play Guilty Gear 1 than this garbage."];
var ggxrd      = ["ggxrd", "ggxrd.", "ggxrd?", "ggxrd!", "xrd", "xrd.", "xrd?", "xrd!", "rev2", "rev2.", "rev2!", "rev2?"];
var ggxrdR     = ["How does it feel with half of the playerbase locked behind a paywall?", "I main Raven.", "Danger Time is the best mechanic in any fighting game.", "I love how Xrd went to EVO only to be removed the next year because of how trash it is.", "6K Loops."];

var bb         = ["blazblue", "blazeblue", "bb", "blazblue.", "blazeblue.", "bb.", "blazblue!", "blazeblue!", "bb!", "blazblue.", "blazeblue?", "bb?"];
var bbR        = ["How are you enjoying your DLC?", "Ready for the new EXTEND version?", "How many times do you DP? Let me guess, you're going to say 'How many breads have you eaten in your life'?", "Netplay with any randoms lately? No? Okay, then.", "Don't even lie, you play this game for the waifus.", "Hold on, lemee just wipe off the dust on this game.", "Only Arc shills play BlazBlue."];
var bbct       = ["bbct", "ct", "bbct.", "ct.", "bbct!", "ct!", "bbct?", "ct?"];
var bbctR      = ["I main Noel's drive button.", "I main Hakumen.", "I main Arakune.", "Gotta love the underdeveloped guard crush system.", "The best version is on Steam because nobody plays it anyways.", "I play BlazBlue Calamity Trigger because I can't play Guilty Gear.", "The inferior version to Guilty Gear X2.", "Ice cars!"];
var bbcs       = ["bbcs", "bbcs2", "bbcse", "bbcsex", "cs", "cs2", "cse", "csex", "bbcs.", "bbcs2.", "bbcse.", "bbcsex.", "cs.", "cs2.", "cse.", "csex.", "bbcs!", "bbcs2!", "bbcse!", "bbcsex!", "cs!", "cs2!", "cse!", "csex!", "bbcs?", "bbcs2?", "bbcse?", "bbcsex?", "cs?", "cs2?", "cse?", "csex?"];
var bbcsR      = ["I main CS1 Hazama.", "I main Extend Ragna.", "BBCS players are like Melee players, they literally never upgrade their game even when superior versions exist.", "j.C loops", "Ice cars!"];
var bbcp       = ["bbcp", "bbcpe", "bbcpex", "cp", "cpex", "bbcp.", "bbcpe.", "bbcpex.", "cp.", "cpex.", "bbcp!", "bbcpe!", "bbcpex!", "cp!", "cpex!", "bbcp?", "bbcpe?", "bbcpex?", "cp?", "cpex?"];
var bbcpR      = ["I main Vanilla Kokonoe.", "I main Celica.", "BBCP isn't faster, it's artificially sped up.", "How are you enjoying your $200 game?", "This is the only game to have worse DLC than BBTAG.", "So what was that about there being no EXTEND?", "Overrated trash."];
var bbcf       = ["bbcf", "bbcf2", "cf", "cf2", "bbcf.", "bbcf2.", "cf.", "cf2.", "bbcf!", "bbcf2!", "cf!", "cf2!", "bbcf?", "bbcf2?", "cf?", "cf2?"];
var bbcfR      = ["How does it feel to have BBTAG replace BBCF at tournaments?", "It's so bad, you have to download a rehaul mod to play it.", "I main Pre-Patch Nine the Phantom.", "I main Carl Clover.", "I main Jin Kisaragi.", "Even Mori wants to forget that this game exists.", "How's your free disk space? I think it's crying right now."];
var bbtag      = ["bbtag", "bbctb", "bbtag.", "bbctb.", "bbtag?", "bbctb?", "bbtag!", "bbctb!"];
var bbtagR     = ["How are you enjoying your DLC?", "Come on, you can play a game with more than two buttons.", "There's more to fighters than picking Gordeau and Ruby.", "Nobody plays that dead game anymore.", "I'd rather play BlazBlue RR than that trash.", "A->A->B->B->jump->A->A->B->B->C", "First you have to disable your HUD to get above 30FPS.", "Don't worry, you can escape astral finishes.", "How are those sprites looking for you?", "Hey, can I invite you to my lobby? What do you mean by 'no'?", "Known for the best game mode variety: VS Mode, Infinite VS Mode, Weeb Fanfiction VS Mode, Learning VS Mode, and Online VS Mode.", "Even the opening cutscene doesn't want you to play it because it literally crashes the game.", "Apparently they thought Es was more important than even BBCT characters.", "How's Fanfiction.net? I mean, Story Mode. I meant to say Story Mode.", "How's them physics? https://www.youtube.com/watch?v=WMdHkD0fDJo", "I play BBTAG because I enjoy braindead loops.", "lol auto combos", "Don't even lie, you play this game for the waifus.", "I don't play BlazBlue Price Tag Battle.", "It's so bad, you have to download a rehaul mod to play it.", "Literally everyone in BBTAG plays the exact same.", "Only Arc System Works shills defend BBTAG."];

var dbfz       = ["fighterz", "fighterz.", "fighterz?", "fighterz!", "dbfz", "dbfz?", "dbfz!", "dbfz."];
var dbfzR      = ["How are you enjoying your $60 DLC?", "Look at all of those Cooler mains.", "a.5A->a.5B->jump->a.5A->a.5B->special->super", "DBfZ feels like it's still in an open beta.", "A network error occurred. Could not connect to the lobby.", "Failed to initialize network.", "The UE4-RED Game has crashed. Fatal error!", "EAC: Peer Untrusted Error", "How's Denuvo treating you?", "I main Goku Black's 2H.", "I main Yamcha's Assist.", "I main Cell.", "Ready for the new Guilty Gear to replace this game?", "lol auto combos", "Don't even lie, you play DBfZ for Android 21.", "Literally everyone in DBfZ plays the exact same.", "Only Arc shills defend this shitty button masher."];
var persona    = ["p4a", "p4au", "p4au2", "p4au2.0", "ultimax", "p4a!", "p4au!", "p4au2!", "p4au2.0!", "ultimax!", "p4a.", "p4au.", "p4au2.", "p4au2.0.", "ultimax.", "p4a?", "p4au?", "p4au2?", "p4au2.0?", "ultimax?", "p4u2", "p4u2.", "p4u2!", "p4u2?"];
var personaR   = ["How many Persona 4 things have you bought?", "lol auto combos", "Don't even lie, you play this game for waifus.", "How's the PC release?", "lmao dust has block frames", "Like a bootlegged Jojo's HFTF.", "I think everyone left to play BlazBlue Cross Tag Battle.", "You can win easily by pressing one button."];
var unib       = ["unist", "uniel", "unib", "unist.", "uniel?", "unib!", "unist?", "uniel!", "unib.", "unist!", "uniel.", "unib?"];
var unibR      = ["lol auto combo", "I main Seth.", "I main Gordeau.", "GURIM REEPAA", "Like BlazBlue but for hipsters.", "Don't even lie, you play this game for husbandos.", "Like Melty Blood, but inferior.", "When you play region locked netcode.", "When your game developers can't decide on one localization.", "When you want to pretend you can't afford BlazBlue.", "That has a community of, uh... 10 players, right?"];
var melty      = ["mb", "mbaa", "mbaacc", "mbcc", "mb!", "mbaa!", "mbaacc!", "mbcc!", "mb.", "mbaa.", "mbaacc.", "mbcc.", "mb?", "mbaa?", "mbaacc?", "mbcc?", "cccaster", "ccaster", "cccaster!", "ccaster!", "cccaster.", "ccaster.", "cccaster?", "ccaster?"];
var meltyR     = ["You thought this was hentai like the source material, didn't you?", "Don't even lie, you play this game for waifus.", "Like Smash Bros. but for hipsters.", "It's so bad, you have to download a rehaul mod to play it.", "Like UNIST but inferior and old.", "Hold on, lemee just wipe off the dust on this game.", "I don't play Melty because the tournaments are held in stinky public bathrooms."];
var arcana     = ["ah1", "ah2", "ah3", "ah3lm", "ah3lmss", "ah3ss"];
var arcanaR    = ["Like Skullgirls but for weeaboos", "This game is almost as dead as Chaos Code.", "Wasn't Arcana Heart 4 supposed to happen?", "There's nothing better than a large company holding a small patch hostage on Kickstarter, and then expecting people to still pay $60 for the update!", "Like BlazBlue but made for the 'progressive crowd' that wants 'equal female representation' in fighting games, but whines about Dead or Alive and Skullgirls 'oversexualizing' constantly.", "Rare footage of someone actually talking about Arcana Heart.", "Don't even lie, you play this game for waifus."];
var ccodeR     = ["Like King of Fighters for weeaboos.", "Literally nobody plays Chaos Codegame.", "Like BlazBlue, but underwater.", "You're better off playing MVC:I tbh fam.", "Hold on, lemee just wipe off the dust on this game.", "Rare footage of someone talking about Chaos Code."];
var hnk        = ["fotns", "fotns.", "fotns!", "fotns?", "hnk", "hnk.", "hnk!", "hnk?", "hokuto", "hokuto.", "hokuto!", "hokuto?"];
var hnkR       = ["There's a good reason that this game never made it past the PS2 days.", "The entire game is just air juggling.", "I wonder why nobody knows what Fist of the North Star is, could it be that it's a shitty game?", "This game is already dead.", "You only play this because you wanted to play Guilty Gear with easier IKs.", "Fist of the North Star Community - Population: Just you."];
var dbfc       = ["dengeki", "dengeki.", "dengeki!", "dengeki?", "bunko", "bunko.", "bunko!", "bunko?", "dbfc", "dbfc.", "dbfc!", "dbfc?", "dbfci", "dbfci.", "dbfci!", "dbfci?"];
var dbfcR      = ["Isn't that the one with Kirito in it?", "Literally this is a game for weebs and nothing else.", "None of the animes in this game are good.", "When you want to be more hipster than Under-Night fans.", "How's it feel to play the black sheep of French Bread games?", "Just mash A+B in neutral.", "Fighting Climax has the most basic-bitch combos ever.", "Still waiting for Sonic to be playable.", "Imagine releasing an outdated version of your game in America."];

var tfh        = ["tfh", "tfh.", "tfh!", "tfh?"];
var tfhR       = ["Isn't that just some brony fanfiction game?", "Like BlazBlue but for babies.", "How long has Early Access been?", "Is the game actually complete yet?", "It's like BlazBlue, but with an almost non-existent community.", "The game with a community that firmly believes any game is Street Fighter 1 if more than one character can do something.", "I guess Fighting really isn't Magic.", "Did someone say Cease and Desist?", "How many settings do I need to scroll through to change anything?", "I love the lip syncing on intro animations.", "TFH has the smallest roster in the existence of fighting games since Street Fighter 1."];
var sg         = ["skullgirls", "sg", "skullgirls?", "sg?", "skullgirls.", "sg.", "skullgirls!", "sg!"];
var sgR        = ["Don't even lie, you play this game for the waifus.", "Does this game have enough buttons?", "How many settings do I need to scroll through to change anything?", "Hey look, it's bootleg Marvel VS Capcom!", "It'll never get a spot at EVO's main stage.", "Literally everyone has this game and next to nobody plays it.", "Skullgirls is my favorite card game.", "Hold on, lemee just wipe off the dust on this game."];
var roa        = ["roa", "roa.", "roa!", "roa?"];
var roaR       = ["How are you enjoying your DLC?", "Like Smash Bros. but for hipsters.", "When you can't afford a ledge mechanic.", "When you're more poor than even Smash Bros. players.", "That ain't Falco.", "Like Smash Bros. but generic and off-brand.", "That's not a fighting game."];
var fstrikeR   = ["When you're too scrubby to play Street Fighter.", "Baby's first Street Fighter.", "Ew, Unity Engine.", "Like a box of Cheerios, but a fighting game.", "It's like Street Fighter, but with an almost non-existent community.", "Obviously the creators never heard of arena fighters."];

var mk         = ["mk", "mk1", "mk2", "mk3", "umk3", "mk4", "mkda", "mka", "mkvdc", "mk9", "mkx", "mk10", "mk11", "mk!", "mk1!", "mk2!", "mk3!", "umk3!", "mk4!", "mkda!", "mka!", "mkvdc!", "mk9!", "mkx!", "mk10!", "mk11!", "mk.", "mk1.", "mk2.", "mk3.", "umk3.", "mk4.", "mkda.", "mka.", "mkvdc.", "mk9.", "mkx.", "mk10.", "mk11.", "mk?", "mk1?", "mk2?", "mk3?", "umk3?", "mk4?", "mkda?", "mka?", "mkvdc?", "mk9?", "mkx?", "mk10?", "mk11?", "mkxl", "mkxl!", "mkxl.", "mkxl?", "mk10l", "mk10l!", "mk10l.", "mk10l?"];
var mkR        = ["Ew, a block button.", "Arcade stick layout made by literally Satan.", "Not even Satan himself would touch that arcade stick layout.", "Mortal Kombat literally only exists because of 90s shock value.", "Like Duke Nukem but with a worse plot.", "Literally the only fighting game where stage hazards are the norm.", "Mortal Kombat 11 was a mistake.", "Mortal Kombat X was a mistake.", "Mortal Kombat 9 was a mistake.", "Who still plays this game anymore?", "Hey guys, let's play Injustice 2!"];
var injustice  = ["injustice", "injustice!", "injustice.", "injustice?", "injustices", "injustices!", "injustices.", "injustices?"];
var injusticeR = ["Enjoying your Red Shell spyware?", "Hey guys, let's play Mortal Kombat 11!", "Like Mortal Kombat but with worse animations.", "This was at EVO mainstage for the same reason as BB Cross Tag Battle. Literally only so they could fill in space to keep out MVC:I.", "Since when did Mortal Kombat look this awful?", "Like Mortal Kombat but without the appeal of fatalities."];
var ki         = ["ki", "ki?", "ki.", "ki!"];
var kiR        = ["How are you enjoying your DLC?", "Like Marvel VS Capcom but even less people play it.", "This game couldn't even escape the Xbox One. And by that I mean nobody even bought the PC Version.", "The game everyone forgot about?", "Killer Instinct Population: Microsoft Shills."];
var rangersR   = ["Wait, wasn't Justin Wong involved with this game? It doesn't look like it.", "Looks like a mobile game, plays like a mobile game.", "I play Power Rangers BFTG because I enjoy braindead loops.", "lol auto combos", "Hey, can I invite you to my lobby? What do you mean by 'no'?", "Known for the best game mode variety: VS Mode, Multi-VS Mode, Learning VS Mode, and Online VS Mode.", "Don't even lie, you play this game only for nostalgia.", "Only scrubs play that game.", "Only filthy casuals play that game.", "Mario Party is more competitive than Power Rangers.", "Power Rangers is the most jank game ever."];
var jojo       = ["hftf", "asb", "eoh", "hftf!", "asb!", "eoh!", "hftf.", "asb.", "eoh.", "hftf?", "asb?", "eoh?"];
var jojoR      = ["Like Dragon Ball games but for hipsters.", "Literally everyone in that game plays the exact same.", "Remember when CC2 tried to make these games competitive at 30FPS?", "Don't even lie, you play this game for memes.", "Don't even lie, you play this game for the husbandos.", "People still play that broken game?", "Only Jojo shills defend these mediocre messes."];

var smashR     = ["Smash Bros. is a decision between a 15+ year old game or a bad game.", "Smash isn't a fighting game.", "Time Mode. Items only. Stage Hazards On.", "Smash is the least balanced fighting game ever.", "What even are hitboxes?", "Smash being at EVO is proof God has left us. Two Smash games being at EVO is proof humanity is doomed.", "Isn't Smash that button mashing party game or something?", "I prefer Mario Party.", "Only Nintendrones defend Smash's shitty design."];
var melee      =  ["melee!", "melee", "melee.", "melee?"];
var meleeR     = ["https://www.google.com/search?q=how+to+take+a+shower", "https://www.google.com/search?q=how+to+put+on+deodorant", "Proper Hygiene is very important. It keeps close interactions pleasant, and it keeps long-lasting relationships between significant others. It also helps keeping things smelling fine in a crowded place... A crowded place like tournaments.", "Why do people still play this 20 year old game?", "Melee is so old, it's degrading along with NES cartridges.", "Everything that can't be beaten by shining faster is banned.", "C R A B .", "I main Jigglypuff.", "I main Wobbling."];
var brawl      =  ["brawl", "brawl.", "brawl!", "brawl?"];
var brawlR     = ["Random tripping is fun!", "Brawl was a mistake.", "The only reason anyone remembers Brawl is SSE.", "It's so bad, you have to download a complete rehaul mod to make Brawl playable.", "Brawl is more underwater than Aquapazza.", "Netcode that rivals the classic KOF Steam ports.", "I main Meta Knight.", "I main Snake."];
var sm4sh      =  ["sm4sh", "sm4sh.", "sm4sh!", "sm4sh?"];
var sm4shR     = ["How does it feel for your DLC to be completely invalidated now?", "I main Bayonetta.", "Entry to Grand Finals: $5.99", "I main Cloud.", "Why play Smash 4 when you can play Ultimate?", "You only play this game because you're too poor for a Switch.", "I enjoyed the last EVO Finals this game had, it was so action-packed!", "Tr4sh", "G4rb4ge", "Sm4sh fans are just salty scrubs that can't play Ultimate.", "You couldn't afford a Switch for Ultimate?"];
var ulti       =   ["ssbu", "ssbu.", "ssbu!", "ssbu?"];
var ultiR      =  ["C'mon, you know that's just a port of Smash 4.", "I love how Nintendo tries so hard to pretend this game's competitive.", "Only filthy casuals play Smash Ultimate.", "When's Melee?", "Now that this game replaced Melee, that entire crowd is going to fill up Ulti tournaments with stank.", "Smash Ultimate is for scrubs who can't defeat a true 'Hero'."];

var tekken     = ["t1", "t2", "t3", "t4", "t5", "t6", "t7", "ttt", "ttt2", "t1!", "t2!", "t3!", "t4!", "t5!", "t6!", "t7!", "ttt!", "ttt2!", "t1.", "t2.", "t3.", "t4.", "t5.", "t6.", "t7.", "ttt.", "ttt2.", "t1?", "t2?", "t3?", "t4?", "t5?", "t6?", "t7?", "ttt?", "ttt2?"];
var tekkenR    = ["How are you enjoying your DLC?", "Isn't Tekken like that one Naruto Ninja Storm game or something?", "You must love Korean Backdashing.", "Wasn't this supposed to be the biggest fighting game this generation?", "Just play Soul Calibur 6, already!", "I think everyone left to play other games already.", "Literally every bit of hype this game generates is from an announcement existing."];
var doa        = ["doa", "doa++", "doa2", "doa2m", "doa2h", "doa3", "doa4", "doao", "doa5", "doa5+", "doa5p", "doa5u", "doa5lr", "doa6", "doa!", "doa++!", "doa2!", "doa2m!", "doa2h!", "doa3!", "doa4!", "doao!", "doa5!", "doa5+!", "doa5p!", "doa5u!", "doa5lr!", "doa6!", "doa.", "doa++.", "doa2.", "doa2m.", "doa2h.", "doa3.", "doa4.", "doao.", "doa5.", "doa5+.", "doa5p.", "doa5u.", "doa5lr.", "doa6.", "doa?", "doa++?", "doa2?", "doa2m?", "doa2h?", "doa3?", "doa4?", "doao?", "doa5?", "doa5+?", "doa5p?", "doa5u?", "doa5lr?", "doa6?"];
var doaR       = ["How are you enjoying your DLC?", "Literally everyone in that game plays the exact same.", "Don't even lie, you play this game for the waifus.", "A true button masher, just like that Naruto Ninja Storm game.", "The inferior version of Tekken.", "Soul Calibur, but without the main appeal of a Soul Calibur game.", "Literally the worst PC port, not even the fans can fix it, let alone launch the game to begin with.", "If you want a buggy game, at least SFxT is functional.", "How's that netcode?", "Only shills defend that game."];
var scalibur   = ["sc", "sc1", "sc2", "sc3", "sc4", "sc5", "sc6", "sc!", "sc1!", "sc2!", "sc3!", "sc4!", "sc5!", "sc6!", "sc.", "sc1.", "sc2.", "sc3.", "sc4.", "sc5.", "sc6.", "sc?", "sc1?", "sc2?", "sc3?", "sc4?", "sc5?", "sc6?"];
var scaliburR  = ["I main Darth Vader.", "I main Yoda.", "Isn't that the one with Zelda in it?", "Isn't that the one with Link in it?", "I main Zelda.", "I main Link.", "The developers probably get off to anime sword fighters like the Smash Bros. director does.", "Adding Yun-seong was a mistake.", "Removing Yun-seong was a mistake.", "Soul Calibur 3 and onward was a mistake.", "Every Soul Calibur before 3 was a mistake.", "There's nothing better than holding your fighting game's sequels hostage when all the fans want is a good one.", "What even are the controls to this game?", "It's like they wanted a 2P2K, but then opted for an ABCD, and then settled on literally Guilty Gear but worse.", "Like Guilty Gear but more in-line with that Naruto Ninja Storm game.", "Only shills defend that game."];

var arena      = ["s1", "s2", "sg", "s3", "s3fb", "s4", "sr", "nsuns", "nsuns2", "nsuns3", "nsuns4", "nsunsg", "nsunsr", "uns", "uns1", "uns2", "uns3", "uns4", "unsg", "unsr", "nuns", "nuns1", "nuns2", "nuns3", "nuns4", "nunsg", "nunsr", "opbb", "ssss", "mhaoj", "zbmb", "zbmf", "nsuns!", "nsuns2!", "nsuns3!", "nsuns4!", "nsunsg!", "nsunsr!", "uns!", "uns1!", "uns2!", "uns3!", "uns4!", "unsg!", "unsr!", "nuns!", "nuns1!", "nuns2!", "nuns3!", "nuns4!", "nunsg!", "nunsr!", "opbb!", "ssss!", "mhaoj!", "zbmb!", "zbmf!", "nsuns.", "nsuns2.", "nsuns3.", "nsuns4.", "nsunsg.", "nsunsr.", "uns.", "uns1.", "uns2.", "uns3.", "uns4.", "unsg.", "unsr.", "nuns.", "nuns1.", "nuns2.", "nuns3.", "nuns4.", "nunsg.", "nunsr.", "opbb.", "ssss.", "mhaoj.", "zbmb.", "zbmf.", "nsuns?", "nsuns2?", "nsuns3?", "nsuns4?", "nsunsg?", "nsunsr?", "uns?", "uns1?", "uns2?", "uns3?", "uns4?", "unsg?", "unsr?", "nuns?", "nuns1?", "nuns2?", "nuns3?", "nuns4?", "nunsg?", "nunsr?", "opbb?", "ssss?", "mhaoj?", "zbmb?", "zbmf?", "skev", "sksv", "skev!", "sksv!", "skev.", "sksv.", "skev?", "sksv?", "klkif", "klkif.", "klkif?", "klkif!"];
var arenaR     = ["Literally everyone in that game plays the exact same.", "Don't even lie, you play this game for the waifus.", "That isn't a fighting game.", "You literally only press one button in that game.", "Only scrubs play that game.", "Only filthy casuals play that game.", "That game isn't worth anyone's time, it's not even competitive.", "Mario Party is more competitive than that game.", "Literally nobody plays that game.", "That game has the worst mechanics ever made.", "That's the most jank game ever, why would anyone play that?", "Oh yeah, that open-world beat em up game!", "God, that game has the most toxic fanbase of weeaboos out there.", "Only shills and fanboys buy these shitty, overly mediocre anime games.", "Only shills and fanboys defend these shitty, overly mediocre anime games."];
var pokken     = ["pokken", "pokken!", "pokken.", "pokken?"];
var pokkenR    = ["Literally everyone in that game plays the exact same.","Pokken is so unknown, even my creator forgot to put it in until someone mentioned it!", "Isn't it like that Ninja Storm game or something?", "Isn't this just a Tekken clone with weird fetish animals?", "The developers couldn't even decide whether they wanted a casual beat 'em up or an even more casual beat 'em up, so they put both in the game.", "You have to be really into Pokemon to even touch Pokken.", "How's the community of 8 people?", "I think everyone jumped off the Pokken ship when MattPatt was selected to go to a tournament over actual Pokken players.", "At least my Pokken pad is great for playing everything except Pokken!", "Only furries play this game.", "Only Nintendrones play this game.", "They thought the reason it sold poorly was because it was on Wii U. How funny, it sold poorly on Switch as well.", "That isn't a fighting game.", "You literally only press one button in that game.", "Only scrubs play that game.", "Only filthy casuals play that game.", "That game isn't worth anyone's time, it's not even competitive.", "Mario Party is more competitive than that game.", "Literally nobody plays that game.", "That game has the worst mechanics ever made.", "That's the most jank game ever, why would anyone play that?", "Oh yeah, that open-world beat em up game!"];

var dmc4       = ["dmc4", "dmc4!", "dmc4.", "dmc4?"];
var dmc4R      = ["Devil May Cry 4 is the best fighting game in existence.", "Only truly cultured men can understand the depth and complexity of Devil May Cry 4.", "Devil May Cry 4 has the best netcode ever made, even better than GGPO.", "Devil May Cry 4 is literally the magnum opus of fighting games.", "Devil May Cry 4 is better than Half Life 3 because it's a fighting game.", "Devil May Cry 4 is FGOTY every year.", "EVO is too afraid to put Devil May Cry 4 on the mainstage because there aren't enough seats to fill in the large playerbase.", "Devil May Cry 4 is the literal only fighting game to strike the perfect balance between weeaboo and Street Fighter."];


client.on('message', message => {
    if(message.author.id == 516344023628120206) return;
    var msg = message.content.toLowerCase();

    var parsed = msg.split(" ");
    var length = parsed.length;
    for(var i = 0; i < length; i++) {
		
		// Street Fighter
        for(var j = 0; j < sf1.length; j++) {
            if(parsed[i] == sf1[j]) {
                sf1diss(message.channel);
                return;
            }
        }
        for(var j = 0; j < sf2.length; j++) {
            if(parsed[i] == sf2[j]) {
                sf2diss(message.channel);
                return;
            }
        }
        for(var j = 0; j < sf3.length; j++) {
            if(parsed[i] == sf3[j]) {
                sf3diss(message.channel);
                return;
            }
        }
        for(var j = 0; j < sf4.length; j++) {
            if(parsed[i] == sf4[j]) {
                sf4diss(message.channel);
                return;
            }
        }
        for(var j = 0; j < sf5.length; j++) {
            if(parsed[i] == sf5[j]) {
                sf5diss(message.channel);
                return;
            }
        }
        for(var j = 0; j < sfxt.length; j++) {
            if(parsed[i] == sfxt[j]) {
                sfxtdiss(message.channel);
                return;
            }
        }
        if(parsed[i] === "street" && length >= i + 1) {
            if(parsed[i + 1] === "fighter" || parsed[i + 1] === "fighter." || parsed[i + 1] === "fighter!" || parsed[i + 1] === "fighter?") {
				if(length >= i + 2) {
					if(parsed[i + 2] === "2" || parsed[i + 2] === "2." || parsed[i + 2] === "2!" || parsed[i + 2] === "2?") {
						sf2diss(message.channel);
						return;
					}
					if(parsed[i + 2] === "3" || parsed[i + 2] === "3." || parsed[i + 2] === "3!" || parsed[i + 2] === "3?") {
						sf3diss(message.channel);
						return;
					}
					if(parsed[i + 2] === "4" || parsed[i + 2] === "4." || parsed[i + 2] === "4!" || parsed[i + 2] === "4?") {
						sf4diss(message.channel);
						return;
					}
					if(parsed[i + 2] === "5" || parsed[i + 2] === "5." || parsed[i + 2] === "5!" || parsed[i + 2] === "5?") {
						sf5diss(message.channel);
						return;
					}
					if(parsed[i + 2] === "x" || parsed[i + 2] === "x." || parsed[i + 2] === "x!" || parsed[i + 2] === "x?") {
						sfxtdiss(message.channel);
						return;
					}
				}
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
		
		// SNK
        for(var j = 0; j < kof.length; j++) {
            if(parsed[i] == kof[j]) {
                kofdiss(message.channel);
                return;
            }
        }
        for(var j = 0; j < kof14.length; j++) {
            if(parsed[i] == kof14[j]) {
                kof14diss(message.channel);
                return;
            }
        }
        for(var j = 0; j < samsho.length; j++) {
            if(parsed[i] == samsho[j]) {
                samshodiss(message.channel);
                return;
            }
        }
        if(parsed[i] === "king" && length >= i + 2) {
            if(parsed[i + 2] === "fighters" || parsed[i + 2] === "fighters." || parsed[i + 2] === "fighters!" || parsed[i + 2] === "fighters?") {
				if(length >= i + 3) {
					if(parsed[i + 3] === "14" || parsed[i + 3] === "14." || parsed[i + 3] === "14!" || parsed[i + 3] === "14?") {
						kof14diss(message.channel);
						return;
					}
				}
                kofdiss(message.channel);
                return;
            }
        }
        if(parsed[i] === "samurai" && length >= i + 1) {
            if(parsed[i + 1] === "showdown" || parsed[i + 1] === "showdown." || parsed[i + 1] === "showdown!" || parsed[i + 1] === "showdown?") {
                samshodiss(message.channel);
                return;
            }
        }
        for(var j = 0; j < snk.length; j++) {
            if(parsed[i] == snk[j]) {
                snkdiss(message.channel);
                return;
            }
        }
		
		// Marvel VS Capcom
        for(var j = 0; j < mvc3.length; j++) {
            if(parsed[i] == mvc3[j]) {
                mvc3diss(message.channel);
                return;
            }
        }
        for(var j = 0; j < mvci.length; j++) {
            if(parsed[i] == mvci[j]) {
                mvcidiss(message.channel);
                return;
            }
        }
        for(var j = 0; j < mvc.length; j++) {
            if(parsed[i] == mvc[j]) {
                mvcdiss(message.channel);
                return;
            }
        }
		
		// Guilty Gear
		for(var j = 0; j < ggxx.length; j++) {
            if(parsed[i] == ggxx[j]) {
                ggxxdiss(message.channel);
                return;
            }
        }
		for(var j = 0; j < ggxrd.length; j++) {
            if(parsed[i] == ggxrd[j]) {
                ggxrddiss(message.channel);
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
        
		// BlazBlue
		if(parsed[i] === "calamitytrigger" && length >= i + 1) {
			bbctdiss(message.channel);
			return;
		}
		if(parsed[i] === "calamity" && length >= i + 1) {
			if(parsed[i + 1] === "trigger" || parsed[i + 1] === "trigger!" || parsed[i + 1] === "trigger." || parsed[i + 1] === "trigger?") {
				bbctdiss(message.channel);
				return;
			}
		}
		for(var j = 0; j < bbct.length; j++) {
			if(parsed[i] == bbct[j]) {
				bbctdiss(message.channel);
				return;
			}
		}
		if(parsed[i] === "continuumshift" && length >= i + 1) {
			bbctdiss(message.channel);
			return;
		}
		if(parsed[i] === "continuum" && length >= i + 1) {
			if(parsed[i + 1] === "shift" || parsed[i + 1] === "shift!" || parsed[i + 1] === "shift." || parsed[i + 1] === "shift?") {
				bbcsdiss(message.channel);
				return;
			}
		}
		for(var j = 0; j < bbcs.length; j++) {
			if(parsed[i] == bbcs[j]) {
				bbcsdiss(message.channel);
				return;
			}
		}
		if(parsed[i] === "chronophantasma" && length >= i + 1) {
			bbctdiss(message.channel);
			return;
		}
		if(parsed[i] === "chrono" && length >= i + 1) {
			if(parsed[i + 1] === "phantasma" || parsed[i + 1] === "phantasma!" || parsed[i + 1] === "phantasma." || parsed[i + 1] === "phantasma?") {
				bbcpdiss(message.channel);
				return;
			}
		}
		for(var j = 0; j < bbcp.length; j++) {
			if(parsed[i] == bbcp[j]) {
				bbcpdiss(message.channel);
				return;
			}
		}
		if(parsed[i] === "centralfiction" && length >= i + 1) {
			bbctdiss(message.channel);
			return;
		}
		if(parsed[i] === "central" && length >= i + 1) {
			if(parsed[i + 1] === "fiction" || parsed[i + 1] === "fiction!" || parsed[i + 1] === "fiction." || parsed[i + 1] === "fiction?") {
				bbcfdiss(message.channel);
				return;
			}
		}
		for(var j = 0; j < bbcf.length; j++) {
			if(parsed[i] == bbcf[j]) {
				bbcfdiss(message.channel);
				return;
			}
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
			if(parsed[i] == bb[j] && parsed[i + 1] != "calamity" && parsed[i + 1] != "continuum" && parsed[i + 1] != "continuumshift" && parsed[i + 1] != "chrono" && parsed[i + 1] != "chronophantasma" && parsed[i + 1] != "central" && parsed[i + 1] != "centralfiction" && parsed[i + 1] != "cross" && parsed[i + 2] != "tag") {
				bbdiss(message.channel);
				return;
			}
		}
		
        // Arc Published
		for(var j = 0; j < dbfz.length; j++) {
            if(parsed[i] == dbfz[j]) {
                dbdiss(message.channel);
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
        if(parsed[i] === "chaos" && length >= i + 1) {
            if(parsed[i + 1] === "code" || parsed[i + 1] === "code." || parsed[i + 1] === "code!" || parsed[i + 1] === "code?") {
                ccodediss(message.channel);
                return;
            }
        }
        if(parsed[i] === "hokuto" && length >= i + 2) {
            if(parsed[i + 2] === "ken" || parsed[i + 2] === "ken." || parsed[i + 2] === "ken!" || parsed[i + 2] === "ken?") {
                hnkdiss(message.channel);
                return;
            }
        }
        if(parsed[i] === "fist" && length >= i + 3) {
            if(parsed[i + 3] === "north" || parsed[i + 3] === "north." || parsed[i + 3] === "north!" || parsed[i + 3] === "north?") {
                hnkdiss(message.channel);
                return;
            }
        }
        for(var j = 0; j < hnk.length; j++) {
            if(parsed[i] == hnk[j]) {
                hnkdiss(message.channel);
                return;
            }
        }
        if(parsed[i] === "dengeki") {
			dbfcdiss(message.channel);
			return;
        }
        if(parsed[i] === "fighting" && length >= i + 1) {
            if(parsed[i + 1] === "climax" || parsed[i + 1] === "climax." || parsed[i + 1] === "climax!" || parsed[i + 1] === "climax?") {
                dbfcdiss(message.channel);
                return;
            }
        }
        if(parsed[i] === "climax" && length >= i + 1) {
            if(parsed[i + 1] === "ignition" || parsed[i + 1] === "ignition." || parsed[i + 1] === "ignition!" || parsed[i + 1] === "ignition?") {
                dbfcdiss(message.channel);
                return;
            }
        }
        for(var j = 0; j < dbfc.length; j++) {
            if(parsed[i] == dbfc[j]) {
                dbfcdiss(message.channel);
                return;
            }
        }		
		
		// Indie
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
		
		// Other 2D
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
		if(parsed[i] === "power" && length >= i + 1) {
            if(parsed[i + 1] === "rangers" || parsed[i + 1] === "rangers." || parsed[i + 1] === "rangers!" || parsed[i + 1] === "rangers?") {
                rangersdiss(message.channel);
                return;
            }
        }
        if(parsed[i] === "prbftg" || parsed[i] === "bftg" || parsed[i] === "prbftg." || parsed[i] === "bftg." || parsed[i] === "prbftg!" || parsed[i] === "bftg!" || parsed[i] === "prbftg?" || parsed[i] === "bftg?") {
            rangersdiss(message.channel);
            return;
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
		
		// Smash Bros
        if(parsed[i] === "smash" && length >= i + 1) {
            if(parsed[i + 1] === "bros" || parsed[i + 1] === "bros." || parsed[i + 1] === "bros!" || parsed[i + 1] === "bros?") {
				if(length >= i + 2) {
					if(parsed[i + 2] === "melee" || parsed[i + 2] === "melee." || parsed[i + 2] === "melee!" || parsed[i + 2] === "melee?") {
						meleediss(message.channel);
						return;
					}
					if(parsed[i + 2] === "brawl" || parsed[i + 2] === "brawl." || parsed[i + 2] === "brawl!" || parsed[i + 2] === "brawl?") {
						brawldiss(message.channel);
						return;
					}
					if(parsed[i + 2] === "ultimate" || parsed[i + 2] === "ultimate." || parsed[i + 2] === "ultimate!" || parsed[i + 2] === "ultimate?") {
						ultidiss(message.channel);
						return;
					}
					if(parsed[i + 2] === "ult" || parsed[i + 2] === "ult." || parsed[i + 2] === "ult!" || parsed[i + 2] === "ult?") {
						ultidiss(message.channel);
						return;
					}
					if(parsed[i + 2] === "4" || parsed[i + 2] === "4." || parsed[i + 2] === "4!" || parsed[i + 2] === "4?") {
						sm4shdiss(message.channel);
						return;
					}
				}
                smashdiss(message.channel);
                return;
            }
            if(parsed[i + 1] === "melee" || parsed[i + 1] === "melee." || parsed[i + 1] === "melee!" || parsed[i + 1] === "melee?") {
                meleediss(message.channel);
                return;
            }
            if(parsed[i + 1] === "brawl" || parsed[i + 1] === "brawl." || parsed[i + 1] === "brawl!" || parsed[i + 1] === "brawl?") {
                brawldiss(message.channel);
                return;
            }
            if(parsed[i + 1] === "4" || parsed[i + 1] === "4." || parsed[i + 1] === "4!" || parsed[i + 1] === "4?") {
                sm4shdiss(message.channel);
                return;
            }
            if(parsed[i + 1] === "ultimate" || parsed[i + 1] === "ultimate." || parsed[i + 1] === "ultimate!" || parsed[i + 1] === "ultimate?") {
                ultidiss(message.channel);
                return;
            }
            if(parsed[i + 1] === "ult" || parsed[i + 1] === "ult." || parsed[i + 1] === "ult!" || parsed[i + 1] === "ult?") {
                ultidiss(message.channel);
                return;
            }
        }
        if(parsed[i] === "super" && length >= i + 1) {
            if(parsed[i + 1] === "smash" || parsed[i + 1] === "smash." || parsed[i + 1] === "smash!" || parsed[i + 1] === "smash?") {
				if(length >= i + 2) {
					if(parsed[i + 2] === "bros" || parsed[i + 2] === "bros." || parsed[i + 2] === "bros!" || parsed[i + 2] === "bros?") {
						if(length >= i + 3) {
							if(parsed[i + 3] === "melee" || parsed[i + 3] === "melee." || parsed[i + 3] === "melee!" || parsed[i + 3] === "melee?") {
								meleediss(message.channel);
								return;
							}
							if(parsed[i + 3] === "brawl" || parsed[i + 3] === "brawl." || parsed[i + 3] === "brawl!" || parsed[i + 3] === "brawl?") {
								brawldiss(message.channel);
								return;
							}
							if(parsed[i + 3] === "ultimate" || parsed[i + 3] === "ultimate." || parsed[i + 3] === "ultimate!" || parsed[i + 3] === "ultimate?") {
								ultidiss(message.channel);
								return;
							}
							if(parsed[i + 3] === "ult" || parsed[i + 3] === "ult." || parsed[i + 3] === "ult!" || parsed[i + 3] === "ult?") {
								ultidiss(message.channel);
								return;
							}
							if(parsed[i + 3] === "4" || parsed[i + 3] === "4." || parsed[i + 3] === "4!" || parsed[i + 3] === "4?") {
								sm4shdiss(message.channel);
								return;
							}
						}
						smashdiss(message.channel);
						return;
					}
				}
                smashdiss(message.channel);
                return;
            }
        }
        for(var j = 0; j < melee.length; j++) {
            if(parsed[i] == melee[j]) {
                meleediss(message.channel);
                return;
            }
        }
        for(var j = 0; j < brawl.length; j++) {
            if(parsed[i] == brawl[j]) {
                brawldiss(message.channel);
                return;
            }
        }
        for(var j = 0; j < sm4sh.length; j++) {
            if(parsed[i] == sm4sh[j]) {
                sm4shdiss(message.channel);
                return;
            }
        }
        for(var j = 0; j < ulti.length; j++) {
            if(parsed[i] == ulti[j]) {
                ultidiss(message.channel);
                return;
            }
        }
        for(var j = 0; j < sm4sh.length; j++) {
            if(parsed[i] == sm4shR[j]) {
                smashdiss(message.channel);
                return;
            }
        }
		
		// 3D Fighters
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
		
		// Arena Fighters
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
        if(parsed[i] === "storm" && length >= i + 1) {
            if(parsed[i + 1] === "1" || parsed[i + 1] === "1." || parsed[i + 1] === "1!" || parsed[i + 1] === "1?") {
                arenadiss(message.channel);
                return;
            }
            if(parsed[i + 1] === "2" || parsed[i + 1] === "2." || parsed[i + 1] === "2!" || parsed[i + 1] === "2?") {
                arenadiss(message.channel);
                return;
            }
            if(parsed[i + 1] === "3" || parsed[i + 1] === "3." || parsed[i + 1] === "3!" || parsed[i + 1] === "3?") {
                arenadiss(message.channel);
                return;
            }
            if(parsed[i + 1] === "4" || parsed[i + 1] === "4." || parsed[i + 1] === "4!" || parsed[i + 1] === "4?") {
                arenadiss(message.channel);
                return;
            }
            if(parsed[i + 1] === "g" || parsed[i + 1] === "g." || parsed[i + 1] === "g!" || parsed[i + 1] === "g?") {
                arenadiss(message.channel);
                return;
            }
            if(parsed[i + 1] === "r" || parsed[i + 1] === "r." || parsed[i + 1] === "r!" || parsed[i + 1] === "r?") {
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
        if(parsed[i] === "virtual" && length >= i + 1) {
            if(parsed[i + 1] === "on" || parsed[i + 1] === "on." || parsed[i + 1] === "on!" || parsed[i + 1] === "on?") {
                arenadiss(message.channel);
                return;
            }
        }
        if(parsed[i] === "virtual-on" || parsed[i] === "virtual-on." || parsed[i] === "virtual-on!" || parsed[i] === "virtual-on?") {
            arenadiss(message.channel);
            return;
        }
        if(parsed[i] === "gundam") {
			arenadiss(message.channel);
			return;
        }
        if(parsed[i] === "jump" && length >= i + 1) {
            if(parsed[i + 1] === "force" || parsed[i + 1] === "force." || parsed[i + 1] === "force!" || parsed[i + 1] === "force?") {
                arenadiss(message.channel);
                return;
            }
        }
        if(parsed[i] === "kill" && length >= i + 2) {
            if(parsed[i + 2] === "kill" || parsed[i + 2] === "kill." || parsed[i + 2] === "kill!" || parsed[i + 2] === "kill?") {
                arenadiss(message.channel);
                return;
            }
        }
        if(parsed[i] === "klk") {
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
		
		// DMC4
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


function sfdiss(channel) { var rand = getRndInteger(0, sfR.length); channel.send(sfR[rand]); }
function sf1diss(channel) {
	var arrand = getRndInteger(0, 9);
	if(arrand > 5) { var rand = getRndInteger(0, sfR.length); channel.send(sfR[rand]); }
	else { var rand = getRndInteger(0, sf1R.length); channel.send(sf1R[rand]); }
}
function sf2diss(channel) {
	var arrand = getRndInteger(0, 9);
	if(arrand > 5) { var rand = getRndInteger(0, sfR.length); channel.send(sfR[rand]); }
	else { var rand = getRndInteger(0, sf2R.length); channel.send(sf2R[rand]); }
}
function sf3diss(channel) {
	var arrand = getRndInteger(0, 9);
	if(arrand > 5) { var rand = getRndInteger(0, sfR.length); channel.send(sfR[rand]); }
	else { var rand = getRndInteger(0, sf3R.length); channel.send(sf3R[rand]); }
}
function sf4diss(channel) {
	var arrand = getRndInteger(0, 9);
	if(arrand > 5) { var rand = getRndInteger(0, sfR.length); channel.send(sfR[rand]); }
	else { var rand = getRndInteger(0, sf4R.length); channel.send(sf4R[rand]); }
}
function sf5diss(channel) {
	var arrand = getRndInteger(0, 9);
	if(arrand > 5) { var rand = getRndInteger(0, sfR.length); channel.send(sfR[rand]); }
	else { var rand = getRndInteger(0, sf5R.length); channel.send(sf5R[rand]); }
}
function sfxtdiss(channel) {
	var arrand = getRndInteger(0, 9);
	if(arrand > 5) { var rand = getRndInteger(0, sfR.length); channel.send(sfR[rand]); }
	else { var rand = getRndInteger(0, sfxtR.length); channel.send(sfxtR[rand]); }
}

function snkdiss(channel) { var rand = getRndInteger(0, snkR.length); channel.send(snkR[rand]); }
function kofdiss(channel) {
	var arrand = getRndInteger(0, 9);
	if(arrand > 5) { var rand = getRndInteger(0, snkR.length); channel.send(snkR[rand]); }
	else { var rand = getRndInteger(0, kofR.length); channel.send(kofR[rand]); }
}
function kof14diss(channel) {
	var arrand = getRndInteger(0, 9);
	if(arrand > 5) { var rand = getRndInteger(0, snkR.length); channel.send(snkR[rand]); }
	else { var rand = getRndInteger(0, kof14R.length); channel.send(kof14R[rand]); }
}
function samshodiss(channel) {
	var arrand = getRndInteger(0, 9);
	if(arrand > 5) { var rand = getRndInteger(0, snkR.length); channel.send(snkR[rand]); }
	else { var rand = getRndInteger(0, samshoR.length); channel.send(samshoR[rand]); }
}

function mvcdiss(channel) { var rand = getRndInteger(0, mvcR.length); channel.send(mvcR[rand]); }
function mvc3diss(channel) {
	var arrand = getRndInteger(0, 9);
	if(arrand > 5) { var rand = getRndInteger(0, mvcR.length); channel.send(mvcR[rand]); }
	else { var rand = getRndInteger(0, mvc3R.length); channel.send(mvc3R[rand]); }
}
function mvcidiss(channel) {
	var arrand = getRndInteger(0, 9);
	if(arrand > 5) { var rand = getRndInteger(0, mvcR.length); channel.send(mvcR[rand]); }
	else { var rand = getRndInteger(0, mvci.length); channel.send(mvciR[rand]); }
}

function ggdiss(channel) { var rand = getRndInteger(0, ggR.length); channel.send(ggR[rand]); }
function ggxxdiss(channel) {
	var arrand = getRndInteger(0, 9);
	if(arrand > 5) { var rand = getRndInteger(0, ggR.length); channel.send(ggR[rand]); }
	else { var rand = getRndInteger(0, ggxxR.length); channel.send(ggxxR[rand]); }
}
function ggxrddiss(channel) {
	var arrand = getRndInteger(0, 9);
	if(arrand > 5) { var rand = getRndInteger(0, ggR.length); channel.send(ggR[rand]); }
	else { var rand = getRndInteger(0, ggxrdR.length); channel.send(ggxrdR[rand]); }
}

function bbdiss(channel) { var rand = getRndInteger(0, bbR.length); channel.send(bbR[rand]); }
function bbctdiss(channel) {
	var arrand = getRndInteger(0, 9);
	if(arrand > 5) { var rand = getRndInteger(0, bbR.length); channel.send(bbR[rand]); }
	else { var rand = getRndInteger(0, bbctR.length); channel.send(bbctR[rand]); }
}
function bbcsdiss(channel) {
	var arrand = getRndInteger(0, 9);
	if(arrand > 5) { var rand = getRndInteger(0, bbR.length); channel.send(bbR[rand]); }
	else { var rand = getRndInteger(0, bbcsR.length); channel.send(bbcsR[rand]); }
}
function bbcpdiss(channel) {
	var arrand = getRndInteger(0, 9);
	if(arrand > 5) { var rand = getRndInteger(0, bbR.length); channel.send(bbR[rand]); }
	else { var rand = getRndInteger(0, bbcpR.length); channel.send(bbcpR[rand]); }
}
function bbcfdiss(channel) {
	var arrand = getRndInteger(0, 9);
	if(arrand > 5) { var rand = getRndInteger(0, bbR.length); channel.send(bbR[rand]); }
	else { var rand = getRndInteger(0, bbcfR.length); channel.send(bbcfR[rand]); }
}
function bbtagdiss(channel) {
	var arrand = getRndInteger(0, 9);
	if(arrand > 5) { var rand = getRndInteger(0, bbR.length); channel.send(bbR[rand]); }
	else { var rand = getRndInteger(0, bbtagR.length); channel.send(bbtagR[rand]); }
}

function dbdiss(channel) { var rand = getRndInteger(0, dbfzR.length); channel.send(dbfzR[rand]); }
function p4diss(channel) { var rand = getRndInteger(0, personaR.length); channel.send(personaR[rand]); }
function unibdiss(channel) { var rand = getRndInteger(0, unibR.length); channel.send(unibR[rand]); }
function meltydiss(channel) { var rand = getRndInteger(0, meltyR.length); channel.send(meltyR[rand]); }
function arcanadiss(channel) { var rand = getRndInteger(0, arcanaR.length); channel.send(arcanaR[rand]); }
function ccodediss(channel) { var rand = getRndInteger(0, ccodeR.length); channel.send(ccodeR[rand]); }
function hnkdiss(channel) { var rand = getRndInteger(0, hnkR.length); channel.send(hnkR[rand]); }
function dbfcdiss(channel) { var rand = getRndInteger(0, dbfcR.length); channel.send(dbfcR[rand]); }

function tfhdiss(channel) { var rand = getRndInteger(0, tfhR.length); channel.send(tfhR[rand]); }
function sgdiss(channel) { var rand = getRndInteger(0, sgR.length); channel.send(sgR[rand]); }
function roadiss(channel) { var rand = getRndInteger(0, roaR.length); channel.send(roaR[rand]); }
function fstrikediss(channel) { var rand = getRndInteger(0, fstrikeR.length); channel.send(fstrikeR[rand]); }

function mkdiss(channel) { var rand = getRndInteger(0, mkR.length); channel.send(mkR[rand]); }
function injusticediss(channel) { var rand = getRndInteger(0, injusticeR.length); channel.send(injusticeR[rand]); }
function kidiss(channel) { var rand = getRndInteger(0, kiR.length); channel.send(kiR[rand]); }
function rangersdiss(channel) { var rand = getRndInteger(0, rangersR.length); channel.send(rangersR[rand]); }
function jojodiss(channel) { var rand = getRndInteger(0, jojoR.length); channel.send(jojoR[rand]); }

function smashdiss(channel) { var rand = getRndInteger(0, smashR.length); channel.send(smashR[rand]); }
function meleediss(channel) {
	var arrand = getRndInteger(0, 9);
	if(arrand > 5) { var rand = getRndInteger(0, smashR.length); channel.send(smashR[rand]); }
	else { var rand = getRndInteger(0, meleeR.length); channel.send(meleeR[rand]); }
}
function brawldiss(channel) {
	var arrand = getRndInteger(0, 9);
	if(arrand > 5) { var rand = getRndInteger(0, smashR.length); channel.send(smashR[rand]); }
	else { var rand = getRndInteger(0, brawlR.length); channel.send(brawlR[rand]); }
}
function sm4shdiss(channel) {
	var arrand = getRndInteger(0, 9);
	if(arrand > 5) { var rand = getRndInteger(0, smashR.length); channel.send(smashR[rand]); }
	else { var rand = getRndInteger(0, sm4shR.length); channel.send(sm4shR[rand]); }
}
function ultidiss(channel) {
	var arrand = getRndInteger(0, 9);
	if(arrand > 5) { var rand = getRndInteger(0, smashR.length); channel.send(smashR[rand]); }
	else { var rand = getRndInteger(0, ultiR.length); channel.send(ultiR[rand]); }
}

function tekkendiss(channel) { var rand = getRndInteger(0, tekkenR.length); channel.send(tekkenR[rand]); }
function doadiss(channel) { var rand = getRndInteger(0, doaR.length); channel.send(doaR[rand]); }
function scaliburdiss(channel) { var rand = getRndInteger(0, scaliburR.length); channel.send(scaliburR[rand]); }

function pokkendiss(channel) {
    var rand = getRndInteger(0, pokkenR.length);
    channel.send(pokkenR[rand]);
}
function arenadiss(channel) {
    var rand = getRndInteger(0, arenaR.length);
    channel.send(arenaR[rand]);
}

function dmc4diss(channel) { var rand = getRndInteger(0, dmc4R.length); channel.send(dmc4R[rand]); }

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function resetBot(channel) {
    client.destroy();
}
