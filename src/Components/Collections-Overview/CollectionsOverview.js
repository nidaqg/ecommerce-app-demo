import React from "react";
import "./CollectionsOverviewStyles.scss";
import { connect } from "react-redux";

import { ShopPreview } from "../Shop-Preview/ShopPreview";
import { selectShopCollections } from "../../Redux/Shop/Shop-Selectors";

const CollectionsOverview = ({collections}) => {
    return (

        <div className="collections-overview">
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

export default connect(mapStateToProps)(CollectionsOverview);