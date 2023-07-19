let handler = async (m, { conn, args, text, usedPrefix, command }) => {
	let tee = `✳️ Enter a short text\n\n📌 Example  : *${usedPrefix + command}* GURU`
	let too = `✳️ Separate the text with a *+* \n\n📌 Example : \n*${usedPrefix + command}* GURU *+* BOT`
	
	m.react(rwait);
	
	let type = command.toLowerCase();
	
	switch (type) {
	  case 'pikachu':
		if (!text) throw tee;
		let chut = `https://api.popcat.xyz/pikachu?text=${encodeURIComponent(text)}&apikey=Y`;
		conn.sendFile(m.chat, chut, 'logo.png', `✅ Result`, m);
		m.react(done);
		break;
		
	  case 'darke': 
		if (!text) throw too;
		if (!text.includes('+')) throw too;
		let [a, b] = text.split('+');
		let loda = `https://api.popcat.xyz/drake?text1=${encodeURIComponent(a.trim())}&text2=${encodeURIComponent(b.trim())}&apikey=Y`;
		conn.sendFile(m.chat, loda, 'logo.png', `✅ Result`, m);
		
		m.react(done);
		break;
		
	  case 'unforgivable':
		if (!text) throw tee;
		let cp = `https://api.popcat.xyz/unforgivable?text=${encodeURIComponent(text.trim())}&apikey=Y`;
		conn.sendFile(m.chat, cp, 'logo.png', `✅ Result`, m);
		m.react(done);
		break;
		
	  case 'sadcat': 
		if (!text) throw tee;
		let gandu = `https://api.popcat.xyz/sadcat?text=${encodeURIComponent(text)}&apikey=Y`;
		conn.sendFile(m.chat, gandu, 'logo.png', `✅ Result`, m);
		m.react(done);
		break;
		case 'gfx5':
	if (!text) throw tee 
	let chu = global.API('fgmods', '/api/photooxy/naruto', { text }, 'apikey')
	conn.sendFile(m.chat, chu, 'logo.png', `✅ Result`, m)
	m.react(done)
	break
	case 'gfx6': 
	if (!text) throw too
	if (!text.includes('+')) throw too  
	let [c, d] = text.split`+`   
	let lo = global.API('fgmods', '/api/photooxy/pubg', { text: c, text2: d}, 'apikey')
	conn.sendFile(m.chat, lo, 'logo.png', `✅ Result`, m)
	m.react(done)
	break 
	
	
	break 
	case 'alert': 
	if (!text) throw tee;
	let rand = `https://api.popcat.xyz/alert?text=${encodeURIComponent(text)}`;
	conn.sendFile(m.chat, rand, 'logo.png', `✅ Result`, m);
	m.react(done);
	break;
	case 'gfx9': 
	if (!text) throw tee;
	let randi = `https://api.lolhuman.xyz/api/ephoto1/avatarlolnew?apikey=${lolkeysapi}&text=${encodeURIComponent(text)}`;
	conn.sendFile(m.chat, randi, 'logo.png', `✅ Result`, m);
	m.react(done);
	break;
	case 'gfx10': 
	if (!text) throw tee;
	let randu = `https://api.lolhuman.xyz/api/ephoto1/avatardota?apikey=${lolkeysapi}&text=${encodeURIComponent(text)}`;
	conn.sendFile(m.chat, randu, 'logo.png', `✅ Result`, m);
	m.react(done);
	break;
	case 'pooh': 
	if (!text) throw too;
	if (!text.includes('+')) throw too;
	let [g, h] = text.split('+');
	let od = `https://api.popcat.xyz/pooh?text1=${encodeURIComponent(g.trim())}&text2=${encodeURIComponent(h.trim())}`;
	conn.sendFile(m.chat, od, 'logo.png', `✅ Result`, m);
	
	m.react(done);
	break 
	case 'gfx12': 
	if (!text) throw tee;
	let rr = `https://api.lolhuman.xyz/api/ephoto1/freefire?apikey=${lolkeysapi}&text=${encodeURIComponent(text)}`;
	conn.sendFile(m.chat, rr, 'logo.png', `✅ Result`, m);
	m.react(done);
	break;

	  default:
	} 
  };
  
  handler.help = ['pikachu', 'darke', 'unforgivable', 'sadcat', 'gfx5', 'gfx6', 'gfx7', 'alert', 'gfx9', 'gfx10', 'pooh', 'gfx12'];
  handler.tags = ['vip'];
  handler.command = /^(pikachu|darke|unforgivable|sadcat|gfx5|gfx6|gfx7|alert|gfx9|gfx10|pooh|gfx12)$/i;
  handler.diamond = false;
  
  export default handler;
