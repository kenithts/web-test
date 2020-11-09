import React, { createRef } from 'react';

import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Button from '../Button';

import './styles.scss';

const FileUploader = ({
  onChange, onError, maxSize, error, value, ...props
}) => {
  const { t } = useTranslation(['general', 'errors']);
  const inputRef = createRef();

  const handleChange = (e) => {
    const reader = new FileReader();
    const [file] = e.target.files;

    if (file.size > maxSize) {
      onError('ERROR_EXCEED_SIZE', e.target.name);
      return;
    }

    reader.onloadend = () => {
      onChange(
        { ...e, target: { name: e.target.name, value: { name: file.name, blob: reader.result } } },
      );
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      onChange(e);
    }
  };

  if (value) {
    return <div className="file-uploader__wrapper file-uploader__wrapper--filled">{value.name}</div>;
  }

  return (
    <div className="file-uploader__wrapper">
      <input {...props} onChange={handleChange} ref={inputRef} type="file" />
      <Button className="file-uploader__button" onClick={() => inputRef.current.click()} label={t('selectFile')} />
      <span>{t(`errors:${error}`)}</span>
    </div>
  );
};

FileUploader.propTypes = {
  onChange: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
  maxSize: PropTypes.number.isRequired,
  error: PropTypes.string,
  value: PropTypes.shape({
    name: PropTypes.string,
  }),
};

FileUploader.defaultProps = {
  error: '',
  value: null,
};

export default FileUploader;
