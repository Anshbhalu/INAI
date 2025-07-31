import Hero from '../components/Hero';
import './Team.css';
import background from '../assets/background.jpg';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

// 1 General Head
import KrishnaGeneralHead from '../assets/Final Photos/1 General Head/Krishna - Genaral Head.jpg';

// 2 Management
import AkashayManagement from '../assets/Final Photos/2 Management/Akashay - Management.jpg';
import AnshManagement from '../assets/Final Photos/2 Management/Ansh-Management.jpg';
import BhratiManagement from '../assets/Final Photos/2 Management/Bhrati - Management.jpg';
import MahekManagement from '../assets/Final Photos/2 Management/Mahek-Management.jpg';
import MaulikManagement from '../assets/Final Photos/2 Management/Maulik - Management.jpg';
import MeetManagement from '../assets/Final Photos/2 Management/Meet - Management.jpg';

// 3 HR
import ShrutiHR from '../assets/Final Photos/3 HR/Shruti - HR Manager.jpg';

// 4 Marketing
import AniketMarketing from '../assets/Final Photos/4 Marketing/Aniket - Digital Marketing Executive.jpg';
import DhanshreeSEO from '../assets/Final Photos/4 Marketing/Dhanshree -SEO Executive.jpeg';
import KenilVideo from '../assets/Final Photos/4 Marketing/Kenil - Video Editor.jpg';
import TeerthGraphic from '../assets/Final Photos/4 Marketing/Teerth - Graphic Designer.jpg';

// 5 Frontend
import BhrantiFrontend from '../assets/Final Photos/5 Frontend/Bhranti - Fluttter Developer.jpg';
import EshaFrontend from '../assets/Final Photos/5 Frontend/Esha - Frontend Developer.jpg';
import IshitaFrontend from '../assets/Final Photos/5 Frontend/Ishita - Ui-UX Designer.jpg';
import PrachiFrontend from '../assets/Final Photos/5 Frontend/Prachi- UI-UX Designer.jpg';
import VaidehiFrontend from '../assets/Final Photos/5 Frontend/Vaidehi - Flutter Developer.jpg';

// 6 Backend
import AdityaBackend from '../assets/Final Photos/6 Backend/Aditya - Backend Developer.jpg';
import AelishBackend from '../assets/Final Photos/6 Backend/Aelish - Backend Developer.jpg';
import AnantaBackend from '../assets/Final Photos/6 Backend/Ananta - Backend Developer.jpg';
import AnilBackend from '../assets/Final Photos/6 Backend/Anil - Backend Develoeper.jpg';
import AnkitBackend from '../assets/Final Photos/6 Backend/Ankit - Backend Developer.jpg';
import CharmiBackend from '../assets/Final Photos/6 Backend/Charmi - Backend Developer.jpg';
import DarshakBackend from '../assets/Final Photos/6 Backend/Darshak - Backend Developer.jpg';
import DevBackend from '../assets/Final Photos/6 Backend/Dev - Backend Developer.jpg';
import FennyBackend from '../assets/Final Photos/6 Backend/Fenny - Backend Developer.jpg';
import GautamBackend from '../assets/Final Photos/6 Backend/Gautam -Backend developer.jpg';
import HarshilBackend from '../assets/Final Photos/6 Backend/Harshil - Backend Developer.jpg';
import JayBackend from '../assets/Final Photos/6 Backend/Jay - Backend Developer.jpg';
import JensiBackend from '../assets/Final Photos/6 Backend/Jensi - Backend Developer.jpg';
import KaushikBackend from '../assets/Final Photos/6 Backend/Kaushik - Backend Developer.jpg';
import KrishiBackend from '../assets/Final Photos/6 Backend/krishi - Backend Develoeper.jpg';
import KrupaliBackend from '../assets/Final Photos/6 Backend/Krupali - Backend Developer.jpg';
import LaxmikantBackend from '../assets/Final Photos/6 Backend/Laxmikant - Backend Developer.jpg';
import MaulikBackend from '../assets/Final Photos/6 Backend/Maulik - Backend Developer.jpg';
import MayurBackend from '../assets/Final Photos/6 Backend/Mayur - Backend Developer.jpg';
import MohitBackend from '../assets/Final Photos/6 Backend/Mohit - Backend Developer.jpg';
import NiratBackend from '../assets/Final Photos/6 Backend/Nirat - Backend Developer.jpg';
import OmBackend from '../assets/Final Photos/6 Backend/Om - Backend Developer.jpg';
import PriyanshuBackend from '../assets/Final Photos/6 Backend/Priyanshu - Backend Developer.jpg';
import RenishBackend from '../assets/Final Photos/6 Backend/Renish - Backend Developer.jpg';
import RoshniBackend from '../assets/Final Photos/6 Backend/Roshni-Backend Developer.jpg';
import SanjayBackend from '../assets/Final Photos/6 Backend/Sanjay - Backend Develoeper.jpg';
import SarvangiBackend from '../assets/Final Photos/6 Backend/Sarvangi - Backend Developer.jpg';
import SmitBackend from '../assets/Final Photos/6 Backend/Smit - Backend Developer.jpg';
import SubhsmitaBackend from '../assets/Final Photos/6 Backend/Subhsmita - Backend Developer.jpg';
import TiyansiBackend from '../assets/Final Photos/6 Backend/Tiyansi-Backend Developer.jpg';
import VishvaBackend from '../assets/Final Photos/6 Backend/Vishva-Backend Developer.jpg';

// 7 Reception
import RoshaniReception from '../assets/Final Photos/7 Reception/Roshani - Receptionist.jpg';

import user1 from '../assets/emp-photos/user1.jpg';
import jayCoFounder from '../assets/emp-photos/jaySIr.jpg';

const founders = [
  {
    name: 'Krushnarajsinh Parmar',
    role: 'Founder',
    image: user1,
    align: 'left',
    description: `Krushnarajsinh is the visionary leader who founded our company with a passion for innovation. He drives our strategic direction and inspires the team to achieve greatness. His expertise has been instrumental in shaping our success. He believes in creating technology that makes a difference.`
  },
  {
    name: 'Jay Gelani',
    role: 'Co-Founder',
    image: jayCoFounder,
    align: 'right',
    description: `Jay is the strategic mind who helps steer our company toward its goals. With a keen eye for market trends, he identifies new opportunities for growth. He is dedicated to building a culture of excellence and collaboration. His leadership is key to our operational success.`
  }
];

// const generalHead = [
//   { name: 'Krishna', role: 'General Head', image: KrishnaGeneralHead },
// ];

// const management = [
//   { name: 'Akshay', role: 'Management', image: AkashayManagement },
//   { name: 'Ansh', role: 'Management', image: AnshManagement },
//   { name: 'Bhrati', role: 'Management', image: BhratiManagement },
//   { name: 'Mahek', role: 'Management', image: MahekManagement },
//   { name: 'Maulik', role: 'Management', image: MaulikManagement },
//   { name: 'Meet', role: 'Management', image: MeetManagement },
// ];

// const hr = [
//   { name: 'Shruti', role: 'HR Manager', image: ShrutiHR },
// ];

// const marketing = [
//   { name: 'Aniket', role: 'Digital Marketing Executive', image: AniketMarketing },
//   { name: 'Dhanshree', role: 'SEO Executive', image: DhanshreeSEO },
//   { name: 'Kenil', role: 'Video Editor', image: KenilVideo },
//   { name: 'Teerth', role: 'Graphic Designer', image: TeerthGraphic },
// ];

// const frontend = [
//   { name: 'Bhranti', role: 'Flutter Developer', image: BhrantiFrontend },
//   { name: 'Esha', role: 'Frontend Developer', image: EshaFrontend },
//   { name: 'Ishita', role: 'UI-UX Designer', image: IshitaFrontend },
//   { name: 'Prachi', role: 'UI-UX Designer', image: PrachiFrontend },
//   { name: 'Vaidehi', role: 'Flutter Developer', image: VaidehiFrontend },
// ];

// const backend = [
//   { name: 'Aditya', role: 'Backend Developer', image: AdityaBackend },
//   { name: 'Aelish', role: 'Backend Developer', image: AelishBackend },
//   { name: 'Ananta', role: 'Backend Developer', image: AnantaBackend },
//   { name: 'Anil', role: 'Backend Developer', image: AnilBackend },
//   { name: 'Ankit', role: 'Backend Developer', image: AnkitBackend },
//   { name: 'Charmi', role: 'Backend Developer', image: CharmiBackend },
//   { name: 'Darshak', role: 'Backend Developer', image: DarshakBackend },
//   { name: 'Dev', role: 'Backend Developer', image: DevBackend },
//   { name: 'Fenny', role: 'Backend Developer', image: FennyBackend },
//   { name: 'Gautam', role: 'Backend Developer', image: GautamBackend },
//   { name: 'Harshil', role: 'Backend Developer', image: HarshilBackend },
//   { name: 'Jay', role: 'Backend Developer', image: JayBackend },
//   { name: 'Jensi', role: 'Backend Developer', image: JensiBackend },
//   { name: 'Kaushik', role: 'Backend Developer', image: KaushikBackend },
//   { name: 'Krishi', role: 'Backend Developer', image: KrishiBackend },
//   { name: 'Krupali', role: 'Backend Developer', image: KrupaliBackend },
//   { name: 'Laxmikant', role: 'Backend Developer', image: LaxmikantBackend },
//   { name: 'Maulik', role: 'Backend Developer', image: MaulikBackend },
//   { name: 'Mayur', role: 'Backend Developer', image: MayurBackend },
//   { name: 'Mohit', role: 'Backend Developer', image: MohitBackend },
//   { name: 'Nirat', role: 'Backend Developer', image: NiratBackend },
//   { name: 'Om', role: 'Backend Developer', image: OmBackend },
//   { name: 'Priyanshu', role: 'Backend Developer', image: PriyanshuBackend },
//   { name: 'Renish', role: 'Backend Developer', image: RenishBackend },
//   { name: 'Roshni', role: 'Backend Developer', image: RoshniBackend },
//   { name: 'Sanjay', role: 'Backend Developer', image: SanjayBackend },
//   { name: 'Sarvangi', role: 'Backend Developer', image: SarvangiBackend },
//   { name: 'Smit', role: 'Backend Developer', image: SmitBackend },
//   { name: 'Subhsmita', role: 'Backend Developer', image: SubhsmitaBackend },
//   { name: 'Tiyansi', role: 'Backend Developer', image: TiyansiBackend },
//   { name: 'Vishva', role: 'Backend Developer', image: VishvaBackend },
// ];

// const reception = [
//   { name: 'Roshani', role: 'Receptionist', image: RoshaniReception },
// ];

// const allTeamMembers = [
//   ...generalHead,
//   ...management,
//   ...hr,
//   ...marketing,
//   ...frontend,
//   ...backend,
//   ...reception,
// ];

const Team = () => {
  return (
    <div className="team-page">
      <Hero
        title="Our Awesome Master Minds"
        subtitle=""
        backgroundImage={background}
        isShort={true}
      />

      <div className="founders-section">
        {/* <h2 className="founders-title">Meet Our Founders</h2> */}
        {founders.map((founder, index) => (
          <div className={`founder-card ${founder.align}`} key={index}>
            <div className="founder-image-container">
              <div className="founder-image-clone top" style={{ backgroundImage: `url(${founder.image})` }}></div>
              <div className="founder-image-clone bottom" style={{ backgroundImage: `url(${founder.image})` }}></div>
              <img src={founder.image} alt={founder.name} className="founder-image" />
            </div>
            <div className="founder-info">
              <h3 className="founder-name">{founder.name}</h3>
              <p className="founder-role">{founder.role}</p>
              <p className="founder-description">{founder.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="team-grid-container">
        <div className="team-grid">
          {allTeamMembers.map((member, index) => (
            <div className="team-member-card" key={index}>
              <div className="team-member-image-container">
                <img src={member.image} alt={member.name} className="team-member-image" />
              </div>
              <div className="team-member-info">
                <h3 className="team-member-name">{member.name}</h3>
                <p className="team-member-role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Team; 