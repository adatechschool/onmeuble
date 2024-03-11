//! Imports (IMPORTANT)

import './Details.css';
import { useParams } from 'react-router-dom';
import { arrayOfFurniture } from '../components/ListArticle';

//? Component

const Details = ({ id }) => {
    console.log(id, 'for furniture details')
    // useParams() est une méthode qui permet d'accéder aux dernier paramètre d'URL
    const params = useParams();
    
    console.log(params); // Affiche un objet avec comme clé "id" et comme valeur l'id de l'objet cliqué
    
    // filter() récupère l'élément qui correspond à la condition (ici l'id de l'objet dans le tableau arrayOfFurniture)
    const productItem = arrayOfFurniture.filter((product) => parseInt(product.id) == parseInt(params.id));
    
    console.log(arrayOfFurniture);
    console.log(productItem);

    // On déstructure l'objet pour récupérer les valeurs
    const { name, type, img, dimensions, color, material, price, alt } = productItem.shift();
    
    // On retourne le JSX
    return (
        // On crée la page de détails d'article
        <div id='container'>
            <h1>{name}</h1>
                    <p className='p-details'>{type}</p>
            <article className='article-container-detail'>
                <div className='container-img'>
                    <img id="img" src={img} />

                </div>
                <div className='container-info'>
                    <p className='p-details'>{alt}</p>
                    <p className='p-details'>Dimensions: {dimensions}</p>
                    <p className='p-details'>Couleur: {color}</p>
                    <p className='p-details'>Materiel: {material}</p>
                    <p className='p-details'>{price}</p>
                    <button id='addToBasket'>
                        Ajouter au panier
                    </button>
                </div>
            </article>
        </div>
    );
}

//! Export (IMPORTANT)

export default Details;