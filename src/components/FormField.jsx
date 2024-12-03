import React from 'react';
import TextInput from './TextInput';
import TextArea from './TextArea';
import Select from './Select';
import CheckboxGroup from './CheckboxGroup';
import RadioGroup from './RadioGroup';
import Switch from './Switch';
import DateInput from './DateInput';
import ValidationMessage from './ValidationMessage';

const FormField = ({ field, value, onChange, error,maxlength }) => {
  switch (field.type) {
    case 'text':
    case 'email':
      return (
        <>
        <div className='input_container'>
          <label>{field.label}</label>
          <TextInput
            value={value}
            maxlength={maxlength}
            onChange={(e) => onChange(e, field.name)}
            placeholder={field.placeholder}
          />
          {error && <ValidationMessage message={error} />}
          </div>
        </>
      );
    case 'textarea':
      return (
        <>
         <div className='input_container'>
          <label>{field.label}</label>
          <TextArea
            value={value}
            onChange={(e) => onChange(e, field.name)}
            placeholder={field.placeholder}
          />
          {error && <ValidationMessage message={error} />}
          </div>
        </>
      );
    case 'select':
      return (
        <>
          <div className='input_container'>
          <label>{field.label}</label>
          <Select
            value={value}
            onChange={(e) => onChange(e, field.name)}
            options={field.options}
          />
          {error && <ValidationMessage message={error} />}
          </div>
        </>
      );
    case 'checkbox':
      return (
        <>
          <div className='input_container'>
          <label>{field.label}</label>
          <CheckboxGroup
            value={value}
            onChange={(e) => onChange(e, field.name)}
            options={field.options}
          />
          {error && <ValidationMessage message={error} />}
          </div>
        </>
      );
    case 'radio':
      return (
        <>
        <div className='input_container'>
          <label>{field.label}</label>
          <RadioGroup
            value={value}
            onChange={(e) => onChange(e, field.name)}
            options={field.options}
          />
          {error && <ValidationMessage message={error} />}
          </div>
        </>
      );
    case 'switch':
      return (
        <>
          <div className='input_container'>
          <label>{field.label}</label>
          <Switch
            value={value}
            onChange={(e) => onChange(e, field.name)}
          />
          {error && <ValidationMessage message={error} />}
          </div>
        </>
      );
    case 'date':
      return (
        <>
           <div className='input_container'>
          <label>{field.label}</label>
          <DateInput
            value={value}
            onChange={(e) => onChange(e, field.name)}
          />
          {error && <ValidationMessage message={error} />}
          </div>
        </>
      );
    default:
      return null;
  }
};

export default FormField;
