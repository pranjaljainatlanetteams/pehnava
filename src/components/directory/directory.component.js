import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

// we need to store the state of the menu items thats why we are in need of a class component.

class Directory extends React.Component {
  constructor () {
    super ();

    this.state = {
      // sections of the menu items.
      //we are taking an array value in this.
      sections: [
        {
          title: 'Hats',
          //it is pointing to the title.
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          //this is pointing towards the image url which is present online.
          id: 1,
          linkUrl: 'Hats',
        },
        {
          title: 'Jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'Jackets',
        },
        {
          title: 'Sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'Sneakers',
        },
        {
          title: 'Womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'Womens',
        },
        {
          title: 'Mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: 'Mens',
        },
      ],
    };
  }
  //coming out the this.state
  render () {
    return (
      <div className="directory-menu">
        {this.state.sections.map (({id, ...othersectionprops}) => (
          <MenuItem key={id} {...othersectionprops} />
        ))}
      </div>
    );
  }
}
export default Directory;
 