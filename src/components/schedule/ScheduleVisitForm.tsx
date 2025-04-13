import React, { useState } from 'react';
import '../../styles/ScheduleVisitForm.css';

// Service types for dropdown - no longer needed but kept for reference
const SERVICE_TYPES = [
  'Drain Cleaning',
  'Leak Repair',
  'Water Heater Service',
  'Toilet Repair',
  'Faucet Installation',
  'Pipe Repair',
  'Sewer Line Service',
  'General Plumbing',
];

const ScheduleVisitForm: React.FC = () => {
  // Form data state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    serviceType: '',
    preferredDate: '',
    preferredTime: '',
    description: ''
  });

  // Submission state
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState('');

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate a random reference number
    const randomRef = `PV-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;
    setReferenceNumber(randomRef);
    
    // Show confirmation
    setIsSubmitted(true);
    
    // In a real app, you would send data to a server here
    console.log('Form submitted:', formData);
  };

  // Reset form to schedule another visit
  const handleScheduleAnother = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      serviceType: '',
      preferredDate: '',
      preferredTime: '',
      description: ''
    });
  };

  return (
    <div className="schedule-visit-container">
      {!isSubmitted ? (
        <div className="form-container">
          <h2>Schedule a Visit</h2>
          <p>Fill out the form below to schedule a plumbing service visit.</p>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="address">Service Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="serviceType">Service Type</label>
              <input
                type="text"
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                placeholder="Enter service type needed"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="preferredDate">Preferred Date</label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="preferredTime">Preferred Time</label>
              <input
                type="time"
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="description">Description of Issue</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
            
            <button type="submit" className="submit-button">
              Schedule My Visit
            </button>
          </form>
        </div>
      ) : (
        <div className="confirmation-message">
          <h2>Thank You!</h2>
          <p>Your plumbing service visit has been scheduled.</p>
          <p>We'll contact you shortly to confirm your appointment.</p>
          <p className="reference">
            Your reference number: {referenceNumber}
          </p>
          <button 
            onClick={handleScheduleAnother}
            className="back-button"
          >
            Schedule Another Visit
          </button>
        </div>
      )}
    </div>
  );
};

export default ScheduleVisitForm; 