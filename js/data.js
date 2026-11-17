// Données de démonstration. Aucun tarif n’est inventé : renseigne tarifKg et whatsapp quand tu les as.
const WP={tarifKg:null,whatsapp:'', // ex. whatsapp:'221770000000'
user:{prenom:'Awa',tel:'+221 77 000 00 00',zone:'Parcelles Assainies'},col:{prenom:'Moussa',zone:'Parcelles Assainies'},
pesee:{total:6.4,ok:5.8,ko:0.6,motif:'Bouteilles avec un reste de liquide'},
hist:[{d:'12 nov.',kg:4.2},{d:'28 oct.',kg:3.6},{d:'14 oct.',kg:5.1}],
quartiers:['Parcelles Assainies','Grand Yoff','Médina','Pikine','Guédiawaye','Rufisque','Yoff','Ouakam','Liberté'],
pl:[{id:'bouteilles',n:'Bouteilles',i:'bottle',d:'Eau, jus, boissons',ex:'Bouteilles d’eau, de jus ou de boisson'},{id:'bidons',n:'Bidons',i:'can',d:'Bidons et jerrycans',ex:'Bidons et jerrycans vides'},{id:'flacons',n:'Flacons',i:'flask',d:'Flacons vides',ex:'Flacons vides'},{id:'emballages',n:'Emballages',i:'pack',d:'Emballages propres',ex:'Emballages plastiques propres'}],
ok:['Vide','Propre','Séparé des autres déchets'],no:['Avec des restes de contenu','Souillé ou mélangé'],
notifs:[['Demande confirmée','Ta demande est prise en charge.','Il y a 2 h'],['Collecteur assigné','Moussa passera dans ton créneau.','Il y a 1 h'],['Paiement effectué','Ton paiement a été confirmé.','Hier']],
faq:[['Quels plastiques acceptez-vous ?','Les plastiques vides, propres et séparés : bouteilles, bidons, flacons, emballages. Les critères précis sont dans l’onglet Plastiques.'],['Comment est calculé mon paiement ?','Poids accepté × tarif communiqué, après la pesée devant toi.'],['Comment suis-je payé ?','Par Mobile Money ou crédit téléphonique.'],['Et si une partie est refusée ?','Seul le poids accepté est payé. Le motif du refus t’est expliqué.'],['Quand le collecteur passe-t-il ?','Selon les disponibilités : l’équipe confirme ta demande.']]};
