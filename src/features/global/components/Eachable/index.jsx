import PropTypes from "prop-types";
import { Children } from "react";

export const Eachable = ({ datas, render }) => {
  return Children.toArray(datas?.map((e, i, arr) => render(e, i, arr)));
};

Eachable.propTypes = {
  datas: PropTypes.array,
  render: PropTypes.func,
};
