import PropTypes from 'prop-types';
import { GalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImgGalleryList } from './ImageGallery.styled';
import { Box } from 'CommonStyle/Common.styled';

export const Gallery = ({ data, onOpenModal }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <ImgGalleryList>
        {data.map(item => {
          return (
            <GalleryItem
              onOpenModal={onOpenModal}
              key={item.id}
              img={item.webformatURL}
              name={item.tags}
              largeImg={item.largeImageURL}
            />
          );
        })}
      </ImgGalleryList>
    </Box>
  );
};

Gallery.propTypes = {
  data: PropTypes.array.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};
