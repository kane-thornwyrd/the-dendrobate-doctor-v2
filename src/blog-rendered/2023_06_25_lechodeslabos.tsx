
import { Article } from "@/atoms/Article";

export const Article20230625LechodeslabosMetadata = {"tags":["covid","complot des caddie","fibrillation atriale","Liverpool","Santé Publique France","santé mentale","Sars-Cov2","Pénurie de médicaments","Société française de pharmacologie et de thérapeutique","SFPT","Ventoline","Mathieu Molimard","IHU","Didier Raoult","AINS","ibuprofène","antituberculeux","Société Française de Pharmacie Clinique","Omédit Paca-Corse","Stéphane Honoré","Thomas Pradeu","les Vaxxeuses"],"title":"l'Écho des Labos - 25 juin 2023","description":"Aujourd&#39;hui, c&#39;est dimanche. Vous êtes donc bien sur Radio Tartu, je suis le Dendrobate Doctor et nous sommes ensemble pour faire l&#39;état de la recherche sur l&#39;épidémie de Covid-19 et le reste. Si vous aimez la chronique, vous pourrez bientôt nous soutenir sur KissKissBankBank.","date":"2023-06-25","layout":"layouts/post.njk"}

export const Article20230625Lechodeslabos : Article = ({
  className, title, KissKissBankBank, Facebook
}) => {
  return (<div className={className}>
      <h2 id="-title-"><a href="#-title-">{ title }</a></h2>
<p>Aujourd'hui, c'est dimanche. Vous êtes donc bien sur Radio Tartu, je suis le Dendrobate Doctor et nous sommes ensemble pour faire l'état de la recherche sur l'épidémie de Covid-19 et le reste.</p>
<p>Si vous aimez la chronique, vous pouvez nous soutenir sur { KissKissBankBank( ) }.</p>
<p>Bienvenue à tous sur l'Echo des Labos.</p>
<hr />
<h3 id="fake-de-la-semaine"><a href="#fake-de-la-semaine">FAKE DE LA SEMAINE</a></h3>
<p>Parfois, en préparant cette chronique, je tombe sur une dinguerie, et en creusant pour comprendre d&rsquo;où ça sort, je tombe effectivement sur un truc un peu dingue, mais qui a été compris parfaitement de travers. Cette semaine, ça a commencé à partir d&rsquo;un de nos conspis préférés qui a déclaré qu&rsquo;il y avait des programmes «&nbsp;d&rsquo;espionnage et de contrôle médical&nbsp;» (quoi que ça veuille dire) qui venait d&rsquo;être implantés dans tous les chariots de supermarché de France (ouais, vous l&rsquo;aviez pas vu venir, hein, le complot au caddie&nbsp;?!).</p>
<p>Ce serait quoi le but&nbsp;? Comme d&rsquo;hab, c&rsquo;est pas très clair. Ce serait de nous «&nbsp;contrôler mentalement&nbsp;» pour nos achats mais aussi de nous «&nbsp;dénoncer à la sécu&nbsp;» si on achète des trucs «&nbsp;non-approuvés par le Nutriscore&nbsp;» (qui est un indicateur, il n&rsquo;approuve rien). Boooooooon. Mettons ça de côté et voyons ce qu&rsquo;il en est vraiment, parce que, croyez-le ou non, y a un vrai projet de science derrière tout ça.</p>
<p>Alors, c&rsquo;est un projet pilote, déjà, et c&rsquo;est mené à Liverpool ensuite (donc pas en France, sauf s&rsquo;il y a eu un gros glissement de terrain). Ca concernait 10 caddies (donc y en aura pas pour tout le monde) et le but c&rsquo;est d&rsquo;utiliser les poignées pour détecter la fibrillation atriale, une maladie cardiaque silencieuse. Les participants devaient tenir la poignée modifiée du caddie pendant 60 secondes, puis leur rythme cardiaque était vérifié par un infirmier. Le dispositif a permis de détecter 59 personnes porteuses de la maladie, dont 39 l&rsquo;ignoraient. Si le capteur a fait des faux positifs, éliminés à l&rsquo;examen, il n&rsquo;a fait aucun faux négatif, et est donc présenté (<a href="https://esc365.escardio.org/ACNAP-Congress/speakers/527499">en congrès ici</a>) comme un moyen de prévention simple, rapide et intéressant à déployer. Mais niveau contrôle mental, c&rsquo;est pas top quoi.</p>
<hr />
<h3 id="decouverte-de-la-semaine"><a href="#decouverte-de-la-semaine">DECOUVERTE DE LA SEMAINE</a></h3>
<p>C&rsquo;est une étude majeure de la santé en France, et elle fait froid dans le dos. Un enfant sur 10 en France souffre d&rsquo;un trouble de santé mentale. L&rsquo;étude, publiée par Santé Publique France (<a href="https://www.santepubliquefrance.fr/presse/2023/sante-mentale-premiers-resultats-de-l-etude-enabee-chez-les-enfants-de-6-a-11-ans-scolarises-du-cp-au-cm2">à lire ici</a>) s&rsquo;est penchée sur 15.000 enfants pour parvenir à ce résultat. Que peut-on vraiment en conclure&nbsp;?</p>
<p>Déjà regardons de quoi on parle. Par «&nbsp;enfants&nbsp;», on entend ici les 6-11 ans. Lorsqu&rsquo;on dit «&nbsp;1 sur 10&nbsp;» c&rsquo;est en fait un peu plus que ça, puisque 13% présentent «&nbsp;au moins un trouble probable de la santé mentale&nbsp;». On dit «&nbsp;probable&nbsp;» car les enquêtes se basent sur des grilles d&rsquo;évaluation, mais ne peuvent pas remplacer un diagnostic individuel au cas par cas. Dans le détail, 6.6% présenteraient un trouble de la catégorie «&nbsp;oppositionnel&nbsp;»&nbsp;: des problèmes de gestion de la colère et d&rsquo;agressivité, des comportements antisociaux ou de nature psychopathiques. 5.6% présenteraient un trouble de la catégorie «&nbsp;émotionnel&nbsp;»&nbsp;: des troubles anxieux, des phobies ou encore une dépression. 3.2% tomberaient dans la catégorie «&nbsp;troubles de l&rsquo;attention&nbsp;». Et là vous allez me dire «&nbsp;mais ça fait pas 13%&nbsp;» et vous aurez raison. Déjà parce que certains enfants sont porteurs de plusieurs troubles, ensuite parce que tous les troubles ne rentrent pas dans ces catégories. On parle bien de 13% atteints de «&nbsp;au moins&nbsp;» un trouble mental.</p>
<p>Ensuite, que peut-on en dire&nbsp;? Déjà que personne ne devrait être surpris. Ces chiffres ressemblent beaucoup à ceux de nos voisins européens pour lesquels on a des données, donc il n&rsquo;y a pas vraiment de situation spécifique à la France ici. Comme c&rsquo;est la première étude de ce genre chez nous, on ne peut en revanche pas dire, comme certains aiment déjà à le récupérer, que c&rsquo;est le confinement qui a «&nbsp;rendu tous les gamins fous&nbsp;», la situation pré-épidémie est complètement inconnue. Enfin, il faut surtout voir ce travail comme une étude permettant de travailler à la prise en charge. Peut-être que, si on arrête de penser que des petits de 8/9/10 ans ne peuvent pas souffrir de dépression, on leur proposera enfin un traitement adapté au lieu de les laisser traverser la puberté avec ça et de s&rsquo;étonner qu&rsquo;ils se foutent en l&rsquo;air à l&rsquo;âge adulte… Une idée comme ça…</p>
<hr />
<h3 id="piste-de-la-semaine"><a href="#piste-de-la-semaine">PISTE DE LA SEMAINE</a></h3>
<p><strong>Covid long</strong>&nbsp;: une récente étude (<a href="https://www.frontiersin.org/articles/10.3389/fimmu.2022.949787/full">je vous la mets là</a>) semble appuyer un peu plus l&rsquo;hypothèse déjà émise selon laquelle l&rsquo;infection au Sars-Cov2, même dans une forme légère ou asymptomatique, réactiverait des virus dormants dans l&rsquo;organisme, en particulier ceux de la famille de l&rsquo;herpès, capables de provoquer des fatigues longues et de l&rsquo;inflammation chronique. Le lien de causalité n&rsquo;est pas établi et le journal où est publié l&rsquo;étude fait partie de ceux que je range personnellement dans «&nbsp;pas aussi regardant qu&rsquo;il faudrait&nbsp;», mais comme ce travail ne fait que confirmer une suspicion déjà existante, c&rsquo;est une piste intéressante pour comprendre pourquoi certaines personnes sont autant affectées et d&rsquo;autres pas.</p>
<hr />
<h3 id="impasse-de-la-semaine"><a href="#impasse-de-la-semaine">IMPASSE DE LA SEMAINE</a></h3>
<p><strong>Pénurie de médicaments</strong>&nbsp;: pour faire face à la pénurie de médicaments actuelle (et plus largement, aux pénuries qui commencent à poser régulièrement problème), le gouvernement propose de relocaliser la production de médicaments essentiels. C&rsquo;est bien (et je le dis sans aucun sarcasme), en revanche, qui détermine qu&rsquo;un médicament est essentiel&nbsp;? C&rsquo;est la question que se posent à peu près toutes les sociétés savantes face à la publication de la liste des molécules concernées par le ministère de la Santé cette semaine. En premier lieu, la Société française de pharmacologie et de thérapeutique (SFPT) lève les yeux au ciel en découvrant la liste de 450 médicaments, qui omet beaucoup de produits essentiels (au hasard, la Ventoline, LE traitement de référence des crises d&rsquo;asthme sans lequel celles-ci peuvent être mortelles) pour inclure des produits inutiles. Mathieu Molimard, chef de l&rsquo;unité de pharmacologie de Bordeaux et coordinateur de la lettre ouverte accusant l&rsquo;IHU et Didier Raoult du plus grand essai clinique illégal de tous les temps (ça a pas l&rsquo;air en lien comme ça, mais attendez deux minutes) qualifie le document de «&nbsp;liste au Père Noël&nbsp;». Les pneumologues s&rsquo;inquiètent de l&rsquo;absence du moindre antituberculeux alors que la maladie fait son retour en France, les rhumatologues n&rsquo;ont aucun de leurs traitements nécessaires (notamment les AINS, comprenez que l&rsquo;ibuprofène par exemple est au rang des absents) dans la liste… en revanche on y trouve l&rsquo;oxycodone, un médicament qui fait l&rsquo;objet d&rsquo;une alerte de santé publique et qui est impliqué dans la crise des opioïdes aux USA… Alors que la plupart des professionnels de santé disent que ce n&rsquo;est ni fait ni à faire et que les sociétés savantes exigent une refonte complète, le ministère de la santé dit quant à lui que la liste a été élaborée grâce à «&nbsp;une démarche d&rsquo;analyse rigoureuse et croisée entre plusieurs sociétés savantes de médecins&nbsp;». Bien. Lesquelles du coup&nbsp;? Bon déjà pour le ministère «&nbsp;plusieurs&nbsp;» ça veut dire 2. Mais admettons, c&rsquo;est pas factuellement faux. La première c&rsquo;est la Société Française de Pharmacie Clinique, épinglée par ses confrères pour ses très (genre très) lourds conflits d&rsquo;intérêts avec l&rsquo;industrie pharmaceutique, et la seconde c&rsquo;est l&rsquo;Omédit Paca-Corse, dirigée par Stéphane Honoré, un des grands co-auteurs (au moins 10 études) de Didier Raoult sur les papiers bidons prétendant que l&rsquo;HCQ guérissait le Covid… Moi je veux bien arrêter avec l&rsquo;IHU, c&rsquo;est pas ma faute s&rsquo;ils ressemblent plus à une mafia qu&rsquo;à une unité de recherche&nbsp;!</p>
<hr />
<h3 id="mauvaise-nouvelle-de-la-semaine"><a href="#mauvaise-nouvelle-de-la-semaine">MAUVAISE NOUVELLE DE LA SEMAINE</a></h3>
<p><strong>Maladies émergentes</strong>&nbsp;: Bergerac va subir, dans la nuit de lundi à mardi, une vaste opération de démoustification, après l&rsquo;hospitalisation d&rsquo;un homme, atteint de la dengue. Si l&rsquo;homme rentrait des Antilles, et a donc pu contracter la maladie là-bas, la maladie est transmise par le moustique-tigre, désormais présent dans cette région de France. Les habitants sont appelés à rester chez eux, toutes portes et fenêtres fermées, de 22h à 6h, à rentrer animaux, jouets d&rsquo;enfants et linge, à déplacer les ruches, couvrir les piscines et bacs à sable, et à ne pas consommer de légumes du potager ou fruits du jardin dans les trois jours suivants. Préparez-vous, ça va devenir de plus en plus fréquent…</p>
<hr />
<h3 id="bonne-nouvelle-de-la-semaine"><a href="#bonne-nouvelle-de-la-semaine">BONNE NOUVELLE DE LA SEMAINE</a></h3>
<p><strong>Vulgarisation</strong>&nbsp;: la série de vidéos sur le débunk de «&nbsp;Des Vaccins et des Hommes&nbsp;» continue sur la chaîne de La biologie fait des vidéos, et <a href="https://www.youtube.com/watch?v=GeTSAjagBjo">c&rsquo;est ici</a>. Ce coup-ci, on cause hygiène et pourquoi il suffit pas de se laver les mains pour éviter la polio (nan mais ça a l&rsquo;air con comme ça, mais des fois il faut revenir aux bases…). Et on est même re-twittés par Thomas Pradeu, un des intervenants dudit documentaire, qui accusait Anne Georget d&rsquo;avoir complètement détourné ses propos, et ça, c&rsquo;est un peu la classe.</p>
<hr />
<h3 id="quest-ce-que-putain-de-quoi"><a href="#quest-ce-que-putain-de-quoi">«&nbsp;QU&rsquo;EST-CE QUE PUTAIN DE QUOI&nbsp;?&nbsp;»</a></h3>
<p>Vous allez dire que je m&rsquo;acharne. Vous allez dire que c&rsquo;est bon, plus rien ne nous surprend de la part de l&rsquo;IHU. Mais en est-on bien sûr&nbsp;? Ce coup-ci c&rsquo;est Médiapart qui a levé un lièvre… intéressant (on va dire ça, sinon je risque de me retrouver à employer un vocabulaire que ma maman réprouve et ma maman lit la chronique). Le rapport de l&rsquo;Igas (Inspection générale des affaires sociales) comprend, en annexe, le protocole de traitement du Covid par HCQ diffusé en interne en 2021 (donc pas au début de la crise, à un moment où on savait déjà que ça marchait pas, mais genre vraiment pas). Et ce protocole recommande clairement de ne pas exclure les femmes enceintes. Et là, il y a deux problèmes (enfin, en plus du problème de continuer à donner à des patients des traitements qu&rsquo;on sait être inefficaces, on s&rsquo;entend). La première, c&rsquo;est que l&rsquo;effet toxique sur le fœtus est mal compris. Normalement, la molécule est considérée comme plutôt safe et les données sont assez rassurantes… mais ça, c&rsquo;est aux posologies «&nbsp;normales&nbsp;» utilisées pour le lupus ou la prévention de la malaria, c&rsquo;est-à-dire beaucoup plus faibles que ce qui était utilisé dans le «&nbsp;protocole Raoult&nbsp;». De plus, depuis 2019, on commence à remettre ça en question, avec de nouvelles données qui considèrent désormais que la prise d&rsquo;HCQ pendant la grossesse augmenterait très légèrement le risque de malformation grave (de vraiment pas beaucoup, mais quand même). Et la seconde, c&rsquo;est que les femmes enceintes sont déclarées, dans les papiers publiés, comme exclues. Et du coup, on est obligé de se demander&nbsp;: est-ce que cette exclusion est réelle&nbsp;? Est-ce qu&rsquo;ils sont revenus sur leur protocole en se disant que ça passerait jamais, ou est-ce qu&rsquo;ils ont juste maquillé les données des femmes enceintes, et elles sont bel et bien incluses dans l&rsquo;étude&nbsp;? Est-ce que quelqu&rsquo;un a quelque chose à foutre de quoi que ce soit dans cet institut&nbsp;?</p>
<hr />
<h3 id="point-methode-de-la-semaine-la-vulgarisation--pour-qui-et-pourquoi"><a href="#point-methode-de-la-semaine-la-vulgarisation--pour-qui-et-pourquoi">POINT METHODE DE LA SEMAINE&nbsp;: La vulgarisation &#45; pour qui et pourquoi</a></h3>
<p>Je voulais écrire sur «&nbsp;pourquoi faut-il vulgariser&nbsp;» et puis, via Les Vaxxeuses (que je remercie pas toujours de mettre des trucs pareils en avant…) je suis tombée sur le post de quelqu&rsquo;un qui se félicite d&rsquo;être «&nbsp;libre de tout ARN dans son corps&nbsp;» et j&rsquo;avoue que j&rsquo;ai un peu questionné le sens de ma vie (et de la sienne, parce que je rappelle que quelqu&rsquo;un sans ARN, il s&rsquo;arrête au stade de la cellule-œuf…). A quoi ça sert de faire tout ça&nbsp;?</p>
<p>Et bien, comme toujours, il y a plusieurs réponses à ça. La première, c&rsquo;est la curiosité pure et simple, et là ça s&rsquo;adresse à tout le monde. Tout le monde quand il est petit se demande comment s&rsquo;est formé la Terre, c&rsquo;est quoi en vrai les étoiles, comment on fait les bébés, pourquoi les fleurs fanent, à quoi ressemblaient les dinosaures et est-ce que les chats vont au ciel (la dernière est normalement pas du domaine de la science, mais mes activités de ménage nocturne au chevet du cadavre de pauvre plante en pot qui a eu le malheur de se situer entre une grosse mouche et ma catastrophe naturelle domestique me donne un avis très tranché à ce sujet). Cette curiosité s&rsquo;étiole souvent avec l&rsquo;âge, et elle ne devrait pas. Le monde est merveilleux, et c&rsquo;est quand même bien quand ce sont des pros passionnés qui l&rsquo;expliquent. Dans ce cas-là, la vulgarisation s&rsquo;adresse à tous.<br />
La deuxième, c&rsquo;est le besoin de faire avancer la science elle-même. Que ce soit entre chercheurs ou lorsque les programmes mobilisent les citoyens, il faut arriver à vulgariser son domaine pour obtenir de l&rsquo;aide, dans la création de modèles interdisciplinaires ou dans le comptage des oiseaux. Dans ce cas-là, la vulgarisation s&rsquo;adresse à d&rsquo;autres professionnels ou à des amateurs éclairés (et motivés).<br />
La troisième, c&rsquo;est la nécessité de permettre aux gens de faire des choix éclairés. Vous ne pouvez pas choisir vos soins, vos politiques énergétiques, les produits que vous consommez ou ce que vous enseignez à vos enfants d&rsquo;une manière bénéfique si vous n&rsquo;y connaissez rien (ou alors par chance, mais vous n&rsquo;aurez pas toujours de la chance). De fait, lorsqu&rsquo;il est l&rsquo;heure du choix, soit vous avez le bagage, soit un professionnel doit vous donner une info qui fasse sens. Dans ce cas-là, la vulgarisation s&rsquo;adresse aux gens concernés par une problématique en particulier.<br />
La quatrième, c&rsquo;est le fait de ne pas pouvoir laisser la désinformation se répandre. Pour cela, il faut rétablir les faits, et là ça va être un peu subtil. Car bien souvent, la vulgarisation dans ce cas semble s&rsquo;adresse aux «&nbsp;opposants&nbsp;» à ceux qui propagent la désinformation et qui viennent avoir des débats houleux (pour ne pas dire agressifs, pour ne pas dire injurieux, pour ne pas dire autre chose), mais en réalité, elle s&rsquo;adresse aux témoins, à ceux qui pourraient être convaincus par la désinformation et qui vont lire l&rsquo;échange. Dans ce cas, il est particulièrement important d&rsquo;avoir en tête qu&rsquo;on ne s&rsquo;adresse pas réellement à la personne à qui on parle, mais aux témoins qui lisent. Ce sont eux qu&rsquo;il faut protéger de la désinformation. Les opposants, souvent, sont déjà trop loin pour l&rsquo;argumentation raisonnée (on peut planter des graines, mais le revirement, s&rsquo;il vient un jour, est presque toujours un changement intérieur).</p>
<hr />
<p>En espérant avoir pu apporter un peu de lumière dans le chaos ambiant, je rends l'antenne, et on y retourne la semaine prochaine, car l'épidémie ne se termine pas avec le solstice d&rsquo;été. En attendant, prenez soin de vous et des chercheurs qui bossent dur, et, autant que possible, restez chez vous (surtout si vous êtes à Bergerac). Bisous.</p>
<hr />
<p>Les commentaires ne sont pas gérés ici , un espace de discussions vous est réservé sous la publication correspondante sur { Facebook( ) } du Docteur.</p>
    </div>)
}