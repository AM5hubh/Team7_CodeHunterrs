import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Calendar, MapPin, Users, Award } from 'lucide-react';

const DetailedAboutUs = () => {
  const [openSection, setOpenSection] = useState('');
  const [openDropdown, setOpenDropdown] = useState('');

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? '' : section);
  };

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? '' : dropdown);
  };

  const Section = ({ title, children, id, icon: Icon }) => (
    <div className="mb-8 border-b pb-4">
      <button
        onClick={() => toggleSection(id)}
        className="flex justify-between items-center w-full text-left font-semibold text-xl text-blue-800 hover:text-blue-600 focus:outline-none"
      >
        <span className="flex items-center">
          <Icon className="mr-2" size={24} />
          {title}
        </span>
        {openSection === id ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </button>
      {openSection === id && <div className="mt-4">{children}</div>}
    </div>
  );

  const Dropdown = ({ title, options, id }) => (
    <div className="mb-4">
      <button
        onClick={() => toggleDropdown(id)}
        className="flex justify-between items-center w-full text-left font-semibold text-lg text-blue-700 hover:text-blue-500 focus:outline-none"
      >
        {title}
        {openDropdown === id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {openDropdown === id && (
        <ul className="mt-2 bg-gray-100 p-2 rounded">
          {options.map((option, index) => (
            <li key={index} className="py-1">{option}</li>
          ))}
        </ul>
      )}
    </div>
  );

  const AlumniProfile = ({ name, batch, company, image }) => (
    <div className="flex items-center mb-4 p-4 bg-gray-100 rounded-lg">
      <img src={image} alt={name} className="w-16 h-16 rounded-full mr-4" />
      <div>
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-gray-600">Batch of {batch}</p>
        <p className="text-gray-700">{company}</p>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left side with image and name */}
        <div className="text-center lg:text-left lg:pr-8">
          <img src="https://image-static.collegedunia.com/public/college_data/images/appImage/45852_VCET_New.jpg?h=260&w=360&mode=crop" alt="VCET Logo" className="mx-auto lg:mx-10 mb-4" />
          <h1 className="text-2xl font-bold text-blue-900 mb-2">Vidyavardhini's College Of Engineering & Technology (VCET)</h1>
          {/* <p className="text-xl text-gray-600">Nurturing Engineers, Shaping Futures</p> */}
        </div>

        {/* Right side with sections and dropdowns */}
        <div>
          <Section title="About VCET" id="about" icon={Users}>
            <p className="text-gray-700 mb-4">
              Vidyavardhini's College of Engineering and Technology (VCET) was established in 1994 under the aegis of Vidyavardhini Trust. Located in Vasai Road (W), Maharashtra, VCET is approved by AICTE and affiliated with the University of Mumbai.
            </p>
            <p className="text-gray-700 mb-4">
              With a legacy of over 25 years, VCET has been at the forefront of technical education, consistently producing skilled engineers who contribute significantly to various industries across the globe.
            </p>
            <Dropdown
              title="Key Highlights"
              id="highlights"
              options={[
                "State-of-the-art laboratories",
                "Experienced and dedicated faculty",
                "Strong industry connections",
                "Vibrant campus life",
                "Excellent placement record",
              ]}
            />
          </Section>

          <Section title="Our Vision & Mission" id="vision-mission" icon={Award}>
            <h3 className="font-semibold text-lg mb-2">Vision</h3>
            <p className="text-gray-700 mb-4">
              To achieve excellence in imparting technical education so as to meet the professional and societal needs.
            </p>
            <h3 className="font-semibold text-lg mb-2">Mission</h3>
            <ul className="list-disc pl-5 text-gray-700 mb-4">
              <li>Developing technical skills by imparting knowledge and providing hands-on experience.</li>
              <li>Creating an environment that nurtures ethics, leadership and team building.</li>
              <li>Providing industrial exposure for minimizing the gap between academics & industry.</li>
            </ul>
          </Section>

          <Section title="Academic Programs" id="programs" icon={Calendar}>
            <p className="text-gray-700 mb-4">
              VCET offers a range of undergraduate and postgraduate programs designed to meet the evolving needs of the industry.
            </p>
            <Dropdown
              title="Undergraduate Programs"
              id="ug-programs"
              options={[
                "Computer Engineering",
                "Information Technology",
                "Electronics & Telecommunication Engineering",
                "Mechanical Engineering",
                "Artificial Intelligence & Data Science",
              ]}
            />
            <Dropdown
              title="Postgraduate Programs"
              id="pg-programs"
              options={[
                "M.E. in Computer Engineering",
                "M.E. in Electronics & Telecommunication",
              ]}
            />
          </Section>

          <Section title="Our Alumni" id="alumni" icon={Users}>
            <p className="text-gray-700 mb-4">
              VCET takes pride in its accomplished alumni who have made significant contributions in various fields. Here are some of our notable alumni:
            </p>
            <AlumniProfile
              name="Priya Sharma"
              batch="2010"
              company="Google, Senior Software Engineer"
              image="https://img.freepik.com/premium-vector/people-profile-icon_24877-40756.jpg"
            />
            <AlumniProfile
              name="Rahul Desai"
              batch="2008"
              company="Microsoft, Product Manager"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
            />
            <AlumniProfile
              name="Anita Patel"
              batch="2015"
              company="Tesla, Mechanical Design Engineer"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
            />
          </Section>

          <Section title="Campus Life" id="campus" icon={MapPin}>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <img src="https://cache.careers360.mobi/media/colleges/reviews/2020/3/27/97032/Auditorium%20of%20Vidyavardhinis%20College%20of%20Engineering%20and%20Technology%20Vasai_Auditorium.JPG" alt="VCET Campus" className="rounded-lg" />
              <img src="https://avc.ac.in/wp-content/uploads/2022/04/library6-1024x687.jpg" alt="VCET Library" className="rounded-lg" />
            </div>
            <p className="text-gray-700 mb-4">
              VCET offers a vibrant campus life with state-of-the-art facilities, including modern laboratories, a well-stocked library, sports facilities, and various cultural and technical events throughout the year.
            </p>
            <Dropdown
              title="Student Activities"
              id="activities"
              options={[
                "Annual Technical Fest - Technovanza",
                "Cultural Festival - Rhythm",
                "Sports Meet - Vigor",
                "Coding Club",
                "Robotics Club",
                "Entrepreneurship Cell",
              ]}
            />
          </Section>

          {/* <Section title="Contact Us" id="contact" icon={MapPin}>
            <p className="text-gray-700 mb-2">
              <strong>Address:</strong> K.T. Marg, Vasai Road (W), Dist. Palghar, Maharashtra, India - 401202
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Phone:</strong> +91-250-2338234
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Email:</strong> principal@vcet.edu.in
            </p>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.941647193016!2d72.82282431491144!3d19.38281298691319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7aec0a4b41bef%3A0xf36e6f9b636b1b92!2sVidyavardhini&#39;s%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1631625346956!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                title="VCET Location"
              ></iframe>
            </div>
          </Section> */}
        </div>
        
      </div>
      <Section title="Contact Us" id="contact" icon={MapPin}>
        <p className="text-gray-700 mb-2">
          <strong>Address:</strong> K.T. Marg, Vasai Road (W), Dist. Palghar, Maharashtra, India - 401202
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Phone:</strong> +91-250-2338234
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Email:</strong> principal@vcet.edu.in
        </p>
        <div className="aspect-w-16 aspect-h-9">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.941647193016!2d72.82282431491144!3d19.38281298691319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7aec0a4b41bef%3A0xbd1a4ca919d6a613!2sVidyavardhini&#39;s%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1632910428454!5m2!1sen!2sin" 
            width="600" 
            height="350" 
            style={{border:0}} 
            allowFullScreen="" 
            loading="lazy"
            className="w-full"
          ></iframe>
        </div>
      </Section>
    </div>
  );
};

export default DetailedAboutUs;
