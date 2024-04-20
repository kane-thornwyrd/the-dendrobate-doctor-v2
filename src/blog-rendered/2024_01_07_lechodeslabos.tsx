
import { Article } from "@/atoms/Article";

export const Article20240107LechodeslabosMetadata = {"tags":["covid","Guerlain","quantique","G Milgram","Université Palacky","biophotons","LVMH","orchidée","Dendrobium nobile","Groenland","vers géants préhistoriques","Timorbestia","Psychiatrie","Anne Sauvaget","prix Jansen","Académie de Médecine","électrochocs","stimulation transcrânienne","hydroxychloroquine","Pr Mathieu Molimard","service de pharmacologie","CHU de Bordeaux","épidémies","réseau Sentinelles","vigilance rouge","grippe","gastro-entérite","mycoplasmes","varicelle","Didier Raoult","chefs de service","direction d’unité de recherche","Inserm","CNRS","IRD","IHU Marseille","Chloé Frammery","tribunal fédéral","Sam Altman","OpenAI","Retro Bioscience","cellules souches","tératome","tumeur"],"title":"l'Écho des Labos - 7 janvier 2024","description":"Aujourd'hui, c'est dimanche. Vous êtes donc bien sur Radio Truffière, je suis le Dendrobate Doctor et nous sommes ensemble pour faire l'état de la recherche sur l'épidémie de Covid-19 et le reste.","date":"2024-01-07","layout":"layouts/post.njk"}

export const Article20240107Lechodeslabos : Article = ({
  className, title, img, KissKissBankBank, Facebook
}) => {
  return (<div className={className}>
      { img("https://imgs.xkcd.com/comics/quantum_mechanics.png",  "voir figcaption en-dessous",  "width:100%" ) }
<dl>
<dt>Description &#x26; Traduction</dt>
<dd>l'éditrice<br />
Titre original
</dd>
<dd>Mécanique Quantique
</dd>
<dd>Vous pouvez aussi juste ignorer toute assertion scientifique dont "mécanique quantique" est le passage le plus compliqué.<br />
Scène
</dd>
<dd>Un personnage ayant un chien en laisse parle à un autre personnage: "Mais les chiens peuvent observer le monde, ce qui signifie selon la mécanique quantique qu'ils <em>doivent</em> avoir une âme"<br />
Sous-titre
</dd>
<dd>ProTip: Vous pouvez sereinement ignorer toute phrase incluant le passage "selon la mécanique quantique"<br />
Crédits
</dd>
<dd>XKCD
</dd>
<dd>Emplacement permanent: <a href="https://xkcd.com/1240/">"https://xkcd.com/1240/"</a>
</dd>
</dl>
<h2 id="-title-"><a href="#-title-">{ title }</a></h2>
<p>Aujourd'hui, c'est dimanche. Vous êtes donc bien sur Radio Truffière, je suis le Dendrobate Doctor et nous sommes ensemble pour faire l'état de la recherche sur l'épidémie de Covid-19 et le reste.</p>
<p>Si vous aimez la chronique, vous pouvez nous soutenir sur { KissKissBankBank( ) }.</p>
<p>Bienvenue à tous sur l'Echo des Labos.</p>
<hr />
<h3 id="fake-de-la-semaine"><a href="#fake-de-la-semaine">FAKE DE LA SEMAINE</a></h3>
<p>Vous n&rsquo;avez pas pu passer à côté de la dernière arnaque massive en date, celle de Guerlain (<a href="https://youtu.be/z4ZfsJRGJsM?si=6EkFoxNcEIU-NlMZ">merveilleusement narrée par G Milgram ici si vous voulez</a>) qui nous a sorti une «&nbsp;crème de jeunesse quantique&nbsp;» à 650€ le pot de 50ml. Comme on est sur du grand n&rsquo;importe quoi, je vais me contenter de prendre directement ce que Guerlain raconte sur le site et on va décortiquer&nbsp;:</p>
<p>«&nbsp;En partenariat avec une équipe de biophysiciens de l&rsquo;Université Palacky, la recherche Guerlain révèle que les cellules de la peau émettent des biophotons dont l&rsquo;émission varie avec l&rsquo;âge.&nbsp;» Alors ça c&rsquo;est marrant, parce que c&rsquo;est une université que je connais bien, et au sein même de laquelle je connais personnellement très bien quelques gens bien placés. Donc je suis allée leur demander directement ce que c&rsquo;était que ce bazar. Autant vous dire qu&rsquo;ils ne sont pas très contents de voir leur nom mêlé à cette histoire, mais je ne vais pas parler en leur nom car une communication officielle devrait sortir, donc passons. En revanche ils ont pu me confirmer deux choses&nbsp;:</p>
<ol>
<li>Guerlain (ou LVMH qui possède la marque) n&rsquo;est pas un partenaire commercial majeur de l&rsquo;université, ce qui veut dire qu&rsquo;il ne finance pas de projets de recherche et qu&rsquo;il n&rsquo;y a pas d&rsquo;équipe mixte. On m&rsquo;a laissé entendre qu&rsquo;il pourrait s&rsquo;agir d&rsquo;un partenariat entre des chercheurs et le groupe, qui n&rsquo;aurait pas été validé par la faculté, mais rien de précis.</li>
<li>la recherche Guerlain ne révèle rien du tout, puisqu&rsquo;il n&rsquo;y a aucun papier publié par le groupe, en revanche une équipe de Palacky travaille bel et bien sur la réémission de photons (appelés Ultra-Weak Photon, UWP) qui diffère selon les cellules. Ils m&rsquo;ont fourni ce papier, qui date de l&rsquo;an dernier (<a href="https://pubmed.ncbi.nlm.nih.gov/36835390/">et qui ne mentionne nulle part un financement, une affiliation ou un partenariat avec Guerlain…</a>), c&rsquo;est un peu velu, mais retenez ceci&nbsp;: quand on éclaire de manière spécifique une cellule, on peut savoir, par la manière dont elle renvoie un type de photon particulier, son état de stress oxydatif. C&rsquo;est un travail de développement d&rsquo;outil de diagnostic. Et c&rsquo;est là que tout part en banane.</li>
</ol>
<p>«&nbsp;La nouvelle technologie au cœur des soins Orchidée Impériale Gold Nobile est capable d&rsquo;aider à restaurer l&rsquo;émission de biophotons d&rsquo;une cellule âgée à un niveau proche de celui d&rsquo;une cellule jeune¹.&nbsp;» Sauf que «&nbsp;cellule oxydée&nbsp;» ça ne veut pas dire «&nbsp;cellule âgée&nbsp;», en fait. A l&rsquo;extrême limite, en partant du principe que tout ce que Guerlain raconte est vrai, ils auraient réussi à faire en sorte que les cellules émettent moins de composants liés au stress oxydatif (qui lui peut être lié à l&rsquo;âge, la pollution, la fatigue, le soleil, ce que vous voulez). Alors, est-ce que ça au moins ils l&rsquo;ont fait&nbsp;? C&rsquo;est quoi le petit 1 en note d&rsquo;appel, là&nbsp;?<br />
«&nbsp;¹Test in vitro sur ingrédient.&nbsp;» Bon ben non. Ils ont juste examiné des fibroblastes dans des boites de pétri (retenez ça aussi, ça va être rigolo, parce que les fibroblastes sont des cellules du tissu conjonctif du derme, donc pas grand-chose à voir avec l&rsquo;épiderme sur lequel on tartine ladite crème). «&nbsp;Oui, mais ptet que leur crème elle pénètre loin dans le derme&nbsp;?&nbsp;» J&rsquo;espère pas pour eux&nbsp;: tout produit qui pénètre loin dans les couches profondes de l&rsquo;épiderme et du derme est classé médicament et interdit à la vente en tant que cosmétique…<br />
«&nbsp;Grâce à 20 ans de recherche au sein de L&rsquo;Orchidarium®, les experts Guerlain ont identifié, parmi 30 000 espèces, une orchidée aux pouvoirs prodigieux, l&rsquo;orchidée Gold Nobile. Endémique de la région de l&rsquo;Himalaya,…&nbsp;» Je coupe là pour poser un truc deux secondes. Gold Nobile, ça existe pas, ce qui existe c&rsquo;est l&rsquo;orchidée Dendrobium nobile, qu&rsquo;on appelle aussi «&nbsp;orchidée bambou&nbsp;» (mais ça faisait moins classe) et c&rsquo;est pas du tout endémique de l&rsquo;Himalaya, ça pousse en Inde, en Chine, en Thaïlande et dans les Comores. Et c&rsquo;est tant mieux parce que si les gars ils étaient en train de broyer une fleur en danger d&rsquo;extinction pour fabriquer leur yaourt de visage, ça me mettrait colère. C&rsquo;est une très jolie fleur, mais c&rsquo;est tout. Et si vous vous demandez pourquoi celle-là, je vais faire ma petite conspirationniste deux minutes et rappeler qu&rsquo;il y a beaucoup de financements en Chine pour faire reconnaître la pharmacopée chinoise comme de la vraie médecine, que cette plante fait partie des 50 plus utilisées de ladite pharmacopée traditionnelle et que tous les tests dermatologiques ont été faits en Chine, comme c&rsquo;est précisé sur le site. Je dis ça, je dis rien.<br />
«&nbsp;elle a hérité la capacité de cumuler plusieurs mécanismes de photosynthèse pour transformer le rayonnement du soleil en véritable énergie de vie.&nbsp;» C&rsquo;EST. UNE. PLANTE. Evidemment que ça transforme le soleil en énergie, c&rsquo;est le principe de la photosynthèse, tout le chiendent de ton jardin, il fait pareil.<br />
«&nbsp;La lumière diffusée par ses pétales est plus intense de +68 % par rapport à une orchidée blanche ordinaire¹. ¹Test instrumental sur un pétale de Dendrobium nobile versus Phalaenopsis amabilis.&nbsp;» Ca, je veux bien y croire. Mais c&rsquo;est très probablement lié à la structure des pétales de la fleur et ça va pas se voir à l&rsquo;échelle moléculaire. Et cela d&rsquo;autant plus que les ingrédients principaux de la crème c&rsquo;est:</p>
<ol>
<li>la flotte</li>
<li>le squalène (c&rsquo;est globalement le gras que vous faites tout seul avec votre peau pour gratuit)</li>
<li>la glycérine (ça doit être pour la texture)</li>
<li>deux glycols (c&rsquo;est des solvants pour d&rsquo;autres composants)</li>
<li>l&rsquo;huile de tournesol…</li>
</ol>
<p>Moi je pense, qu&rsquo;il faut que vous arrêtiez d&rsquo;essayer de dire des trucs. Et de les vendre, surtout de les vendre&nbsp;!</p>
<hr />
<h3 id="découverte-de-la-semaine"><a href="#découverte-de-la-semaine">DÉCOUVERTE DE LA SEMAINE</a></h3>
<p>Si vous avez vu passer des annonces comme quoi on avait découvert des vers géants préhistoriques au Groenland, je vais vous décevoir (ou pas, ça a pas l&rsquo;air ultra sympathique comme bestiole tout de même), les découvertes sont souvent moins impressionnantes que ce qu&rsquo;en racontent les journalistes. Mais viendez, ça va être chouette quand même.</p>
<p>Déjà, on a découvert des fossiles de vers, pas des vers. Ca a l&rsquo;air de rien, mais comme ces derniers temps on arrive à ramener à la vie des machins qui ont passé des centaines voire des milliers d&rsquo;années dans le permafrost, c&rsquo;est pas une mauvaise idée de préciser. Même si là, les trucs ont 518 millions d&rsquo;années, on était plutôt tranquilles.<br />
Ensuite, ça veut dire quoi «&nbsp;un ver géant&nbsp;»&nbsp;? Tous ceux qui me répondent «&nbsp;ça veut dire un ver et qui est géant&nbsp;» gagnent un point Dr Who, mais en vrai, la question se pose au vu de la très petite taille des êtres vivants au temps du Cambrien. Et donc géant dans ce cas, c&rsquo;est 30 centimètres. Ce qui est effectivement géant quand la faune locale varie de quelques millimètres à quelques centimètres. D&rsquo;où le fait que les chercheurs n&rsquo;ont pas hésité à baptiser la chose Timorbestia, ce qui veut dire bête terrifiante, rien que ça. <a href="https://www.science.org/doi/10.1126/sciadv.adi6678">Les photos des fossiles sont là pour les plus curieux d&rsquo;entre vous</a>.</p>
<hr />
<h3 id="piste-de-la-semaine"><a href="#piste-de-la-semaine">PISTE DE LA SEMAINE</a></h3>
<p><strong>Psychiatrie</strong>&nbsp;: souvent considérée comme le parent pauvre de la médecine, la recherche en psychiatrie progresse pour les patients ne répondant pas aux traitements classiques, ou qui ne peuvent pas bénéficier de traitements médicamenteux (comme les femmes enceintes, les personnes cardiaques et toutes celles présentant des effets indésirables trop sévères). Ce sont ainsi les travaux de la psychiatre Anne Sauvaget qui viennent d&rsquo;être récompensés du prix Jansen 2023 par l&rsquo;Académie de Médecine. La psychiatre nantaise travaille sur les techniques de neurostimulations, allant des électrochocs à la stimulation transcrânienne (qui consiste en gros à mettre la tête des patients dans des grosses bobines qui génèrent un champs magnétique ciblé sur un groupe de neurones), qui constituent des alternatives intéressantes pour les patients en impasse thérapeutique. Hormis les électrochocs, ces thérapies de pointe ne sont pas encore remboursées en France, et la psychiatre espère que ce prix permettra de les promouvoir auprès des pouvoirs publics.</p>
<hr />
<h3 id="impasse-de-la-semaine"><a href="#impasse-de-la-semaine">IMPASSE DE LA SEMAINE</a></h3>
<p><strong>Hydroxychloroquine</strong>&nbsp;: ça n&rsquo;en finit pas… Une nouvelle étude (<a href="https://www.sciencedirect.com/science/article/pii/S075333222301853X">à lire ici</a>) qui s&rsquo;est intéressée aux effets de la prescription d&rsquo;HCQ chez les patients atteints de Covid19 avant la mise à disposition des vaccins a montré que la molécule était directement responsable de près de 17 000 morts supplémentaires. Un chiffre extrêmement sous-estimé, puisqu&rsquo;il ne tient compte que:</p>
<ol>
<li>des décès hospitaliers (aucun mort en EHPAD ou à domicile n&rsquo;est inclus)</li>
<li>du printemps 2020 (aucune prescription plus tardive n&rsquo;est incluse dans l&rsquo;étude)</li>
<li>de 6 pays étudiés (mais qui ne comprennent ni le Brésil ni l&rsquo;Inde, où la prescription a été massive).</li>
</ol>
<p>Le Pr Mathieu Molimard, chef de service de pharmacologie au CHU de Bordeaux, estime pour sa part que l&rsquo;étude sous-estime le nombre total de morts imputable à la molécule dans le traitement du Covid d&rsquo;un facteur 10. Cet emballement sur la molécule reposant sur rien de sérieux aurait causé, en plus de l&rsquo;épidémie, plus de 100.000 morts dans le monde. C&rsquo;est comme si on avait buté tout Argenteuil.</p>
<hr />
<h3 id="mauvaise-nouvelle-de-la-semaine"><a href="#mauvaise-nouvelle-de-la-semaine">MAUVAISE NOUVELLE DE LA SEMAINE</a></h3>
<p><strong>Épidémies</strong>&nbsp;: sans grande surprise, maintenant que les gens ont oublié que se laver les mains était important même passé 8 ans et que porter un masque quand on est malade pour protéger les autres est un truc qui existe, les diverses épidémies se conjuguent pour nous tomber sur le coin de la tronche. La France tout entière est placée en vigilance rouge par le réseau Sentinelles (ceux du ministère de la Santé, pas ceux des Armées), du fait d&rsquo;une combinaison de grippe, gastro-entérite, Covid et le grand retour des infections pulmonaires à mycoplasmes. Une mention spéciale pour l&rsquo;Occitanie, qui trouve le moyen de se taper, en plus, un taux de 94 pour 100.000 habitants de varicelle, parce que pourquoi pas à ce stade.</p>
<hr />
<h3 id="bonne-nouvelle-de-la-semaine"><a href="#bonne-nouvelle-de-la-semaine">BONNE NOUVELLE DE LA SEMAINE</a></h3>
<p><strong>Justice</strong>&nbsp;: je suis allée près de Nuremberg et j&rsquo;en suis revenue sans que quelque justice que ce soit me cherche des noises. Ce n&rsquo;est pas le cas de nos amis qui nous ont promis moult procès, prisons et peines capitales. Côté français, 3 laquais de Didier Raoult, qui avaient notamment cosigné des publications sur des essais cliniques menés hors cadre, sans surveillance éthique et sur des patients vulnérables, viennent de se voir déclencher une procédure disciplinaire exceptionnelle à leur encontre. Ce qui veut dire qu&rsquo;il n&rsquo;y a nul besoin d&rsquo;attendre que des patients portent plainte ou que la justice traite les affaires en cours, il s&rsquo;agit là de potentielles sanctions professionnelles. Ils pourraient être démis de leurs fonctions de chefs de service, la direction d&rsquo;une unité de recherche ayant déjà été retirée à l&rsquo;un d&rsquo;entre eux, tandis que, dans la foulée, après l&rsquo;Inserm et le CNRS, l&rsquo;IRD vient de retirer sa tutelle à l&rsquo;IHU, annonçant la fin de toute collaboration avec l&rsquo;Institut. Côté suisse, c&rsquo;est la chef de file des antivax proQAnon Chloé Frammery qui vient de voir sa révocation de l&rsquo;équivalent helvète de l&rsquo;Education Nationale confirmée par le tribunal fédéral pour des manquements graves et répétés à son devoir d&rsquo;exemplarité dû à son rôle d&rsquo;enseignante. C&rsquo;est marrant, mais j&rsquo;ai l&rsquo;intuition que quand les charlots du dimanche (parce que moi je publie le dimanche, mais n&rsquo;importe quel jour est valide) nous sortaient que le futur leur donnerait raison, c&rsquo;était pas exactement à ça qu&rsquo;ils s&rsquo;attendaient.</p>
<hr />
<h3 id="quest-ce-que-putain-de-quoi"><a href="#quest-ce-que-putain-de-quoi">«&nbsp;QU&rsquo;EST-CE QUE PUTAIN DE QUOI&nbsp;?&nbsp;»</a></h3>
<p>Il ne faut pas laisser les gens sortir de leur champ de compétence, surtout si c&rsquo;est pour qu&rsquo;ils prennent la parole publiquement ensuite. Par exemple Sam Altman, le créateur d&rsquo;OpenAI, il est sans doute très bon en intelligence artificielle. Vraiment très bon. Mais ça ne lui donne aucune compétence en biologie, et surtout pas en biologie du vieillissement. Et c&rsquo;est comme ça qu&rsquo;il en arrive à dire publiquement qu&rsquo;il a financé une start-up qui peut rajeunir les gens mais que ça leur fait pousser un mutant à l&rsquo;intérieur. Ouaip. On va préciser un peu, hein.</p>
<p>La boite en question, c&rsquo;est Retro Bioscience, et elle ambitionne de trouver des traitements qui allongent l&rsquo;espérance de vie. Jusque-là ok. Une des techniques sur laquelle la boite travaille consiste à reprogrammer des cellules atrophiées ou endommagées, de façon à ce qu&rsquo;elles soient à nouveau comme neuves. Jusque-là, c&rsquo;est un peu tiré par les cheveux mais ok, on a vu des trucs similaires dans les travaux sur les cellules souches et c&rsquo;est ce qu&rsquo;ont l&rsquo;air de faire, plus ou moins, certaines espèces de méduses. Soit. Le problème, c&rsquo;est que ce traitement a des effets secondaires&nbsp;: parfois les cellules redeviennent capables de se multiplier sans être totalement réparées et génèrent donc des tumeurs. C&rsquo;est pas cool mais c&rsquo;est pas surprenant. Sauf qu&rsquo;il s&rsquo;agit de tumeurs un peu à part, les tératomes. Les tératomes sont des tumeurs que forment des cellules qui se spécialisent mais pas au bon endroit, et donc quand on retire la tumeur et qu&rsquo;on l&rsquo;ouvre, il n&rsquo;est pas rare d&rsquo;y trouver des cheveux, des bouts de cartilages ou des dents. C&rsquo;est très perturbant, mais c&rsquo;est documenté. Et c&rsquo;est là que ça part en banane, puisque Sam Altman déclare que si le développement du tératome n&rsquo;est pas arrêté, celui-ci produira une personne complète… à l&rsquo;intérieur du quelqu&rsquo;un qui a la tumeur. Et ça en fait non, Sam, tu vois, ça la biologie l&rsquo;interdit, notamment parce que lorsqu&rsquo;un être vivant se développe, ça commence pas par les cheveux et les dents, ça c&rsquo;est en dernier, c&rsquo;est pour ça qu&rsquo;à la naissance les bébés sont moches, vois-tu.</p>
<hr />
<h3 id="point-méthode-de-la-semaine-la-science-et-la-pub"><a href="#point-méthode-de-la-semaine-la-science-et-la-pub">POINT MÉTHODE DE LA SEMAINE&nbsp;: La Science et la pub</a></h3>
<p>L&rsquo;épisode de Guerlain cette semaine nous rappelle une chose importante (en plus du fait que toute l&rsquo;industrie cosmétique se fout ostensiblement de notre gueule). Il ne suffit pas qu&rsquo;il y ait des études sur quelque chose, il faut encore qu&rsquo;elles soient de bonne qualité, en nombre suffisant et qu&rsquo;elles racontent bel et bien ce que les marketeux leur font dire.</p>
<p>En règle générale, voici les mentions qui doivent vous alertez si vous regarder la réclame d&rsquo;un produit quelconque et que celui-ci est présenté comme «&nbsp;évalué par la science&nbsp;», «&nbsp;issu de la technologie&nbsp;» et autres expressions suspectes.<br />
«&nbsp;Test réalisé sur [nombre ridiculement faible] de personnes&nbsp;» C&rsquo;est souvent dans les petites lignes, mais dites-vous bien que si la boite a l&rsquo;argent pour se payer un spot à la TV ou la double page d&rsquo;un magazine, elle a l&rsquo;argent pour recruter un panel digne de ce nom. Si elle l&rsquo;a pas fait, c&rsquo;est qu&rsquo;elle s&rsquo;attend à ne rien trouver.<br />
«&nbsp;Test instrumental/test in vitro&nbsp;» Vous n&rsquo;êtes pas une boite de pétri. In vitro, la javel, le gasoil ou même une décharge de magnum ça tue plein de vilains microbes, pourtant il vous viendrait pas à l&rsquo;idée que ça peut marcher sur votre rhume.<br />
«&nbsp;Auto-évaluation&nbsp;» Globalement, aucune mesure n&rsquo;a été faite, on a demandé à des gens leur avis sur ce que le produit leur faisait. Si vous connaissez un peu l&rsquo;effet placebo, vous savez ce qui peut se passer dans ce cas, surtout si on vous explique que le produit en question est fabriqué à base de la graisse du foie du dernier ours polaire ou un truc dans le genre, et donc vous voulez vraiment que ça marche.<br />
«&nbsp;[N&rsquo;importe quel terme à la mode type quantique, énergétique, ADN, ou autre truc du même genre]&nbsp;» En règle générale, dites-vous que si vous y panez rien, les publicistes non plus. Et donc on cherche à vous vendre des vessies pour des lanternes et au prix du caviar.</p>
<hr />
<p>En espérant avoir pu apporter un peu de lumière dans le chaos ambiant, je rends l'antenne, et on y retourne la semaine prochaine, car l'épidémie ne se termine pas avec l&rsquo;arrivée de 2024. En attendant, prenez soin de vous et des chercheurs qui bossent dur, et, aimez la science, la vraie, et ceux qui la font. Bisous.</p>
<hr />
<p>Les commentaires ne sont pas gérés ici , un espace de discussions vous est réservé sous la publication correspondante sur { Facebook( ) } du Docteur.</p>
    </div>)
}