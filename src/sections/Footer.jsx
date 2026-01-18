import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a 
              key={index} 
              href={
                socialImg.name === 'github' ? 'https://github.com/codebyprajjwal02' :
                socialImg.name === 'linkedin' ? 'https://www.linkedin.com/in/prajjwal-kumar-singh-4927ba2a7/' :
                socialImg.name === 'twitter' ? 'https://x.com/SinghPrajj83325' :
                '#'
              } 
              target={
                socialImg.name === 'github' || socialImg.name === 'linkedin' || socialImg.name === 'twitter' ? '_blank' : '_self'
              }
              rel={
                socialImg.name === 'github' || socialImg.name === 'linkedin' || socialImg.name === 'twitter' ? 'noopener noreferrer' : undefined
              }
              className="icon"
            >
              <img 
                src={socialImg.imgPath} 
                alt={socialImg.name} 
                className="w-5 h-5 md:w-6 md:h-6"
              />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © 2026 Prajjwal Kumar Singh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
