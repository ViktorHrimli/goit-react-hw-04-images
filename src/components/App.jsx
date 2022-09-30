import React, { useState, useEffect } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { animateScroll as scroll } from 'react-scroll';
import { Box } from 'CommonStyle/Common.styled';
import { FormSerch } from './Form/Form';
import { Gallery } from './ImageGallery/ImageGallery';
import { ApiServise } from './api/Api';
import { WarningMessage } from './WarningMessage/WarningMessage';
import { Modal } from './Modal/Modal';
import { LoadMoreBtn } from './Button/Button';

export const App = () => {
  const [showBtn, setShowBtn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSpiner, setShowSpiner] = useState(false);
  const [serchQuery, setSerchQuery] = useState('');
  const [largePage, setLargePage] = useState('');
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  //
  useEffect(() => {
    if (serchQuery === '') return;
    setShowSpiner(true);
    ApiServise(serchQuery, page)
      .then(({ data: { hits, totalHits } }) => {
        setData(prevState => prevState.concat(hits));
        setShowBtn(true);
        WarningMessage(page, totalHits, hits, setShowBtn);
      })
      .catch(erore => {
        console.log(erore.message);
      })
      .finally(() => {
        setShowSpiner(false);
      });
    return () => {};
  }, [page, serchQuery]);

  const handeClick = e => {
    e.preventDefault();
    setLargePage(e.currentTarget.name);
    setShowModal(!showModal);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSubmit = inputQuery => {
    setSerchQuery(inputQuery);
    setPage(1);
    setData([]);
  };

  const handleClickLoadMoreBtn = e => {
    setPage(prevs => prevs + 1);
    setTimeout(() => {
      scroll.scrollMore(1150, {
        smooth: true,
      });
    }, 700);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" pb={5}>
      <FormSerch onSubmit={handleSubmit} />
      <Gallery onOpenModal={handeClick} data={data} />
      {showBtn && <LoadMoreBtn onClick={handleClickLoadMoreBtn} />}
      {/*  */}
      {showModal && <Modal onClick={toggleModal}>{largePage}</Modal>}
      {showSpiner && <ClipLoader color="#00BFFF" size={100} />}
      <ToastContainer autoClose={3000} />
    </Box>
  );
};
