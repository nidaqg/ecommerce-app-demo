import React from "react";
import "./CollectionsPageStyles.scss";
import { connect } from "react-redux";
import { selectShopCollections } from "../../Redux/Shop/Shop-Selectors";
import { useParams } from "react-router-dom";
import PreviewItem from "../../Components/Preview-Item/PreviewItem";

const CollectionsPage = ({ collections }) => {
  let params = useParams();

  const collectionId = params.collectionId;

  const currentCollection = collections.find(
    (collection) => collection.routeName === collectionId
  );

  return (
    <div className="collection-page">
      <h2 className="title">{currentCollection.title}</h2>
      <div className="items">
      {currentCollection.items.map((item) => (
          <div>
        <PreviewItem key={item.id} item={item} />
        </div>
      ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  collections: selectShopCollections(state),
});
export default connect(mapStateToProps)(CollectionsPage);
