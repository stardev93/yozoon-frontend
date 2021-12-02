import { useState, useEffect } from 'react';

const useForm = (initial = {}) => {
  const [inputs, setInputs] = useState(initial);
  const initialValues = Object.values(initial).join('');
  useEffect(() => {
    setInputs(initial);
  }, [initialValues]);
  const handleChange = (e) => {
    let { value, type, name } = e.target;
    if (type === 'number') {
      value = parseInt(value);
    }
    if (type === 'file') {
      [value] = e.target.files;
    }
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const resetForm = () => {
    setInputs(initial);
  };

  const clearForm = () => {
    const blankForm = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ''])
    );
    setInputs(blankForm);
  };
  return {
    inputs,
    handleChange,
    clearForm,
    resetForm,
  };
};

export default useForm;
