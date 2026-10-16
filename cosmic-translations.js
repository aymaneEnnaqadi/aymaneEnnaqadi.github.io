// Keep the existing five-language portfolio and localize the new journey copy.
const cosmicCopy = [
{selector:'h1',ar:'جاهز<br><span class="second-line">للانطلاق.</span>',fr:'PRÊT POUR<br><span class="second-line">LE DÉCOLLAGE.</span>',es:'LISTO PARA<br><span class="second-line">DESPEGAR.</span>',it:'PRONTO PER<br><span class="second-line">DECOLLARE.</span>'},
{selector:'.hero-bottom p',ar:'أنا أيمن. أبني مواقع وتطبيقات وأتمتة تأخذ أفكارك إلى آفاق جديدة.',fr:'Je suis Aymane. Je crée des sites, des applications et des automatisations pour emmener vos idées plus loin.',es:'Soy Aymane. Creo sitios web, aplicaciones y automatizaciones para llevar tus ideas más lejos.',it:'Sono Aymane. Creo siti, app e automazioni per portare le tue idee più lontano.'},
{selector:'.hero-bottom .pill',ar:'اكتشف عالمي <span class="pill-dot"></span>',fr:'Explorer mon univers <span class="pill-dot"></span>',es:'Explora mi universo <span class="pill-dot"></span>',it:'Esplora il mio universo <span class="pill-dot"></span>'},
{selector:'.scroll-note',ar:'مرّر لاكتشاف آفاق جديدة',fr:'DÉFILEZ VERS DE NOUVEAUX HORIZONS',es:'DESPLÁZATE HACIA NUEVOS HORIZONTES',it:'SCORRI VERSO NUOVI ORIZZONTI'},
{selector:'#work .section-heading h2',ar:'أفكار<br><em>انطلقت إلى الواقع.</em>',fr:'Des idées<br><em>qui ont décollé.</em>',es:'Ideas que<br><em>han despegado.</em>',it:'Idee che<br><em>hanno preso il volo.</em>'},
{selector:'.services .section-heading h2',ar:'أنت تحمل الرؤية.<br><em>ونجد الطريق معًا.</em>',fr:'Vous avez la vision.<br><em>Trouvons le chemin.</em>',es:'Tú traes la visión.<br><em>Encontramos el camino.</em>',it:'Tu porti la visione.<br><em>Troviamo la strada.</em>'},
{selector:'#contact h2',ar:'إلى أين<br><em>ننطلق الآن؟</em>',fr:'Quelle sera<br><em>la prochaine étape ?</em>',es:'¿Hacia dónde<br><em>vamos ahora?</em>',it:'Qual è<br><em>la prossima tappa?</em>'},
{selector:'.contact-bottom p',ar:'أخبرني بما تريد بناءه.<br>لنخطُ الخطوة الأولى.',fr:'Parlez-moi de ce que vous voulez créer.<br>Faisons le premier pas.',es:'Cuéntame qué quieres construir.<br>Demos el primer paso.',it:'Raccontami cosa vuoi creare.<br>Facciamo il primo passo.'}
];
for(const row of cosmicCopy){const i=translations.findIndex(t=>t.selector===row.selector);if(i>=0)translations[i]=row;else translations.push(row)}
