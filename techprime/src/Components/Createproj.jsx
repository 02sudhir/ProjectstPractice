import React,{useState} from 'react';
import { Formik, Form, Field } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Navbar from './Navbar';
import PropTypes from 'prop-types';
import axios from 'axios';


const Createproj = (props) => {
  // const [formData, setFormData] = useState(null)



  // const handleSubmit = (values, { setSubmitting }) => {
  //   console.log(values);
  //   setSubmitting(false);
  //   props.onSubmit(values);
  // };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post('http://localhost:5000/api/formdata', values);
      console.log(response.data); // Log response from server
      setSubmitting(false);
      props.onSubmit(values); // Pass form data to parent component
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  return (
    <div>
    <Navbar />
      <p className=''>Create Project</p>
      <Formik
        initialValues={{
          description: '',
          reason: '',
          type: '',
          filters: '',
          startDate: null,
          endDate: null,
          location: '',
        }}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, setFieldValue, handleSubmit }) => (
        <Form className='bg-[white] flex flex-wrap' onSubmit={handleSubmit}>
  
    <Field className='bg-[white] w-1/2 ml-0 flex justify-start ml-[25px] h-[70px] border border-zinc-700' as="textarea" name="description" placeholder="Enter project Theme"  />
    <button type="submit" className='ml-0'>Submit</button>
    <div className='flex w-full'>
    <label className='text-left ml-0 flex justify-start ml-[25px]'>Reason:</label>
    <Field className='bg-[white] w-64 ml-0 flex justify-start ml-[25px] h-[40px] border border-zinc-700' as="select" name="reason">
      <option value="" onChange={handleChange}>Select Reason</option>
      <option value="personal">Personal</option>
      <option value="business">Business</option>
    </Field>
    <label>Type:</label>
    <Field className='bg-[white] w-64 ml-[25px] h-[40px] border border-zinc-700' as="select" name="type">
      <option value="">Select Type</option>
      <option value="internal">Internal</option>
      <option value="external">External</option>
    </Field>



    <label>Filters:</label>
    <Field  className='border border-zinc-700' name="filters" />
    </div>



    <div className='flex w-full'>
    <label className='text-left ml-0 flex justify-start ml-[25px]'>Category:</label>
    <Field className='bg-[white] w-64 ml-0 flex justify-start ml-[25px] h-[40px] border border-zinc-700' as="select" name="reason">
      <option value="Quality A">Quality A</option>
      <option value="Quality B">Quality B</option>
      <option value="Quality C">Quality C</option>
    </Field>
    <label>Priority</label>
    <Field className='bg-[white] w-64 ml-[25px] h-[40px] border border-zinc-700' as="select" name="type">
      <option value="High">High</option>
      <option value="Moderate">Moderate</option>
      <option value="Low">Low</option>
    </Field>



    <label>Department</label>
    <Field className='bg-[white] w-64 ml-[25px] h-[40px] border border-zinc-700' as="select" name="type">
      <option value="High">Stratergy</option>
      <option value="Moderate">Plan</option>
      <option value="Low">Implemet</option>
    </Field>
    </div>



    <div className='flex w-full'>
    <br /> {/* Line break here */}
    <label>Start Date:</label>
    <DatePicker className='bg-[white] w-64 ml-0 flex justify-start ml-[25px] h-[40px] border border-zinc-700'
      selected={values.startDate}
      onChange={(date) => setFieldValue('startDate', date)}
      dateFormat="MM/dd/yyyy"
    />

    <label>End Date:</label>
    <DatePicker className='bg-[white] w-64 ml-0 flex justify-start ml-[25px] h-[40px] border border-zinc-700'
      selected={values.endDate}
      onChange={(date) => setFieldValue('endDate', date)}
      dateFormat="MM/dd/yyyy"
    />

    <label>Location:</label>
    <Field className='bg-[white] w-64 ml-0 flex justify-start ml-[25px] h-[40px] border border-zinc-700' name="location" />
  </div>

  <label className='bg-[white] w-1/3 ml-0 flex justify-end ml-[25px] h-[1000px] ' htmlFor="dropdown">status:<b>Registerd</b></label>
  <br />

</Form>


        )}
      </Formik>
      
    </div>
    
  );
  
};

Createproj.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Createproj;