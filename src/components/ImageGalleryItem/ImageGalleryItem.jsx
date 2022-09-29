import PropTypes from 'prop-types';
import { ListItem } from './ImageGalleryItem.styled';

export const GalleryItem = ({ img, name, largeImg, onOpenModal }) => {
  return (
    <ListItem>
      <a onClick={onOpenModal} name={largeImg} href={largeImg}>
        <img src={img} alt={name} />
      </a>
    </ListItem>
  );
};

GalleryItem.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};
