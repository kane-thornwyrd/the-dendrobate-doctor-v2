
import {FC} from "react";

export const Article20230109LechodeslabosMetadata = {"tags":["covid","arrêt cardiaque","sportifs","McCullough","omicron","population carcérale","autopsies","hypothalamus","XBB.1.5","ACE2","Climat","Biodiversité","Amazonie","boa","PhArmageddon","Suisse","université","qualification","candidature","habilitation"],"title":"l'Écho des Labos - 9 janvier 2023","description":"Aujourd'hui, c'est dimanche. Vous êtes donc bien sur Radio Tartu, je suis le Dendrobate Doctor et nous sommes ensemble pour faire l'état de la recherche sur l'épidémie de Covid-19 et le reste.","date":"2023-01-09"}

export type Article20230109LechodeslabosProps = {className?: string, title: string, img: (...args: unknown[]) => string, UTip: (...args: unknown[]) => string}

export const Article20230109Lechodeslabos : FC<Article20230109LechodeslabosProps> = ({
  className, title, img, UTip
}) => {
  return (<div className={className}>
      <dl>
<dt>{ img("https://i2.wp.com/www.blogs.hss.ed.ac.uk/pubs-and-publications/files/2017/03/phd050508s.gif" ) }</dt>
<dd>©www.phdcomics.com
</dd>
</dl>
<h2 id="-title-"><a href="#-title-">{ title }</a></h2>
<p>Aujourd'hui, c'est dimanche. Vous êtes donc bien sur Radio Tartu, je suis le Dendrobate Doctor et nous sommes ensemble pour faire l'état de la recherche sur l'épidémie de Covid-19 et le reste.</p>
<p>Si vous aimez la chronique, vous pouvez nous soutenir sur { UTip( ) }.</p>
<p>Bienvenue à tous sur l'Echo des Labos.</p>
<hr />
<h3 id="fake-de-la-semaine"><a href="#fake-de-la-semaine">FAKE DE LA SEMAINE</a></h3>
<p>On a vu passer beaucoup de «&nbsp;morts subitement&nbsp;» et autres posts qui clament à qui veut l&rsquo;entendre que plein de gens vaccinés (ou en tout cas supposés tels) contre le Covid seraient mort d&rsquo;arrêt cardiaque, et le dernier en date concerne les sportifs de haut niveau, dont plus d&rsquo;un millier serait décédé ainsi l&rsquo;an passé contre une trentaine en temps normal. Regardons donc d&rsquo;où ça sort.</p>
<p>Tout commence par un article publié par deux médecins. Et déjà rien que là, on a deux problèmes. Le premier, c&rsquo;est qu&rsquo;il ne s&rsquo;agit pas d&rsquo;un article mais d&rsquo;une «&nbsp;lettre à l&rsquo;éditeur&nbsp;» (en gros, c&rsquo;est le courrier des lecteurs d&rsquo;une revue scientifique, ça n&rsquo;est pas revu par les pairs et ça ne suit pas un protocole scientifique), et les deux «&nbsp;médecins&nbsp;» en question sont défavorablement connus de nos services (vous pouvez par exemple rechercher «&nbsp;McCullough&nbsp;» sur la page, on a déjà pas mal parlé de lui…). Bon. Et du coup, qu&rsquo;est-ce qu&rsquo;ils nous racontent Charlie et Lulu&nbsp;? Et bien ils racontent que «&nbsp;1.598 sportifs ont subi un arrêt cardiaque, dont 1.101 en sont morts&nbsp;» l&rsquo;an passé, alors que «&nbsp;au cours des 38 années précédentes, 1.101 sportifs âgés de moins de 35 ans sont décédés, soit environ 29 par an&nbsp;». Déjà, rien que si on suit le lien de leurs chiffres, on se rend compte que non, les chiffres avancés sont ceux de 2021/2022 (donc deux ans) et les «&nbsp;38 années précédentes&nbsp;» sont en réalité 1966-2004… et manifestement, on se fout de ce qui a pu se passer au milieu.</p>
<p>Mais bon admettons, on peut se dire que ça fait quand même une sacrée différence. Sauf que les chiffres avancés pour 2021/2022 viennent d&rsquo;un site antivax de «&nbsp;recensement des effets post-vaccin chez les jeunes sportifs&nbsp;». Or, la manière dont ils recensent les cas consiste à prendre des articles de journaux, voir qu&rsquo;il s&rsquo;agit que quelqu&rsquo;un de jeune et de sportif ayant été victime d&rsquo;un incident cardiaque (fatal ou non) et de le compter comme «&nbsp;lié au vaccin&nbsp;» parce que… parce qu&rsquo;ils peuvent, je suppose. Mais si on prend le temps d&rsquo;ouvrir les liens et de fouiller un peu les articles, on se rend compte qu&rsquo;ils disent la plupart du temps que la mort est de cause inconnue, ou parfois d&rsquo;une autre cause identifiée, mais manifestement les gars qui tiennent le site s&rsquo;en cognent. Si on décide de se pencher sur les chiffres de 1966 à 2004, on se rend compte que ce n&rsquo;est pas beaucoup mieux&nbsp;: l&rsquo;étude ne compte que les cas d&rsquo;athlètes (donc déjà, ça place la barre là) investigués en détail (si la famille a refusé l&rsquo;autopsie ou si la pratique sportive n&rsquo;était pas renseignée, le cas n&rsquo;a pas été inclus) et sous-estime donc très largement l&rsquo;incidence de ce genre d&rsquo;accident. Les auteurs eux-mêmes notent cette limite et rappelle que les accidents cardiaques concernent 1 patient pour 50.000 moins de 35 ans, donc rien que la France doit en compter à peu près 500 par an, limite je suis surprise que les antivax en aient donc trouvé seulement 1.500 pour le monde entier en deux ans. On peut vraiment pas compter sur eux pour faire un travail décent, même quand il est question de trouver les données qui les arrangent, c&rsquo;est dingue ça&nbsp;!</p>
<hr />
<h3 id="decouverte-de-la-semaine"><a href="#decouverte-de-la-semaine">DECOUVERTE DE LA SEMAINE</a></h3>
<p>C&rsquo;est une découverte en forme de bonne nouvelle pour bien commencer l&rsquo;année. On savait que les vaccins réduisaient la transmission de la souche originelle, mais ça s&rsquo;était gâté avec les variants et on avait plus ou moins en tête qu&rsquo;avec Omicron, la vaccination servait à éviter les formes graves, mais niveau transmission walou. Et bien braves gens, nous avions tort.<br />
Les dernières études sur le sujet (à lire <a href="https://www.nature.com/articles/s41591-022-02138-x">ici</a>) et qui plus est menées en population carcérale (donc paye ta transmissibilité quoi) nous montre que la vaccination originelle (donc même pas la bivalente qui vient de débarquer en plus) conserve un intérêt dans la réduction de la transmission, et cela d&rsquo;autant plus si vous avez eu la «&nbsp;chance&nbsp;» de cumuler vaccination et infection. En effet, les vaccinés n&rsquo;ayant jamais été infectés ont 22% de risques en moins de transmettre le virus au moment où il finit par leur tomber dessus que les patients complètement naïfs (du point de vue immunitaire, j&rsquo;ai vu que mon utilisation de ce terme dans une des dernières chroniques avait  causé un peu de perplexité), là où les guéris non-vaccinés ont eu une réduction de 23% (autant dire que c&rsquo;est pareil) mais les heureux détenteurs du combo vaccin-guérison bénéficient d&rsquo;une réduction du risque de 40% (pouvant aller jusqu&rsquo;à 55% si le rappel est récent). Ce qui veut dire que, sur une souche aussi contagieuse que celles qu&rsquo;on se coltine en ce moment, être vacciné permet de ne transmettre ses microbes «&nbsp;que&nbsp;» à entre 4 et 8 personnes au lieu de 10. C&rsquo;est pas la panacée, mais les deux qui en réchappent grâce à ça vous remercieront.</p>
<hr />
<h3 id="piste-de-la-semaine"><a href="#piste-de-la-semaine">PISTE DE LA SEMAINE</a></h3>
<p><strong>Covid</strong>&nbsp;&#45; Persistance du virus&nbsp;: des autopsies réalisées sur 44 patients (âge moyen 62.5 ans) ayant contracté le Covid avant leur mort (délai moyen entre l&rsquo;infection et la mort&nbsp;: 18.5 jours) (à lire ici https://www.nature.com/articles/s41586-022-05542-y) ont révélé que le virus, au-delà des voies respiratoires hautes et basses, était retrouvé dans les tissus de 84 autres organes et fluides du corps. Un résultat particulièrement inquiétant concerne la positivité des tissus de l&rsquo;hypothalamus, une structure cérébrale très profonde et normalement très bien protégée, et qui joue un rôle central dans les fonctions vitales de l&rsquo;organisme, comme la respiration, le battement cardiaque, ou la régulation de la température. Si peu de dommages étaient constatés dans les zones cérébrales (les patients ne sont visiblement pas morts de ça), les chercheurs estiment que le développement, en seulement deux semaines, du virus dans des zones aussi diverses et profondes pourrait avoir une place importante dans la compréhension des mécanismes du Covid long. Des travaux supplémentaires sont en cours, car tous les patients décédés de l&rsquo;étude étaient non-vaccinés, et il n&rsquo;y a pas encore de réplication concernant les patients immunisés au préalable.</p>
<hr />
<h3 id="impasse-de-la-semaine"><a href="#impasse-de-la-semaine">IMPASSE DE LA SEMAINE</a></h3>
<p><strong>Covid &#45; Variant</strong>&nbsp;: c&rsquo;est à n&rsquo;en jamais finir… Un nouveau variant particulièrement contagieux (et toujours issu de la branche Omicron) a fait son apparition. Il n&rsquo;est pas venu de Chine où l&rsquo;épidémie est en pleine explosion (en vrai, ça ne saurait tarder, soyons lucides…), mais a été détecté aux USA. XBB.1.5 de son petit nom possède en effet une capacité accrue à se lier avec les récepteurs ACE2, les «&nbsp;portes d&rsquo;entrées&nbsp;» de nos cellules. Gagnant vite du terrain (il représente déjà 40% des contaminations du pays), il est directement lié à une hausse importante des hospitalisations dans plusieurs états, mais il semblerait que cela soit dû au nombre de cas supplémentaires qu&rsquo;il engendre, plutôt qu&rsquo;à une sévérité accrue.</p>
<p><em>Source&nbsp;: Département des maladies infectieuses de l'Université du Minnesota</em></p>
<hr />
<h3 id="mauvaise-nouvelle-de-la-semaine"><a href="#mauvaise-nouvelle-de-la-semaine">MAUVAISE NOUVELLE DE LA SEMAINE</a></h3>
<p><strong>Climat</strong>&nbsp;: 2022 a bien été l&rsquo;année la plus chaude jamais enregistrée dans l&rsquo;Hexagone. Et si elle est la pire, comme dirait Homer, elle n&rsquo;est que «&nbsp;la pire pour l&rsquo;instant&nbsp;». A l&rsquo;exception de janvier et avril, l&rsquo;ensemble des mois ont emplafonné leurs records respectifs de chaleur, on ne peut donc pas se raccrocher à l&rsquo;idée que c&rsquo;est une moyenne influencée par un été caniculaire. Celui-ci a d&rsquo;ailleurs compté un nombre record de 33 vagues de chaleur, alors que la pluviométrie accusait de son côté un déficit sidérant de -25% sur l&rsquo;ensemble de l&rsquo;année et jusqu&rsquo;à -80% en juillet. Météo France annonce, au vu de l&rsquo;hiver que nous continuons à avoir, que 2023 est d&rsquo;ores et déjà un challenger crédible du record en question… Puisque manifestement, on ne veut pas écouter les scientifiques, je propose d&rsquo;écouter les cinéastes&nbsp;: «&nbsp;C'est l'histoire d'une société qui tombe et qui au fur et à mesure de sa chute se répète sans cesse pour se rassurer&nbsp;: jusqu'ici tout va bien, jusqu'ici tout va bien, jusqu'ici tout va bien… Le problème ce n'est pas la chute, c'est l'atterrissage.&nbsp;»</p>
<p><em>Source&nbsp;: Météo France (et Mathieu Kassovitz)</em></p>
<hr />
<h3 id="bonne-nouvelle-de-la-semaine"><a href="#bonne-nouvelle-de-la-semaine">BONNE NOUVELLE DE LA SEMAINE</a></h3>
<p><strong>Biodiversité</strong>&nbsp;: une nouvelle espèce de boa a été découverte en Amazonie équatorienne. Il s&rsquo;agit d&rsquo;un boa «&nbsp;nain&nbsp;» (entendez qu&rsquo;il fait une vingtaine de centimètres seulement) et surtout d&rsquo;un serpent particulièrement primitif, puisqu&rsquo;il possède encore un bassin à l&rsquo;état vestigial (<a href="https://europeanjournaloftaxonomy.eu/index.php/ejt">ici</a> pour plus d&rsquo;infos sur à quoi ça ressemble), une relique du temps où les ancêtres des serpents ont perdu leurs pattes, il y a plusieurs millions d&rsquo;années.</p>
<hr />
<h3 id="quest-ce-que-putain-de-quoi"><a href="#quest-ce-que-putain-de-quoi">«&nbsp;QU&rsquo;EST-CE QUE PUTAIN DE QUOI&nbsp;?&nbsp;»</a></h3>
<p>Il n&rsquo;y a pas que chez Les Vaxxeuses que je trouve régulièrement des perles en cherchant de l&rsquo;inspiration pour mon Fake de la semaine. Si vous ne connaissez pas l&rsquo;ami PhArmageddon, je vous encourage à aller jeter un œil.</p>
<p>L&rsquo;histoire qui va nous intéresser aujourd&rsquo;hui se passe en Suisse. Alors, j&rsquo;étais déjà consciente du fort lien qui existe entre fondamentalisme religieux et position antivax. Mais je n&rsquo;avais pas idée que ça touchait aussi les païens (par pur préjugé, sans doute). A quoi ça ressemble, me demanderez-vous, à rien, suis-je tentée de vous répondre, mais ce n&rsquo;est pas exactement vrai. Ça ressemble à des mecs qui se promènent en portant des grosses cloches à vache sur fond de musique épique (alors qu&rsquo;ils sont juste en rando en tee-shirt blanc à capuche, faut se calmer) pour aller exploser un ballon satanique avant de brûler une seringue géante en bois sur laquelle il y a gravé Covid 19 dans une espèce de petite cérémonie rituelle cheap. Du coup, pas à grand-chose en vrai. J&rsquo;attends de voir si les Français font pareil mais en portant des litrons de gros rouge qui tache en procession, ça peut valoir le coup d&rsquo;œil…</p>
<hr />
<h3 id="point-methode-de-la-semaine-devenir-chercheur--trouver-sa-place-luniversité-en-france"><a href="#point-methode-de-la-semaine-devenir-chercheur--trouver-sa-place-luniversité-en-france">POINT METHODE DE LA SEMAINE&nbsp;: Devenir chercheur &#45; Trouver sa place (L&rsquo;université en France)</a></h3>
<p>Une fois qu&rsquo;un étudiant est devenu docteur (et en réalité même un peu avant), la première possibilité qui s&rsquo;offre à lui est la recherche publique, au sein de l&rsquo;université. Les postes ici cumulent enseignement et recherche, je parlerai un autre jour de ce qui concerne les postes purement de recherche. Je vais d&rsquo;abord vous parler du parcours standard, puis de ce qui gravite autour.</p>
<h4 id="étape-1---la-qualification"><a href="#étape-1---la-qualification">Étape 1 - La qualification</a></h4>
<p>Simplement être docteur ne vous autorise pas à candidater à des postes à l&rsquo;université en France (et ceci est valable uniquement pour la France, partout ailleurs dans le reste du monde, cette étape a l&rsquo;air absolument débile, mais je parlerai de l&rsquo;étranger une prochaine fois). Pour avoir le droit d&rsquo;être candidat, vous devez obtenir une qualification. Pour cela, vous devez choisir une section parmi plusieurs dizaines qui se rapproche le plus du travail que vous faites (je suis par exemple qualifiée section 7, et avec ça vous êtes bien avancés) puis regarder quels sont les éléments que les membres de la section réclament pour évaluer si vous êtes aptes à être candidat (oui, on parle toujours de juste être candidat) à un poste, car les pièces demandées varient selon les sections, donc si vous postulez dans plusieurs, vous devez refaire votre dossier à chaque fois. Dans ma section par exemple, on vous demande d&rsquo;abord de renseigner des informations en ligne (qui seront toutes ensuite incluses dans d&rsquo;autres documents qu&rsquo;on va vous demander, vous en faites pas…), puis de fournir votre rapport de soutenance ainsi que votre thèse, une liste de toutes vos publications sauf la vulgarisation parce que chacun sait que la vulgarisation ça n&rsquo;a aucun espèce d&rsquo;intérêt pour évaluer si quelqu&rsquo;un est apte à être un bon chercheur et un bon enseignant, joindre 3 publications, joindre un résumé en français de vos publications si elles sont en anglais parce qu&rsquo;on va quand même pas demander à des membres de commissions scientifiques de savoir lire l&rsquo;anglais, et de faire un «&nbsp;CV&nbsp;» (je mets des guillemets parce que ce qu&rsquo;on vous demande c&rsquo;est en fait de faire une rédaction comme à l&rsquo;école pour expliquer votre parcours et ça fait 6 pages). Il n&rsquo;y a qu&rsquo;une campagne par an, si vous ne déposez pas votre dossier à temps, il vous faudra attendre l&rsquo;année suivante, et pendant ce temps-là, vous n&rsquo;avez bien entendu pas le droit de candidater à un poste. Une qualification est valable 4 ans, ce qui fait que si vous n&rsquo;avez pas de poste passé ce délai (et ça aussi je vais y revenir), il faudra recommencer tout ce cirque.</p>
<h4 id="étape-2---la-candidature"><a href="#étape-2---la-candidature">Étape 2 - La candidature</a></h4>
<p>La campagne de recrutement des maîtres de conférence s&rsquo;ouvre une fois par an. Vous devrez regarder l&rsquo;ensemble des postes disponibles, dans la spécialité que vous voulez (oui parce que vous avez tout à fait le droit de candidater hors de votre section de qualification, si vous aviez un doute sur à quel point ça sert à rien) et en choisir un nombre restreint. Je dis cela car le dossier de candidature demande un travail fou, donc il est impossible de candidater partout. En plus de fournir des informations en ligne (qui sont les mêmes et sur le même site, mais qu&rsquo;il faut quand même saisir à chaque fois), il vous faudra généralement fournir une preuve de votre diplôme, une liste de publications et à nouveau un «&nbsp;CV&nbsp;» (ce coup-ci il présente aussi votre projet de recherche et d&rsquo;enseignement, n&rsquo;espérez pas vous en tirer à moins de 20 pages). Pour ce dernier document, il est particulièrement important que l&rsquo;aspirant chercheur ait un bon tissu social, car rien n&rsquo;est jamais, nulle part, précisé sur ce qui est attendu et comment vous devez le faire, c&rsquo;est en prenant conseil auprès de vos collègues qui ont réussi à obtenir un poste que vous aurez une vague idée de quoi faire. Si vous êtes chanceux, vous serez convoqué pour un oral. Si vous êtes chanceux plusieurs fois, vous serez convoqué à plusieurs oraux pour des candidatures différentes, mais qui peuvent parfaitement tomber le même jour sur des universités à l&rsquo;autre bout de la France. Aucun aménagement n&rsquo;étant possible, il vous faudra alors faire un choix (ce choix peut impliquer de faire 3h dans un TER sans Wifi pour aller faire 20min d&rsquo;entretien à Limoges, et je vous jure que vous réfléchissez au sens de votre vie à ce moment-là). Avec un peu de chance, vous serez classé premier (ou deuxième mais le premier déclinera parce qu&rsquo;il veut être classé en Bretagne près de sa mémé) et vous finirez par obtenir, enfin, un poste d&rsquo;enseignant-chercheur à l&rsquo;université. Il y en a en moyenne 1 pour 180 nouveaux docteurs chaque année dans ma section, à titre d&rsquo;exemple… En 2017 (année où j&rsquo;ai eu mon doctorat), il fallait compter, selon la discipline, entre 3 et 6 ans en moyenne entre l&rsquo;obtention de son diplôme et celle d&rsquo;un poste. En moyenne. Donc vous avez le temps d&rsquo;en refaire, des qualifications.</p>
<h4 id="étape-3---lhabilitation"><a href="#étape-3---lhabilitation">Étape 3 - L&rsquo;habilitation</a></h4>
<p>Attendez, c&rsquo;est pas fini&nbsp;! Une fois en poste, le chercheur n&rsquo;est qu&rsquo;un semi-chercheur (en France toujours, le reste du monde trouve ça toujours aussi débile), qui n&rsquo;a pas le droit d&rsquo;accéder à de vraies responsabilités comme encadrer les thèses (et cela même si ses collègues superviseurs sont débordés et le supplient de prendre des étudiants). Pour avoir ce droit, il faut passer l&rsquo;habilitation à diriger les recherches, ou HDR. En termes de volume, de travail et de temps, c&rsquo;est une seconde thèse, en gros. Mais qui ne peut pas être sur la même thématique que la première. Pour ça, il vous faudra trouver un superviseur, vous inscrire, rédiger votre pavé… bref, la même galère que pour la thèse mais alors que vous êtes en poste à temps plein. Et à l&rsquo;issue de cette nouvelle soutenance, vous êtes enfin Professeur, pouvant diriger des thèses.</p>
<p>Et si vous m&rsquo;avez suivie jusque-là, vous devez voir plusieurs problèmes…</p>
<ol>
<li>Mais de quoi vivent les chercheurs pendant qu&rsquo;ils font tout ce merdier en attendant d&rsquo;avoir un poste&nbsp;? L&rsquo;université grouille de contrats plus ou moins précaires&nbsp;: les ATER (assistants temporaires d&rsquo;enseignement et de recherche, contrats limités à un an renouvelable une seule fois) et surtout les vacataires (des gens qui font des heures à droite à gauche et pour lesquels il existe une exception manifeste au droit du travail qui autorise à ne les payer qu&rsquo;une fois tous les six mois au lieu de leur verser mensuellement leur dû). On estime qu&rsquo;il y a l&rsquo;équivalent de 10.000 temps plein en contrats précaires à l&rsquo;université…</li>
<li>Mais attendez, tous les examens là portent sur les travaux de recherche, comment on sait que quelqu&rsquo;un sera un bon prof&nbsp;? On ne sait pas, et j&rsquo;ai l&rsquo;impression qu&rsquo;on s&rsquo;en fout, pour être honnête. Surtout que l&rsquo;enseignement est très peu pris en compte pour les avancements de carrière, ce sont les publis qui comptent, donc ça n&rsquo;encourage même pas à être un bon prof.</li>
<li>Si un chercheur arrive de l&rsquo;étranger, comment on le situe dans toute cette hiérarchie cheloue&nbsp;? On le situe pas, ou très mal. Donc on évite d&rsquo;avoir des chercheurs étrangers, c&rsquo;est plus simple.</li>
<li>Dites-moi au moins que vous êtes grassement payé pour endurer ça&nbsp;? A niveau de vie équivalent (je vais citer les exemples que je connais), le salaire des enseignements-chercheurs en France correspond aux deux-tiers de la moyenne des salaires de leurs collègues de l&rsquo;OCDE. Je suis plus payée en Estonie qu&rsquo;en France, alors que le coût de la vie (en tout cas avant qu&rsquo;on prenne 25% d&rsquo;inflation dans la gueule) était près de deux fois plus bas, et les collègues Allemands estiment que c&rsquo;est malgré tout un petit salaire. Pour vouloir être enseignant-chercheur en France, la question du «&nbsp;comment&nbsp;» est aussi compliquée que celle du «&nbsp;pourquoi&nbsp;».</li>
</ol>
<p>En espérant avoir pu apporter un peu de lumière dans le chaos ambiant, je rends l'antenne, et on y retourne la semaine prochaine, car l'épidémie ne se termine pas avec la nouvelle année. En attendant, prenez soin de vous et des chercheurs qui bossent dur, et, autant que possible, restez chez vous, surtout s&rsquo;il fait moins 17 comme ici. Bisous.</p>
<hr />
<p>Les commentaires ne sont pas gérés ici , un espace de discussions vous est réservé sous la publication correspondante sur <a href="https://www.facebook.com/TheDendrobateDoctor/?ref=page_internal">la page Facebook du Docteur</a>.</p>
    </div>)
}