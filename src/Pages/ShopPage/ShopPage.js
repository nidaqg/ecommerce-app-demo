import React from 'react';
import SHOP_DATA from './ShopData';
import { ShopPreview } from '../../Components/Shop-Preview/ShopPreview';

export const ShopPage = () => {

    //static shop data for demo purposes
const collections = SHOP_DATA;

    return (
        <div className="shop-page">
            {
                collections.map(collection => (
                  <ShopPreview
                  key={collection.id}
                  title={collection.title}
                  items={collection.items}
                  />  
                ))
            }
        </div>
    )
}