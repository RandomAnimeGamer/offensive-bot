const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
const r = require('./disses/_require.js');

client.once('ready', () => {
    console.log('Ready!');
});

client.login(process.env.BOT_TOKEN);

const serverid = '633405988078223380';
const acceptable_channels = ['862783022688370709', '633405988078223383', '633407384131207188'];
const role_channel = "633407914207477760";
const role_message = "864751821176176640";
const announce_emoji = 'casual_stick';
const suggestions_emoji = 'shizuku_think';
const announce_role = "862541364507443231";
const suggest_role = "862540403901988875";

client.on('messageReactionAdd', async (reaction, user) => {
    if (reaction.partial) {
        try { await reaction.fetch(); } catch (error) { console.error('Something went wrong when fetching the message: ', error); return; }
    }
    if (client.guilds.partial) {
        try { await client.guilds.fetch(); } catch (error) { console.error('Something went wrong when fetching the guilds: ', error); return; }
    }

    if (reaction.message.channel.id == role_channel && reaction.message.id == role_message) {
        let guild = client.guilds.cache.filter((guild) => { return guild.id == serverid });
        let guild_members = guild.get(serverid).members;
        let guild_user = guild_members.cache.get(user.id);

        if (guild_user !== undefined) {
        switch (reaction._emoji.name) {
            case announce_emoji:
                guild_user.roles.add(announce_role);
                break;
            case suggestions_emoji:
                guild_user.roles.add(suggest_role);
                break;
            }
        }
    }
});

client.on('messageReactionRemove', async (reaction, user) => {
    if (reaction.partial) {
        try { await reaction.fetch(); } catch (error) { console.error('Something went wrong when fetching the message: ', error); return; }
    }
    if (client.guilds.partial) {
        try { await client.guilds.fetch(); } catch (error) { console.error('Something went wrong when fetching the guilds: ', error); return; }
    }

    if (reaction.message.channel.id == role_channel && reaction.message.id == role_message) {
        let guild = client.guilds.cache.filter((guild) => { return guild.id == serverid });
        let guild_members = guild.get(serverid).members;
        let guild_user = guild_members.cache.get(user.id);

        switch (reaction._emoji.name) {
        case announce_emoji:
            guild_user.roles.remove(announce_role);
            break;
        case suggestions_emoji:
            guild_user.roles.remove(suggest_role);
            break;
        }
    }
});

client.on('message', message => {
    if (message.author.id == 516344023628120206) return;
    if (!acceptable_channels.includes(message.channel.id)) return;

    let msg = message.content.toLowerCase();

    let parsed = msg.split(" ");
    let length = parsed.length;
    for(let i = 0; i < length; i++) {
        // Street Fighter
        if (r.sf1.includes(parsed[i])) { getcombdiss(message.channel, r.sfR, r.sf1R); return; }
        if (r.sf2.includes(parsed[i])) { getcombdiss(message.channel, r.sfR, r.sf2R); return; }
        if (r.sf3.includes(parsed[i])) { getcombdiss(message.channel, r.sfR, r.sf3R); return; }
        if (r.sf4.includes(parsed[i])) { getcombdiss(message.channel, r.sfR, r.sf4R); return; }
        if (r.sf5.includes(parsed[i])) { getcombdiss(message.channel, r.sfR, r.sf5R); return; }
        if (r.sfxt.includes(parsed[i])) { getcombdiss(message.channel, r.sfR, r.sfxtR); return; }
        if (r.sf.includes(parsed[i])) { getdiss(message.channel, r.sfR); return; }

        let sfparse1 = parsemanually(i, parsed, ['street'], ['fighter'], ['1', '2', '3', '4', '5', 'x']);
        let sfparse2 = parsemanually(i, parsed, ['street'], ['fighter']);
        let ret = false;
        switch (sfparse1) {
            case '1': case '1.': case '1!': case '1?': getcombdiss(message.channel, r.sfR, r.sf1R); ret = true; break;
            case '2': case '2.': case '2!': case '2?': getcombdiss(message.channel, r.sfR, r.sf2R); ret = true; break;
            case '3': case '3.': case '3!': case '3?': getcombdiss(message.channel, r.sfR, r.sf3R); ret = true; break;
            case '4': case '4.': case '4!': case '4?': getcombdiss(message.channel, r.sfR, r.sf4R); ret = true; break;
            case '5': case '5.': case '5!': case '5?': getcombdiss(message.channel, r.sfR, r.sf5R); ret = true; break;
            case 'x': case 'x.': case 'x!': case 'x?': getcombdiss(message.channel, r.sfR, r.sfxtR); ret = true; break;
        }
        if (ret) return;
        ret = false;
        if (sfparse2 === 'fighter' || sfparse2 === 'fighter.' || sfparse2 === 'fighter!' || sfparse2 === 'fighter?') {
            getdiss(message.channel, r.sfR);
            return;
        }
		
        // SNK
        if (r.kof.includes(parsed[i])) { getcombdiss(message.channel, r.snkR, r.kofR); return; }
        if (r.kof14.includes(parsed[i])) { getcombdiss(message.channel, r.snkR, r.kof14R); return; }
        if (r.samsho.includes(parsed[i])) { getcombdiss(message.channel, r.snkR, r.samshoR); return; }
        if (r.snk.includes(parsed[i])) { getdiss(message.channel, r.snkR); return; }

        let kofparse1 = parsemanually(i, parsed, ['king'], ['of'], ['fighters'], ['14']);
        let kofparse2 = parsemanually(i, parsed, ['king'], ['of'], ['fighters']);
        let samshoparse = parsemanually(i, parsed, ['samurai'], ['shodown', 'showdown']);
        if (kofparse1 === '14' || kofparse1 === '14.' || kofparse1 === '14!' || kofparse1 === '14?') {
            getcombdiss(message.channel, r.snkR, r.kof14R);
            return;
        }
        if (kofparse2 === 'fighters' || kofparse2 === 'fighters.' || kofparse2 === 'fighters!' || kofparse2 === 'fighters?') {
            getcombdiss(message.channel, r.snkR, r.kofR);
            return;
        }
        if (samshoparse === 'fighters' || samshoparse === 'fighters.' || samshoparse === 'fighters!' || samshoparse === 'fighters?') {
            getcombdiss(message.channel, r.snkR, r.kofR);
            return;
        }
        switch (samshoparse) {
            case 'shodown': case 'shodown.': case 'shodown!': case 'shodown?': getcombdiss(message.channel, r.snkR, r.samshoR); ret = true; break;
            case 'showdown': case 'showdown.': case 'showdown!': case 'showdown?': getcombdiss(message.channel, r.snkR, r.samshoR); ret = true; break;
        }
        if (ret) return;
        ret = false;

		// Marvel VS Capcom
        if (r.mvc3.includes(parsed[i])) { getcombdiss(message.channel, r.mvcR, r.mvc3R); return; }
        if (r.mvci.includes(parsed[i])) { getcombdiss(message.channel, r.mvcR, r.mvciR); return; }
        if (r.mvc.includes(parsed[i])) { getdiss(message.channel, r.mvcR); return; }
		
		// Guilty Gear
        if (r.ggxx.includes(parsed[i])) { getcombdiss(message.channel, r.ggR, r.ggxxR); return; }
        if (r.ggxrd.includes(parsed[i])) { getcombdiss(message.channel, r.ggR, r.ggxrdR); return; }
        if (r.gg.includes(parsed[i])) { getdiss(message.channel, r.ggR); return; }
        let ggparse = parsemanually(i, parsed, ['guilty'], ['gear']);
        if (ggparse === 'gear' || ggparse === 'gear.' || ggparse === 'gear!' || ggparse === 'gear?') {
            getdiss(message.channel, r.ggR);
            return;
        }
        
		// BlazBlue
        if (r.bbct.includes(parsed[i])) { getcombdiss(message.channel, r.bbR, r.bbctR); return; }
        if (r.bbcs.includes(parsed[i])) { getcombdiss(message.channel, r.bbR, r.bbcsR); return; }
        if (r.bbcp.includes(parsed[i])) { getcombdiss(message.channel, r.bbR, r.bbcpR); return; }
        if (r.bbcf.includes(parsed[i])) { getcombdiss(message.channel, r.bbR, r.bbcfR); return; }
        if (r.bbtag.includes(parsed[i])) { getcombdiss(message.channel, r.bbR, r.bbtagR); return; }
        if (r.bb.includes(parsed[i])) { getdiss(message.channel, r.bbR); return; }
        if (parsed[i] === "calamitytrigger") { getcombdiss(message.channel, r.bbR, r.bbctR); return; }
        if (parsed[i] === "continuumshift") { getcombdiss(message.channel, r.bbR, r.bbcsR); return; }
        if (parsed[i] === "chronophantasma") { getcombdiss(message.channel, r.bbR, r.bbcpR); return; }
        if (parsed[i] === "centralfiction") { getcombdiss(message.channel, r.bbR, r.bbcfR); return; }

        let bbctparse = parsemanually(i, parsed, ['calamity'], ['trigger']);
        if (bbctparse === 'trigger' || bbctparse === 'trigger.' || bbctparse === 'trigger!' || bbctparse === 'trigger?') {
            getcombdiss(message.channel, r.bbR, r.bbctR);
            return;
        }
        let bbcsparse = parsemanually(i, parsed, ['continuum'], ['shift']);
        if (bbcsparse === 'shift' || bbcsparse === 'shift.' || bbcsparse === 'shift!' || bbcsparse === 'shift?') {
            getcombdiss(message.channel, r.bbR, r.bbcsR);
            return;
        }
        let bbcpparse = parsemanually(i, parsed, ['chrono'], ['phantasma']);
        if (bbcpparse === 'phantasma' || bbcpparse === 'phantasma.' || bbcpparse === 'phantasma!' || bbcpparse === 'phantasma?') {
            getcombdiss(message.channel, r.bbR, r.bbcpR);
            return;
        }
        let bbcfparse = parsemanually(i, parsed, ['central'], ['fiction']);
        if (bbcfparse === 'fiction' || bbcfparse === 'fiction.' || bbcfparse === 'fiction!' || bbcfparse === 'fiction?') {
            getcombdiss(message.channel, r.bbR, r.bbcfR);
            return;
        }
        let bbtagparse = parsemanually(i, parsed, ['cross'], ['tag']);
        if (bbtagparse === 'tag' || bbtagparse === 'tag.' || bbtagparse === 'tag!' || bbtagparse === 'tag?') {
            getcombdiss(message.channel, r.bbR, r.bbtagR);
            return;
        }
		
        // Transitional Fighters
        if (r.dbfz.includes(parsed[i])) { getdiss(message.channel, r.dbfzR); return; }
        if (r.persona.includes(parsed[i])) { getdiss(message.channel, r.r.personaR); return; }
        if (r.unib.includes(parsed[i])) { getdiss(message.channel, r.unibR); return; }
        if (r.melty.includes(parsed[i])) { getdiss(message.channel, r.meltyR); return; }
        if (r.arcana.includes(parsed[i])) { getdiss(message.channel, r.arcanaR); return; }
        if (r.hnk.includes(parsed[i])) { getdiss(message.channel, r.hnkR); return; }
        if (r.dbfc.includes(parsed[i])) { getdiss(message.channel, r.dbfcR); return; }
        if (r.tfh.includes(parsed[i])) { getdiss(message.channel, r.tfhR); return; }
        if (r.sg.includes(parsed[i])) { getdiss(message.channel, r.sgR); return; }

        if (parsed[i] === "dengeki") { getdiss(message.channel, r.dbfcR); return; }

        let p4aparse1 = parsemanually(i, parsed, ['persona'], ['4'], ['arena', 'ultra', 'ultimax']);
        let p4aparse2 = parsemanually(i, parsed, ['persona'], ['4'], ['arena'], ['ultra', 'ultimax']);
        let p4aparse3 = parsemanually(i, parsed, ['persona'], ['arena', 'ultra', 'ultimax']);
        switch (p4aparse1) {
            case 'arena': case 'arena.': case 'arena!': case 'arena?': getdiss(message.channel, r.personaR); ret = true; break;
            case 'ultra': case 'ultra.': case 'ultra!': case 'ultra?': getdiss(message.channel, r.personaR); ret = true; break;
            case 'ultimax': case 'ultimax.': case 'ultimax!': case 'ultimax?': getdiss(message.channel, r.personaR); ret = true; break;
        }
        if (ret) return;
        ret = false;
        switch (p4aparse2) {
            case 'ultra': case 'ultra.': case 'ultra!': case 'ultra?': getdiss(message.channel, r.personaR); ret = true; break;
            case 'ultimax': case 'ultimax.': case 'ultimax!': case 'ultimax?': getdiss(message.channel, r.personaR); ret = true; break;
        }
        if (ret) return;
        ret = false;
        switch (p4aparse3) {
            case 'arena': case 'arena.': case 'arena!': case 'arena?': getdiss(message.channel, r.personaR); ret = true; break;
            case 'ultra': case 'ultra.': case 'ultra!': case 'ultra?': getdiss(message.channel, r.personaR); ret = true; break;
            case 'ultimax': case 'ultimax.': case 'ultimax!': case 'ultimax?': getdiss(message.channel, r.personaR); ret = true; break;
        }
        if (ret) return;
        ret = false;

        let unibparse = parsemanually(i, parsed, ['under'], ['night']);
        if (unibparse === 'night' || unibparse === 'night.' || unibparse === 'night!' || unibparse === 'night?') {
            getdiss(message.channel, r.unibR);
            return;
        }
        let meltyparse = parsemanually(i, parsed, ['melty'], ['blood']);
        if (meltyparse === 'blood' || meltyparse === 'blood.' || meltyparse === 'blood!' || meltyparse === 'blood?') {
            getdiss(message.channel, r.meltyR);
            return;
        }
        let arcanaparse = parsemanually(i, parsed, ['arcana'], ['heart']);
        if (arcanaparse === 'heart' || arcanaparse === 'heart.' || arcanaparse === 'heart!' || arcanaparse === 'heart?') {
            getdiss(message.channel, r.meltyR);
            return;
        }
        let ccodeparse = parsemanually(i, parsed, ['chaos'], ['code']);
        if (ccodeparse === 'code' || ccodeparse === 'code.' || ccodeparse === 'code!' || ccodeparse === 'code?') {
            getdiss(message.channel, r.ccodeR);
            return;
        }
        let hnkparse1 = parsemanually(i, parsed, ['hokuto'], ['no'], ['ken']);
        if (hnkparse1 === 'ken' || hnkparse1 === 'ken.' || hnkparse1 === 'ken!' || hnkparse1 === 'ken?') {
            getdiss(message.channel, r.hnkR);
            return;
        }
        let hnkparse2 = parsemanually(i, parsed, ['first'], ['of'], ['the'], ['north'], ['star']);
        if (hnkparse2 === 'star' || hnkparse2 === 'star.' || hnkparse2 === 'star!' || hnkparse2 === 'star?') {
            getdiss(message.channel, r.hnkR);
            return;
        }
        let dbfciparse = parsemanually(i, parsed, ['climax'], ['ignition']);
        if (dbfciparse === 'ignition' || dbfciparse === 'ignition.' || dbfciparse === 'ignition!' || dbfciparse === 'ignition?') {
            getdiss(message.channel, r.dbfcR);
            return;
        }
        let dbfcparse = parsemanually(i, parsed, ['fighting'], ['climax']);
        if (dbfcparse === 'climax' || dbfcparse === 'climax.' || dbfcparse === 'climax!' || dbfcparse === 'climax?') {
            getdiss(message.channel, r.dbfcR);
            return;
        }
        let tfhparse = parsemanually(i, parsed, ['thems', 'them', "them's"], ['fighting', 'fightin', "fightin'"], ['herds']);
        if (tfhparse === 'herds' || tfhparse === 'herds.' || tfhparse === 'herds!' || tfhparse === 'herds?') {
            getdiss(message.channel, r.tfhR);
            return;
        }
        let sgparse = parsemanually(i, parsed, ['skull'], ['girls']);
        if (sgparse === 'girls' || sgparse === 'girls.' || sgparse === 'girls!' || sgparse === 'girls?') {
            getdiss(message.channel, r.sgR);
            return;
        }
        let prparse = parsemanually(i, parsed, ['power'], ['rangers']);
        if (prparse === 'rangers' || prparse === 'rangers.' || prparse === 'rangers!' || prparse === 'rangers?') {
            getdiss(message.channel, r.rangersR);
            return;
        }
        if (parsed[i] === "prbftg" || parsed[i] === "bftg" || parsed[i] === "prbftg." || parsed[i] === "bftg." || parsed[i] === "prbftg!" || parsed[i] === "bftg!" || parsed[i] === "prbftg?" || parsed[i] === "bftg?") {
            getdiss(message.channel, r.rangersR);
            return;
        }

        // 2D Traditional Fighters
        if (r.mk.includes(parsed[i])) { getdiss(message.channel, r.mkR); return; }
        if (r.injustice.includes(parsed[i])) { getdiss(message.channel, r.injusticeR); return; }
        if (r.ki.includes(parsed[i])) { getdiss(message.channel, r.kiR); return; }
        if (r.jojo.includes(parsed[i])) { getdiss(message.channel, r.jojoR); return; }

        let fstrikeparse = parsemanually(i, parsed, ['fantasy'], ['strike']);
        if (fstrikeparse === 'strike' || fstrikeparse === 'strike.' || fstrikeparse === 'strike!' || fstrikeparse === 'strike?') {
            getdiss(message.channel, r.fstrikeR);
            return;
        }
        let mkparse = parsemanually(i, parsed, ['mortal'], ['kombat']);
        if (mkparse === 'kombat' || mkparse === 'kombat.' || mkparse === 'kombat!' || mkparse === 'kombat?') {
            getdiss(message.channel, r.mkR);
            return;
        }
        let kiparse = parsemanually(i, parsed, ['killer'], ['instinct']);
        if (kiparse === 'instinct' || kiparse === 'instinct.' || kiparse === 'instinct!' || kiparse === 'instinct?') {
            getdiss(message.channel, r.kiR);
            return;
        }
        if(parsed[i] === "all" && length >= i + 2) {
            if (parsed[i + 1] === "star" && parsed[i + 2] === "battle") { getdiss(message.channel, r.jojoR); return; }
        }
        if (parsed[i] === "eyes" && length >= i + 2) {
            if (parsed[i + 1] === "of" && parsed[i + 2] === "heaven") { getdiss(message.channel, r.jojoR); return; }
        }
		
        // 2D Radical Fighters
        if (r.roa.includes(parsed[i])) { getdiss(message.channel, r.roaR); return; }
        if (r.melee.includes(parsed[i])) { getdiss(message.channel, r.meleeR); return; }
        if (r.brawl.includes(parsed[i])) { getdiss(message.channel, r.brawlR); return; }
        if (r.sm4sh.includes(parsed[i])) { getdiss(message.channel, r.sm4shR); return; }
        if (r.ulti.includes(parsed[i])) { getdiss(message.channel, r.ultiR); return; }

        let roaparse = parsemanually(i, parsed, ['rivals'], ['of'], ['aether']);
        if (roaparse === 'aether' || roaparse === 'aether.' || roaparse === 'aether!' || roaparse === 'aether?') {
            getdiss(message.channel, r.roaR);
            return;
        }
        let smashparse1 = parsemanually(i, parsed, ['smash'], ['bros']);
        let smashparse2 = parsemanually(i, parsed, ['smash'], ['bros'], ['melee', 'brawl', 'ultimate', 'ult', '4']);
        let smashparse3 = parsemanually(i, parsed, ['smash'], ['melee', 'brawl', 'ultimate', 'ult', '4']);
        if (smashparse1 === 'bros' || smashparse1 === 'bros.' || smashparse1 === 'bros!' || smashparse1 === 'bros?') {
            getdiss(message.channel, r.smashR);
            return;
        }
        switch (smashparse2) {
            case 'melee': case 'melee.': case 'melee!': case 'melee?': getdiss(message.channel, r.meleeR); ret = true; break;
            case 'brawl': case 'brawl.': case 'brawl!': case 'brawl?': getdiss(message.channel, r.brawlR); ret = true; break;
            case 'ultimate': case 'ultimate.': case 'ultimate!': case 'ultimate?': getdiss(message.channel, r.ultiR); ret = true; break;
            case 'ult': case 'ult.': case 'ult!': case 'ult?': getdiss(message.channel, r.ultiR); ret = true; break;
            case '4': case '4.': case '4!': case '4?': getdiss(message.channel, r.sm4shR); ret = true; break;
        }
        if (ret) return;
        ret = false;
        switch (smashparse3) {
            case 'melee': case 'melee.': case 'melee!': case 'melee?': getdiss(message.channel, r.meleeR); ret = true; break;
            case 'brawl': case 'brawl.': case 'brawl!': case 'brawl?': getdiss(message.channel, r.brawlR); ret = true; break;
            case 'ultimate': case 'ultimate.': case 'ultimate!': case 'ultimate?': getdiss(message.channel, r.ultiR); ret = true; break;
            case 'ult': case 'ult.': case 'ult!': case 'ult?': getdiss(message.channel, r.ultiR); ret = true; break;
            case '4': case '4.': case '4!': case '4?': getdiss(message.channel, r.sm4shR); ret = true; break;
        }
        if (ret) return;
        ret = false;

		// 3D  Fighters
        if (r.tekken.includes(parsed[i])) { getdiss(message.channel, r.tekkenR); return; }
        if (r.doa.includes(parsed[i])) { getdiss(message.channel, r.doaR); return; }
        if (r.scalibur.includes(parsed[i])) { getdiss(message.channel, r.scaliburR); return; }

        if (parsed[i] === "tekken") { getdiss(message.channel, r.tekkenR); return; }
        let doaparse = parsemanually(i, parsed, ['dead'], ['or'], ['alive']);
        if (doaparse === 'alive' || doaparse === 'alive.' || doaparse === 'alive!' || doaparse === 'alive?') {
            getdiss(message.channel, r.doaR);
            return;
        }
        let scaliburparse = parsemanually(i, parsed, ['soul'], ['calibur']);
        if (scaliburparse === 'calibur' || scaliburparse === 'calibur.' || scaliburparse === 'calibur!' || scaliburparse === 'calibur?') {
            getdiss(message.channel, r.scaliburR);
            return;
        }

        // 3D Radical Fighters
        if (parseiterate(i, parsed, 'naruto', 'storm', 4)) {
            getdiss(message.channel, r.arenaR);
        }
        let stormparse = parsemanually(i, parsed, ['storm'], ['1','2','3','4','g','r']);
        switch (stormparse) {
            case '1': case '1.': case '1!': case '1?': getdiss(message.channel, r.arenaR); ret = true; break;
            case '2': case '2.': case '2!': case '2?': getdiss(message.channel, r.arenaR); ret = true; break;
            case '3': case '3.': case '3!': case '3?': getdiss(message.channel, r.arenaR); ret = true; break;
            case '4': case '4.': case '4!': case '4?': getdiss(message.channel, r.arenaR); ret = true; break;
            case 'g': case 'g.': case 'g!': case 'g?': getdiss(message.channel, r.arenaR); ret = true; break;
            case 'r': case 'r.': case 'r!': case 'r?': getdiss(message.channel, r.arenaR); ret = true; break;
        }
        if (ret) return;
        ret = false;
        let opbbparse = parsemanually(i, parsed, ['burning'], ['blood']);
        if (opbbparse === 'blood' || opbbparse === 'blood.' || opbbparse === 'blood!' || opbbparse === 'blood?') {
            getdiss(message.channel, r.arenaR);
            return;
        }
        if(parsed[i] === "seiya" && length >= i + 1) {
            if(parsed[i + 1] === "soldiers" || parsed[i + 1] === "soldiers'") { getdiss(message.channel, r.arenaR); return; }
        }
        let mhaparse = parsemanually(i, parsed, ['ones', "one's", 'one'], ['justice']);
        if (mhaparse === 'justice' || mhaparse === 'justice.' || mhaparse === 'justice!' || mhaparse === 'justice?') {
            getdiss(message.channel, r.arenaR);
            return;
        }
        let zbparse = parsemanually(i, parsed, ['mamodo'], ['battles', 'fury']);
        switch (zbparse) {
            case 'battles': case 'battles.': case 'battles!': case 'battles?': getdiss(message.channel, r.arenaR); ret = true; break;
            case 'fury': case 'fury.': case 'fury!': case 'fury?': getdiss(message.channel, r.arenaR); ret = true; break;
        }
        if (ret) return;
        ret = false;
        if(parsed[i] === "kobuto" || parsed[i] === "budokai" || parsed[i] === "tenkaichi" || parsed[i] === "xenoverse" || parsed[i] === "xv" || parsed[i] === "dbxv" || 
           parsed[i] === "ytb" || parsed[i] === "j-stars" || parsed[i] === "jstars" || parsed[i] === "estival" || parsed[i] === "shinovi") {
            getdiss(message.channel, r.arenaR);
            return;
        }
        let virtualparse = parsemanually(i, parsed, ['virtual'], ['on']);
        if (virtualparse === 'on' || virtualparse === 'on.' || virtualparse === 'on!' || virtualparse === 'on?') {
            getdiss(message.channel, r.arenaR);
            return;
        }
        if(parsed[i] === "virtual-on" || parsed[i] === "virtual-on." || parsed[i] === "virtual-on!" || parsed[i] === "virtual-on?") {
            getdiss(message.channel, r.arenaR);
            return;
        }
        if(parsed[i] === "gundam") {
            getdiss(message.channel, r.arenaR);
			return;
        }
        let jforceparse = parsemanually(i, parsed, ['jump'], ['force']);
        if (jforceparse === 'force' || jforceparse === 'force.' || jforceparse === 'force!' || jforceparse === 'force?') {
            getdiss(message.channel, r.arenaR);
            return;
        }
        let klkparse = parsemanually(i, parsed, ['kill'], ['la'], ['kill']);
        if (klkparse === 'kill' || klkparse === 'kill.' || klkparse === 'kill!' || klkparse === 'kill?') {
            getdiss(message.channel, r.arenaR);
            return;
        }
        if (parsed[i] === "klk") { getdiss(message.channel, r.arenaR); return; }
        if (r.arena.includes(parsed[i])) { getdiss(message.channel, r.arenaR); return; }
        if (r.pokken.includes(parsed[i])) { getdiss(message.channel, r.pokkenR); return; }
		
        // Joke
        if (r.dmc4.includes(parsed[i])) { getdiss(message.channel, r.dmc4R); return; }
        let dmc4parse = parsemanually(i, parsed, ['devil'], ['may'], ['cry'], ['4', 'four']);
        switch (dmc4parse) {
            case '4': case '4.': case '4!': case '4?': getdiss(message.channel, r.dmc4R); ret = true; break;
            case 'four': case 'four.': case 'four!': case 'four?': getdiss(message.channel, r.dmc4R); ret = true; break;
        }
        if (ret) return;
        ret = false;
    }
});

function getdiss(channel, response) { let rand = getRndInteger(0, response.length); channel.send(response[rand]); }
function getcombdiss(channel, response1, response2) {
    let arrand = getRndInteger(0, 9);
    if (arrand > 5) { let rand = getRndInteger(0, response1.length); channel.send(response1[rand]); }
    else { let rand = getRndInteger(0, response2.length); channel.send(response2[rand]); }
}
function parsemanually(i, msg, depth1, depth2, depth3, depth4, depth5) {
    let depth = 5;
    if (depth5 === undefined) depth--;
    if (depth4 === undefined) depth--;
    if (depth3 === undefined) depth--;
    if (depth2 === undefined) depth--;
    if (depth1 === undefined) return '';

    if (msg.length < depth) return '';

    if (depth === 1) return (depth1.includes(msg[i])) ? msg[i] : '';
    else if (depth1.includes(msg[i])) {
        if (depth === 2) return parsehas(depth2, msg, i + 1) ? msg[i + 1] : '';
        else if (depth2.includes(msg[i + 1])) {
            if (depth === 3) return parsehas(depth3, msg, i + 2) ? msg[i + 2] : '';
            else if (depth3.includes(msg[i + 2])) {
                if (depth === 4) return parsehas(depth4, msg, i + 3) ? msg[i + 3] : '';
                else if (depth4.includes(msg[i + 3])) {
                    return parsehas(depth5, msg, i + 4) ? msg[i + 4] : '';
                }
            }
        }
    }
    return '';
}
function parseiterate(currentI, msg, depth1, depth2, iterations) {
    if (msg.length < 2) return false;
    if (msg[currentI] === depth1) {
        for (let i = 1; i < iterations; i++) {
            if (msg.length < currentI + i) return false;
            if (msg[currentI + i] === depth2) return true;
        }
    }
    return false;
}
function parsehas(arr, msg, i) {
    return (arr.includes(msg[i]) || arr.includes(msg[i] + '.') || arr.includes(msg[i] + '!') || arr.includes(msg[i] + '?'));
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
function resetBot(channel) {
    client.destroy();
}
