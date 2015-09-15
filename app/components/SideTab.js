import React, { Component, PropTypes } from 'react';
import ClassNames from 'classnames';

import List from './utils/List';

class SideTab extends Component {
  static propTypes = {
    className: PropTypes.string,
    items: PropTypes.array.isRequired,
    renderItem: PropTypes.func.isRequired
  }

  static defaultProps = {

  }

  constructor(props) {
    super(props);
  }

  render() {
    const { items, className } = this.props;
    const classes = className === 'SideTab' ? className : ClassNames('SideTab', className);
    return (
      <div className={classes}>
        {items.map(this.renderBlock.bind(this))}
      </div>
    );
  }

  renderBlock(data, index) {
    const { renderItem, className } = this.props;

    const classNamesArr = className.split(/\s/);
    const itemClass = ClassNames('SideTab-item', `SideTab-item${classNamesArr[0].slice(12)}`);
    const listClass = ClassNames('SideTab-list', `SideTab-list${classNamesArr[0].slice(12)}`);

    if (data.items) {
      return (
        <section className={itemClass}>
          <h6>{data.title}</h6>
          <List className={listClass} items={data.items} renderItem={renderItem} />
        </section>
      );
    }

    return renderItem(data, index);
  }
}

export default SideTab;
