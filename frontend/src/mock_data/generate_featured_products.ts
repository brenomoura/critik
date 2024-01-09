import IProductItem from '../types/productItemInterface';
import generateProduct from './generate_product';


const generateFeaturedProducts = () => {
    const userReviews: IProductItem[] = Array.from({ length: 23 }, generateProduct);
    return userReviews
}

export default generateFeaturedProducts
