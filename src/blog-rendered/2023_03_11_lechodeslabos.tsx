
    import { Article } from "@/atoms/Article";
    
    export const Article20230311LechodeslabosMetadata = {"tags":["covid","astéroïde","Saint-Valentin",2046,"2023 DW","zoonose","peste noire","yersinia pestis","ERAP2","polyarthrite rhumatoïde","maladie de Crohn","myocardites","National Covid cohort collaborative","Alexandra Henrion-Caude","vaccins ARN","Sud Radio","Cnews","Axel Kahn","Didier Raoult","Luc Montagnier","Bolloré","Thierry Casasnovas","emprise mentale","exercice illégal de la médecine","escroquerie","abus de faiblesse","blanchiment d’argent","espèces liminaires","fibre optique"],"title":"l'Écho des Labos - 11 mars 2023","description":"Aujourd'hui, c'est dimanche. Vous êtes donc bien sur Radio Tartu, je suis le Dendrobate Doctor et nous sommes ensemble pour faire l'état de la recherche sur l'épidémie de Covid-19 et le reste.","date":"2023-03-11"}
    
    export const Article20230311Lechodeslabos : Article = ({
      className, title, img, UTip
    }) => {
      return (<div className={className}>
          { img("https://www.digital-science.com/wp-content/uploads/2016/06/PEER-REVIEW-COLOR-1.jpg",  "",  "width:100%" ) }
<h2 id="-title-"><a href="#-title-">{ title }</a></h2>
<p>Aujourd'hui, c'est dimanche. Vous êtes donc bien sur Radio Tartu, je suis le Dendrobate Doctor et nous sommes ensemble pour faire l'état de la recherche sur l'épidémie de Covid-19 et le reste.</p>
<p>Si vous aimez la chronique, vous pouvez nous soutenir sur { UTip( ) }.</p>
<p>Bienvenue à tous sur l'Echo des Labos.</p>
<hr />
<h3 id="fake-de-la-semaine"><a href="#fake-de-la-semaine">FAKE DE LA SEMAINE</a></h3>
<p>Aujourd&rsquo;hui, on va parler d&rsquo;un fake qui n&rsquo;en est pas complètement un et qui n&rsquo;a rien à voir avec le Covid, juste pour illustrer ce que je veux dire quand je me plains du traitement que les journalistes font des infos à portée scientifique.</p>
<p>Si jamais vous le saviez pas, les journaleux vous diront que «&nbsp;Un astéroïde géant pourrait frapper la Terre le jour de la Saint-Valentin 2046&nbsp;». Alors l&rsquo;astéroïde en question, de son petit nom 2023 DW, est un géocroiseur de près de 50m de diamètre, qui à l&rsquo;heure actuelle se balade à la distance fort respectable de 18 millions de kilomètres de notre pomme. Il est actuellement classé en risque 1 sur l&rsquo;échelle de Turin, qui classe les astéroïdes selon leur risque de collision avec la Terre de 0 (même pas en rêve cousin) à 10 (on est tous morts). C&rsquo;est-à-dire que sa trajectoire est normale pour un objet de sa taille dans notre voisinage et que genre on jette un œil dessus pour être sûr.</p>
<p>Et du coup pour être sûrs (et parce que des fois ils ont que ça à foutre), il y a des chercheurs qui ont fait deux trois calculs. Et les résultats sont «&nbsp;à 99.84% il se passe que dalle, vous pouvez aller au resto avec votre Jules tranquille&nbsp;». Pour les 0.16% de risques restants, ça se passerait dans un couloir allant du Sri Lanka au Nord-Est des USA. Dans cet ordre-là. Donc les 4/5e de la zone concernée, c&rsquo;est de la flotte, et pas de la flotte proche des habitations, de la flotte genre le milieu du Pacifique. Ce qui fait que, avec la précision que peuvent avoir des calculs faits 23 ans à l&rsquo;avance, il y a peut-être éventuellement 0.032% de risque si vous décidez d&rsquo;essayer d&rsquo;emballer au Vietnam, aux Philippines ou dans le Wyoming (sans rire, pourquoi&nbsp;?), ben que ce soit pas la meilleure idée de la Terre. Mais en vrai, on a grave le temps de mourir de facile deux ou trois zoonoses mondiales avant, donc c&rsquo;est pas de ça que je me soucierais si j&rsquo;étais vous.</p>
<hr />
<h3 id="decouverte-de-la-semaine"><a href="#decouverte-de-la-semaine">DECOUVERTE DE LA SEMAINE</a></h3>
<p>Alors que le monde peine à se sortir d&rsquo;une zoonose tout en ne faisant absolument rien pour essayer d&rsquo;empêcher la suivante d&rsquo;arriver, les dernières découvertes en date sur une zoonose plus ancienne nous éclairent sur les mécanismes de la survie humaine. Je parle bien sûr de LA zoonose entre toutes, la Peste Noire.</p>
<p>Pour rappel, la Peste Noire, c&rsquo;est une épidémie (de sans doute plusieurs pestes différentes d&rsquo;ailleurs, puisque les descriptions historiques évoquent les symptômes tantôt de peste bubonique, tantôt de peste pneumonique) provoquée par la bactérie Yersinia pestis, qui a sévi en Europe et en Afrique du Nord de 1347 à 1351. Pendant les premières vagues de Covid, on a entendu des antivax sortir que cette épidémie-là s&rsquo;était éteinte toute seule et qu&rsquo;il y avait pas eu besoin de vaccin mutagène pour ça. C&rsquo;est oublier, déjà, qu&rsquo;elle s&rsquo;est essoufflée après avoir tué entre un tiers et la moitié de la population humaine des régions touchées. Mais ce que la dernière étude en date montre (<a href="https://www.cell.com/ajhg/fulltext/S0002-9297(23)00052-6">ici</a>), c&rsquo;est que c&rsquo;est aussi méconnaître le fait qu&rsquo;elle a profondément changé notre patrimoine génétique. Yersinia a en effet sélectionné de force ceux de nos ancêtres porteurs de deux variantes particulières du gène ERAP2, qui est en charge de la découpe de certaines protéines pour le système immunitaire.</p>
<p>Les porteurs de ces variantes auraient ainsi bénéficié d&rsquo;une plus grande protection face aux infections respiratoires, comme la pneumonie ou, au hasard, le Covid… mais auraient en contrepartie hérité d&rsquo;une prédisposition bien plus importante aux maladies auto-immunes comme la polyarthrite rhumatoïde ou la maladie de Crohn, expliquant peut-être pourquoi celles-ci sont plus fréquentes en Europe et en Afrique du Nord que dans le reste du monde. Car on le rappelle, pour les bas du front qui ont rien écouté en bio&nbsp;: la sélection naturelle ne fait pas ce qui est bon pour nous. Elle permet à ce qui marche à peu près de survivre à court-terme, y compris au prix de plus lourdes séquelles à long-terme. La nature ne veut pas notre bien. La nature ne veut rien, et si elle avait une volonté, il est probable qu&rsquo;elle s&rsquo;en cognerait de toute façon.</p>
<hr />
<h3 id="piste-de-la-semaine"><a href="#piste-de-la-semaine">PISTE DE LA SEMAINE</a></h3>
<p><strong>Covid &#45; Myocardites</strong>&nbsp;: est-ce que vous voulez une blague, un peu&nbsp;? Non mais en vrai, c&rsquo;est une bonne nouvelle, donc c&rsquo;est drôle pour de vrai. Un peu. Si on aime l&rsquo;humour noir. Un peu. Bref. Dans une publication annonçant la sortie prochaine des résultats complets (en gros, les résultats ont été présentés en congrès scientifique et l&rsquo;équipe fait ce truc pour acter la paternité de ses résultats et éviter qu&rsquo;on leur pique le temps qu&rsquo;ils fassent l&rsquo;article complet, si vous voulez plus de détails <a href="https://consumer.healthday.com/acc-covid-19-vaccination-cuts-risk-for-cardiac-events-with-sars-cov-2-infection-2659471210.html">c&rsquo;est là</a>), une équipe New-Yorkaise a analysé les données de la "National Covid cohort collaborative" (presque 2 millions de patients tout de même). Et comme c&rsquo;est une équipe de cardiologie, ils ont regardé les accidents cardiaques. Et ils ont donc trouvé que les patients vaccinés avaient 41% de risque… en moins d&rsquo;être victimes d&rsquo;incidents cardiaques que ceux qui ne l&rsquo;étaient pas (24% de réduction pour ceux qui ne sont que partiellement vaccinés). On attend le traitement des facteurs confondants (genre, est-ce que les vaccinés ont moins chopé le Covid et que c&rsquo;est le Covid qui crée un surrisque&nbsp;? Est-ce que les non-vaccinés sont plus en train de gueuler sur tout et que ça leur file de l&rsquo;hypertension&nbsp;? Est-ce que c&rsquo;est les nano-robots de Bill Gates le Reptilien qui ont une option «&nbsp;pose de stents&nbsp;»&nbsp;? C&rsquo;est du sarcasme, Facebook, c&rsquo;est du sarcasme, pose ce flingue…), mais j&rsquo;avoue que ça me fait déjà doucement rire.</p>
<hr />
<h3 id="impasse-de-la-semaine"><a href="#impasse-de-la-semaine">IMPASSE DE LA SEMAINE</a></h3>
<p><strong>Covid &#45; Séquelles</strong>&nbsp;: une étude britannique menée sur 331 patients répartis dans plusieurs hôpitaux publics (<a href="https://journals.sagepub.com/doi/epdf/10.1177/01410768231154703">et à lire ici</a>) a rendu ses résultats après un an de suivi. Celui-ci consistait en différentes IRM ciblant le cœur, les poumons, le foie, la rate, le pancréas et les reins, afin de suivre la guérison des différents organes. Au début de l&rsquo;étude, tous présentaient des symptômes post-infection et 69% avaient des lésions très claires à un organe (23% en avaient plusieurs de visiblement touchés). Après un an de suivi, l&rsquo;amélioration est visible mais lente&nbsp;: 59% présentent toujours des lésions identifiables (bonne nouvelle toutefois, le cœur et les poumons semblent récupérer le plus vite), et si les symptômes s&rsquo;améliorent un peu, les patients restent fragiles. A ce stade, il n&rsquo;est toujours pas clair comment les symptômes et les lésions sont reliées, ni ce qu&rsquo;il peut être fait pour permettre aux lésions de se résorber.</p>
<hr />
<h3 id="mauvaise-nouvelle-de-la-semaine"><a href="#mauvaise-nouvelle-de-la-semaine">MAUVAISE NOUVELLE DE LA SEMAINE</a></h3>
<p><strong>Désinformation</strong>&nbsp;: comme si on avait besoin de ça, Alexandra Henrion-Caude sort un nouveau bouquin pour «&nbsp;révéler&nbsp;» au public tout ce que «&nbsp;on&nbsp;» vous cache au sujet des vaccins ARN. Et il va se vendre, parce que SudRadio lui fait de la pub (ben oui, on va pas se priver de donner de la visibilité à une conspi de plus), parce que Cnews lui fait encore plus de pub (ben oui, on va pas se priver de donner de la visibilité à une catho intégriste de plus), et parce qu&rsquo;elle est trop loin pour entendre la moindre contradiction de toute façon. C&rsquo;est encore Axel Kahn, son ancien directeur de thèse, qui en parlait le mieux, quelques jours avant d&rsquo;apprendre qu&rsquo;elle avait porté plainte en diffamation contre lui, alors qu&rsquo;il était déjà en phase terminale de son cancer&nbsp;: «&nbsp;Alexandra est à mon sens un cas unique en son genre. Des savants maudits à la belle carrière, qui tout à coup ont une idée et sont incapables de la remettre en cause, il y en a eu beaucoup. Voyez Didier Raoult, ou Luc Montagnier. Mais son cas est différent. Elle articule la réalité autour de sa vérité spirituelle.&nbsp;»&nbsp;Brutus savoure son triomphe, avec le soutien de Bolloré.</p>
<hr />
<h3 id="bonne-nouvelle-de-la-semaine"><a href="#bonne-nouvelle-de-la-semaine">BONNE NOUVELLE DE LA SEMAINE</a></h3>
<p><strong>Justice</strong>&nbsp;: vous n&rsquo;avez pas pu passer à côté (certains d&rsquo;entre vous me l&rsquo;ont même envoyé en MP), Thierry Casasnovas est en garde à vue (ceux qui ont dit «&nbsp;enfin&nbsp;!&nbsp;»… ça passe pour cette fois, parce qu&rsquo;en vrai j&rsquo;ai fait pareil). Après plus de 600 signalements (tout de même, fallait attendre quoi, qu&rsquo;il y ait un mort&nbsp;? oh, wait…), le gourou a été présenté vendredi devant le juge pour plusieurs mises en examen, dont «&nbsp;emprise mentale&nbsp;», «&nbsp;exercice illégal de la médecine&nbsp;», «&nbsp;escroquerie&nbsp;» (des montages financiers d&rsquo;environ 2.7 millions d&rsquo;euros sont visés, tout de même) ou encore «&nbsp;abus de faiblesse&nbsp;». L&rsquo;une de ses associées a été également placée en garde à vue pour blanchiment d&rsquo;argent, ce qui tend à être considéré comme bon signe&nbsp;: si on a pu croire pendant la crise que tout le monde s&rsquo;en foutait des dérives sectaires, on est en revanche sûrs que personne n&rsquo;échappe au Fisc.</p>
<hr />
<h3 id="quest-ce-que-putain-de-quoi"><a href="#quest-ce-que-putain-de-quoi">«&nbsp;QU&rsquo;EST-CE QUE PUTAIN DE QUOI&nbsp;?&nbsp;»</a></h3>
<p>Ceux d&rsquo;entre vous qui suivent mon travail (celui pour lequel je suis payée, enfin payée avec un vrai salaire qui donne droit à des points retraite et tout, même si j&rsquo;aime d&rsquo;amour ceux qui soutiennent la page sur UTip, bref&nbsp;!) savent que la cohabitation entre les humains et les espèces liminaires n&rsquo;est pas toujours de tout repos. Et nous en avons vraisemblablement eu une merveilleuse illustration en Vendée la semaine dernière, lors d&rsquo;un incident majeur sur le réseau de la fibre optique. Les 4 et 5 mars une douzaine de communes ont été privées de téléphone et d&rsquo;accès Internet à cause… d&rsquo;un rat (enfin d&rsquo;un rongeur, mais on soupçonne un rat) qui a partiellement rongé un câble de collecte, parce que c&rsquo;est ce que les rongeurs font quand ils tombent sur des trucs nouveaux, un peu comme les bébés qui mettent tout dans la bouche pour voir ce que c&rsquo;est à un âge où ils ignorent encore que des choses comme les clous, le piment-oiseau ou le corned-beef font partie de ce monde. Et comme pour les enfants qu&rsquo;on protège en évitant de laisser trainer des trucs, on se demande comment un rongeur a pu avoir accès à ce câble… Mais comme ça reste plus probable qu&rsquo;un ouvrier du BTP fou qui serait venu mettre dedans des coups de pelleteuse en pleine nuit, on va devoir s&rsquo;en contenter.</p>
<hr />
<h3 id="point-methode-de-la-semaine-la-publication-scientifique--la-peer-review"><a href="#point-methode-de-la-semaine-la-publication-scientifique--la-peer-review">POINT METHODE DE LA SEMAINE&nbsp;: la publication scientifique &#45; La peer-review</a></h3>
<p>Vous avez souvent vu passer sur la chronique le fait qu&rsquo;un papier était, ou n&rsquo;était pas, relu par les pairs, qu&rsquo;il avait, ou n&rsquo;avait pas, passé la peer-review. Et que c&rsquo;était important pour pouvoir garantir la qualité dudit papier. Mais du coup, comment ça marche la peer-review&nbsp;? Pour ce faire, je vous embarque dans la dernière que j&rsquo;ai eue à subir en date.</p>
<h4 id="étape-1-choisir-le-bon-interlocuteur"><a href="#étape-1-choisir-le-bon-interlocuteur">Étape 1&nbsp;: choisir le bon interlocuteur</a></h4>
<p>Dans mon cas, ça consiste à faire un peu comme mon chat quand elle attend les gens en embuscade à la sortie des toilettes, mais avec mon superviseur en sortie de réunion, profitant de l&rsquo;effet de surprise pour l&rsquo;empêcher de s&rsquo;enfuir. L&rsquo;idée est de lui coller mon papier dans les mains pour avoir son avis et savoir à quel journal je l&rsquo;envoie. En effet, le premier risque de rejet, c&rsquo;est de s&rsquo;adresser à un journal qui ne publie pas le type de papier qu&rsquo;on vient de pondre.</p>
<h4 id="étape-2-soumettre-le-papier"><a href="#étape-2-soumettre-le-papier">Étape 2&nbsp;: soumettre le papier</a></h4>
<p>On choisit un journal approprié, et on envoie ledit papier. Le plus souvent, ça ne se fait pas comme ça, et il faut rédiger une «&nbsp;cover letter&nbsp;», l&rsquo;équivalent d&rsquo;une lettre de motivation mais pour un article. C&rsquo;est aussi à ce moment-là que je peux (re)déclarer mes financements et mes potentiels conflits d&rsquo;intérêt, pour faciliter le choix de relecteurs objectifs. Pour cette même raison, vous pouvez explicitement déclarer que vous ne voulez pas que untel ou untel soit relecteur parce qu&rsquo;il vous a dans le nez personnellement.</p>
<h4 id="étape-3-attribuer-un-éditeur"><a href="#étape-3-attribuer-un-éditeur">Étape 3&nbsp;: attribuer un éditeur</a></h4>
<p>Le journal reçoit mon dossier et va lui attribuer un éditeur. Cette personne est un chercheur, comme moi, et elle est bénévole, le journal ne paye pas ses éditeurs. Elle va avoir la lourde tâche de coordonner la peer-review, en l&rsquo;occurrence solliciter 14 reviewers dans l&rsquo;espoir que 2 lui répondent.</p>
<h4 id="étape-4-attendre-la-critique-des-pairs"><a href="#étape-4-attendre-la-critique-des-pairs">Étape 4&nbsp;: attendre la critique des pairs</a></h4>
<p>Parce que les reviewers, qui sont aussi des scientifiques, ne sont pas payés non plus par le journal. Du coup, beaucoup refusent faute de temps. Pour donner un exemple du moment où j&rsquo;ai été reviewer pour la dernière fois, j&rsquo;ai lu le papier une première fois, lu une seconde fois en prenant des notes, vérifié des références que je trouvais un peu étranges, checké trois fois un tableau très mal foutu, essayé de comprendre un point de stats, admis que je panais rien à un point de stats, écrit mon rapport pour l&rsquo;éditeur, demandé des corrections (en particulier sur ce tableau pourri incompréhensible), mentionné que j&rsquo;avais rien pané aux stats et que du coup sur cette partie-là il fallait l&rsquo;avis de quelqu&rsquo;un d&rsquo;autre, et tout renvoyé à l&rsquo;éditeur. C&rsquo;est du boulot.</p>
<h4 id="étape-5-recevoir-la-critique-des-pairs"><a href="#étape-5-recevoir-la-critique-des-pairs">Étape 5&nbsp;: recevoir la critique des pairs</a></h4>
<p>A ce moment-là, il y a une espèce de prophétie qui dit que tout ira bien avec le rapport du Reviewer 1 et tout ira mal dans celui du Reviewer 2. En l&rsquo;occurrence le premier trouvait l&rsquo;article «&nbsp;clair et bien structuré&nbsp;», le second lui trouvait «&nbsp;des problèmes de structures et une très mauvaise maitrise de la langue anglaise qui aurait besoin de la relecture d&rsquo;un locuteur natif&nbsp;» (l&rsquo;article ayant à l&rsquo;origine été corrigé par mon collègue Canadien, j&rsquo;ai eu la douleur de lui apprendre que manifestement l&rsquo;anglais n&rsquo;était pas sa langue maternelle… comme quoi on en apprend tous les jours).</p>
<h4 id="étape-6-recommencer"><a href="#étape-6-recommencer">Étape 6&nbsp;: recommencer</a></h4>
<p>A ce stade, il faut faire les corrections (généralement sous 14 jours) basées sur les rapport des reviewers (généralement attendus pendant 4 mois), renvoyer l&rsquo;article et attendre à nouveau l&rsquo;avis des reviewers. Ça peut prendre plusieurs tours comme ça. Heureusement dans mon cas, les corrections ont été validées et l&rsquo;article a été accepté au second envoi.</p>
<h4 id="étape-7-être-publié"><a href="#étape-7-être-publié">Étape 7&nbsp;: être publié</a></h4>
<p>Lorsque vous êtes publié après la review par les pairs, on sait que des spécialistes se sont penchés sur votre article, que vous avez dû corriger des erreurs, des éléments qui rendaient votre papier peu clair ou nuancer des affirmations trop enthousiastes. C&rsquo;est un gage de qualité, et c&rsquo;est surtout la preuve que vous avez accepté que votre travail devait être soumis à la critique des spécialistes pour avoir une validité. Que vous êtes confiant dans votre travail et dans votre méthode, assez pour être prêts à défendre vos résultats devant des gars aussi forts que vous. Bref, que vous faites de la science et que vous en connaissez les règles du jeu. Ça ne se passe pas toujours aussi bien, mais nous verrons cela la semaine prochaine…</p>
<hr />
<p>En espérant avoir pu apporter un peu de lumière dans le chaos ambiant, je rends l'antenne, et on y retourne la semaine prochaine, car l'épidémie ne se termine pas avec les grèves en France (j&rsquo;avoue que je vois ça de loin, mais ça a l&rsquo;air d&rsquo;être quelque chose). En attendant, prenez soin de vous et des chercheurs qui bossent dur, et, autant que possible, restez chez vous. Bisous.</p>
<hr />
<p>Les commentaires ne sont pas gérés ici , un espace de discussions vous est réservé sous la publication correspondante sur <a href="https://www.facebook.com/TheDendrobateDoctor/?ref=page_internal">la page Facebook du Docteur</a>.</p>
        </div>)
  }