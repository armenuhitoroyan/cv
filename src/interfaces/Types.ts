// Loader-ի տիպը

export type LoaderProps = {
  text?: string;
};

/**
 * Props-ի տիպերի սահմանում interface-ով
 */

// Header-ի տվյալների տիպերը

export interface HeaderProps {
  title: string;
  img: string;
  ref: string;
}

/**
 *  Գլխավոր էջի տիպերը
 */

// ArticleCard-ի տվյալների տիպերը
export interface ArticleCardProps {
  image: string;
  commentBadge: string | number;
  dateAndUser: string;
  title: string;
  description: string;
}

// CountFollwers-ի տվյալների տիպերը
export interface CountFollwersProps {
  title: string;
  text: string;
  count: number;
}

export interface ImagesProps {
  id: number;
  src: string;
  category: string;
  title: string;
  description: string;
}

// InfoCard-ի տվյալների տիպերը
export type InfoCardProps = {
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
};

export interface Designs {
  id: string;
  src: string;
  category: string;
  title: string;
  description: string;
}

/**
 *  Home 2 էջի տիպերը
 */

// Slide-ի տվյալների տիպերը
export interface SlideData {
  id: number;
  imgSrc: string;
  date: string;
  author: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string; // Այստեղ icon-ը string է, հետո map-ով կանվանափոխենք
  bgColor: string;
}

export interface TimeLineProps {
  yearRange: string;
  role: string;
  company: string;
  description: string;
}
/**
 *  Home 3 էջի տվյալների տիպերը
 */

// Card-ի տվյալների տիպերը
export interface DataCard {
  icon: string;
  author: string;
  byAuthor: string;
  description: string;
}

/**
 *  Home 4 էջի տվյալների տիպերը
 */

export interface AboutUserProps {
  color: string;
  onClick: void;
}

export interface HomeProps {
  color: string;
  backgroundColor?: string;
  title?: string;
}

/** Footer */
//
export interface WebPagesProps {
  width: number;
}

// Props-ի տիպերի սահմանում interface-ով ListPages էջի համար

export interface ListPagesProps {
  imageName: string;
  webName: string;
  bgColor: string;
  href: string;
}

// -----------------------------------------------
// Service էջի տիպերը
export interface Theme {
  width: string;
  height: string;
}

/**
 *  Portfolio և Portfolio Details էջերի տիպերը
 */

// Ինֆորմացիա պարունակող Card-ի տվյալների տիպերը

export interface InformationCardProps {
  client: string;
  category: string;
  dateStart: string;
  dateEnd: string;
  resources: string;
  downloadLink: string;
}

//  Նկարների տիպերը

export interface ImageProps {
  image: string;
  image2: string;
  image3: string;
}

// Ինֆորմացիա պարունակող component-ի տվյալների տիպերը

export interface InfoProps {
  client: string;
  category: string;
  dateStart: string;
  dateEnd: string;
  resources: string;
  downloadLink: string;
}

/**
 *  Blog և Blog Details էջերի տիպերը
 */

// Հեղինակի մասին ինֆորմացիա պարունակող կոմպոնենտի տվյալների տիպերը
export interface AboutAuthorProps {
  title?: string;
  imageUrl: string;
  avatarUrl: string;
  date: string;
  authorName: string;
  text: string;
  buttonText: string;
  onButtonClick: () => void;
}

// Կատեգորիաներ պարունակող կոմպոնենտի տվյալների տիպերը

export interface CategoryProps {
  linkRef: string;
  refNumber: string | number;
}

// News կոմպոնենտի տվյալների տիպերը
export interface NewsProps {
  img: string;
  date: string;
  title: string;
}

export interface FolderProps {
  folder: string;
}

export interface AboutAuthorBDPProps {
  name: string;
  img: string;
  role: string;
  aboutAuthor: string;
}

// Մեկնաբանությունները ցույց տվող կոմպոնենտի տվյալների տիպերը
export interface CommentProps {
  name: string;
  img: string;
  date: string;
  aboutAuthor: string;
  onButtonClick: () => void;
}

// Հրապարակված Card-ի տվյալների տիպերը

export type PostedCardProps = {
  text: string;
  content: string;
  textAlign?: "left" | "center" | "right";
};

/**
 *  Pages(About, Pricing Plans, Error) էջերի տիպերը
 */

// About-ի Logo-յի տիպերը

export interface LogoProps {
  className: string;
  backgroundColor: string;
  size: string;
}

// Վեբ էջերի Լոգոները ցուցադրող կոմպոնենտի չափսը

export interface PageProps {
  size: string;
}

// Գիտելիքները պարունակող Card-ի տվյալների տիպերը

export interface SkillCardProps {
  start: number;
  end: number;
  duration: number; // in milliseconds
  label: string;
  percentage: number;
  skill: string;
  isGridLayout: boolean; // True -> Grid layout, False -> Inline layout
}

// Pricing Plans էջ․․․
// Card-ի տվյալների տիպերը
export interface PricingCardProps {
  widthTop?: number;
  widthBottom?: number;
  height?: number;
  marginLeft?: string;
  marginTop?: string;
  btnHeight?: number;
}

// Օգտատիրոջ մասին ինֆորմացիա պարունակող կոմպոնենտի տվյալների տիպերը

export interface UserInfoProps {
  data: string;
  responseData: string;
  style?: React.CSSProperties;
  classname?: string;
}

// Resume էջի տվյալների տիպերը

export type ResumeProps = {
  year: string;
  info: string;
  cardTitle: string;
  description: string;
};

export type ResumeComponentProps = {
  firstTitle: string;
  secondTitle: string;
};

// Պտտվող նկարի տիպերը

export interface RotatingImageProps {
  src: string;
  width?: string;
  height?: string;
}

// Skill-երը պարունակող կոմպոնենտի 1 կամ 2 տողով ցույց տալու համար․․․
export type LayoutProps = {
  isGridLayout: boolean; // True -> Grid layout, False -> Inline layout
};

// Վերնագրերի և նկարագրությունների տիպերը

export interface TitleContainerProps {
  title: string;
  description: string;
}

/**
 *  Contact էջի տիպերը
 */

// Contact-ները պարունակող Card-ի տվյալների տիպերը
export type ContactCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

// Form

export interface FormData {
  email: string;
}

export interface Errors {
  email?: string;
}

export interface DownloadProps {
  text: string;
  href: string; // հղումը
  download?: string; // ֆայլի անվանումը

  color?: string;
  width?: string;
  height?: string;
}

export interface DropdownProps {
  className?: string;
  buttonLabel: string;
  pages: { title: string; url: string; icon?: JSX.Element }[];
}

export interface DataForm {
  name: string;
  email: string;
  phone: string;
  department: string;
  message: string;
}

export interface ErrorsForm {
  name?: string;
  email?: string;
  phone?: string;
  department?: string;
}

/**
 * UseRequest hook
 */
export interface UseRequestProps<T> {
  url: string;
  type?: new () => T;
}
