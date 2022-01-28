import React from "react";
import { MenuItem } from "../Menu-Item/menu-item";
import "./directory.scss";

import { connect } from "react-redux";
import { selectDirectorySections } from "../../Redux/Directory/Directory-Selectors";

const Directory = ({sections}) => {

  return (
    <>
      <div className="directory-menu">
          {
              sections.map(section => (
                  <MenuItem
                  key ={section.id}
                  title={section.title}
                  imageUrl={section.imageUrl}
                  size={section.size}
                  linkUrl={section.linkUrl}
                  />
              )
              )
          }
      </div>
    </>
  );
};


const mapStateToProps = (state) => ({
sections: selectDirectorySections(state)
})

export default connect(mapStateToProps)(Directory);
