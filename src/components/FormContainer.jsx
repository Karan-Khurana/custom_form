import React, { useState } from 'react';
import FormField from './FormField';
import Button from './Button';

const FormContainer = ({ formConfig, onSubmit }) => {

  const [formData, setFormData] = useState(() =>
    formConfig.reduce((acc, field) => {
      acc[field.name] = field.defaultValue || '';
      return acc;
    }, {})
  );

  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleChange = (e, fieldName) => {
    console.log(e)
    setFormData({ ...formData, [fieldName]: e.target.value });
  };


  const validateForm = () => {
    let newErrors = {};
    formConfig.forEach((field) => {
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = `${field.label} is required.`;
      } else if (field.pattern && !new RegExp(field.pattern).test(formData[field.name])) {
        newErrors[field.name] = `Invalid ${field.label}.`;
      }
    });
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formErrors = validateForm();
    setErrors(formErrors);

    console.log(formErrors)
    if (Object.keys(formErrors).length === 0) {
      onSubmit(formData);
    } else {
      setIsSubmitting(false);

    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {formConfig.map((field, index) => (
        <FormField
          key={index}
          field={field}
          value={formData[field.name]}
          onChange={handleChange}
          maxlength={field.maxlength}
          error={errors[field.name]}
        />
      ))}
      <Button type="submit" label="Submit" isSubmitting={isSubmitting} />
    </form>
  );
};

export default FormContainer;
