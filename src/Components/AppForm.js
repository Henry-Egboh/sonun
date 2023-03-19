import { Row, Col, Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import background from '../Assets/martin-baron-RBmlPdZ13nE-unsplash.jpg';

const AppForm = () => {

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            address: "",
            city: "",
            country: "",
        }

        // submit handle
    });

    console.log(formik.values);

    return ( 
        <main style={{background: `url(${background})`, 
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: 0.9}}>
            <div className='d-flex justify-content-center align-items-center d-height'>
                <div className='bg-white shadow p-5 my-5 d-width'>
                    <div className='text-center'>
                        <h4 className='h4-color'>A New World Awaits</h4>
                        <p className='p-color'>Fill Out All the Fields Correctly</p>
                    </div>
                    <Form onSubmit={formik.handleSubmit}>
                        {/* name */}
                        <Row className='justify-content-center align-items-center mb-4'>
                            <Col xs={12} sm={12} md={12} lg={3}>
                            <label 
                            htmlFor='name'
                            className='w-100'>
                                Name :
                            </label>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={9}>
                                <input
                                    id='name'
                                    type='text'
                                    name='name'
                                    placeholder='Enter your Name'
                                    className='w-100 p-2 ps-4 shadow rounded focus-border'
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                />
                            </Col>
                        </Row>
                        {/* email */}
                        <Row className='justify-content-center align-items-center mb-4'>
                            <Col xs={12} sm={12} md={12} lg={3}>
                            <label 
                            htmlFor='email'
                            className='w-100'>
                                Email :
                            </label>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={9}>
                                <input
                                    id='email'
                                    type='email'
                                    name='email'
                                    placeholder='Enter your email'
                                    className='w-100 p-2 ps-4 shadow rounded focus-border'
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                />
                            </Col>
                        </Row>
                        {/* mobile number */}
                        <Row className='justify-content-center align-items-center mb-4'>
                            <Col xs={12} sm={12} md={12} lg={3}>
                            <label 
                            htmlFor='tel'
                            className='w-100'>
                                Mobile Number :
                            </label>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={9}>
                                <input
                                    id='tel'
                                    type='tel'
                                    name='tel'
                                    placeholder='Enter mobile number'
                                    className='w-100 p-2 ps-4 shadow rounded focus-border'
                                />
                            </Col>
                        </Row>
                        {/* contact Address */}
                        <Row className='justify-content-center align-items-center mb-4'>
                            <Col xs={12} sm={12} md={12} lg={3}>
                            <label 
                            htmlFor='address'
                            className='w-100'>
                                Contact Address:
                            </label>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={9}>
                                <input
                                    id='address'
                                    type='text'
                                    name='address'
                                    placeholder='Enter your Address'
                                    className='w-100 p-2 ps-4 shadow rounded focus-border'
                                    value={formik.values.address}
                                    onChange={formik.handleChange}
                                />
                            </Col>
                        </Row>
                        {/* city */}
                        <Row className='justify-content-center align-items-center mb-4'>
                            <Col xs={12} sm={12} md={12} lg={3}>
                            <label 
                            htmlFor='city'
                            className='w-100'>
                                City :
                            </label>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={9}>
                                <input
                                    id='city'
                                    type='text'
                                    name='city'
                                    list='cities'
                                    placeholder='Type to search city'
                                    className='w-100 p-2 ps-4 shadow rounded focus-border'
                                    value={formik.values.city}
                                    onChange={formik.handleChange}
                                />
                                <datalist id='cities'>
                                    <option value='Detroit'></option>
                                    <option value='Newyork'></option>
                                    <option value='Lagos'></option>
                                    <option value='Rwanda'></option>
                                    <option value='Rotre Dame'></option>
                                    <option value='California'></option>
                                    <option value='New Jersey'></option>
                                    <option value='St John'></option>
                                    <option value='Air base'></option>
                                    <option value='Nkuruma'></option>
                                    <option value='Los Angeles'></option>
                                    <option value='Hong Kong'></option>
                                    <option value='Mellisa'></option>
                                </datalist>
                            </Col>
                        </Row>
                            {/* country */}
                        <Row className='justify-content-center align-items-center mb-4'>
                            <Col xs={12} sm={12} md={12} lg={3}>
                            <label 
                            htmlFor='country'>
                                Country :
                            </label>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={9}>
                                <select                             
                                    className='w-100 p-2 ps-4 shadow rounded focus-border'
                                    name='country'
                                    value={formik.values.country}
                                    onChange={formik.handleChange}
                                >
                                    <option value='select-state'>Select country</option>
                                    <option value='canada'>Canada</option>
                                    <option value='united-states'>United States</option>
                                    <option value='argentina'>Argentina</option>
                                    <option value='belgium'>Belgium</option>
                                    <option value='russia'>Russia</option>
                                    <option value='uganda'>Uganda</option>
                                    <option value='luisanna'>Luisanna</option>
                                    <option value='poland'>Poland</option>
                                </select>
                            </Col>
                        </Row>
                        <div className='d-flex gap-4 mb-4 align-items-center'>
                            <label>Gender</label>
                            <div className='d-flex gap-4 ms-5 ps-5 align-items-center'>
                                <div className='d-flex gap-3'>
                                <input type='radio'
                                        id='gender' 
                                        name='gender'
                                        value='checked' />
                                <label htmlFor='gender'>Male</label>
                                </div>
                                <div className='d-flex gap-3'> 
                                <input type='radio'
                                        id='gender' 
                                        name='gender' />
                                <label htmlFor='gender'>Female</label>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex gap-4 mb-4 align-items-center justify-content-center'>
                            <input  type='checkbox' 
                                    name='agree' 
                                    id='agree'
                                    value='checked'
                                    onChange={formik.handleChange} />
                            <label htmlFor='agree' className='agree ms-5'>I have read and agreed to the terms and conditions of enrolling in this training</label>
                        </div>
                        {/* button submit */}
                        <button 
                        type='submit'
                        className='btn btn-outline-secondary w-100'>
                            Submit</button>
                    </Form>
                </div>
            </div>
        </main>
     );
}
 
export default AppForm;