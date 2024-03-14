//! Imports (IMPORTANT)

import './Details.css';
import { useParams } from 'react-router-dom';
// import { arrayOfFurniture } from '../components/ListArticle';
//import ListArticle from '../components/ListArticle';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import buy from '../buy.json';
import Modal from '../components/Modal.tsx'

//? Component

const Details = () => {
    const { id } = useParams(); // Récupère l'ID du produit à partir des paramètres d'URL
    const [product, setProduct] = useState({}); // État pour stocker les détails du produit
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false) // Ouvertrue modal
    const [modalContent, setModalContent] = useState('') // Contenu modal

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/products/${id}`);
                console.log("Response data:", response.data);
                
                if (response.data && response.data.length > 0) {
                    setProduct(response.data[0]); // Utilisez le premier élément s'il y en a plusieurs
                } else {
                    setError("Impossible de trouver le produit.");
                }
            } catch (error) {
                console.error("Erreur lors de la récupération des détails du produit:", error);
                setError("Une erreur est survenue lors de la récupération des détails du produit.");
            }
        };

        fetchProductDetails();
    }, [id]);

    if(error) {
        return <div>Erreur : {error}</div>;
    }

    if(product === null) {
        return <div>Chargement...</div>;
    }

    if(!product.id) {
        return <div>Erreur : Impossible de trouver le produit.</div>;
    }


// fonction utiliser si le modal est ouvert
const openModal = (content) => {
    setIsModalOpen(true);
    setModalContent(content);
};

// fonction utliser si le modal est fermé
const closeModal = () => {
    setIsModalOpen(false);
};



/*
const Details = ({ id }) => {
    console.log(id, 'for furniture details')
    // useParams() est une méthode qui permet d'accéder aux dernier paramètre d'URL
    const params = useParams();
    
    console.log(params); // Affiche un objet avec comme clé "id" et comme valeur l'id de l'objet cliqué
    
    // filter() récupère l'élément qui correspond à la condition (ici l'id de l'objet dans le tableau arrayOfFurniture)
    const productItem = ListArticle.filter((product) => parseInt(product.id) === parseInt(params.id));
    
    console.log(ListArticle);
    console.log(productItem);
*/
    // On déstructure l'objet pour récupérer les valeurs
    const { name, types, image, dimensions, colors, materials, price } = product;
    
    return (
        <div id='container'>
        <h1>{name}</h1>
        <p className='p-details'>{types && types.name_type}</p>
        <article className='article-container-detail'>
            <div className='container-img'>
                {<img id="img" alt="" src={image} />}
            </div>
            <div className='container-info'>
                <p className='p-details'>Dimensions: {dimensions}</p>
                <p className='p-details'>Couleur: {colors && colors.name_color}</p>
                <p className='p-details'>Materiel: {materials && materials.name_material}</p>
                <p className='p-details'>{price}€</p>
                <button onClick={() => openModal(buy)} id='buy'>
                    Acheter
                </button>
            </div>
        </article>

        <section>
            <Modal
                isModalOpen={isModalOpen}
                modalContent={modalContent}
                onClose={closeModal}
            />
        </section>

    </div>
    );
}

//! Export (IMPORTANT)

export default Details;