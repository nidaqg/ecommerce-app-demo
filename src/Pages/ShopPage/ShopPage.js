import React from 'react';
import { ShopPreview } from '../../Components/Shop-Preview/ShopPreview';

import { connect } from 'react-redux';
import { selectShopCollections } from '../../Redux/Shop/Shop-Selectors';

const ShopPage = ({collections}) => {


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

const mapStateToProps = state => ({
    collections: selectShopCollections(state)
})

export default connect(mapStateToProps)(ShopPage);