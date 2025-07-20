import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ConsultationBooking = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [consultationType, setConsultationType] = useState('');
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    company: '',
    projectBrief: '',
    timezone: 'EST'
  });
  const [isBooking, setIsBooking] = useState(false);
  const [bookingStatus, setBookingStatus] = useState(null);

  // Generate next 14 days for booking
  const generateAvailableDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip weekends for business consultations
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push({
          date: date.toISOString().split('T')[0],
          display: date.toLocaleDateString('en-US', { 
            weekday: 'short', 
            month: 'short', 
            day: 'numeric' 
          })
        });
      }
    }
    
    return dates;
  };

  const availableDates = generateAvailableDates();

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const consultationTypes = [
    {
      type: 'quick-chat',
      title: 'Quick Chat',
      duration: '15 minutes',
      description: 'Brief discussion about your project idea',
      price: 'Free',
      icon: 'MessageCircle'
    },
    {
      type: 'project-consultation',
      title: 'Project Consultation',
      duration: '30 minutes',
      description: 'Detailed project planning and technical discussion',
      price: 'Free',
      icon: 'Briefcase'
    },
    {
      type: 'technical-review',
      title: 'Technical Review',
      duration: '60 minutes',
      description: 'Code review, architecture planning, or technical audit',
      price: '$150',
      icon: 'Code'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBooking = async (e) => {
    e.preventDefault();
    setIsBooking(true);
    
    try {
      // Simulate booking process
      await new Promise(resolve => setTimeout(resolve, 2000));
      setBookingStatus('success');
    } catch (error) {
      setBookingStatus('error');
    } finally {
      setIsBooking(false);
    }
  };

  if (bookingStatus === 'success') {
    return (
      <section id="consultation" className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center bg-card border border-border rounded-2xl p-12">
            <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Calendar" size={32} className="text-success" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Consultation Booked Successfully!
            </h3>
            <p className="text-muted-foreground mb-6">
              Your consultation has been scheduled. You'll receive a calendar invite and meeting details via email shortly.
            </p>
            <div className="bg-muted/20 rounded-lg p-4 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="font-medium text-foreground">Date:</span>
                  <p className="text-muted-foreground">
                    {availableDates.find(d => d.date === selectedDate)?.display}
                  </p>
                </div>
                <div>
                  <span className="font-medium text-foreground">Time:</span>
                  <p className="text-muted-foreground">{selectedTime} EST</p>
                </div>
                <div>
                  <span className="font-medium text-foreground">Type:</span>
                  <p className="text-muted-foreground">
                    {consultationTypes.find(t => t.type === consultationType)?.title}
                  </p>
                </div>
              </div>
            </div>
            <Button
              variant="outline"
              onClick={() => {
                setBookingStatus(null);
                setSelectedDate('');
                setSelectedTime('');
                setConsultationType('');
                setBookingData({
                  name: '',
                  email: '',
                  company: '',
                  projectBrief: '',
                  timezone: 'EST'
                });
              }}
              iconName="Calendar"
              iconPosition="left"
            >
              Book Another Consultation
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="consultation" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Book a Consultation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss your project in detail. Choose a time that works for you and let's explore how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Consultation Types */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Choose Consultation Type</h3>
            <div className="space-y-4 mb-8">
              {consultationTypes.map((consultation) => (
                <div
                  key={consultation.type}
                  className={`p-6 border rounded-xl cursor-pointer transition-all duration-300 ${
                    consultationType === consultation.type
                      ? 'border-accent bg-accent/10' :'border-border bg-card hover:border-accent/50'
                  }`}
                  onClick={() => setConsultationType(consultation.type)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      consultationType === consultation.type
                        ? 'bg-accent text-white' :'bg-muted text-muted-foreground'
                    }`}>
                      <Icon name={consultation.icon} size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold text-foreground">
                          {consultation.title}
                        </h4>
                        <span className="text-sm font-medium text-accent">
                          {consultation.price}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm mb-2">
                        {consultation.description}
                      </p>
                      <div className="flex items-center space-x-2">
                        <Icon name="Clock" size={14} className="text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">
                          {consultation.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Available Dates */}
            {consultationType && (
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-foreground mb-4">Select Date</h4>
                <div className="grid grid-cols-3 gap-3">
                  {availableDates.slice(0, 9).map((date) => (
                    <button
                      key={date.date}
                      onClick={() => setSelectedDate(date.date)}
                      className={`p-3 text-sm rounded-lg border transition-all duration-300 ${
                        selectedDate === date.date
                          ? 'border-accent bg-accent text-white' :'border-border bg-card text-foreground hover:border-accent/50'
                      }`}
                    >
                      {date.display}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Time Slots */}
            {selectedDate && (
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Select Time (EST)</h4>
                <div className="grid grid-cols-3 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`p-3 text-sm rounded-lg border transition-all duration-300 ${
                        selectedTime === time
                          ? 'border-accent bg-accent text-white' :'border-border bg-card text-foreground hover:border-accent/50'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Booking Form */}
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Your Details</h3>
            
            <form onSubmit={handleBooking} className="space-y-6">
              <Input
                label="Full Name"
                type="text"
                name="name"
                value={bookingData.name}
                onChange={handleInputChange}
                placeholder="John Doe"
                required
              />

              <Input
                label="Email Address"
                type="email"
                name="email"
                value={bookingData.email}
                onChange={handleInputChange}
                placeholder="john@company.com"
                required
              />

              <Input
                label="Company/Organization"
                type="text"
                name="company"
                value={bookingData.company}
                onChange={handleInputChange}
                placeholder="Your Company (Optional)"
              />

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Brief Project Description
                </label>
                <textarea
                  name="projectBrief"
                  value={bookingData.projectBrief}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell me briefly about your project or what you'd like to discuss..."
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Timezone
                </label>
                <select
                  name="timezone"
                  value={bookingData.timezone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:ring-2 focus:ring-accent focus:border-transparent"
                >
                  <option value="EST">Eastern Time (EST)</option>
                  <option value="CST">Central Time (CST)</option>
                  <option value="MST">Mountain Time (MST)</option>
                  <option value="PST">Pacific Time (PST)</option>
                  <option value="GMT">Greenwich Mean Time (GMT)</option>
                  <option value="CET">Central European Time (CET)</option>
                  <option value="JST">Japan Standard Time (JST)</option>
                  <option value="AEST">Australian Eastern Time (AEST)</option>
                </select>
              </div>

              {/* Booking Summary */}
              {consultationType && selectedDate && selectedTime && (
                <div className="bg-muted/20 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-3">Booking Summary</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Type:</span>
                      <span className="text-foreground">
                        {consultationTypes.find(t => t.type === consultationType)?.title}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Date:</span>
                      <span className="text-foreground">
                        {availableDates.find(d => d.date === selectedDate)?.display}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Time:</span>
                      <span className="text-foreground">{selectedTime} EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="text-foreground">
                        {consultationTypes.find(t => t.type === consultationType)?.duration}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <Button
                type="submit"
                variant="default"
                size="lg"
                fullWidth
                loading={isBooking}
                disabled={!consultationType || !selectedDate || !selectedTime || isBooking}
                className="bg-gradient-to-r from-accent to-electric-blue hover:from-accent/90 hover:to-electric-blue/90 text-white border-0"
                iconName="Calendar"
                iconPosition="right"
              >
                {isBooking ? 'Booking Consultation...' : 'Book Consultation'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-xs text-muted-foreground">
                You'll receive a calendar invite with meeting details after booking.
                <br />
                All consultations are conducted via Google Meet or Zoom.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationBooking;