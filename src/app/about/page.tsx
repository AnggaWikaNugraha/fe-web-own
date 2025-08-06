'use client';

import { getMockUser } from '../components/about/services';
import AvatarSection from '../components/about/components/avatarSection';
import InfoSection from '../components/about/components/infoSection';
import SkillsSection from '../components/about/components/skillSection';
import ExperienceSection from '../components/about/components/experienceSection';
import EducationSection from '../components/about/components/educationSection';
import CertificatesSection from '../components/about/components/certificateSection';

const AboutPage = () => {
    const user = getMockUser();

    return (
        <div className="px-4 py-10 space-y-12 text-white bg-gradient-to-b from-gray-900 to-gray-800">
            <div className='max-w-5xl mx-auto'>
                <AvatarSection user={user} />
                <InfoSection user={user} />
                <SkillsSection skills={user.skills} interests={user.interests} />
                <ExperienceSection experiences={user.experience} />
                <EducationSection educations={user.education} />
                <CertificatesSection certificates={user.certificates} />
            </div>
        </div>
    );
};

export default AboutPage;
