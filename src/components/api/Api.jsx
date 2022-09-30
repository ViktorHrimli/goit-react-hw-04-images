import axios from 'axios';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

const KEY = '29353874-6524bfeaf443742d489eb2baf';
const URL = 'https://pixabay.com/api/';

export const ApiServise = async (query, page) => {
  return await axios
    .get(
      `${URL}?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then(res => {
      return res;
    })
    .catch(error => {
      toast.error(error.message);
    });
};

ApiServise.propTypes = {
  query: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};
