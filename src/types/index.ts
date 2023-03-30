export interface IMetaHead {
  title: string;
  description: string;
  ogImageUrl: string;
}

export interface IHeroProps {
  name: string;
  about: string;
}

export interface ILanguage {
  name: string;
  level: string;
}

export interface ILanguages {
  title: string;
  details: ILanguage[];
}

export interface IExperience {
  name: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}
export interface IExperiences {
  title: string;
  details: IExperience[];
}

export interface ISkill {
  name: string;
}

export interface ISkills {
  title: string;
  details: ISkill[];
}

export interface ICertification {
  name: string;
  thumbnail: string;
  issuedBy: string;
  issuedOn: string;
  verifyBadgeUrl: string;
  description: string;
}
export interface ICertifications {
  title: string;
  details: ICertification[]
}

export interface IProject {
  title: string;
  isFeatured: boolean;
  thumbnail: string;
  githubUrl: string;
  liveUrl: string;
}
export interface IProjects {
  projects: IProject[];
}

export interface IProjectDetails {
  projectDetail: IProject;
}
