import Link from "next/link";



export const ItemLink = ({link,icon,text}) => {
  return (
    <li>
      <Link href={link} className="mb-2 flex items-center gap-3" title={text}>
        <i className={icon}></i>
        <span className="xl:block hidden transition-all">{text}</span>
      </Link>
    </li>
  );
};