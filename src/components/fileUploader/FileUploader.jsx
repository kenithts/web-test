import React, { createRef } from 'react';

import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Button from '../Button';

import './styles.scss';

const FileUploader = ({ onChange }) => {
  const { t } = useTranslation('general');
  const inputRef = createRef();

  return (
    <div className="file-uploader__wrapper">
      <input onChange={onChange} ref={inputRef} type="file" />
      <Button className="file-uploader__button" onClick={() => inputRef.current.click()} label={t('selectFile')} />
    </div>
  );
};

FileUploader.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default FileUploader;
