import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Markup } from '../../components/Markup/Markup';
import { MFolder } from '../../components/Folder/Folder';
import { ExperienceCounter } from '../../components/UI/ExperienceCounter/ExperienceCounter';
import { MyWork } from '../../components/MyWork/MyWork';
import { ScrollButton } from '../../components/ScrollButton/ScrollButton';
import { Layout } from '../../Layout/Layout';

import {
  AnimationContainerLong,
  AnimationContainerFast,
  AnimationScale,
  AnimationScaleLeftX,
  AnimationPage,
  PageTranstition,
} from '../../Animation/Animation';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { FaFolderOpen, FaReact } from 'react-icons/fa';
import { SiPrettier, SiGit, SiNodedotjs, SiVite, SiReact } from 'react-icons/si';

import './About.scss';
import { IMyWorks } from '../../types';

const folderList = [
  {
    icon: <FaFolderOpen size={22} className="icon-folder " />,
    label: 'home',
    arrow: true,
  },
  {
    icon: <FaFolderOpen size={22} color="var(--accent-color)" />,
    label: 'about',
    rotate: true,
    file: <FaReact />,
    filteTitle: 'About.tsx',
    arrow: true,
  },
  { icon: <FaFolderOpen size={22} />, label: 'projects', arrow: true },
  { icon: <SiPrettier size={22} />, label: '.prettierrc', arrow: false },
  { icon: <SiNodedotjs size={22} />, label: 'package.json', arrow: false },
  { icon: <SiGit size={22} />, label: '.gitignore ', arrow: false },
  { icon: <SiVite size={22} />, label: ' vite.config.ts', arrow: false },
];

export const About = () => {
  const { t } = useTranslation();
  const MY_WORKS: IMyWorks[] = [
    {
      id: 1,
      title: t('experience.first.title'),
      subtitle: t('experience.first.subtitle'),
      stack: t('experience.first.etc'),
      date: t('experience.first.date'),
      dutiesList: [
        t('experience.first.dutiesList.dutie1'),
        t('experience.first.dutiesList.dutie2'),
        t('experience.first.dutiesList.dutie3'),
        t('experience.first.dutiesList.dutie4'),
      ],
    },
    {
      id: 2,
      title: t('experience.startup.title'),
      subtitle: t('experience.startup.subtitle'),
      stack: t('experience.startup.etc'),
      date: t('experience.startup.date'),
      dutiesList: [
        t('experience.startup.dutiesList.dutie1'),
        t('experience.startup.dutiesList.dutie2'),
        t('experience.startup.dutiesList.dutie3'),
        t('experience.startup.dutiesList.dutie4'),
        t('experience.startup.dutiesList.dutie5'),
        t('experience.startup.dutiesList.dutie'),
      ],
    },
    {
      id: 3,
      title: t('experience.royal.title'),
      subtitle: t('experience.royal.subtitle'),
      stack: t('experience.royal.etc'),
      date: t('experience.royal.date'),
      dutiesList: [
        t('experience.royal.dutiesList.dutie1'),
        t('experience.royal.dutiesList.dutie2'),
        t('experience.royal.dutiesList.dutie3'),
        t('experience.royal.dutiesList.dutie4'),
      ],
    },
    {
      id: 4,
      title: t('experience.company.title'),
      subtitle: t('experience.company.subtitle'),
      stack: t('experience.company.etc'),
      date: t('experience.company.date'),
      dutiesList: [
        t('experience.company.dutiesList.dutie1'),
        t('experience.company.dutiesList.dutie2'),
        t('experience.company.dutiesList.dutie3'),
        t('experience.company.dutiesList.dutie4'),
        t('experience.company.dutiesList.dutie5'),
        t('experience.company.dutiesList.dutie6'),
        t('experience.company.dutiesList.dutie7'),
      ],
    },
  ];
  return (
    <Layout>
      <motion.section
        initial="exit"
        animate="show"
        exit="exit"
        transition={PageTranstition}
        variants={AnimationPage}
        className="about"
      >
        <div className="container">
          <div className="about__wrapper">
            <div className="about__column-left">
              <h2 className="about__title">
                <MdOutlineKeyboardArrowDown size={24} />
                src &gt; pages &gt; about
              </h2>
              <motion.div variants={AnimationContainerFast} initial="hidden" animate="show" className="about__folders">
                {folderList.map((item, index) => (
                  <MFolder variants={AnimationScaleLeftX} custom={index} key={item.label} {...item} />
                ))}
              </motion.div>
            </div>
            <div className="about__column-right">
              <div className="about__header">
                <div className="about__header-title">
                  <SiReact size={22} />
                  About.tsx
                </div>
              </div>
              <div className="about__block-descr">
                <Markup />
                <div className="about__column">
                  <motion.div className="about__column-descr" variants={AnimationContainerLong} initial="hidden" animate="show">
                    <motion.span variants={AnimationScale}>&lt;h2&gt; About me &lt;/h2&gt;</motion.span>
                    {t('about.aboutDescription')}
                    <motion.span variants={AnimationScale}>&lt;h2&gt; Hard skills &lt;/h2&gt;</motion.span>
                    HTML, CSS, BEM, SCSS ,Cross-browser layout, Adaptive layout, JavaScript , TypeScript, React, Redux-toolkit,
                    React-query, React-Router, Framer-motion, Hook-form, i18next, Rest Api, Gulp, Vite, GitHub, Git, Figma, npm,
                    yarn and other library
                    <motion.span variants={AnimationScale}>&lt;h2&gt; Soft skills &lt;/h2&gt;</motion.span>
                    {t('about.softSkills')}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          <div className="about__experience">
            <h2 className="about__experience-title">Опыт работы</h2>
            <ExperienceCounter />
            <div className="about__experience-wrapper">
              <div className="about__experience-line">
                <span></span>
                <span></span>
                <span></span>
              </div>
              {MY_WORKS.map((experience, index) => (
                <MyWork {...experience} index={index} />
              ))}
            </div>
          </div>
        </div>
      </motion.section>
      <ScrollButton />
    </Layout>
  );
};
