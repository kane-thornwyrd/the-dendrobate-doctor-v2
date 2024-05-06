import { FC, HTMLAttributes } from "react"

export const AboutMeURL = import.meta.env.BASE_URL + 'moi'

export type AboutMeProps = {
}

export const AboutMe: FC<AboutMeProps & HTMLAttributes<HTMLDivElement>> = (props) => (<article {...props}>
  <h2>À mon propos</h2>
  <p>
Salutations à tous, vous êtes bien sur le blog du Dendrobate Doctor.
</p>
<hr />
<p>
Je suis vulgarisatrice, activiste de la diffusion des savoirs, paladin de l'esprit critique et caféinomane au dernier degré. Je suis épaulée dans ma mission par mon vaillant modérateur à la pelle acérée et mon narrateur à l'esprit dérangé. Ensemble, chaque semaine, on défriche l'actualité scientifique, et on espère à terme faire évoluer la chaine vers du contenu plus diversifié.
</p>
<hr /><p>
Dans la vraie vie, je suis Pauline Delahaye, une sémioticienne et méthodologiste qui étudie toutes les espèces chez qui la possession du langage, de la culture ou des émotions fait débat, par esprit de contrariété. Après un Master 2 centré sur les cultures non-humaines sous la direction d’un anthropologue, parce que pourquoi pas, j'ai fait mon doctorat en sciences du langage en Sorbonne et survécu à une soutenance en plein été dans une salle non-climatisée. Ancienne ATER de Paris 4 et actuelle membre de la Société française de Zoosémiotique, je balade partout mon petit gabarit, ma livrée rouge vif et mon inépuisable causticité, telle la grenouille vénéneuse dont je porte fièrement le nom.
</p>
<hr /><p>
Et oui, on dit vénéneuse pour une dendrobate.
</p>
<hr />
<h3>Citations favorites</h3>
<blockquote>
  <p>c'est plus compliqué que ça…</p>
  <cite>The Dendrobate Doctor… pédagogique</cite>
</blockquote>
<blockquote>
  <p>Je sers la Science et c'est ma joie…</p>
  <cite>The Dendrobate Doctor… qui se frotte à l'administration</cite>
</blockquote>

</article>)