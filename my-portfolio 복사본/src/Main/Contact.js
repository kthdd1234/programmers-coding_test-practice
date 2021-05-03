import { BoldOutlined, MailOutlined, GithubOutlined } from '@ant-design/icons';
import './Contact.css';

const MyPhoneNumber = () => {
  return <div className='my-phone-number'>+82 10-2455-3704</div>;
};

const ContactHeading = () => {
  return (
    <div className='heading-box'>
      <span className='heading-contact'>Contact</span>
    </div>
  );
};

const ClosingGreeting = () => {
  return <div className='closing-greeting'>Thank you! Have a nice day :)</div>;
};

const SocialIcons = () => {
  return (
    <div className='social-icon-box'>
      <GithubOutlined
        className='social-icon'
        style={{ color: 'gray' }}
        onClick={() => window.open('https://github.com/kthdd1234', '_blank')}
      />

      <BoldOutlined
        className='social-icon'
        style={{ color: 'gray' }}
        onClick={() => window.open('https://blog.naver.com/kthdd12', '_blank')}
      />

      <MailOutlined
        className='social-icon'
        style={{ color: 'gray' }}
        onClick={() => window.open('mailto:kthdd1234@gmail.com', '_blank')}
      />
    </div>
  );
};

const Contact = () => {
  return (
    <div id='contact' className='contact-container'>
      <div className='contact-wrapper'>
        <ContactHeading />
        <ClosingGreeting />
        <SocialIcons />
        <MyPhoneNumber />
      </div>
    </div>
  );
};

export default Contact;
