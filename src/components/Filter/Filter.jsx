import { Component } from 'react';
import PropTypes from 'prop-types';

import css from '../Filter/Filter.module.css';

export class Filter extends Component {
  render() {
    const { filter, onChange } = this.props;
    return (
      <div className={css.filter}>
        <input
          type="text"
          name="filter"
          className={css.filter__input}
          value={filter}
          onChange={onChange}
          placeholder="Enter name"
        />
      </div>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  addFilter: PropTypes.func,
};
